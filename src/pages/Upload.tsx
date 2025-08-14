import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface Document {
    nome: string;
    data: string;
    status: string;
}

const Upload = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [pendingFile, setPendingFile] = useState<File | null>(null);

    const [documentos, setDocumentos] = useState<Document[]>([
        { nome: "Contrato_Trabalho_2024.pdf", data: "05/08/2025", status: "analyzed" },
        { nome: "Acordo_Confidencialidade.pdf", data: "03/08/2025", status: "analyzed" },
        { nome: "Termos_Servico_App.pdf", data: "01/08/2025", status: "analyzing" }
    ]);

    const filteredDocuments = documentos.filter(doc =>
        doc.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFile(files[0]);
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            handleFile(e.target.files[0]);
        }
    };

    const handleFile = (file: File) => {
        if (file.type !== 'application/pdf') {
            alert('Por favor, selecione apenas arquivos PDF');
            return;
        }

        if (file.size > 50 * 1024 * 1024) {
            alert('O arquivo deve ter no máximo 50MB');
            return;
        }

        setPendingFile(file);
        setShowModal(true);
    };

    const simulateUpload = (saveToHistory: boolean) => {
        setIsUploading(true);
        setUploadProgress(0);

        const interval = setInterval(() => {
            setUploadProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsUploading(false);

                    if (saveToHistory && pendingFile) {
                        const newDoc: Document = {
                            nome: pendingFile.name,
                            data: new Date().toLocaleDateString('pt-BR'),
                            status: 'analyzing'
                        };
                        setDocumentos(prev => [newDoc, ...prev]);
                    }

                    // Simular redirecionamento para análise
                    setTimeout(() => {
                        navigate('/analysis');
                    }, 1000);

                    return 100;
                }
                return prev + Math.random() * 20;
            });
        }, 200);
    };

    const handleSaveDecision = (saveToHistory: boolean) => {
        setShowModal(false);
        simulateUpload(saveToHistory);
    };

    const handleDocumentClick = (doc: Document) => {
        if (doc.status === 'analyzed') {
            navigate('/analysis');
        }
    };

    return (
        <>
            <section id="upload" className="upload-section">
                <div className="container upload-flex">
                    <div className="upload-box">
                        <h2>Upload de Documento</h2>
                        <p className="upload-description">
                            📄 Aceitamos PDF até <strong>50MB</strong><br />
                            🔒 Seus arquivos são processados de forma <strong>segura e privada</strong>
                        </p>

                        {!isUploading ? (
                            <div className="upload-form">
                                <label
                                    htmlFor="fileInput"
                                    className={`upload-area ${isDragging ? 'dragging' : ''}`}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                    onClick={() => fileInputRef.current?.click()}
                                >
                                    <span className="upload-icon">📤</span>
                                    <span className="upload-text">
                                        <span className="primary-text">Arraste seu PDF aqui</span>
                                        <small>ou clique para selecionar um arquivo</small>
                                    </span>
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        id="fileInput"
                                        accept="application/pdf"
                                        style={{ display: 'none' }}
                                        onChange={handleFileSelect}
                                    />
                                </label>
                            </div>
                        ) : (
                            <div className="upload-progress">
                                <div className="progress-bar">
                                    <div
                                        className="progress-fill"
                                        style={{ width: `${uploadProgress}%` }}
                                    ></div>
                                </div>
                                <span className="progress-text">
                                    Processando... {Math.round(uploadProgress)}%
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="analyzed-box">
                        <h2>Documentos Analisados</h2>

                        <div className="document-search">
                            <span className="search-icon">🔍</span>
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Buscar documentos..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <div className="document-counter">
                            <span className="count">{filteredDocuments.length}</span> documentos encontrados
                        </div>

                        <ul className="analyzed-list">
                            {filteredDocuments.map((doc, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleDocumentClick(doc)}
                                    style={{ cursor: doc.status === 'analyzed' ? 'pointer' : 'default' }}
                                >
                                    <div className="doc-info">
                                        <div className="doc-icon">
                                            {doc.status === 'analyzing' ? '⏳' : '📋'}
                                        </div>
                                        <div>
                                            <div className="doc-name">{doc.nome}</div>
                                            <div className="doc-date">{doc.data}</div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {filteredDocuments.length === 0 && (
                            <div className="empty-state">
                                <div className="empty-icon">📁</div>
                                <p>Nenhum documento encontrado</p>
                                <small>Seus documentos analisados aparecerão aqui</small>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {showModal && (
                <>
                    <div className="save-modal-overlay" onClick={() => setShowModal(false)}></div>
                    <div className="save-modal">
                        <div className="modal-content">
                            <h3>Salvar no histórico?</h3>
                            <p className="modal-subtitle">
                                Como deseja processar <span>{pendingFile?.name}</span>?
                            </p>
                            <div className="modal-buttons">
                                <button
                                    className="btn-option btn-save"
                                    onClick={() => handleSaveDecision(true)}
                                >
                                    💾 Salvar
                                </button>
                                <button
                                    className="btn-option btn-temporary"
                                    onClick={() => handleSaveDecision(false)}
                                >
                                    🔒 Temporário
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Upload;

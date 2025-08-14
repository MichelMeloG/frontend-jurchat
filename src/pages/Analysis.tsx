import { useState } from 'react';

interface ChatMessage {
    type: 'ai' | 'user';
    content: string;
    suggestions?: string[];
}

const Analysis = () => {
    const [activeTab, setActiveTab] = useState('traducao');
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
        {
            type: 'ai',
            content: '👋 Olá! Sou sua assistente jurídica. Posso responder perguntas sobre este documento.',
            suggestions: [
                'Qual é o tema principal deste documento?',
                'Quais são as principais conclusões?',
                'Me explique sobre hard skills',
                'O que são soft skills?'
            ]
        }
    ]);
    const [currentMessage, setCurrentMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const handleSuggestionClick = (question: string) => {
        sendMessage(question);
    };

    const sendMessage = async (message: string) => {
        if (!message.trim()) return;

        const userMessage: ChatMessage = { type: 'user', content: message };
        setChatMessages(prev => [...prev, userMessage]);
        setCurrentMessage('');
        setIsTyping(true);

        // Simular resposta da IA
        setTimeout(() => {
            let response = '';
            const lowerMessage = message.toLowerCase();

            if (lowerMessage.includes('hard skills')) {
                response = 'Hard skills são habilidades técnicas específicas que podem ser mensuradas e certificadas, como programação, conhecimento de idiomas, ou certificações profissionais. No documento, são apresentadas como competências fundamentais para conseguir um emprego, mas que devem ser complementadas por soft skills.';
            } else if (lowerMessage.includes('soft skills')) {
                response = 'Soft skills são habilidades comportamentais e interpessoais, como comunicação, trabalho em equipe, liderança e adaptabilidade. O documento destaca que são cada vez mais valorizadas pelas empresas, sendo essenciais para o sucesso profissional no ambiente corporativo atual.';
            } else if (lowerMessage.includes('tema principal') || lowerMessage.includes('principal')) {
                response = 'O tema principal do documento é a importância das competências profissionais (hard skills e soft skills) no mercado de trabalho atual, baseado em uma pesquisa com estudantes universitários portugueses e profissionais de Recursos Humanos.';
            } else if (lowerMessage.includes('conclusões')) {
                response = 'As principais conclusões são: 1) Empresas buscam profissionais que combinem conhecimento técnico com habilidades interpessoais; 2) Comunicação eficaz é uma das soft skills mais importantes; 3) Trabalho em equipe e liderança são fundamentais; 4) A capacidade de adaptação é crucial no mercado atual.';
            } else {
                response = 'Interessante pergunta! Com base no documento analisado, posso dizer que ele aborda a importância de desenvolver tanto habilidades técnicas quanto comportamentais para ter sucesso profissional. Gostaria que eu detalhe algum aspecto específico?';
            }

            const aiMessage: ChatMessage = { type: 'ai', content: response };
            setChatMessages(prev => [...prev, aiMessage]);
            setIsTyping(false);
        }, 1500);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage(currentMessage);
        }
    };

    return (
        <>
            <main className="analysis-main">
                {/* Banner do Chat Bot */}
                <div className="chatbot-banner">
                    <div className="banner-content">
                        <div className="banner-text">
                            <span className="banner-icon">🤖</span>
                            <div className="banner-info">
                                <strong>Assistente IA Disponível</strong>
                                <small>Faça perguntas sobre este documento</small>
                            </div>
                        </div>
                        <button
                            className="chat-open-btn primary-chat-btn"
                            onClick={() => setIsChatOpen(true)}
                        >
                            <span className="chat-icon">💬</span>
                            <span>Iniciar Chat</span>
                            <span className="pulse-dot"></span>
                        </button>
                    </div>
                </div>

                <div className="analysis-container">
                    {/* Seção do Documento Original */}
                    <section className="document-section original-section">
                        <div className="section-header">
                            <div className="section-icon original-icon">📄</div>
                            <h2>Documento Original</h2>
                        </div>
                        <div className="document-info">
                            <span className="file-name">
                                <span className="file-icon">📎</span>
                                anexo_c_portthullo_completo_.docx.pdf
                            </span>
                            <button className="download-btn">
                                <span className="download-icon">⬇️</span>
                                Baixar Original
                            </button>
                        </div>

                        <div className="document-content">
                            <div className="document-viewer original-viewer">
                                <div className="document-text">
                                    <div className="text-content">
                                        <p>Este documento resume um estudo sobre a importância das "hard skills" e "soft skills"
                                            no mercado de trabalho, baseado no artigo de Reis et al. (2022). O estudo ouviu
                                            estudantes universitários portugueses e uma profissional de Recursos Humanos.</p>

                                        <p>"Hard skills" são habilidades técnicas, como programar um computador ou falar outro
                                            idioma – coisas que você pode provar com certificados ou diplomas. "Soft skills" são
                                            habilidades pessoais e comportamentais, como comunicação, trabalho em equipe e
                                            liderança – mais difíceis de medir, mas muito importantes.</p>

                                        <p>O estudo mostrou que, embora as habilidades técnicas ("hard skills") sejam
                                            importantes para conseguir um emprego, as habilidades pessoais ("soft skills") são cada vez mais
                                            valorizadas pelas empresas.</p>

                                        <p><strong>Principais descobertas:</strong></p>
                                        <ul>
                                            <li>As empresas buscam profissionais que combinem conhecimento técnico com
                                                habilidades de relacionamento</li>
                                            <li>Comunicação eficaz é uma das soft skills mais importantes</li>
                                            <li>Trabalho em equipe e liderança são fundamentais no ambiente corporativo</li>
                                            <li>A capacidade de adaptação é crucial no mercado atual</li>
                                        </ul>

                                        <p><strong>Recomendações para profissionais:</strong></p>
                                        <ul>
                                            <li>Desenvolver tanto habilidades técnicas quanto pessoais</li>
                                            <li>Investir em cursos de comunicação e liderança</li>
                                            <li>Praticar trabalho em equipe em projetos diversos</li>
                                            <li>Manter-se atualizado com as mudanças do mercado</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="search-container">
                                <div className="search-box">
                                    <input type="text" placeholder="Buscar no documento..." className="search-input" />
                                    <button className="search-btn">
                                        <span>🔍</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Seção da Análise Jurídica */}
                    <section className="document-section analysis-section">
                        <div className="section-header">
                            <div className="section-icon analysis-icon">⚡</div>
                            <h2>Análise Jurídica</h2>
                        </div>
                        <div className="document-info">
                            <span className="file-name">
                                <span className="file-icon">📊</span>
                                Documento Traduzido
                            </span>
                            <button className="download-btn">
                                <span className="download-icon">⬇️</span>
                                Baixar Tradução
                            </button>
                        </div>
                        <div className="analysis-tabs">
                            <button
                                className={`tab-btn ${activeTab === 'traducao' ? 'active' : ''}`}
                                onClick={() => handleTabClick('traducao')}
                            >
                                <span className="tab-icon">🔤</span>
                                Tradução Simples
                                <span className="reading-time">~3 min</span>
                            </button>
                            <button
                                className={`tab-btn ${activeTab === 'resumo' ? 'active' : ''}`}
                                onClick={() => handleTabClick('resumo')}
                            >
                                <span className="tab-icon">📋</span>
                                Resumo das Cláusulas
                                <span className="reading-time">~1 min</span>
                            </button>
                        </div>
                        <div className="tab-content">
                            {activeTab === 'traducao' && (
                                <div className="tab-pane active">
                                    <div className="translation-header">
                                        <div className="translation-icon">🔤</div>
                                        <h3>Tradução em Linguagem Simples</h3>
                                        <div className="translation-badge">Processado por IA</div>
                                    </div>
                                    <div className="translation-content">
                                        <div className="text-content">
                                            <p>Este documento resume um estudo sobre a importância das "hard skills" e "soft skills"
                                                no mercado de trabalho, baseado no artigo de Reis et al. (2022). O estudo ouviu
                                                estudantes universitários portugueses e uma profissional de Recursos Humanos.</p>

                                            <p>"Hard skills" são habilidades técnicas, como programar um computador ou falar outro
                                                idioma – coisas que você pode provar com certificados ou diplomas. "Soft skills" são
                                                habilidades pessoais e comportamentais, como comunicação, trabalho em equipe e
                                                liderança – mais difíceis de medir, mas muito importantes.</p>

                                            <p>O estudo mostrou que, embora as habilidades técnicas ("hard skills") sejam
                                                importantes para conseguir um emprego, as habilidades pessoais ("soft skills") são cada vez mais
                                                valorizadas pelas empresas.</p>

                                            <p><strong>Principais descobertas:</strong></p>
                                            <ul>
                                                <li>As empresas buscam profissionais que combinem conhecimento técnico com
                                                    habilidades de relacionamento</li>
                                                <li>Comunicação eficaz é uma das soft skills mais importantes</li>
                                                <li>Trabalho em equipe e liderança são fundamentais no ambiente corporativo</li>
                                                <li>A capacidade de adaptação é crucial no mercado atual</li>
                                            </ul>

                                            <p><strong>Recomendações para profissionais:</strong></p>
                                            <ul>
                                                <li>Desenvolver tanto habilidades técnicas quanto pessoais</li>
                                                <li>Investir em cursos de comunicação e liderança</li>
                                                <li>Praticar trabalho em equipe em projetos diversos</li>
                                                <li>Manter-se atualizado com as mudanças do mercado</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'resumo' && (
                                <div className="tab-pane active">
                                    <div className="clauses-summary">
                                        <div className="summary-header">
                                            <h3>Resumo das Principais Seções</h3>
                                            <div className="summary-stats">
                                                <span className="stat-item">
                                                    <strong>4</strong> seções principais
                                                </span>
                                            </div>
                                        </div>
                                        <div className="clause-item priority-high">
                                            <div className="clause-header">
                                                <h4>1. Introdução ao Estudo</h4>
                                                <span className="priority-badge high">Importante</span>
                                            </div>
                                            <p>Apresenta o contexto da pesquisa sobre competências profissionais no mercado atual.</p>
                                        </div>
                                        <div className="clause-item priority-medium">
                                            <div className="clause-header">
                                                <h4>2. Metodologia</h4>
                                                <span className="priority-badge medium">Médio</span>
                                            </div>
                                            <p>Descreve como foi conduzida a pesquisa com estudantes e profissionais de RH.</p>
                                        </div>
                                        <div className="clause-item priority-high">
                                            <div className="clause-header">
                                                <h4>3. Resultados e Análises</h4>
                                                <span className="priority-badge high">Importante</span>
                                            </div>
                                            <p>Apresenta os dados coletados sobre a importância das hard e soft skills.</p>
                                        </div>
                                        <div className="clause-item priority-high">
                                            <div className="clause-header">
                                                <h4>4. Conclusões</h4>
                                                <span className="priority-badge high">Importante</span>
                                            </div>
                                            <p>Resume as principais descobertas e recomendações do estudo.</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            </main>

            {/* Chat Overlay e Panel */}
            {isChatOpen && (
                <>
                    <div className="chat-overlay" onClick={() => setIsChatOpen(false)}></div>
                    <div className="chat-panel">
                        <div className="chat-header">
                            <div className="chat-title">
                                <span className="chat-ai-icon">🤖</span>
                                <div>
                                    <h3>Assistente Jurídica</h3>
                                    <small>Pergunte sobre o documento</small>
                                </div>
                            </div>
                            <button className="chat-close-btn" onClick={() => setIsChatOpen(false)}>
                                &times;
                            </button>
                        </div>
                        <div className="chat-messages">
                            {chatMessages.map((message, index) => (
                                <div key={index} className={`chat-message ${message.type}-message`}>
                                    <div className="message-avatar">
                                        {message.type === 'ai' ? '🤖' : '👤'}
                                    </div>
                                    <div className="message-content">
                                        <p>{message.content}</p>
                                        {message.suggestions && (
                                            <div className="suggested-questions">
                                                <p><strong>Perguntas sugeridas:</strong></p>
                                                {message.suggestions.map((suggestion, idx) => (
                                                    <button
                                                        key={idx}
                                                        className="suggestion-btn"
                                                        onClick={() => handleSuggestionClick(suggestion)}
                                                    >
                                                        {idx === 0 && '📄'} {idx === 1 && '📊'} {idx === 2 && '🛠️'} {idx === 3 && '🤝'} {suggestion}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="chat-message ai-message">
                                    <div className="message-avatar">🤖</div>
                                    <div className="message-content">
                                        <p>Digitando...</p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="chat-input-container">
                            <div className="chat-input-wrapper">
                                <input
                                    type="text"
                                    placeholder="Ex: O que são soft skills? Como as empresas avaliam candidatos?"
                                    className="chat-input"
                                    value={currentMessage}
                                    onChange={(e) => setCurrentMessage(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                />
                                <button
                                    className="chat-send-btn"
                                    title="Enviar pergunta"
                                    onClick={() => sendMessage(currentMessage)}
                                >
                                    <span>📤</span>
                                </button>
                            </div>
                            <div className="chat-examples">
                                <small>💡 Dica: Seja específico! Ex: "Qual a diferença entre hard e soft skills?"</small>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Analysis;

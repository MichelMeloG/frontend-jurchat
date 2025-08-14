import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <header className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1>Bem-vindo ao JurChat</h1>
                        <h2 className="value-proposition">
                            Receba análises jurídicas automatizadas em linguagem simples para qualquer
                            contrato ou documento
                        </h2>

                        <div className="process-steps">
                            <div className="step">
                                <div className="step-icon">📄</div>
                                <div className="step-text">
                                    <strong>1. Envie documento</strong>
                                    <small>PDF até 50MB</small>
                                </div>
                            </div>
                            <div className="step-arrow">→</div>
                            <div className="step">
                                <div className="step-icon">🤖</div>
                                <div className="step-text">
                                    <strong>2. IA analisa</strong>
                                    <small>Tradução automática</small>
                                </div>
                            </div>
                            <div className="step-arrow">→</div>
                            <div className="step">
                                <div className="step-icon">💬</div>
                                <div className="step-text">
                                    <strong>3. Faça perguntas</strong>
                                    <small>Chat inteligente</small>
                                </div>
                            </div>
                        </div>

                        <div className="cta-section">
                            <Link to="/upload" className="upload-btn primary-cta">
                                <span className="cta-icon">📤</span>
                                Enviar Documento
                            </Link>
                            <div className="demo-preview">
                                <div className="demo-mockup">
                                    <div className="mockup-header">
                                        <div className="mockup-dots">
                                            <span></span><span></span><span></span>
                                        </div>
                                        <small>JurChat - Análise</small>
                                    </div>
                                    <div className="mockup-content">
                                        <div className="mockup-section">
                                            <div className="mockup-title">Documento Original</div>
                                            <div className="mockup-text"></div>
                                        </div>
                                        <div className="mockup-section">
                                            <div className="mockup-title">Tradução Simples</div>
                                            <div className="mockup-text"></div>
                                        </div>
                                    </div>
                                </div>
                                <p className="demo-caption">Veja como fica seu documento analisado</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Home;

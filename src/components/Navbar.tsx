import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="logo">
                    <div className="logo-icon">⚖️</div>
                    <span className="logo-text">JurChat</span>
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link
                            to="/"
                            className={location.pathname === '/' ? 'active' : ''}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/upload"
                            className={location.pathname === '/upload' ? 'active' : ''}
                        >
                            Upload
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/analysis"
                            className={location.pathname === '/analysis' ? 'active' : ''}
                        >
                            Análise
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

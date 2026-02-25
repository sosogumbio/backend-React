import { type JSX } from 'react';
import './Navegacao.css'; // Importando CSS para estilos
import { Link } from 'react-router-dom';

function Navegacao(): JSX.Element {
  return (
    <nav className="navegacao">
      <div className="nav-container">
        <Link to="/" className="nav-logo">Meu Site</Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/sobre" className="nav-link">Sobre</Link>
          </li>
          <li className="nav-item">
            <Link to="/servicos" className="nav-link">Serviços</Link>
          </li>
          <li className="nav-item">
            <Link to="/contato" className="nav-link">Contato</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navegacao;
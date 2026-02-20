import { type JSX } from "react";
import "./Servicos.css";

function Servicos(): JSX.Element {
  return (
    <section className="servicos" id="servicos">
      <div className="servicos-container">
        <h2 className="servicos-titulo">Nossos Serviços</h2>

        <div className="servicos-grid">
          <div className="servico-card">
            <h3>Desenvolvimento Web</h3>
            <p>Criação de sites modernos e responsivos.</p>
          </div>

          <div className="servico-card">
            <h3>Aplicações React</h3>
            <p>Interfaces dinâmicas com React e TypeScript.</p>
          </div>

          <div className="servico-card">
            <h3>Consultoria</h3>
            <p>Melhorias de performance e arquitetura.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicos;
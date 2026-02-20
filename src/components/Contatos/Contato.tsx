import { type JSX } from "react";
import "./Contatos.css";

function Contatos(): JSX.Element {
  return (
    <section className="contatos" id="contato">
      <div className="contatos-container">
        <h2 className="contatos-titulo">Entre em Contato</h2>

        <form className="contatos-form">
          <input type="text" placeholder="Seu nome" className="contatos-input" />
          <input type="email" placeholder="Seu email" className="contatos-input" />
          <textarea placeholder="Sua mensagem" className="contatos-textarea"></textarea>
          <button type="submit" className="contatos-botao">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Contatos;
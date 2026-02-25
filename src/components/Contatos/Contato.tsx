import { type JSX } from 'react';
import './Contato.css';

function Contatos(): JSX.Element {
  return (
    <section id="contato" className="contato">
      <div className="contato-container">
        <h1 className="contato-titulo">Entre em Contato</h1>
        <div className="contato-wrapper">
          <div className="contato-info">
            <h2>Nossas Informações</h2>
            <p><strong>E-mail:</strong> contato@meusite.com.br</p>
            <p><strong>Telefone:</strong> (11) 99999-9999</p>
            <p><strong>Endereço:</strong> Rua das Flores, 123 - São Paulo, SP</p>
          </div>
          <form className="contato-form">
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" placeholder="Seu nome" />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" placeholder="Seu e-mail" />
            </div>
            <div className="form-group">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea id="mensagem" rows={4} placeholder="Sua mensagem"></textarea>
            </div>
            <button type="submit" className="contato-botao">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contatos;
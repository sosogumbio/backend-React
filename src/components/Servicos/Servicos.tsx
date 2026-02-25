import { type JSX } from 'react';
import './Servicos.css';

function Servicos(): JSX.Element {
  const servicos = [
    {
      titulo: 'Desenvolvimento Web',
      descricao: 'Criação de sites modernos e responsivos.',
      icone: '💻'
    },
    {
      titulo: 'Design de Interfaces',
      descricao: 'Layouts intuitivos e focados na experiência do usuário.',
      icone: '🎨'
    },
    {
      titulo: 'Marketing Digital',
      descricao: 'Estratégias para aumentar sua presença online.',
      icone: '📈'
    }
  ];

  return (
    <section id="servicos" className="servicos">
      <div className="servicos-container">
        <h1 className="servicos-titulo">Nossos Serviços</h1>
        <div className="servicos-grid">
          {servicos.map((servico, index) => (
            <div key={index} className="servico-card">
              <div className="servico-icone">{servico.icone}</div>
              <h2>{servico.titulo}</h2>
              <p>{servico.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicos;
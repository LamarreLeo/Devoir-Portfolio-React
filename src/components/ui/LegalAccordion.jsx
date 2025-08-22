import { useState } from 'react';
import ContactInfos from '../ui/ContactInfos';
import { Earth } from 'lucide-react';

function LegalAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const items = [
    {
      title: 'Editeur du site',
      content: <ContactInfos />,
    },
    {
      title: 'Hébergeur',
      content: (
        <address>
          <strong>alwaysdata</strong>
          <p>91 Rue de Faubourg Saint-Honoré, 75008 Paris</p>
          <a href="https://www.alwaysdata.com" target="_blank">
            <Earth className="inline-block mr-1" strokeWidth={1} />
            www.alwaysdata.com
          </a>
        </address>
      ),
    },
    {
      title: 'Crédits',
      content: (
        <div>
          <strong>Crédits</strong>
          <span>
            Ce site a été réalisé par John Doe, étudiant au
            <a href="https://www.centre-europeen-formation.fr" target="_blank">
              Centre Européen de formation
            </a>
          </span>
        </div>
      ),
    },
  ];

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="border-b">
          {/* Header */}
          <button
            type="button"
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center p-4 hover:bg-gray-100"
          >
            {item.title} <span>{openIndex === index ? '-' : '+'}</span>
          </button>

          {/* Content */}
          {openIndex === index && <div className="p-4">{item.content}</div>}
        </div>
      ))}
    </div>
  );
}

export default LegalAccordion;

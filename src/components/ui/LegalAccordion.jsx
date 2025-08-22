import { useState } from 'react';
import ContactInfos from '../ui/ContactInfos';
import { Earth, ChevronDown, ChevronUp } from 'lucide-react';

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
        <address className="flex flex-col gap-4 mb-6 not-italic">
          <ul className="flex flex-col gap-2">
            <li>
              <h3 className="text-xl">AlwaysData</h3>
            </li>

            <li>41 Rue du Faubourg Saint-Honoré, 75008 Paris</li>

            <li>
              <Earth
                className="inline-block mr-1"
                strokeWidth={1}
                aria-hidden="true"
              />
              <a
                href="https://www.alwaysdata.com/fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-600"
              >
                www.alwaysdata.com
              </a>
            </li>
          </ul>
        </address>
      ),
    },
    {
      title: 'Crédits',
      content: (
        <ul className="flex flex-col gap-2">
          <li>
            <h2 className="text-xl">Crédits</h2>
          </li>

          <li>
            Ce site a été réalisé par John Doe, étudiant au &nbsp;
            <a
              href="https://centre-europeen-formation.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              Centre Européen de Formation
            </a>
            .
          </li>

          <li>
            Les images utilisées sur ce site sont libres de droits et ont été
            obtenues sur le site &nbsp;
            <a
              href="https://pixabay.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              Pixabay
            </a>
            .
          </li>

          <li>
            Le favicon de ce site a été fourni par &nbsp;
            <a
              href="https://www.flaticon.com/de/kostenloses-icon/anonym_10946911?term=john+doe&page=1&position=1&origin=tag&related_id=10946911"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              John doe Icons erstellt von Freepik - Flaticon
            </a>
            .
          </li>

          <li>
            Les icônes utilisées sur ce site proviennent de la librairie &nbsp;
            <a
              href="https://lucide.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              Lucide
            </a>
            .
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div className="rounded-2xl border-1 border-gray-200 overflow-auto">
      {items.map((item, index) => (
        <div key={index} className="border-1 border-gray-200">
          {/* Header */}
          <button
            id={`accordion-button-${index}`}
            type="button"
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
            aria-controls={`accordion-panel-${index}`}
            className={`cursor-pointer w-full flex justify-between items-center p-4 hover:bg-blue-100 ${
              openIndex === index ? 'bg-blue-100' : ''
            }`}
          >
            <span>{item.title}</span>
            <span>
              {openIndex === index ? (
                <ChevronUp strokeWidth={1} aria-hidden="true" />
              ) : (
                <ChevronDown strokeWidth={1} aria-hidden="true" />
              )}
            </span>
          </button>

          {/* Content */}
          {openIndex === index && (
            <div
              id={`accordion-panel-${index}`}
              role="region"
              aria-labelledby={`accordion-button-${index}`}
              className="p-4"
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default LegalAccordion;

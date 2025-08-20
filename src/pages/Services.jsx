import ServiceCard from '../components/ui/ServiceCard';
import { Brush, CodeXml, Search } from 'lucide-react';
function Services() {
  return (
    <main className="mt-12">
      <ServiceCard
        Icon={<Brush className="text-blue-600" />}
        title="UX Design"
        description="L'UX Design est une discipline qui consiste à concevoir des produits (sites web, application mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préocupations. L'objectif est de rendre l'expérience utilisateur plus fluide et agreable possible."
      />

      <ServiceCard
        Icon={<CodeXml className="text-blue-600" />}
        title="Développement web"
        description="Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Tailwind, React, Angular, etc.)."
      />

      <ServiceCard
        Icon={<Search className="text-blue-600" />}
        title="Référencement"
        description="Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site."
      />
    </main>
  );
}

export default Services;

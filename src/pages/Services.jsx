import ServiceCard from '../components/ui/ServiceCard';
import { Brush, CodeXml, Search } from 'lucide-react';
import { Helmet } from 'react-helmet';

function Services() {
  return (
    <>
      <Helmet>
        <title>John Doe - Services</title>
        <meta
          name="description"
          content="John Doe propose des services professionnels en développement web, 
          UX Design et SEO pour créer des sites attractifs et optimisés pour vos visiteurs."
        />
      </Helmet>

      <main className="mt-12">
        <img src="/assets/img/banner.jpg" alt="" loading="lazy" />

        {/* Services Section */}
        <section className="px-6 py-12 max-w-7xl mx-auto">
          <div className="text-center flex flex-col gap-2">
            <h1 className="text-4xl">Mon offre de services</h1>
            <p>Voici les prestations sur lesquelles je peux intervenir</p>
            <div className="h-1 bg-blue-600 mx-auto w-32 lg:w-112 mt-6 mb-16"></div>
          </div>

          {/* Services List */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ServiceCard
              Icon={
                <Brush
                  className="text-blue-600 w-12 h-12 my-6 m-auto"
                  strokeWidth={1}
                  aria-hidden="true"
                />
              }
              title="UX Design"
              description="L'UX Design est une discipline qui consiste à concevoir des produits 
            (sites web, application mobiles, logiciels, objets connectés, etc.) 
            en plaçant l'utilisateur au centre des préocupations. 
            L'objectif est de rendre l'expérience utilisateur plus fluide et agreable possible."
            />

            <ServiceCard
              Icon={
                <CodeXml
                  className="text-blue-600 w-12 h-12 my-6 m-auto"
                  strokeWidth={1}
                  aria-hidden="true"
                />
              }
              title="Développement web"
              description="Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation 
            (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Tailwind, React, Angular, etc.)."
            />

            <ServiceCard
              Icon={
                <Search
                  className="text-blue-600 w-12 h-12 my-6 m-auto"
                  strokeWidth={1}
                  aria-hidden="true"
                />
              }
              title="Référencement"
              description="Le référencement naturel (SEO) est une technique qui consiste à optimiser 
            un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). 
            L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site."
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Services;

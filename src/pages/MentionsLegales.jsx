import LegalAccordion from '../components/ui/LegalAccordion';
import { Helmet } from 'react-helmet';

function MentionsLegales() {
  return (
    <>
      <Helmet>
        <title>Mentions légales</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="mt-12 flex-grow">
        <section className="px-6 py-12 max-w-7xl mx-auto">
          <div className="text-center flex flex-col gap-2">
            <h1 className="text-4xl">Mentions légales</h1>
            <div className="h-1 bg-blue-600 mx-auto w-32 lg:w-112 mt-6 mb-16"></div>
          </div>

          <LegalAccordion />
        </section>
      </main>
    </>
  );
}

export default MentionsLegales;

import ContactForm from '../components/forms/ContactForm';

function Contact() {
  return (
    <main className="mt-12">
      <div className="w-full bg-gray-100 py-12 px-3">
        <div className="text-center flex flex-col gap-2">
          <h1 className="text-4xl">Contact</h1>
          <p>
            Pour me contacter en vue d'un entretien ou d'une future
            collaboration, merci de remplir le formulaire de contact.
          </p>
          <div className="h-1 bg-blue-600 mx-auto w-32 lg:w-112 mt-6 mb-16"></div>
        </div>

        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-2xl">
          {/* Contact Form */}
          <section className="p-6">
            <h2 className="text-2xl pb-4 border-b-4 mb-12 border-blue-600">
              Formulaire de contact
            </h2>

            <ContactForm />
          </section>

          {/* Contact Informations */}
          <section className="p-6">
            <h2 className="text-2xl pb-4 border-b-4 mb-12 border-blue-600">
              Mes coordonnées
            </h2>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Contact;

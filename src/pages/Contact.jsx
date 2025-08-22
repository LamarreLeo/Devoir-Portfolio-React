import ContactForm from '../components/forms/ContactForm';
import { Map, MapPin, Smartphone, Mail } from 'lucide-react';

function Contact() {
  return (
    <main className="mt-12">
      <div className="w-full bg-gray-100 py-12 px-6">
        <div className="text-center flex flex-col gap-2">
          <h1 className="text-4xl">Contact</h1>
          <p>
            Pour me contacter en vue d'un entretien ou d'une future
            collaboration, merci de remplir le formulaire de contact.
          </p>
          <div className="h-1 bg-blue-600 mx-auto w-32 lg:w-112 mt-6 mb-16"></div>
        </div>

        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl shadow-2xl">
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

            <address className="flex flex-col gap-4 mb-6 not-italic">
              <ul className="flex flex-col gap-2">
                <li>
                  <h3 className="text-xl">John Doe</h3>
                </li>
                <li className="flex items-center">
                  <Map className="inline-block mr-1" strokeWidth={1} />
                  40 rue Laure DieBold
                </li>

                <li className="flex items-center">
                  <MapPin className="inline-block mr-1" strokeWidth={1} />
                  69009 Lyon, France
                </li>

                <li className="flex items-center">
                  <a href="tel:+33123456789">
                    <Smartphone className="inline-block mr-1" strokeWidth={1} />
                    01 23 45 67 89
                  </a>
                </li>

                <li className="flex items-center">
                  <a href="mailto:john.doe@gmail.com">
                    <Mail className="inline-block mr-1" strokeWidth={1} />
                    john.doe@gmail.com
                  </a>
                </li>
              </ul>
            </address>

            <iframe
              title="Localisation de John Doe sur Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657540956!2d4.7964039765599855!3d45.77866571240168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1755831872870!5m2!1sfr!2sfr"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Contact;

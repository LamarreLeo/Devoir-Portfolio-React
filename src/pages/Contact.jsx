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

            <address className="flex flex-col gap-4 not-italic">
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
          </section>
        </div>
      </div>
    </main>
  );
}

export default Contact;

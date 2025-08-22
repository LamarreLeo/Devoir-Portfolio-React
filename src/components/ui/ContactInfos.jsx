import { Map, MapPin, Smartphone, Mail } from 'lucide-react';

function ContactInfos() {
  return (
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
  );
}

export default ContactInfos;

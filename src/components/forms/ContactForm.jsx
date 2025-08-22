function ContactForm() {
  return (
    <form action="" method="post" className="flex flex-col gap-4">
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Votre nom"
        aria-label="Votre nom"
        autoComplete="name"
        required
        className="border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Votre adresse email"
        aria-label="Votre adresse email"
        autoComplete="email"
        required
        className="border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Votre numéro de téléphone"
        aria-label="Votre numéro de téléphone"
        autoComplete="tel"
        required
        pattern="[0-9]{10}"
        className="border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        id="subject"
        name="subject"
        placeholder="Sujet"
        aria-label="Sujet"
        required
        className="border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        id="message"
        name="message"
        placeholder="Votre message"
        aria-label="Votre message"
        required
        className="border border-gray-300 rounded-lg p-2.5 h-60 focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>

      <button
        type="submit"
        className="cursor-pointer text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg mx-auto"
      >
        Envoyer
      </button>
    </form>
  );
}

export default ContactForm;

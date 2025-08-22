function ContactForm() {
  return (
    <form action="" method="post" className="flex flex-col gap-4">
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Votre nom"
        autoComplete="name"
        required
        className="border border-gray-300 rounded-lg p-2.5"
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Votre adresse email"
        autoComplete="email"
        required
        className="border border-gray-300 rounded-lg p-2.5"
      />
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Votre numéro de téléphone"
        autoComplete="tel"
        required
        className="border border-gray-300 rounded-lg p-2.5"
      />
      <input
        type="text"
        id="subject"
        name="subject"
        placeholder="Sujet"
        required
        className="border border-gray-300 rounded-lg p-2.5"
      />
      <textarea
        id="message"
        name="message"
        placeholder="Votre message"
        required
        className="border border-gray-300 rounded-lg p-2.5 h-60"
      ></textarea>

      <button
        type="submit"
        className="cursor-pointer text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
      >
        Envoyer
      </button>
    </form>
  );
}

export default ContactForm;

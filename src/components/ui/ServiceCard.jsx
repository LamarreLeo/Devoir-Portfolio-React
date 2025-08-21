function ServiceCard({ Icon, title, description }) {
  return (
    <article
      className="rounded-2xl overflow-hidden flex flex-col p-4 text-center border border-gray-300 
      hover:shadow-md hover:bg-[#efefef] transition duration-300 ease-in-out"
    >
      {Icon}
      <h2 className="text-xl mt-4">{title}</h2>
      <p className="mt-2">{description}</p>
    </article>
  );
}

export default ServiceCard;

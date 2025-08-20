function ServiceCard({ Icon, title, description }) {
  return (
    <div>
      {Icon}
      <h2 className="text-lg">{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;

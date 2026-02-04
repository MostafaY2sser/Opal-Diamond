

const ServiceCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay={delay}
      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-4 md:p-8 flex flex-col items-center text-center border border-gray-100"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};


export default ServiceCard;

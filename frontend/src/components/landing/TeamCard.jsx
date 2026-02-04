import { LazyLoadImage } from "react-lazy-load-image-component";

const TeamCard = ({ image, name, position, delay = 0, social = [] }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden text-center border border-gray-100 p-6"
    >
      <LazyLoadImage
        src={image}
        alt={name}
        effect="blur"
        className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-blue-600 font-medium mb-3">{position}</p>

      {/* Social Icons */}
      {social.length > 0 && (
        <div className="flex justify-center gap-4 mt-2">
          {social.map((icon, index) => (
            <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer">
              {icon.icon}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamCard;

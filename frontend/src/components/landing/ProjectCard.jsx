import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ image, title, location, description, delay = 0 }) => {
  return (
    <Link
      data-aos="fade-up"
      data-aos-delay={delay}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 "
    >
      <img
        src={`http://127.0.0.1:8000/storage/${image}`}
        alt={title}
        effect="blur"
        className="w-full h-56 object-cover object-center"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="flex items-center text-blue-600 text-sm font-medium mb-3">
          <FaMapMarkerAlt className="mr-2 text-base" /> {location}
        </p>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;

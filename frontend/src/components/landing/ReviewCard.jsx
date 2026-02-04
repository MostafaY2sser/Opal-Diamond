

import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ image, name, rating, comment, delay = 0 }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100"
    >
      <LazyLoadImage
        src={image}
        alt={name}
        effect="blur"
        className="w-20 h-20 mx-auto rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <div className="flex justify-center gap-1 my-2 text-yellow-400">
        {Array(rating)
          .fill(0)
          .map((_, idx) => (
            <FaStar key={idx} />
          ))}
      </div>
      <p className="text-gray-600 text-sm">{comment}</p>
    </div>
  );
};

export default ReviewCard;

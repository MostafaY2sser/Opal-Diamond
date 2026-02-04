import { LazyLoadImage } from "react-lazy-load-image-component";

const BlogCard = ({ image, title, date, summary, delay = 0 }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <LazyLoadImage
        src={image}
        alt={title}
        effect="blur"
        className="w-full h-56 object-cover"
      />
      <div className="p-6 text-left">
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{summary}</p>
      </div>
    </div>
  );
};

export default BlogCard;

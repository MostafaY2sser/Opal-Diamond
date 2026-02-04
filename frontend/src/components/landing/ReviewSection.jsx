import ReviewCard from "./ReviewCard";

const reviews = [
  {
    id: 1,
    name: "Mostafa Yasser",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    comment: "Excellent service! Found my dream property faster than expected.",
  },
  {
    id: 2,
    name: "Sara Ahmed",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    comment: "Professional team and smooth process. Highly recommend!",
  },
  {
    id: 3,
    name: "Ahmed Ali",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    rating: 5,
    comment: "Top-notch real estate services with great attention to detail.",
  },
  {
    id: 4,
    name: "Nour Hassan",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    comment: "Friendly staff and amazing properties. Will use again!",
  },
];

const ReviewSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="reviews">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          What Our <span className="text-blue-600">Clients Say</span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          See what our satisfied clients have to say about our real estate services.
        </p>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard
              key={review.id}
              image={review.image}
              name={review.name}
              rating={review.rating}
              comment={review.comment}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;

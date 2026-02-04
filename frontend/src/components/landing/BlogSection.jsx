
import BlogCard from "./BlogCard";

const blogs = [
  {
    id: 1,
    title: "Top 10 Real Estate Trends in 2025",
    date: "Oct 1, 2025",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1000&q=60",
    summary:
      "Discover the latest trends in the real estate market and how to make smart investment decisions.",
  },
  {
    id: 2,
    title: "How to Buy Your Dream Home",
    date: "Sep 20, 2025",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=60",
    summary:
      "A complete guide for first-time home buyers to navigate the property market with ease.",
  },
  {
    id: 3,
    title: "Selling Your Property? Tips for Success",
    date: "Sep 10, 2025",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=60",
    summary:
      "Learn how to sell your property quickly and at the best price with these professional tips.",
  },
  {
    id: 4,
    title: "Investment Opportunities in Egypt",
    date: "Aug 25, 2025",
    image:
      "https://images.unsplash.com/photo-1560184897-4c4d7f5b2f6e?auto=format&fit=crop&w=1000&q=60",
    summary:
      "Explore high-potential investment properties across Egypt for both beginners and seasoned investors.",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-white" id="blog">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          Latest <span className="text-blue-600">Blog Posts</span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Stay updated with our latest insights, tips, and guides in the real estate world.
        </p>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard
              key={blog.id}
              image={blog.image}
              title={blog.title}
              date={blog.date}
              summary={blog.summary}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;


import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import TeamCard from "./TeamCard";

const teamMembers = [
  {
    id: 1,
    name: "Mostafa Yasser",
    position: "CEO",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    social: [
      { icon: <FaFacebookF />, link: "#" },
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaLinkedinIn />, link: "#" },
    ],
  },
  {
    id: 2,
    name: "Sara Ahmed",
    position: "Lead Architect",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    social: [
      { icon: <FaFacebookF />, link: "#" },
      { icon: <FaLinkedinIn />, link: "#" },
    ],
  },
  {
    id: 3,
    name: "Ahmed Ali",
    position: "Sales Manager",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    social: [
      { icon: <FaFacebookF />, link: "#" },
      { icon: <FaTwitter />, link: "#" },
    ],
  },
  {
    id: 4,
    name: "Nour Hassan",
    position: "Marketing Lead",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    social: [
      { icon: <FaLinkedinIn />, link: "#" },
      { icon: <FaTwitter />, link: "#" },
    ],
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="team">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          Meet Our <span className="text-blue-600">Team</span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Our experienced team is here to help you find, buy, sell, or rent the perfect property.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={member.id}
              image={member.image}
              name={member.name}
              position={member.position}
              social={member.social}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

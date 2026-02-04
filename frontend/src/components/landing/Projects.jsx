import { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { useProjects } from "../../hooks/projects/useProjects";
// import useFetch from "../../../hooks/common/useFetch";


const ProjectsSection = () => {

  // const { getData , data: projects } = useFetch()
  const { fetchProjects, projects } = useProjects();
  
    useEffect(() => {
      fetchProjects();
    }, []);
    

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          Our Latest <span className="text-blue-600">Projects</span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Explore our most recent real estate developments, where design meets
          comfort and quality meets innovation.
        </p>

        {/*  Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project, index) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              location={project.location}
              description={project.description}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

"use client";
import React, { useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
    {
      id: 1,
      title: "UniSchedule App",
      description: "Ứng dụng di động tra cứu thông tin sinh viên",
      image: "/images/flutter-img.png",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "/",
    },
    // {
    //     id: 2,
    //     title: "Potography Portfolio Website",
    //     description: "Project 2 description",
    //     image: "/images/flutter-project.png",
    //     tag: ["All", "Web"],
    //     gitUrl: "/",
    //     previewUrl: "/",
    // },
];

const ProjectSection = () => {

  const [tag, setTag] = useState("All");
  const ref = useRef(null);

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="project" className='py-28'>
      <h2 className="text-center text-4xl font-bold text-white mb-8 md:mb-12">
        Dự án của tôi
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => 
          <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        )}
      </div>
    </section>
  );
};

export default ProjectSection;

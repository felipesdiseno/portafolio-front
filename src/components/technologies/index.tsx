import React from "react";
import TechCarousel from "./techCarrousel";
import ProjectCard from "../projectCard/projectCard";
import { projects } from '@/Information/technologies';


export default function Technologies() {
  return (
    <div className="container flex flex-col mx-auto py-10 gap-6 ">
      <div className="px-2">
    <TechCarousel />
    </div>
    <div className="flex flex-wrap p-4 gap-8 justify-center overflow-y-auto">
      {projects.map((project, index) => (
        <ProjectCard 
          key={index + 1} 
          title={project.title} 
          description={project.description} 
          img={project.img} 
          url={project.url} 
        />
      ))}
    </div>
    </div>
  );
}

import React from 'react';
interface ProjectCardProps {
  title: string;
  description: string;
  img: string;
  url: string;
}

export default function ProjectCard({ title, description, img, url }: ProjectCardProps) {
  return (
    <div
      className="flex contrast rounded-xl overflow-hidden w-full border border-white h-1/3 gap-4 hover:scale-[101%] transition duration-300 cursor-pointer"
      onClick={() => window.open(url, '_blank')}
    >
      {/* Contenedor izquierdo */}
      <div className="flex flex-col w-3/5 p-4">
        <div className="text-xl font-bold">{title}</div>
        <div className="">{description}</div>
      </div>
      {/* Contenedor derecho */}
      <div className="w-2/5">
        <img src={img} alt={title} className="h-full object-cover" />
      </div>
    </div>
  );
};
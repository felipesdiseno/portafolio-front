import React from "react";

function Projects() {
  const proyectos = [
    { url: "https://github.com", name: "proyecto 1", img: "" },
    { url: "https://github.com", name: "proyecto 2", img: "" },
    { url: "https://github.com", name: "proyecto 3", img: "" },
    { url: "https://github.com", name: "proyecto 4", img: "" },
    { url: "https://github.com", name: "proyecto 5", img: "" },
  ];
  return (
    <div>
      <h1 className="2xl font-semibold">
        Estos son los proyectos que he realizado
      </h1>
      {proyectos.map((proyecto) => (
        <div key={proyecto.name}>
          <a href={proyecto.url}>{proyecto.name}</a>
        </div>
      ))}
    </div>
  );
}

export default Projects;

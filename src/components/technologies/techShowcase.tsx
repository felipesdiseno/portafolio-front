import React, { useState } from "react";

interface Technology {
  name: string;
  icon: string;
  category: string;
  size: number;
  level: number;
}

interface TechShowcaseProps {
  technologies: Technology[];
}

const TechShowcase: React.FC<TechShowcaseProps> = ({ technologies }) => {
  const [activeView, setActiveView] = useState<"grid" | "cloud" | "graph">(
    "grid"
  );

  const TechGrid = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-md"
        >
          <span className="text-4xl mb-2">{tech.icon}</span>
          <span className="text-sm font-semibold text-center">{tech.name}</span>
        </div>
      ))}
    </div>
  );

  const TechList = () => {
    const categories = Array.from(
      new Set(technologies.map((tech) => tech.category))
    );
    return (
      <div className="space-y-6">
        {categories.map((category, index) => (
          <div key={index}>
            <h3 className="text-xl font-bold mb-2">{category}</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {technologies
                .filter((tech) => tech.category === category)
                .map((tech, techIndex) => (
                  <li
                    key={techIndex}
                    className="flex items-center space-x-2 bg-gray-800 p-2 rounded-md shadow-sm"
                  >
                    <span className="text-2xl">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  const TechCloud = () => {
    const [hoveredTech, setHoveredTech] = useState<string | null>(null);
    return (
      <div className="flex flex-wrap justify-center items-center gap-4 p-4">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className={`transition-all duration-300 ease-in-out cursor-pointer ${
              hoveredTech === tech.name ? "scale-110" : ""
            }`}
            style={{ fontSize: `${tech.size}rem` }}
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            <span className="mr-1">{tech.icon}</span>
            <span className="text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
    );
  };

  const SkillsGraph = () => (
    <div className="space-y-4">
      {technologies.map((tech, index) => (
        <div key={index} className="flex items-center">
          <span className="w-24 text-right mr-4">{tech.name}</span>
          <div className="flex-1 bg-gray-800 rounded-full h-4">
            <div
              className="bg-blue-600 h-4 rounded-full"
              style={{ width: `${tech.level}%` }}
            ></div>
          </div>
          <span className="ml-4 w-12">{tech.level}%</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-6 p-4">
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setActiveView("grid")}
          className={`px-4 py-2 rounded ${
            activeView === "grid" ? "bg-blue-500 text-white" : "bg-gray-800"
          }`}
        >
          Grid
        </button>

        <button
          onClick={() => setActiveView("cloud")}
          className={`px-4 py-2 rounded ${
            activeView === "cloud" ? "bg-blue-500 text-white" : "bg-gray-800"
          }`}
        >
          Cloud
        </button>
      </div>

      <div>
        {activeView === "grid" && <TechGrid />}
        {activeView === "cloud" && <TechCloud />}
      </div>
    </div>
  );
};

export default TechShowcase;

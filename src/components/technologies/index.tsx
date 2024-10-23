import React from "react";
import TechShowcase from "./techShowcase";
import CustomTechCarousel from "./techCarrousel";

const technologies = [
  { name: "React", icon: "⚛️", category: "Frontend", size: 2, level: 90 },
  {
    name: "TypeScript",
    icon: "🔷",
    category: "Language",
    size: 1.8,
    level: 85,
  },
  { name: "Node.js", icon: "🟩", category: "Backend", size: 1.9, level: 80 },
  { name: "Python", icon: "🐍", category: "Language", size: 1.7, level: 75 },
  { name: "Docker", icon: "🐳", category: "DevOps", size: 1.6, level: 70 },
  { name: "GraphQL", icon: "🔺", category: "API", size: 1.5, level: 65 },
  { name: "MongoDB", icon: "🍃", category: "Database", size: 1.7, level: 75 },
  { name: "Redis", icon: "🔴", category: "Database", size: 1.4, level: 60 },
  { name: "AWS", icon: "☁️", category: "Cloud", size: 1.8, level: 70 },
  {
    name: "Git",
    icon: "🌿",
    category: "Version Control",
    size: 1.6,
    level: 85,
  },
];

// const App: React.FC = () => {
//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Mis Tecnologías</h1>
//       <CustomTechCarousel technologies={technologies} />
//     </div>
//   );
// };
const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Mis Tecnologías</h1>
      <TechShowcase technologies={technologies} />
    </div>
  );
};

export default App;

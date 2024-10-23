"use client";

import { useState } from "react";
import About from "@/components/aboutme";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies";
import Contact from "@/components/contact";

export default function Home() {
  const [view, setView] = useState("About");
  const renderView = () => {
    switch (view) {
      case "About":
        return <About />;
      case "Projects":
        return <Projects />;
      case "Technologies":
        return <Technologies />;
      case "Contact":
        return <Contact />;
      default:
        return <About />;
    }
  };
  return (
    <div className="flex relative m-auto h-full max-h-[90%] w-screen max-w-[1440px] flex-col mx-12 gap-4 p-2 ">
      {/* <CONTENEDOR SUPERIOR /> */}
      <div className="background rounded-xl relative w-full h-1/6 border-2 border-none"></div>
      {/* <CONTENEDOR INFERIOR /> */}
      <div className="flex gap-4  h-5/6 w-full ">
        {/* <CONTENEDOR IZQUIERDO /> */}
        <div className="background rounded-xl border-2 border-none font-semibold w-1/5 flex flex-col p-1">
          <ul className="flex flex-col">
            <li className="w-fit">
              <button onClick={() => setView("About")} className="mt-2">
                <span>Sobre mi</span>
              </button>
            </li>
            <li className="w-fit">
              <button onClick={() => setView("Projects")} className="mt-2">
                <span>Proyectos</span>
              </button>
            </li>
            <li className="w-fit">
              <button onClick={() => setView("Technologies")} className="mt-2">
                <span>Tecnologias</span>
              </button>
            </li>
            <li className="w-fit">
              <button onClick={() => setView("Contact")} className="mt-2">
                <span>Contacto</span>
              </button>
            </li>
          </ul>
        </div>
        {/* <CONTENEDOR DERECHO /> */}
        <div className="background rounded-xl border-2 border-none w-4/5 flex justify-center ">{renderView()}</div>
      </div>
    </div>
  );
}

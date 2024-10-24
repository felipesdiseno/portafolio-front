"use client";

import { useState } from "react";
import About from "@/components/aboutme";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies";
import Contact from "@/components/contact";
import Logo from "@/components/Logo/logo";

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
    <div className="flex relative m-auto h-full max-h-[90%] w-screen max-w-[1440px] flex-col mx-12 p-2 ">
      {/* <CONTENEDOR SUPERIOR /> */}
      <div className="background relative w-full h-1/6 border border-white flex flex-row justify-start">
      <div className="flex w-1/5 h-full bg-red-600"><Logo /></div>
      <div className="flex w-4/5 h-full"></div>
      </div>
   
      {/* <CONTENEDOR INFERIOR /> */}
      <div className="flex h-5/6 w-full ">
        {/* <CONTENEDOR IZQUIERDO /> */}
        <div className="contrast border border-white font-semibold w-1/5 flex flex-col p-1">
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
        <div className="background border border-white w-4/5 flex justify-center ">{renderView()}</div>
      </div>
    </div>
  );
}

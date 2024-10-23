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
    <div className="flex items-center justify-center">
      <div className="flex relative m-auto h-full max-h-[90%] w-screen max-w-[1440px] flex-col mx-12 gap-1">
        <div className=" relative w-full h-1/6 border-2 border-black"></div>

        <div className="flex gap-1  h-5/6 w-full ">
          <div className=" border-2 border-none bg-[#222831] text-[#EEEEEE] font-semibold w-1/5 flex flex-col">
            <ul className="flex flex-col">
              <li className="w-fit">
                <button
                  onClick={() => setView("About")}
                  className="mt-2 text-[#EEEEEE]"
                >
                  <span>Sobre mi</span>
                </button>
              </li>
              <li className="w-fit">
                <button onClick={() => setView("Projects")} className="mt-2">
                  <span>Proyectos</span>
                </button>
              </li>
              <li className="w-fit">
                <button
                  onClick={() => setView("Technologies")}
                  className="mt-2"
                >
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
          <div className=" border-2 border-none w-4/5">{renderView()}</div>
        </div>
      </div>
    </div>
  );
}

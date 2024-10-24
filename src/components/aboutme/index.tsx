import React from "react";
import { personalInformation } from "@/Information/personalInformation";

function About() {
  const { name, lastName, bio, header, img } = personalInformation;
  return (
    <div className="p-2 overflow-auto ">
      {/*SECCION SUPERIOR*/}
      <div className=" flex flex-row gap-2 justify-between">
        {/** CONTENEDOR DERECHO */}
        <div className="flex flex-col w-2/3 gap-1 justify-center">
        <h1 className="text-2xl font-semibold">{name} {lastName}!</h1>
        <h2 className="text-justify">{header}</h2>
        </div>

        {/** CONTENEDOR IZQUIERDO */}
        <div className="flex justify-center items-center max-w-[33.33%] w-40 h-40 rounded-full overflow-hidden border-2 border-red-500 m-auto">
          <img className="object-cover w-full h-full" src={img.src} alt="" />
        </div>
      
      </div>

      {/*SECCION INFERIOR*/}
      <div>
      <p className="text-justify text-md mt-4">{bio}</p>
      </div>
      

      
      
    </div>
  );
}

export default About;

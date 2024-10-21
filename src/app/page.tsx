"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [view, setView] = useState("About");

  return (
    <div className="flex relative m-auto h-full max-h-[90%] w-screen max-w-[1440px] flex-col mx-12 gap-1">
      <div className=" relative w-full h-1/6 border-2 border-black"></div>

      <div className="flex gap-1  h-5/6 w-full ">
        <div className=" border-2 border-black w-1/5 flex flex-col">
          <ul className="flex flex-col">
            <li className="w-fit">
              <button onClick={() => setView("About")}></button>
              <span>About</span>
            </li>
            <li className="w-fit">
              <button onClick={() => setView("Projects")}></button>
            <span>Projects</span>
            </li>
            <li className="w-fit">
              <button onClick={() => setView("Technologies")}>
                
              </button>
              <span>Technologies</span>
            </li>
            <li className="w-fit">
              <button onClick={() => setView("Contact")}></button>
              <span>Contact</span>
            </li>
          </ul>
        </div>
        <div className=" border-2 border-black w-4/5">
          {/* <div className={view==='About'?'':'hidden'}>
          <Comp1/>
        </div>
        <div className={view==='Projects'?'':'hidden'}>
          <Comp2/>
        </div>
        <div className={view==='Technologies'?'':'hidden'}>
          <Comp3/>
        </div>
        <div className={view==='Contact'?'':'hidden'}>
          <Comp4/>
        </div> */}
        </div>
      </div>
    </div>
  );
}

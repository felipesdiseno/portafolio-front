"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiGit,
  SiMongodb,
} from "react-icons/si";

const technologies = [
  { name: "React", icon: SiReact, color: "text-blue-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "Git", icon: SiGit, color: "text-red-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
];

// Duplicate the technologies array to create a seamless loop
const extendedTechnologies = [
  ...technologies,

  ...technologies,
  ...technologies,
];

export default function TechCarousel() {
  const [api, setApi] = React.useState<any>();
  const autoplay = useRef(
    Autoplay({ delay: 0, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      // If we've scrolled past the original set, jump back to create illusion of infinite loop
      if (api.selectedScrollSnap() >= technologies.length) {
        api.scrollTo(0, false);
      }
    });
  }, [api]);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: false,
        skipSnaps: false,
        dragFree: true,
      }}
      plugins={[autoplay.current]}
      className="w-full overflow-hidden"
      setApi={setApi}
    >
      <CarouselContent className="py-4 animate-carousel">
        {extendedTechnologies.map((tech, index) => (
          <CarouselItem
            key={index}
            className="basis-1/6 pl-4 transition-opacity duration-300 ease-in-out"
          >
            <Card className="overflow-hidden h-20 flex items-center justify-center text-[#1D2226]">
              <CardContent className="flex flex-col items-center justify-center p-2 h-full w-full">
                <div
                  className={`flex flex-col items-center justify-center ${tech.color}`}
                >
                  <tech.icon className="w-8 h-8 mb-1" />
                  <p className="text-xs text-center">{tech.name}</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

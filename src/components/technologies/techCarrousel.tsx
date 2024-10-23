import React, { useState, useEffect } from "react";

interface Technology {
  name: string;
  icon: string;
}

interface DualTechCarouselProps {
  technologies: Technology[];
}

const DualTechCarousel: React.FC<DualTechCarouselProps> = ({
  technologies,
}) => {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLeftIndex((prevIndex) => (prevIndex + 1) % technologies.length);
      setRightIndex((prevIndex) =>
        prevIndex === 0 ? technologies.length - 1 : prevIndex - 1
      );
    }, 3000); // Cambia de tecnología cada 3 segundos

    return () => clearInterval(timer);
  }, [technologies.length]);

  const nextLeftSlide = () => {
    setLeftIndex((prevIndex) => (prevIndex + 1) % technologies.length);
  };

  const prevLeftSlide = () => {
    setLeftIndex((prevIndex) =>
      prevIndex === 0 ? technologies.length - 1 : prevIndex - 1
    );
  };

  const nextRightSlide = () => {
    setRightIndex((prevIndex) =>
      prevIndex === 0 ? technologies.length - 1 : prevIndex - 1
    );
  };

  const prevRightSlide = () => {
    setRightIndex((prevIndex) => (prevIndex + 1) % technologies.length);
  };

  const Carousel = ({
    direction,
    currentIndex,
    onNext,
    onPrev,
  }: {
    direction: "left" | "right";
    currentIndex: number;
    onNext: () => void;
    onPrev: () => void;
  }) => (
    <div className="relative w-full max-w-xs mx-auto mb-8">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {technologies.map((tech, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="rounded-lg shadow-md p-6 m-2 flex flex-col items-center justify-center">
                <span className="text-4xl mb-2">{tech.icon}</span>
                <span className="text-lg font-semibold">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={onPrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label={`Tecnología anterior (${direction})`}
      >
        ◀
      </button>
      <button
        onClick={onNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label={`Siguiente tecnología (${direction})`}
      >
        ▶
      </button>
    </div>
  );

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-center">
        Carrusel hacia la derecha
      </h2>
      <Carousel
        direction="left"
        currentIndex={leftIndex}
        onNext={nextLeftSlide}
        onPrev={prevLeftSlide}
      />

      <h2 className="text-xl font-bold mb-4 text-center">
        Carrusel hacia la izquierda
      </h2>
      <Carousel
        direction="right"
        currentIndex={rightIndex}
        onNext={nextRightSlide}
        onPrev={prevRightSlide}
      />
    </div>
  );
};

export default DualTechCarousel;

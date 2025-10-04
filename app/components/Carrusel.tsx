import { useState, useEffect } from "react";
import logo1 from "../images/imagen_muestra_1.jpeg";
import logo2 from "../images/imagen_muestra_2.jpeg";
import logo3 from "../images/imagen_muestra_3.jpeg";
import logo4 from "../images/imagen_muestra_1.jpeg";
import logo5 from "../images/imagen_muestra_2.jpeg";
import logo6 from "../images/imagen_muestra_3.jpeg";

const images = [logo1, logo2, logo3, logo4, logo5, logo6];

export default function Carrusel() {
  const [index, setIndex] = useState(0);

  // autoplay cada 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center overflow-hidden w-full max-w-lg mx-auto">
      {/* Carrusel */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => {
          const diff = Math.abs(index - i); 

          return (
            <div
              key={i}
              className={`w-full flex-shrink-0 px-4 transition-all duration-500 ${
                index === i
                  ? "scale-100 opacity-100 z-10" // Activa: grande y clara
                  : diff === 1
                  ? "scale-90 opacity-60 z-0"   // Vecina: más chica y opaca
                  : "scale-75 opacity-30 z-0"   // Lejana: aún más opaca
              }`}
            >
              <img
                src={img}
                alt={`Imagen ${i + 1}`}
                className="aspect-3/2 object-contain rounded-lg shadow-lg bg-black"
              />
            </div>
          );
        })}
      </div>

      {/* Indicadores */}
      <div className="flex gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full transition ${
              index === i ? "bg-primary scale-105" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

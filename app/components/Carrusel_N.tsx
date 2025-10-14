import { useState, useEffect } from "react";
import img1 from "../images/chesstalent_familia.png"
import img2 from "../images/equipo_chesstalent.png"

const images = [img1, img2];

export default function Carrusel_N() {
    const [index, setIndex] = useState(0);

    //autoplay cada 3s
    useEffect(() => {
        const interval = setInterval(() => {
            setInterval((prev) => (prev + 1) % images.length);
        }, 3000);
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
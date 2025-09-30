import type { Route } from "./+types/home";
import logo1 from "../images/imagen_muestra_1.jpeg";
import logo2 from "../images/imagen_muestra_2.jpeg";
import logo3 from "../images/imagen_muestra_3.jpeg";
import { useRef, useEffect, useState } from "react";



export const meta: Route.MetaFunction = () => {
  return [
    { title: "TaxBusiness - Soluciones Fiscales en Monterrey" },
    {
      name: "description",
      content:
        "Firma especializada en defensa fiscal, devoluciones de impuestos, auditorías SAT y consultoría jurídica con más de 20 años de experiencia.",
    },
    { 
      name: "keywords", 
      content: "defensa fiscal en Monterrey, devoluciones SAT, consultoría fiscal México, auditorías SAT" 
    },
  ];
};

  
export default function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-[2.5rem] font-bold text-secondary text-center mb-4">
        Soluciones Fiscales
      </h1>
      <p className="text-2xl text-[#144272] text-center mb-8">
        Somos una firma especializada en materia fiscal integrada por abogados y contadores calificados dedicados a su servicio para brindarle las mejores alternativas legales, contando con más de 20 años de experiencia profesional que nos respaldan en este ámbito
      </p>

     <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory scroll-p-8 flex gap-10 ps-8 pl-8 mb-8">
        <div className="snap-start flex-shrink-0 w-80">
          <img src={logo1} alt="Servicio fiscal 1" className="aspect-3/2 object-cover rounded-lg shadow" />
          <p> Prueba 1</p>
        </div>
        <div className="snap-start flex-shrink-0 w-80">
          <img src={logo2} alt="Servicio fiscal 2" className="aspect-3/2 object-cover rounded-lg shadow" />
        </div>
        <div className="snap-start flex-shrink-0 w-80">
          <img src={logo3} alt="Servicio fiscal 3" className="aspect-3/2 object-cover rounded-lg shadow" />
        </div>
         <div className="snap-start flex-shrink-0 w-80">
          <img src={logo1} alt="Servicio fiscal 1" className="aspect-3/2 object-cover rounded-lg shadow" />
        </div>
        <div className="snap-start flex-shrink-0 w-80">
          <img src={logo2} alt="Servicio fiscal 2" className="aspect-3/2 object-cover rounded-lg shadow" />
        </div>
        <div className="snap-start flex-shrink-0 w-80">
          <img src={logo3} alt="Servicio fiscal 3" className="aspect-3/2 object-cover rounded-lg shadow" />
        </div>
      </div>

      <p className="text-2xl text-[#144272] text-center mb-8 mt-8">
        Nuestros profesionistas, amigos y aliados estratégicos, se especializan en la solución eficaz de problemas fiscales, en la obtención de devoluciones de impuestos, atención de auditorías, en la implementación exitosa de la defensa fiscal, en consultoría jurídica, estrategia legal y comercio exterior.
      </p>
    
    
      <a
          href="/contacto"
          className="bg-cyan-700 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold text-white transition"
          >
            Contáctanos
      </a>
    
    
    </div>
  );
}

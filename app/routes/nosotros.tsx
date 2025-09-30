import type { Route } from "./+types/nosotros";

export const meta: Route.MetaFunction = () => [
  { title: "Nosotros - TaxBusiness" },
  {
    name: "description",
    content:
      "TaxBusiness es una firma con más de 20 años de experiencia en soluciones fiscales. Nuestra misión es proteger tu patrimonio y brindar confianza.",
  },
  { name: "keywords", content: "firma fiscal, experiencia fiscal México, misión visión fiscal" },
];

export default function Nosotros() {
  return (
    <div className="p-8">
      <h1 className="text-3xl text-[#2C2D5C] font-bold mb-4">Quiénes Somos</h1>
      
      <div>
        <h2 className="text-2xl text-[#2C2D5C] font-bold mt-4">Misión</h2>
        <p className="text-xl text-[#2C2D5C]  mt-4">
        Nuestra misión es ser un aliado estratégico para instrumentar las mejores
        soluciones a contingencias y riesgos fiscales, garantizando el éxito en los
        asuntos que atendemos.
        </p>
      </div>
      <div>
        <h2 className="text-2xl text-[#2C2D5C] font-bold mt-4">Visión</h2>
        <p className="text-xl text-[#2C2D5C] mt-4">
          Nuestra visión es ser una sólida alternativa profesional reconocida por
          ejecutar soluciones confiables acorde a sus exigencias fiscales de acuerdo
          con la experiencia y los éxitos que nos caracterizan, consolidando nuestro
          posicionamiento con base a los resultados obtenidos.
        </p>
      </div>
      <div>
        <h2 className="text-3xl text-[#2C2D5C] text-center font-bold mt-6">Lo que nos hace ser los mejores en el sector</h2>
        <h2 className="text-3xl text-[#2C2D5C] font-semibold mt-8">Encuéntranos: </h2>
      </div>
      <div>
        <iframe
            className="w-full h-90 rounded-lg mt-6"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.455262679024!2d-100.3333!3d25.6572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bf7e7c3e5f3f%3A0x123456789abcdef!2sAv.%20Fundadores%20955%2C%20Torre%20Sienna%2C%20San%20Pedro%20Garza%20Garc%C3%ADa%2C%20NL!5e0!3m2!1ses!2smx!4v123456789"
            allowFullScreen
            loading="lazy"
          ></iframe>
      </div>
    </div>
  );
}

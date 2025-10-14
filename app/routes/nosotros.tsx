import Carrusel_N from "~/components/Carrusel_N";
import type { Route } from "./+types/nosotros";

export const meta: Route.MetaFunction = () => [
  { title: "Nosotros - TaxBusiness" },
  {
    name: "description",
    content:
      "TaxBusiness es una firma con más de 20 años de experiencia en soluciones fiscales. Nuestra misión es proteger tu patrimonio y brindar confianza.",
  },
  {
    name: "keywords",
    content:
      "firma fiscal, defensa fiscal, experiencia fiscal México, misión visión fiscal",
  },
];

export default function Nosotros() {
  return (
    <div className="font-objectivity text-gray-800">
      
      {/* HERO */}
      <section className="bg-gradient-to-r from-[#1C547F] to-[#1D4D72] text-white text-center py-16 px-6 md:px-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Quiénes Somos</h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
          Somos una firma especializada en materia fiscal con más de 20 años de
          experiencia, dedicada a proteger tu patrimonio mediante soluciones
          legales confiables y estratégicas.
        </p>
      </section>

      {/* MISIÓN, VISIÓN Y CARRUSEL */}
      <section className="py-20 px-6 md:px-20 bg-white text-[#1C547F]">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Columna izquierda: misión y visión */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold mb-4">Misión</h2>
              <p className="text-lg text-[#144272] leading-relaxed">
                Ser un aliado estratégico para instrumentar las mejores soluciones
                ante contingencias y riesgos fiscales, garantizando el éxito y la
                tranquilidad de nuestros clientes mediante servicios integrales y
                transparentes.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Visión</h2>
              <p className="text-lg text-[#144272] leading-relaxed">
                Consolidarnos como una alternativa profesional reconocida por
                ejecutar soluciones confiables y efectivas, respaldadas por
                resultados que nos posicionan como líderes en el ámbito fiscal en
                México.
              </p>
            </div>
          </div>

          {/* Columna derecha: carrusel */}
          <div className="flex justify-center">
            <div className="w-full md:w-3/4 lg:w-2/3">
              <Carrusel_N />
            </div>
          </div>
        </div>
      </section>

      {/* FORTALEZAS */}
      <section className="py-20 px-6 md:px-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-[#1D4D72] mb-10">
          Lo que nos hace los mejores en el sector
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-[#144272]">
          {[
            {
              titulo: "Más de 20 años de experiencia",
              texto:
                "Nuestro equipo está conformado por abogados y contadores con una trayectoria sólida en el ámbito fiscal y jurídico.",
            },
            {
              titulo: "Soluciones personalizadas",
              texto:
                "Cada caso es único. Diseñamos estrategias adaptadas a las necesidades y objetivos de cada cliente.",
            },
            {
              titulo: "Compromiso y confianza",
              texto:
                "Trabajamos con ética, transparencia y confidencialidad, garantizando resultados reales y sostenibles.",
            },
          ].map((item) => (
            <div
              key={item.titulo}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              <h3 className="text-2xl font-semibold mb-3 text-[#1C547F]">
                {item.titulo}
              </h3>
              <p className="text-gray-700 leading-relaxed">{item.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MAPA */}
      <section className="py-20 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-[#1C547F] mb-6">Encuéntranos</h2>
        <p className="text-[#144272] mb-10">
          Nuestras oficinas se encuentran en Torre Sienna, San Pedro Garza García, Nuevo León.
        </p>
        <div className="max-w-5xl mx-auto shadow-lg rounded-xl overflow-hidden">
          <iframe
            className="w-full h-[450px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.455262679024!2d-100.3333!3d25.6572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bf7e7c3e5f3f%3A0x123456789abcdef!2sAv.%20Fundadores%20955%2C%20Torre%20Sienna%2C%20San%20Pedro%20Garza%20Garc%C3%ADa%2C%20NL!5e0!3m2!1ses!2smx!4v123456789"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

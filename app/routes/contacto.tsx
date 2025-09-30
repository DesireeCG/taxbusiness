import type { Route } from "./+types/contacto";

export const meta: Route.MetaFunction = () => [
  { title: "Contacto - TaxBusiness" },
  {
    name: "description",
    content:
      "Ponte en contacto con TaxBusiness. Atención en Monterrey y toda la República. Tel: 8181484384, correo: contacto@taxbusiness.com.mx.",
  },
  {
    name: "keywords",
    content:
      "contacto TaxBusiness, defensa fiscal contacto, consultoría fiscal Monterrey",
  },
];

export default function Contacto() {
  return (
    <section className="p-8 bg-neutral">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl text-[#2C2D5C] font-bold mb-6">Contacto</h1>

        <h2 className="text-xl font-semibold text-[#2C2D5C] mb-2">Emails</h2>
        <p className="text-xl text-[#2C2D5C]">contacto@taxbusiness.com.mx</p>
        <p className="text-xl text-[#2C2D5C]">erickcastillo@taxbusiness.com.mx</p>
        <p className="text-xl text-[#2C2D5C]">Celular: 5532652214</p>

        <h2 className="text-xl font-semibold text-[#2C2D5C] mt-6 mb-2">
          Oficinas en Nuevo León
        </h2>
        <p className="text-xl text-[#2C2D5C]">Teléfono: 8181484384</p>
        <p className="text-xl text-[#2C2D5C]">
          Dirección: Av. Fundadores 955, Torre Sienna, San Pedro Garza García,
          NL
        </p>

        {/* Formulario */}
        <form 
          action="https://formspree.io/f/xnngnraj"
          method="POST"
          className="mt-6 flex flex-col gap-4 max-w-md"
          >
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Nombre"
            className="border p-2 rounded text-[#2C2D5C]"
            required
          />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Correo"
            className="border p-2 rounded text-[#2C2D5C]"
            required
          />
          <textarea
            id="message"
            placeholder="Mensaje"
            name="message"
            className="border p-2 rounded text-[#2C2D5C]"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition"
          >
            Enviar
          </button>
        </form>

        {/* Mapa */}
        <div>
          <h2 className="text-2xl text-[#2C2D5C] font-bold mt-10 mb-4">
            Encuéntranos:
          </h2>
          <iframe
            className="w-full h-96 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.455262679024!2d-100.3333!3d25.6572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bf7e7c3e5f3f%3A0x123456789abcdef!2sAv.%20Fundadores%20955%2C%20Torre%20Sienna%2C%20San%20Pedro%20Garza%20Garc%C3%ADa%2C%20NL!5e0!3m2!1ses!2smx!4v123456789"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default function ChessTalent() {
  return (
    <div>
        {/* Hero */}
        <section className="bg-gradient-to-r from-[#1C547F] to-[#1D4D72] text-white py-20 text-center relative">
            <h1 className="font-objectivity font-bold text-4xl md:text-6xl mb-4">
                Proyecto México Chess Talent
            </h1>
            <p className="font-objectivity text-lg md:text-xl max-w-2xl mx-auto mb-4">
                Impulsando el talento ajedrecístico mexicano hacia el éxito internacional.
            </p>
            <p className="font-objectivity text-base md:text-lg text-gray-200 mb-8">
                Una iniciativa de Taxbusiness para apoyar a jóvenes promesas del ajedrez.
            </p>
            <a
                href="/contacto"
                className="bg-cyan-700 hover:bg-blue-600 px-8 md:px-10 py-3 md:py-4 rounded-lg font-semibold transition"
            >
                Contáctanos
            </a>
        </section>
    </div>
  );
} 
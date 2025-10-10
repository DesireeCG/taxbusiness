export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-8">
      <h1 className="text-8xl font-bold text-[#1C547F] mb-4">404</h1>
      <p className="text-2xl text-[#144272] mb-6">
        Lo sentimos, la página que buscas no existe.
      </p>
      <a
        href="/"
        className="bg-cyan-700 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold text-white transition"
      >
        Volver al inicio
      </a>
    </div>
  );
}

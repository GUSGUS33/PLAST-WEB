import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
      <h1 className="text-4xl font-bold text-slate-800 mb-4">404 - Página no encontrada</h1>
      <p className="text-lg text-slate-600 mb-8">No pudimos encontrar la página que estás buscando.</p>
      <Link 
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
}

'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 p-4">
      <h1 className="text-5xl font-bold mb-8 text-gray-800">
        Bienvenido a la Tienda Online
      </h1>
      
      <Link href="/tarea">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition font-semibold text-lg">
          Ir a Lista de Productos 🛍️
        </button>
      </Link>
    </main>
  );
}

'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100">
      <h1 className="text-4xl font-semibold text-gray-900 mb-8">Bienvenido a Hola Mundo en Next.js</h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        Este proyecto es el resultado de un laboratorio realizado para aprender y practicar Next.js.
        <br />
        Aquí podrás explorar ejemplos básicos de renderizado del lado del cliente (CSR) y del servidor (SSR),
        además de un proyecto práctico con una lista de productos filtrados por categoría utilizando React Hooks.
      </p>
      
      <div className="flex space-x-6">
        <Link href="/tarea" passHref>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Ver Productos
          </button>
        </Link>
        <Link href="/about" passHref>
          <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300">
            Más Información
          </button>
        </Link>
      </div>
    
      <footer className="mt-8 text-sm text-gray-500">
        <p>Hecho con ❤️ por NinaDIV</p>
      </footer>
    </div>
  );
}
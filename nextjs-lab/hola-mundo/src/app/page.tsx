'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import UserCard from './components/Usercard'; // Importa el componente UserCard

export default function HomePage() {
  return (
    <>
      {/* Meta Tags para SEO */}
      <Head>
        <title>Hola Mundo Next.js - Laboratorio de Aprendizaje</title>
        <meta
          name="description"
          content="Proyecto de laboratorio para aprender Next.js con ejemplos de CSR, SSR y filtrado de productos con React Hooks."
        />
        <meta name="keywords" content="Next.js, React, CSR, SSR, productos, filtros, hooks" />
        <meta property="og:title" content="Hola Mundo Next.js - Laboratorio" />
        <meta
          property="og:description"
          content="Explora ejemplos prácticos de Next.js con renderizado del lado del cliente y servidor."
        />
        <meta property="og:image" content="/imagenes/nextjs-lab.jpg" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Bienvenido a Hola Mundo en Next.js
          </h1>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed">
            Este proyecto es el resultado de un laboratorio realizado para aprender y practicar Next.js.
            <br />
            Aquí podrás explorar ejemplos básicos de renderizado del lado del cliente (CSR) y del servidor (SSR),
            además de un proyecto práctico con una lista de productos filtrados por categoría utilizando React Hooks.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-8">
          <Image
            src="/imagenes/nextjs-lab.jpg" // Tu imagen en la carpeta 'public/imagenes'
            width={600}
            height={300}
            alt="Laboratorio de Next.js - Ejemplos prácticos"
            priority
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link href="/tarea" passHref>
            <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105">
              🛍️ Ver Productos
            </button>
          </Link>
          <Link href="/about" passHref>
            <button className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300 transform hover:scale-105">
              ℹ️ Más Información
            </button>
          </Link>
        </div>

        {/* User Card Component */}
        <div className="mb-8">
     
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">🖥️ CSR</h3>
            <p className="text-gray-600">Client-Side Rendering con React Hooks</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">🚀 SSR</h3>
            <p className="text-gray-600">Server-Side Rendering optimizado</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">🔍 Filtros</h3>
            <p className="text-gray-600">Filtrado dinámico de productos</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <p className="text-sm text-gray-500 mb-2">
            Hecho con ❤️ por NinaDIV
          </p>
          <p className="text-xs text-gray-400">
            Laboratorio de Next.js - Aprendizaje y Práctica
          </p>
        </footer>
      </div>
    </>
  );
}
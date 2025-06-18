'use client';

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <>
      {/* SEO Optimized Meta Tags */}
      <Head>
        <title>Acerca del Proyecto - Laboratorio Next.js | Tienda Online con React</title>
        <meta
          name="description"
          content="Descubre nuestro proyecto de laboratorio Next.js: una tienda online con filtros de productos, renderizado SSR/CSR y tecnologías modernas como React y Tailwind CSS."
        />
        <meta
          name="keywords"
          content="Next.js, React, Tailwind CSS, tienda online, SSR, CSR, laboratorio web, desarrollo frontend, NinaDIV"
        />
        <meta name="author" content="NinaDIV" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Acerca del Proyecto - Laboratorio Next.js" />
        <meta
          property="og:description"
          content="Proyecto educativo de tienda online desarrollado con Next.js, React y Tailwind CSS. Incluye filtros de productos y renderizado optimizado."
        />
        <meta property="og:image" content="/imagenes/nextjs-lab.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tu-dominio.com/about" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Laboratorio Next.js - Proyecto Educativo" />
        <meta name="twitter:description" content="Tienda online desarrollada con Next.js y React para aprender tecnologías modernas." />
        <meta name="twitter:image" content="/imagenes/nextjs-lab.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://tu-dominio.com/about" />
        
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Acerca del Proyecto - Laboratorio Next.js",
              "description": "Proyecto educativo de tienda online desarrollado con Next.js, React y Tailwind CSS",
              "url": "https://tu-dominio.com/about",
              "author": {
                "@type": "Person",
                "name": "NinaDIV"
              },
              "datePublished": "2024-01-01",
              "inLanguage": "es-ES"
            })
          }}
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 flex flex-col items-center justify-center p-8">
        {/* Breadcrumb Navigation */}

        <article className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-lg">
          {/* Main Heading - SEO Optimized */}
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Acerca de Nuestro Proyecto de Laboratorio Next.js
            </h1>
            <p className="text-xl text-gray-600 font-medium">
              Tienda Online Educativa con Tecnologías Modernas
            </p>
          </header>

          {/* Introduction Section */}
          <section className="mb-8">
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Este proyecto es el resultado de un laboratorio realizado para aprender y practicar el desarrollo con 
              <span className="font-semibold text-blue-600"> Next.js</span>, 
              <span className="font-semibold text-green-600"> React</span>, y 
              <span className="font-semibold text-purple-600"> Tailwind CSS</span>. 
              En el laboratorio, exploramos el renderizado del lado del cliente (CSR) y del servidor (SSR) usando estas tecnologías modernas.
            </p>
          </section>

          {/* Project Objective Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">
              🎯 Objetivo del Proyecto
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              El objetivo principal de este proyecto es crear una <strong>tienda en línea simple</strong> donde los usuarios puedan 
              ver una lista de productos, filtrarlos por categoría y ver detalles de cada uno. Además, implementamos la 
              funcionalidad de contacto, lo que permite a los usuarios enviar consultas de manera eficiente.
            </p>
          </section>

          {/* Technologies Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-green-200 pb-2">
              🚀 Tecnologías Utilizadas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-bold text-blue-800 mb-2">Next.js</h3>
                <p className="text-sm text-gray-700">React Framework para renderizado del lado del servidor y del cliente</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-800 mb-2">React</h3>
                <p className="text-sm text-gray-700">Biblioteca para interfaces de usuario interactivas</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-bold text-purple-800 mb-2">Tailwind CSS</h3>
                <p className="text-sm text-gray-700">Framework de diseño para estilos rápidos y responsivos</p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-yellow-200 pb-2">
              ✨ Características Principales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Filtros de Productos</h3>
                  <p className="text-sm text-gray-600">Sistema de filtrado dinámico por categorías</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Renderizado Optimizado</h3>
                  <p className="text-sm text-gray-600">Implementación de SSR y CSR para mejor rendimiento</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Diseño Responsivo</h3>
                  <p className="text-sm text-gray-600">Adaptable a todos los dispositivos</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Sistema de Contacto</h3>
                  <p className="text-sm text-gray-600">Formulario funcional para consultas</p>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-red-200 pb-2">
              👥 Sobre el Equipo de Desarrollo
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Este proyecto fue desarrollado por un equipo de <strong>entusiastas del desarrollo web</strong> que decidieron 
              aprender y aplicar sus conocimientos en tecnologías modernas. Todos los integrantes colaboraron en distintas áreas, 
              desde el diseño hasta la implementación técnica, para ofrecer una experiencia de usuario fluida y atractiva.
            </p>
          </section>

          {/* Call to Action Section */}
          <footer className="text-center mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://github.com/NinaDIV/Hola-mundo-en-nextjs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900 transition duration-300 transform hover:scale-105"
                aria-label="Ver proyecto en GitHub"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                Ver en GitHub
              </a>
              <Link
                href="/tarea"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd" />
                </svg>
                Ver Productos
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Desarrollado con ❤️ por <strong>NinaDIV</strong> | Laboratorio de Next.js 2024
            </p>
          </footer>
        </article>
      </main>
    </>
  );
};

export default AboutPage;
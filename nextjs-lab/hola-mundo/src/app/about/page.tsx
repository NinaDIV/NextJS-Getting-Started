'use client';

import React from 'react';

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-semibold text-gray-900 mb-6 text-center">Acerca de este Proyecto</h1>

        <p className="text-lg text-gray-700 mb-4">
          Este proyecto es el resultado de un laboratorio realizado para aprender y practicar el desarrollo con <span className="font-semibold">Next.js</span>, <span className="font-semibold">React</span>, y <span className="font-semibold">Tailwind CSS</span>. En el laboratorio, exploramos el renderizado del lado del cliente (CSR) y del servidor (SSR) usando estas tecnologías modernas.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Objetivo del Proyecto</h2>
        <p className="text-lg text-gray-700 mb-4">
          El objetivo principal de este proyecto es crear una tienda en línea simple donde los usuarios puedan ver una lista de productos, filtrarlos por categoría y ver detalles de cada uno. Además, implementamos la funcionalidad de contacto, lo que permite a los usuarios enviar consultas.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Tecnologías Utilizadas</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
          <li><span className="font-semibold">Next.js</span> (React Framework para renderizado del lado del servidor y del cliente)</li>
          <li><span className="font-semibold">React</span> (Biblioteca para interfaces de usuario interactivas)</li>
          <li><span className="font-semibold">Tailwind CSS</span> (Framework de diseño para estilos rápidos y responsivos)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Sobre el Equipo</h2>
        <p className="text-lg text-gray-700">
          Este proyecto fue desarrollado por un equipo de entusiastas del desarrollo web que decidieron aprender y aplicar sus conocimientos en tecnologías modernas. Todos los integrantes colaboraron en distintas áreas, desde el diseño hasta la implementación técnica, para ofrecer una experiencia de usuario fluida y atractiva.
        </p>

        <div className="text-center mt-8">
          <a
            href="https://github.com/NinaDIV/Hola-mundo-en-nextjs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Ver en GitHub
          </a>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;

'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aquí normalmente enviarías los datos a una API o backend
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100">
      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Contacto</h1>

        {submitted ? (
          <div className="text-center py-8">
            <div className="text-green-600 text-5xl mb-4">✓</div>
            <h2 className="text-2xl font-medium text-gray-800 mb-2">¡Gracias por tu mensaje!</h2>
            <p className="text-gray-600 mb-6">Nos pondremos en contacto contigo pronto.</p>
            <Link href="/" passHref>
              <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300">
                Volver al inicio
              </button>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>

            <div className="flex justify-between items-center">
              <Link href="/" passHref>
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition duration-300"
                >
                  Cancelar
                </button>
              </Link>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Información adicional */}
      <div className="mt-12 text-center">
        <h2 className="text-xl font-medium text-gray-800 mb-4">Información adicional</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4">
            <div className="text-blue-600 text-2xl mb-2">📍</div>
            <h3 className="font-medium text-gray-800">Ubicación</h3>
            <p className="text-gray-600">Ciudad de Madrid, España</p>
          </div>
          <div className="p-4">
            <div className="text-blue-600 text-2xl mb-2">📧</div>
            <h3 className="font-medium text-gray-800">Email</h3>
            <p className="text-gray-600">info@ninadiv.com</p>
          </div>
          <div className="p-4">
            <div className="text-blue-600 text-2xl mb-2">💻</div>
            <h3 className="font-medium text-gray-800">GitHub</h3>
            <a
              href="https://github.com/NinaDIV/Hola-mundo-en-nextjs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              NinaDIV/Hola-mundo-en-nextjs
            </a>
          </div>
        </div>
      </div>

      {/* Pie de página */}
      <footer className="mt-8 text-sm text-gray-500">
        <p>Hecho con ❤️ por NinaDIV</p>
      </footer>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular delay de envío
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    // Aquí normalmente enviarías los datos a una API o backend
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      {/* SEO Optimized Meta Tags */}
      <Head>
        <title>Contacto - Laboratorio Next.js | Envía tu Consulta sobre React y Desarrollo Web</title>
        <meta
          name="description"
          content="¿Tienes dudas sobre nuestro proyecto Next.js? Contáctanos para consultas sobre React, desarrollo web, SSR, CSR y tecnologías modernas. Respuesta garantizada."
        />
        <meta
          name="keywords"
          content="contacto Next.js, consultas React, soporte desarrollo web, preguntas SSR CSR, ayuda Tailwind CSS, NinaDIV contacto"
        />
        <meta name="author" content="NinaDIV" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Contacto - Laboratorio Next.js" />
        <meta
          property="og:description"
          content="Ponte en contacto con nosotros para dudas sobre nuestro proyecto educativo de Next.js, React y desarrollo web moderno."
        />
        <meta property="og:image" content="/imagenes/nextjs-lab.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tu-dominio.com/contact" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contacto - Laboratorio Next.js" />
        <meta name="twitter:description" content="¿Tienes preguntas sobre nuestro proyecto? ¡Contáctanos!" />
        <meta name="twitter:image" content="/imagenes/nextjs-lab.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://tu-dominio.com/contact" />
        
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contacto - Laboratorio Next.js",
              "description": "Página de contacto para consultas sobre el proyecto educativo Next.js",
              "url": "https://tu-dominio.com/contact",
              "mainEntity": {
                "@type": "Organization",
                "name": "NinaDIV",
                "url": "https://github.com/NinaDIV/Hola-mundo-en-nextjs",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "Technical Support",
                  "email": "info@ninadiv.com",
                  "availableLanguage": "Spanish"
                }
              },
              "inLanguage": "es-ES"
            })
          }}
        />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100">
        {/* Breadcrumb Navigation */}
         

        <article className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg">
          {/* Header Section */}
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              💬 Ponte en Contacto con Nosotros
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              ¿Tienes preguntas sobre nuestro proyecto de laboratorio Next.js? 
              ¡Estamos aquí para ayudarte con todas tus dudas sobre desarrollo web!
            </p>
          </header>

          {submitted ? (
            <section className="text-center py-12" aria-live="polite">
              <div className="text-green-600 text-6xl mb-6 animate-bounce">✓</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">¡Mensaje Enviado Exitosamente!</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                Gracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo muy pronto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0L3 9.414V13a1 1 0 001 1h12a1 1 0 001-1V9.414l-5.293 5.293a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M17 3H3a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V4a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Volver al Inicio
                </Link>
                <Link href="/tarea" className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition duration-300 transform hover:scale-105">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd" />
                  </svg>
                  Ver Productos
                </Link>
              </div>
            </section>
          ) : (
            <section>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        Nombre Completo *
                      </span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                      placeholder="Tu nombre completo"
                      aria-describedby="name-help"
                    />
                    <p id="name-help" className="text-xs text-gray-500 mt-1">
                      Ingresa tu nombre y apellido
                    </p>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        Correo Electrónico *
                      </span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                      placeholder="tu@email.com"
                      aria-describedby="email-help"
                    />
                    <p id="email-help" className="text-xs text-gray-500 mt-1">
                      Usaremos este email para responderte
                    </p>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                      </svg>
                      Tu Mensaje *
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                    placeholder="¿En qué podemos ayudarte? Cuéntanos sobre tus dudas con Next.js, React, o cualquier aspecto de nuestro proyecto..."
                    aria-describedby="message-help"
                  />
                  <p id="message-help" className="text-xs text-gray-500 mt-1">
                    Mínimo 10 caracteres. Sé específico para poder ayudarte mejor.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-200">
                  <Link href="/" className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition duration-300">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Cancelar
                  </Link>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </div>
              </form>
            </section>
          )}
        </article>

        {/* Contact Information Section */}
        <section className="mt-12 w-full max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            📞 Información de Contacto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Ubicación</h3>
              <p className="text-gray-600">Madrid, España</p>
              <p className="text-sm text-gray-500 mt-2">Desarrollo remoto disponible</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
              <a href="mailto:info@ninadiv.com" className="text-green-600 hover:text-green-700 font-medium">
                info@ninadiv.com
              </a>
              <p className="text-sm text-gray-500 mt-2">Respuesta en 24-48 horas</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">GitHub</h3>
              <a
                href="https://github.com/NinaDIV/Hola-mundo-en-nextjs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 font-medium break-all"
              >
                NinaDIV/Hola-mundo-en-nextjs
              </a>
              <p className="text-sm text-gray-500 mt-2">Código fuente del proyecto</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-12 w-full max-w-3xl bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            ❓ Preguntas Frecuentes
          </h2>
          <div className="space-y-4">
            <details className="border-b border-gray-200 pb-4">
              <summary className="cursor-pointer font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                ¿Qué tecnologías incluye este proyecto?
              </summary>
              <p className="mt-2 text-gray-600 pl-4">
                Nuestro proyecto utiliza Next.js, React, Tailwind CSS, y explora tanto renderizado del lado del servidor (SSR) como del cliente (CSR).
              </p>
            </details>
            <details className="border-b border-gray-200 pb-4">
              <summary className="cursor-pointer font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                ¿Puedo usar este código en mis proyectos?
              </summary>
              <p className="mt-2 text-gray-600 pl-4">
                ¡Por supuesto! Este es un proyecto educativo y puedes usarlo como base para tus propios desarrollos. Revisa nuestro repositorio en GitHub.
              </p>
            </details>
            <details className="border-b border-gray-200 pb-4">
              <summary className="cursor-pointer font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                ¿Ofrecen soporte técnico?
              </summary>
              <p className="mt-2 text-gray-600 pl-4">
                Respondemos consultas sobre el proyecto a través de este formulario. Para soporte técnico detallado, considera contactarnos directamente.
              </p>
            </details>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center pb-8">
          <p className="text-sm text-gray-500 mb-2">
            Desarrollado con ❤️ por <strong>NinaDIV</strong>
          </p>
          <p className="text-xs text-gray-400">
            Laboratorio de Next.js 2024 - Proyecto Educativo
          </p>
        </footer>
      </main>
    </>
  );
}
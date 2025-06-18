// src/app/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 shadow-lg sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo y Nombre del Proyecto */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src="/imagenes/Profile.jpg" // Aquí agregarás tu imagen
                alt="Logo Mi Proyecto"
                width={40}
                height={40}
                className="rounded-full ring-2 ring-white/20 hover:ring-white/40 transition-all duration-300"
                priority // Optimización para carga rápida
                placeholder="blur" // Efecto de carga suave
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyejFhiueoaa6LC236HRBjah8VTRjNYbzMlzxG+pJLcNMILaGtYllbneYOtWqp8aV/bYA8/d3xYLVVV5EJN2g1Ug9hI3Vry6SElkpXJzRyGdOi9cU5jMDKUCNlk2YBAK8pJnU+DwBN7PpYlnJqSO0zU/wA3WS0b5zlxFW0XuV8Sb4Z2vVRDc5TZ2+iS9mCzv8A=="
              />
            </div>
            <Link 
              href="/" 
              className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent hover:from-yellow-200 hover:to-white transition-all duration-300 font-['Inter',_'Poppins',_sans-serif] tracking-tight"
            >
              Mi Proyecto
            </Link>
          </div>

          {/* Enlaces de Navegación */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/" 
              className="group relative px-4 py-2 text-white/90 hover:text-white font-medium transition-all duration-300 rounded-lg hover:bg-white/10 backdrop-blur-sm"
            >
              <span className="relative z-10 font-['Inter',_sans-serif]">Inicio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </Link>

            <Link 
              href="/tarea" 
              className="group relative px-4 py-2 text-white/90 hover:text-white font-medium transition-all duration-300 rounded-lg hover:bg-white/10 backdrop-blur-sm"
            >
              <span className="relative z-10 font-['Inter',_sans-serif]">ProductosCSR</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </Link>

            <Link 
              href="/products" 
              className="group relative px-4 py-2 text-white/90 hover:text-white font-medium transition-all duration-300 rounded-lg hover:bg-white/10 backdrop-blur-sm"
            >
              <span className="relative z-10 font-['Inter',_sans-serif]">ProductosAPI</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </Link>

            <Link 
              href="/Useres" 
              className="group relative px-4 py-2 text-white/90 hover:text-white font-medium transition-all duration-300 rounded-lg hover:bg-white/10 backdrop-blur-sm"
            >
              <span className="relative z-10 font-['Inter',_sans-serif]">UserCard</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </Link>

            <Link 
              href="/about" 
              className="group relative px-4 py-2 text-white/90 hover:text-white font-medium transition-all duration-300 rounded-lg hover:bg-white/10 backdrop-blur-sm"
            >
              <span className="relative z-10 font-['Inter',_sans-serif]">Acerca de</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </Link>

            <Link 
              href="/contacto" 
              className="group relative px-4 py-2 text-white/90 hover:text-white font-medium transition-all duration-300 rounded-lg hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40"
            >
              <span className="relative z-10 font-['Inter',_sans-serif] font-semibold">Contacto</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </Link>
          </div>

          {/* Menú móvil (hamburguesa) */}
          <div className="md:hidden">
            <button className="text-white/90 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
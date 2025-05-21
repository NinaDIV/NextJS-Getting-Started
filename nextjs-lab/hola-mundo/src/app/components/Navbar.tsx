// src/app/components/Navbar.tsx

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">Mi Proyecto</Link>
        </div>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">
            Inicio
          </Link>
          <Link href="/tarea" className="text-white hover:text-gray-300">
            Tarea
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300">
            Acerca de
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; // Exportación por defecto

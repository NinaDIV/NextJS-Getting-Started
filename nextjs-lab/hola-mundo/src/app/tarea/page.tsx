'use client';


import { useState, useEffect } from 'react';
import Link from 'next/link';


type Producto = {
  id: number;
  nombre: string;
  categoria: string;
};


const categorias = [
  { nombre: 'Tecnología', icono: '💻' },
  { nombre: 'Ropa', icono: '👕' },
  { nombre: 'Libros', icono: '📚' },
];


const obtenerIconoCategoria = (categoria: string) => {
  switch (categoria) {
    case 'Tecnología':
      return '💻';
    case 'Ropa':
      return '👕';
    case 'Libros':
      return '📚';
    default:
      return '📦';
  }
};


export default function TareaPage() {
  const [productos, setProductos] = useState<Producto[]>([
    { id: 1, nombre: 'Laptop Lenovo', categoria: 'Tecnología' },
    { id: 2, nombre: 'Camiseta Nike', categoria: 'Ropa' },
    { id: 3, nombre: 'Smartphone Samsung', categoria: 'Tecnología' },
    { id: 4, nombre: 'Pantalón Jeans', categoria: 'Ropa' },
    { id: 5, nombre: 'Libro de React', categoria: 'Libros' },
    { id: 6, nombre: 'Mouse Logitech', categoria: 'Tecnología' },
  ]);


  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>('Todas');
  const [productosFiltrados, setProductosFiltrados] = useState<Producto[]>(productos);


  // Formulario de nuevo producto
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevaCategoria, setNuevaCategoria] = useState<string>('Tecnología');


  useEffect(() => {
    if (categoriaSeleccionada === 'Todas') {
      setProductosFiltrados(productos);
    } else {
      setProductosFiltrados(
        productos.filter(p => p.categoria === categoriaSeleccionada)
      );
    }
  }, [categoriaSeleccionada, productos]);


  const agregarProducto = () => {
    if (nuevoNombre.trim() === '') return;


    const nuevoProducto: Producto = {
      id: productos.length + 1,
      nombre: nuevoNombre.trim(),
      categoria: nuevaCategoria,
    };


    setProductos([...productos, nuevoProducto]);
    setNuevoNombre('');
    setNuevaCategoria('Tecnología');
  };


  return (
    <main className="bg-gradient-to-br from-blue-50 to-white min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
          🛍️ Lista de Productos
        </h1>


        <div className="flex justify-center mb-6">
          <Link href="/">
            <button className="flex items-center gap-2 bg-gray-100 text-blue-700 border border-blue-300 px-4 py-2 rounded-full hover:bg-blue-100 transition">
              ⬅️ Volver al inicio
            </button>
          </Link>
        </div>


        {/* Formulario */}
        <div className="bg-white border border-gray-200 p-6 rounded-xl mb-8 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Agregar Producto</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Nombre del producto"
              value={nuevoNombre}
              onChange={e => setNuevoNombre(e.target.value)}
              className="flex-1 border border-gray-300 rounded px-4 py-2"
            />
            <select
              value={nuevaCategoria}
              onChange={e => setNuevaCategoria(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2"
            >
              {categorias.map(cat => (
                <option key={cat.nombre} value={cat.nombre}>
                  {cat.icono} {cat.nombre}
                </option>
              ))}
            </select>
            <button
              onClick={agregarProducto}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              ➕ Agregar
            </button>
          </div>
        </div>


        {/* Filtros */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {['Todas', ...categorias.map(c => c.nombre)].map(nombre => (
            <button
              key={nombre}
              onClick={() => setCategoriaSeleccionada(nombre)}
              aria-pressed={categoriaSeleccionada === nombre}
              className={`flex items-center gap-2 px-5 py-2 rounded-full transition-all duration-300 font-medium shadow
                ${
                  categoriaSeleccionada === nombre
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-100'
                }`}
            >
              {nombre !== 'Todas' && <span>{obtenerIconoCategoria(nombre)}</span>}
              {nombre}
            </button>
          ))}
        </div>


        {/* Lista de productos */}
        <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {productosFiltrados.map(producto => (
            <li
              key={producto.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-semibold text-xl text-gray-800 mb-1">
                    {producto.nombre}
                  </h2>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <span>{obtenerIconoCategoria(producto.categoria)}</span>
                    {producto.categoria}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}



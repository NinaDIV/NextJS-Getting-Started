'use client'; // Necesario para ejecutar en el cliente

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch de productos
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products');
        if (!res.ok) {
          throw new Error('Error al obtener los productos');
        }
        const data = await res.json();
        setProducts(data.products); // Asegúrate de acceder a 'products' dentro de la respuesta
      } catch (err) {
        setError('Hubo un problema al obtener los productos');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Se ejecuta solo una vez al cargar la página

  if (loading) return <div className="text-center py-4">Cargando...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-semibold text-center text-gray-900 mb-12">Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-56 object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">{product.title}</h2>
              <p className="text-gray-500 mt-2">${product.price}</p>
              <Link
                href={`/products/${product.id}`}
                className="inline-block text-blue-500 mt-4 font-medium hover:text-blue-700 hover:underline transition-colors"
              >
                Ver detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

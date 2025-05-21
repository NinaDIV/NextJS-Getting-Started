'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // Importar 'useParams' desde 'next/navigation'

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  images: string[];
  reviews: Array<{ rating: number; comment: string; reviewerName: string }>;
};

export default function ProductPage() {
  const { id } = useParams(); // Usar useParams para obtener el id desde la URL
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return; // Asegura que el ID esté disponible antes de hacer el fetch

    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) {
          throw new Error('Error al obtener el producto');
        }
        const data = await res.json();
        setProduct(data); // Establece el producto obtenido
      } catch (err) {
        setError('Hubo un error al obtener los detalles del producto');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]); // Se ejecuta cuando el ID cambie

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
    {product ? (
      <>
        <h1 className="text-3xl font-semibold text-gray-900">{product.title}</h1>
        <div className="mt-6 flex justify-center">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full max-w-md object-cover rounded-lg shadow-lg"
          />
        </div>
        <p className="text-lg text-gray-700 mt-4">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-xl font-bold text-gray-800">${product.price}</p>
          <p className="text-sm text-gray-600">Rating: {product.rating} ⭐</p>
        </div>
        <p className="text-sm text-gray-600 mt-2">Stock: {product.stock} items available</p>
  
        <h2 className="mt-8 text-2xl font-semibold text-gray-800">Reseñas</h2>
        {product.reviews.length === 0 ? (
          <p className="mt-4 text-gray-500">No hay reseñas para este producto.</p>
        ) : (
          <div className="mt-4 space-y-6">
            {product.reviews.map((review, index) => (
              <div key={index} className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
                <p className="font-semibold text-gray-800">{review.reviewerName}</p>
                <p className="text-gray-700 mt-2">{review.comment}</p>
                <p className="text-sm text-gray-600 mt-2">Rating: {review.rating} ⭐</p>
              </div>
            ))}
          </div>
        )}
      </>
    ) : (
      <div className="text-center text-gray-500">Cargando detalles del producto...</div>
    )}
  </div>
  
  );
}

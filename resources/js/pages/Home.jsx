import React from 'react';
import Layout from '../layouts/Layout';
import { Link } from '@inertiajs/react';
import { useCart } from '../context/CartContext';

export default function Home({ products }) {
  const { addToCart } = useCart();

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center text-[#613420] dark:text-[#D2C7BF] mb-10">
          Medaya Créations
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-white dark:bg-[#1a1a1a] rounded-lg overflow-hidden shadow hover:shadow-lg transition group"
            >
              <Link href={`/produit/${product.id}`} className="block p-4 flex flex-col items-center text-center">
                <img
                  src={`/${product.image1}`}
                  alt={product.name}
                  className="w-40 h-40 object-cover mb-4 transform group-hover:scale-105 transition"
                />
                <h2 className="text-sm font-semibold text-[#613420] dark:text-[#D2C7BF]">{product.name}</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">{product.description}</p>
                <p className="font-bold text-[#9C7056] dark:text-[#D2C7BF] mt-2">{product.price} €</p>
              </Link>

              <button
                onClick={() => addToCart(product)}
                className="w-full py-2 mt-2 bg-[#9C7056] text-white dark:bg-[#D2C7BF] dark:text-[#1a1a1a] hover:bg-[#7c5a43] dark:hover:bg-[#e0d9d4] transition-colors"
              >
                Ajouter au panier
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

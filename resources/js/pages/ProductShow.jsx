import React from 'react';
import Layout from '../layouts/Layout';
import { useCart } from '../context/CartContext'; // Import du contexte

export default function ProductShow({ product }) {
  const { addToCart } = useCart(); // Récupère la fonction d'ajout au panier

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="overflow-hidden rounded-lg shadow">
          <img
            src={`/${product.image1}`}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-[#9C7056] dark:text-[#D2C7BF] text-lg mb-4">{product.description}</p>
          <p className="text-xl font-bold mb-6">{product.price} €</p>

          <div className="mb-6">
            <h2 className="text-md font-semibold mb-2">Autres images</h2>
            <div className="flex space-x-4">
              {['image1', 'image2', 'image3'].map((img, index) => (
                <img
                  key={index}
                  src={`/${product[img]}`}
                  alt={`${product.name} ${index + 1}`}
                  className="w-20 h-20 object-cover rounded hover:scale-105 transition-transform"
                />
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(product)} // Ajout au panier ici
            className="w-full py-3 bg-[#9C7056] text-white dark:bg-[#D2C7BF] dark:text-[#1a1a1a] rounded hover:bg-[#7c5a43] dark:hover:bg-[#e0d9d4] transition-colors"
          >
            Ajouter au panier
          </button>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Livraison estimée sous 5 jours
          </p>
        </div>
      </div>
    </Layout>
  );
}

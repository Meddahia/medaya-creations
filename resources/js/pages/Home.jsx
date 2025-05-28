import React from 'react';
import Layout from '../layouts/Layout';
import { Link } from '@inertiajs/react';

export default function Home({ products }) {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center text-[#613420] dark:text-[#D2C7BF] mb-10">
          Medaya Créations
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-[#F5F5F5] dark:bg-[#1a1a1a] text-[#613420] dark:text-[#D2C7BF] border border-[#9C7056] dark:border-[#D2C7BF] rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="overflow-hidden">
                <img
                  src={`/${product.image1}`}
                  alt={product.name}
                  className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-sm">{product.description}</p>
                <p className="text-base font-bold mt-2">{product.price} €</p>
                <Link
                  href="#"
                  className="inline-block mt-4 px-4 py-2 bg-[#9C7056] text-white dark:bg-[#D2C7BF] dark:text-[#1a1a1a] rounded hover:bg-[#7c5a43] dark:hover:bg-[#e0d9d4] transition-colors"
                >
                  Voir le produit
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

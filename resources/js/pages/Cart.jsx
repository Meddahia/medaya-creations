import React, { useContext } from 'react';
import Layout from '../layouts/Layout';
import { CartContext } from '../context/CartContext';
import { Trash2 } from 'lucide-react'; // Import de l'icône

export default function Cart() {
  const { cartItems, addToCart, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Détecter le type d'appareil
  const getPaymentButtonLabel = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return 'Payer avec Apple Pay';
    } else if (/android/i.test(userAgent)) {
      return 'Payer avec Google Pay';
    } else {
      return 'Payer maintenant';
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6 relative">
        {/* Bouton Vider le panier */}
        {cartItems.length > 0 && (
          <button
            onClick={clearCart}
            className="absolute top-6 right-6 text-[#9C7056] dark:text-[#D2C7BF] hover:text-red-500 transition-colors"
            title="Vider le panier"
          >
            <Trash2 size={24} />
          </button>
        )}

        <h1 className="text-3xl font-bold text-[#613420] dark:text-[#D2C7BF] mb-6">Mon Panier</h1>

        {cartItems.length === 0 ? (
          <p className="text-[#9C7056] dark:text-[#D2C7BF]">Votre panier est vide.</p>
        ) : (
          <>
            <ul className="space-y-4">
              {cartItems.map((item, index) => (
                <li key={index} className="flex justify-between items-center border-b border-[#9C7056] dark:border-[#D2C7BF] pb-2">
                  <div className="flex items-center space-x-4">
                    <img src={`/${item.image1}`} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <span>{item.name}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-[#9C7056] dark:border-[#D2C7BF] rounded overflow-hidden">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="px-2 py-1 text-[#9C7056] dark:text-[#D2C7BF] hover:bg-[#f0e5dc] dark:hover:bg-[#444] transition-colors"
                      >
                        -
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="px-2 py-1 text-[#9C7056] dark:text-[#D2C7BF] hover:bg-[#f0e5dc] dark:hover:bg-[#444] transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-semibold">{(item.price * item.quantity).toFixed(2)} €</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex justify-between items-center">
              <p className="text-lg font-bold text-[#613420] dark:text-[#D2C7BF]">Total: {totalPrice.toFixed(2)} €</p>

              <button
                onClick={() => alert('Fonctionnalité de paiement à implémenter')}
                className="px-4 py-2 bg-black text-white rounded hover:opacity-90 transition-colors"
              >
                {getPaymentButtonLabel()}
              </button>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}

import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Moon, Sun, ChevronDown, ShoppingCart, Menu, X } from 'lucide-react';

export default function Layout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5] dark:bg-[#1a1a1a] text-[#613420] dark:text-[#D2C7BF] transition-colors duration-500">
      {/* Header */}
      <header className="relative z-20 border-b border-[#9C7056] dark:border-[#D2C7BF]">
        <div className="flex justify-between items-center p-4 md:p-6">
          <h1 className="text-3xl font-serif font-bold">
            <Link href="/">MEDDAYA</Link>
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 relative">
            <Link href="/" className="hover:text-[#9C7056] dark:hover:text-[#D2C7BF] transition-colors">Accueil</Link>

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-1 hover:text-[#9C7056] dark:hover:text-[#D2C7BF] transition-colors"
              >
                <span>Bijoux</span>
                <ChevronDown size={16} />
              </button>
            </div>

            <Link href="/contact" className="hover:text-[#9C7056] dark:hover:text-[#D2C7BF] transition-colors">Contact</Link>

            <Link href="/panier" className="relative hover:text-[#9C7056] dark:hover:text-[#D2C7BF]">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#9C7056] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              onClick={toggleDarkMode}
              className="p-2 border border-[#9C7056] text-[#9C7056] dark:border-[#D2C7BF] dark:text-[#D2C7BF] rounded-full hover:bg-[#9C7056] dark:hover:bg-[#D2C7BF] hover:text-white dark:hover:text-[#1a1a1a] transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={toggleMobileMenu} className="md:hidden">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-[#1a1a1a] border-t border-[#9C7056] dark:border-[#D2C7BF] p-4 space-y-4">
            <Link href="/" className="block hover:text-[#9C7056] dark:hover:text-[#D2C7BF]" onClick={toggleMobileMenu}>Accueil</Link>
            <button onClick={toggleDropdown} className="flex items-center space-x-1 hover:text-[#9C7056] dark:hover:text-[#D2C7BF]">
              <span>Bijoux</span>
              <ChevronDown size={16} />
            </button>
            {isDropdownOpen && (
              <div className="pl-4 space-y-2">
                <Link href="/categorie/bagues" className="block hover:bg-[#f0e5dc] dark:hover:bg-[#444] rounded p-1">Bagues</Link>
                <Link href="/categorie/bracelets" className="block hover:bg-[#f0e5dc] dark:hover:bg-[#444] rounded p-1">Bracelets</Link>
                <Link href="/categorie/colliers" className="block hover:bg-[#f0e5dc] dark:hover:bg-[#444] rounded p-1">Colliers</Link>
                <Link href="/categorie/boucles" className="block hover:bg-[#f0e5dc] dark:hover:bg-[#444] rounded p-1">Boucles d'oreilles</Link>
              </div>
            )}
            <Link href="/contact" className="block hover:text-[#9C7056] dark:hover:text-[#D2C7BF]" onClick={toggleMobileMenu}>Contact</Link>
            <Link href="/panier" className="block hover:text-[#9C7056] dark:hover:text-[#D2C7BF]" onClick={toggleMobileMenu}>Panier</Link>
            <button onClick={toggleDarkMode} className="w-full p-2 border border-[#9C7056] text-[#9C7056] dark:border-[#D2C7BF] dark:text-[#D2C7BF] rounded hover:bg-[#9C7056] dark:hover:bg-[#D2C7BF] hover:text-white dark:hover:text-[#1a1a1a] transition-colors">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        )}

        {/* Dropdown Desktop */}
        {isDropdownOpen && (
          <div className="hidden md:block absolute top-full left-0 w-full bg-white dark:bg-[#333] shadow-md border-t border-[#9C7056] dark:border-[#D2C7BF] z-10">
            <div className="flex justify-center">
              <div className="flex space-x-8 py-4">
                <Link href="/categorie/bagues" className="px-4 py-2 hover:bg-[#f0e5dc] dark:hover:bg-[#444] rounded">Bagues</Link>
                <Link href="/categorie/bracelets" className="px-4 py-2 hover:bg-[#f0e5dc] dark:hover:bg-[#444] rounded">Bracelets</Link>
                <Link href="/categorie/colliers" className="px-4 py-2 hover:bg-[#f0e5dc] dark:hover:bg-[#444] rounded">Colliers</Link>
                <Link href="/categorie/boucles" className="px-4 py-2 hover:bg-[#f0e5dc] dark:hover:bg-[#444] rounded">Boucles d'oreilles</Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Contenu dynamique */}
      <main className="flex-1 p-4 md:p-6">{children}</main>

      {/* Footer */}
      <footer className="p-6 text-center text-sm border-t border-[#9C7056] dark:border-[#D2C7BF]">
        &copy; {new Date().getFullYear()} Meddaya Créations. Tous droits réservés.
      </footer>
    </div>
  );
}

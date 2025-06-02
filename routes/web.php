<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use Inertia\Inertia;

// Page d'accueil
Route::get('/', [ProductController::class, 'index'])->name('home');

// Détail d'un produit
Route::get('/produit/{id}', [ProductController::class, 'show'])->name('product.show');

// Page panier (en utilisant Inertia directement)
Route::get('/panier', function () {
    return Inertia::render('Cart'); // Cart.jsx
})->name('cart.show');

// Tableau de bord sécurisé
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

// Autres fichiers
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

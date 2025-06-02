<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();

        return Inertia::render('Home', [
            'products' => $products,
        ]);
    }

    public function show($id)
    {
        $product = Product::findOrFail($id);

        return Inertia::render('ProductShow', [
            'product' => $product,
        ]);
    }
}

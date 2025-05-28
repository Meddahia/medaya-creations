<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Nom du produit
            $table->text('description')->nullable(); // Description courte
            $table->decimal('price', 8, 2); // Prix
            $table->string('category'); // Catégorie (ex: bagues)
            $table->string('sub_category')->nullable(); // Sous-catégorie (ex: bague or)

            // Trois colonnes pour les images
            $table->string('image1')->nullable();
            $table->string('image2')->nullable();
            $table->string('image3')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};

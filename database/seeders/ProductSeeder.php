<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $products = [
            [
                'name' => 'Bague Élégance',
                'description' => 'Une bague dorée élégante et raffinée.',
                'price' => 59.99,
                'category' => 'bagues',
                'sub_category' => 'bague or',
                'image1' => 'uploads/bagues/or/IMG_2213.jpg',
                'image2' => 'uploads/bagues/or/IMG_2213.jpg',
                'image3' => 'uploads/bagues/or/IMG_2213.jpg',
            ],
            [
                'name' => 'Bague Chic',
                'description' => 'Un style moderne et minimaliste.',
                'price' => 48.50,
                'category' => 'bagues',
                'sub_category' => 'bague or',
                'image1' => 'uploads/bagues/or/IMG_2214.jpg',
                'image2' => 'uploads/bagues/or/IMG_2214.jpg',
                'image3' => 'uploads/bagues/or/IMG_2214.jpg',
            ],
            [
                'name' => 'Bague Luxe',
                'description' => 'Design sophistiqué et éclat doré.',
                'price' => 75.00,
                'category' => 'bagues',
                'sub_category' => 'bague or',
                'image1' => 'uploads/bagues/or/IMG_2215.jpg',
                'image2' => 'uploads/bagues/or/IMG_2215.jpg',
                'image3' => 'uploads/bagues/or/IMG_2215.jpg',
            ],
            [
                'name' => 'Bague Soleil',
                'description' => 'Éclat doré inspiré du soleil.',
                'price' => 60.00,
                'category' => 'bagues',
                'sub_category' => 'bague or',
                'image1' => 'uploads/bagues/or/IMG_2750.jpg',
                'image2' => 'uploads/bagues/or/IMG_2750.jpg',
                'image3' => 'uploads/bagues/or/IMG_2750.jpg',
            ],
            [
                'name' => 'Bague Douceur',
                'description' => 'Légèreté et élégance au quotidien.',
                'price' => 42.00,
                'category' => 'bagues',
                'sub_category' => 'bague or',
                'image1' => 'uploads/bagues/or/IMG_2751.jpg',
                'image2' => 'uploads/bagues/or/IMG_2751.jpg',
                'image3' => 'uploads/bagues/or/IMG_2751.jpg',
            ],
            [
                'name' => 'Bague Étoile',
                'description' => 'Un bijou qui brille de mille feux.',
                'price' => 65.00,
                'category' => 'bagues',
                'sub_category' => 'bague or',
                'image1' => 'uploads/bagues/or/IMG_2752.jpg',
                'image2' => 'uploads/bagues/or/IMG_2752.jpg',
                'image3' => 'uploads/bagues/or/IMG_2752.jpg',
            ],
            [
                'name' => 'Bague Royale',
                'description' => 'Charme intemporel et finesse.',
                'price' => 70.00,
                'category' => 'bagues',
                'sub_category' => 'bague or',
                'image1' => 'uploads/bagues/or/IMG_2753.jpg',
                'image2' => 'uploads/bagues/or/IMG_2753.jpg',
                'image3' => 'uploads/bagues/or/IMG_2753.jpg',
            ],
            [
                'name' => 'Bague Classique',
                'description' => 'Simplicité et élégance discrète.',
                'price' => 50.00,
                'category' => 'bagues',
                'sub_category' => 'bague or',
                'image1' => 'uploads/bagues/or/IMG_2754.jpg',
                'image2' => 'uploads/bagues/or/IMG_2754.jpg',
                'image3' => 'uploads/bagues/or/IMG_2754.jpg',
            ],
            [
                'name' => 'Bague Prestige',
                'description' => 'Un bijou unique pour des moments exceptionnels.',
                'price' => 95.00,
                'category' => 'bagues',
                'sub_category' => 'bague or',
                'image1' => 'uploads/bagues/or/IMG_2755.jpg',
                'image2' => 'uploads/bagues/or/IMG_2755.jpg',
                'image3' => 'uploads/bagues/or/IMG_2755.jpg',
            ],
            [
                'name' => 'Bague Mystique',
                'description' => 'Une aura de mystère et de charme.',
                'price' => 85.00,
                'category' => 'bagues',
                'sub_category' => 'bague or',
                'image1' => 'uploads/bagues/or/IMG_2756.jpg',
                'image2' => 'uploads/bagues/or/IMG_2756.jpg',
                'image3' => 'uploads/bagues/or/IMG_2756.jpg',
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}

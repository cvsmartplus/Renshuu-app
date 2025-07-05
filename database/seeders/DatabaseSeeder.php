<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\ArticlesCategory;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $categories = ArticlesCategory::factory(10)->create();

        // Buat 20 artikel
        Article::factory(20)->create()->each(function ($article) use ($categories) {
            // Ambil 1-3 kategori secara acak
            $randomCategories = $categories->random(rand(1, 3))->pluck('id');
            $article->categories()->attach($randomCategories);
        });
    }
}

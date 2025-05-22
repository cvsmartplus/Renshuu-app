<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    public function run(): void
    {
        \App\Models\User::factory()->count(5)->create();

        \App\Models\Category::factory()->count(5)->create();
        \App\Models\Tag::factory()->count(10)->create();

        \App\Models\Article::factory()->count(20)->create()->each(function ($article) {
            $tags = \App\Models\Tag::inRandomOrder()->take(rand(2, 4))->pluck('id');
            $article->tags()->attach($tags);
        });
    }

}

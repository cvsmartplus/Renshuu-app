<?php

namespace Database\Factories;

use App\Models\Article;
use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ArticleFactory extends Factory
{
    protected $model = Article::class;

    public function definition(): array
    {
        $title = $this->faker->sentence(6);
        return [
            'title' => $title,
            'slug' => Str::slug($title),
            'content' => $this->faker->paragraphs(5, true),
            'excerpt' => $this->faker->sentence(20),
            'media_path' => "https://placehold.co/600x400/062A78/white?text=Hai+dunia",
            'status' => $this->faker->randomElement(['draft', 'published']),
            'published_at' => now(),
            'reading_time' => $this->faker->numberBetween(3, 10) . ' min',
            'seo_title' => $title,
            'meta_description' => $this->faker->sentence(30),
            'category_id' => Category::inRandomOrder()->first()?->id,
            'author_id' => User::inRandomOrder()->first()?->id,
        ];
    }
}

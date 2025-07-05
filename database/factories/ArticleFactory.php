<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = $this->faker->sentence(3);

        return [
            //
            'author' => $this->faker->name(),
            'title' => $title,
            'slug' => Str::slug($title),
            'description' => $this->faker->sentence(10),
            'image' => 'https://placehold.co/600x400/darkblue/white?text=Hai+dunia',
            'content' => $this->faker->paragraphs(5, true),
        ];
    }
}

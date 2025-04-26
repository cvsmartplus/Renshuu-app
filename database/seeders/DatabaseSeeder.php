<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            TrainerSeeder::class,
            CourseSeeder::class,
            ArticleSeeder::class,
            CompanySeeder::class,
            SkillSeeder::class,
            JobPositionSeeder::class,
            JobPositionSkillSeeder::class,
        ]);
    }
}

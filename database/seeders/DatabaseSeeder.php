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
            ArticleSeeder::class,
            CompanySeeder::class,
            SkillSeeder::class,
            JobPositionSeeder::class,
            JobPositionSkillSeeder::class,
            UserProfileSeeder::class,
            UserSkillSeeder::class,
            UserSkillUserSeeder::class,
            UserEducationSeeder::class,
            UserExperienceSeeder::class,
            UserDocumentSeeder::class,
        ]);
    }
}

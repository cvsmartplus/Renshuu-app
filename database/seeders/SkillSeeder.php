<?php

namespace Database\Seeders;

use App\Models\Skill;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $skills = ['PHP', 'Laravel', 'JavaScript', 'Vue.js', 'React', 'MySQL'];

        foreach ($skills as $skill) {
            Skill::create(['name' => $skill]);
        }
    }
}

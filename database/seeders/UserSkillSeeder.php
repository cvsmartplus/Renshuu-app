<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\UserSkill;

class UserSkillSeeder extends Seeder
{
    public function run()
    {
        $skills = ['Laravel', 'React', 'TailwindCSS'];

        foreach ($skills as $skill) {
            UserSkill::firstOrCreate(['name' => $skill]);
        }
    }
}

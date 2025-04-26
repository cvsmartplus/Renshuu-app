<?php

namespace Database\Seeders;

use App\Models\JobPosition;
use App\Models\Skill;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JobPositionSkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $job = JobPosition::first();
        $skills = Skill::whereIn('name', ['PHP', 'Laravel', 'MySQL'])->pluck('id');

        $job->skills()->sync($skills);
    }
}

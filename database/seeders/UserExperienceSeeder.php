<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\UserExperience;

class UserExperienceSeeder extends Seeder
{
    public function run()
    {
        UserExperience::create([
            'user_id' => 1,
            'title' => 'Backend Developer Intern',
            'company' => 'PT Digital Solusi',
            'location' => 'Remote',
            'start_date' => '2024-01-01',
            'end_date' => '2024-06-30',
            'description' => 'Membangun REST API menggunakan Laravel dan MySQL.',
            'job_type' => 'internship',
        ]);
    }
}

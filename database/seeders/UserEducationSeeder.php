<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\UserEducation;

class UserEducationSeeder extends Seeder
{
    public function run()
    {
        UserEducation::create([
            'user_id' => 1,
            'degree' => 'SMK RPL',
            'institution' => 'SMK Negeri 1 Karawang',
            'start_date' => '2021-07-01',
            'end_date' => '2024-06-01',
            'description' => 'Belajar pemrograman web dan mobile, serta mengikuti kompetisi software development.',
        ]);
    }
}

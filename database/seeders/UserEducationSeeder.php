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
        'degree' => 'SMK',
        'field_of_study' => 'Rekayasa Perangkat Lunak',
        'institution' => 'SMK Negeri 1 Karawang',
        'title' => 'Siswa',
        'start_date' => '2023-07-01',
        'end_date' => '2026-06-01',
        'description' => 'Belajar pemrograman web dan mobile, serta mengikuti kompetisi software development.',
    ]);
    }
}

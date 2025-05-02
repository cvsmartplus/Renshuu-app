<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\UserProfile;

class UserProfileSeeder extends Seeder
{
    public function run()
    {
        UserProfile::create([
            'user_id' => 1,
            'tagline' => 'Fullstack Web Developer | IT Enthusiasm | Student at SMKN 1 Karawang',
            'bio' => "Hello everyone! 👋
                    I am Habibi Ahmad Aziz, a student of SMKN 1 Karawang who is very interested in the world of programming. I have a strong interest in becoming a Fullstack Web Developer.
                    My journey in the IT world began two years ago, and since then, I have continued to expand my knowledge and skills by going through live projects, seeking and obtaining certifications through various bootcamp programs or other programs. I specialize in various tech stacks such as JavaScript, Node.js, React, PostgreSQL, PHP, Laravel, mysql and others and have experience building web applications from frontend to backend.
                    I always want to learn new technologies and solve real-world problems through the code I create. My goal is to develop innovative and impactful digital solutions that can benefit others.
                    Let's connect and collaborate!",
            'phone' => '081234567890',
            'website' => 'https://example.com',
            'social_links' => json_encode([
                'linkedin' => 'https://www.linkedin.com/in/habibi-ahmad-aziz-0b3618283/',
                'github' => 'https://github.com/habibiahmada',
            ]),
            'gender' => 'male',
            'marital_status' => 'single',
            'birth_date' => '2005-05-01',
            'age' => 19,
            'province' => 'Jawa Barat',
            'city' => 'Karawang',
            'district' => 'Karawang Barat',
            'village' => 'Puseurjaya',
            'address_detail' => 'Jl. Raya Industri No.10, Karawang Barat',
        ]);
    }
}

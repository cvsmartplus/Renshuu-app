<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Trainer;

class TrainerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Trainer::insert([
            [
                'name' => 'John Doe',
                'description' => 'Ahli teknologi rumah pintar dengan pengalaman lebih dari 10 tahun.',
                'image' => 'https://picsum.photos/200/200?random=1',
                'email' => 'johndoe@example.com',
                'phone' => '081234567890',
                'social_links' => json_encode([
                    'linkedin' => 'https://linkedin.com/in/johndoe',
                    'twitter' => 'https://twitter.com/johndoe',
                ]),
            ],
            [
                'name' => 'Jane Smith',
                'description' => 'Pakar pertanian cerdas dengan fokus pada efisiensi dan produktivitas.',
                'image' => 'https://picsum.photos/200/200?random=2',
                'email' => 'janesmith@example.com',
                'phone' => '081234567891',
                'social_links' => json_encode([
                    'linkedin' => 'https://linkedin.com/in/janesmith',
                    'twitter' => 'https://twitter.com/janesmith',
                ]),
            ],
            [
                'name' => 'Michael Brown',
                'description' => 'Konsultan kota pintar dengan pengalaman dalam solusi teknologi urban.',
                'image' => 'https://picsum.photos/200/200?random=3',
                'email' => 'michaelbrown@example.com',
                'phone' => '081234567892',
                'social_links' => json_encode([
                    'linkedin' => 'https://linkedin.com/in/michaelbrown',
                    'twitter' => 'https://twitter.com/michaelbrown',
                ]),
            ],
            [
                'name' => 'Elom Musk',
                'description' => 'Inovator teknologi pabrik pintar dengan visi masa depan industri.',
                'image' => 'https://picsum.photos/200/200?random=4',
                'email' => 'elommusk@example.com',
                'phone' => '081234567893',
                'social_links' => json_encode([
                    'linkedin' => 'https://linkedin.com/in/elommusk',
                    'twitter' => 'https://twitter.com/elommusk',
                ]),
            ],
        ]);
    }
}

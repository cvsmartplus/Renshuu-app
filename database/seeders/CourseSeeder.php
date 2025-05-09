<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Course;
use App\Models\Trainer;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $trainers = [
            'John Doe' => Trainer::where('name', 'John Doe')->first(),
            'Jane Smith' => Trainer::where('name', 'Jane Smith')->first(),
            'Michael Brown' => Trainer::where('name', 'Michael Brown')->first(),
            'Elom Musk' => Trainer::where('name', 'Elom Musk')->first(),
        ];

        // Seed data courses
        Course::insert([
            [
                'title' => 'Smart Home',
                'slug' => 'smart-home',
                'description' => 'Membangun Rumah Cerdas: Teknologi dan Integrasi Sistem',
                'price' => 100000,
                'discount' => 19,
                'trainer_id' => $trainers['John Doe']->id ?? null,
                'group_chat_link' => 'https://example.com/group1',
                'image' => 'https://picsum.photos/350/250?random=1',
                'duration' => 10,
                'level' => 'Beginner',
                'status' => 'Published',
                'student' => 100,
                'created_at' => now()->subDay(1),
            ],
            [
                'title' => 'Smart Farming',
                'slug' => 'smart-farming',
                'description' => 'Pertanian Cerdas: Inovasi Teknologi untuk Efisiensi dan Produktivitas',
                'price' => 50000,
                'discount' => 10,
                'trainer_id' => $trainers['Jane Smith']->id ?? null,
                'group_chat_link' => 'https://example.com/group2',
                'image' => 'https://picsum.photos/350/250?random=2',
                'duration' => 15,
                'level' => 'Intermediate',
                'status' => 'Published',
                'student' => 200,
                'created_at' => now()->subDays(1),
            ],
            [
                'title' => 'Smart City',
                'slug' => 'smart-city',
                'description' => 'Kota Pintar: Solusi Teknologi untuk Perkotaan yang Lebih Baik',
                'price' => 200000,
                'discount' => 15,
                'trainer_id' => $trainers['Michael Brown']->id ?? null,
                'group_chat_link' => 'https://example.com/group3',
                'image' => 'https://picsum.photos/350/250?random=3',
                'duration' => 20,
                'level' => 'Advanced',
                'status' => 'Published',
                'student' => 150,
                'created_at' => now()->subDays(2),
            ],
            [
                'title' => 'Smart Factory',
                'slug' => 'smart-factory',
                'description' => 'Transformasi Digital di Pabrik: Implementasi Smart Factory',
                'price' => 150000,
                'discount' => 20,
                'trainer_id' => $trainers['Elom Musk']->id ?? null,
                'group_chat_link' => 'https://example.com/group4',
                'image' => 'https://picsum.photos/350/250?random=4',
                'duration' => 25,
                'level' => 'Advanced',
                'status' => 'Published',
                'student' => 600,
                'created_at' => now()->subDays(3),
            ],
        ]);
    }
}

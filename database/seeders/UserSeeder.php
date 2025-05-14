<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'Habibi Ahmad Aziz',
                'email' => 'habibiahmadaziz@gmail.com',
                'password' => Hash::make("jojomakan"),
                'otp' => rand(100000, 999999),
                'role' => 'user',
                'created_at' => now(),
            ],
            [
                'name' => 'Smartplus Indonesia',
                'email' => 'smartplusindonesia@gmail.com',
                'password' => Hash::make("jojomakan"),
                'otp' => rand(100000, 999999),
                'role' => 'company',
                'created_at' => now(),
            ],
            [
                'name' => 'Ahmad Aziz',
                'email' => 'habibi.ahmad1735@smk.belajar.id',
                'password' => Hash::make("jojomakan"),
                'otp' => rand(100000, 999999),
                'role' => 'admin',
                'created_at' => now(),
            ]
        ];

        for ($i = 1; $i <= 17; $i++) {
            $users[] = [
                'name' => 'User ' . $i,
                'email' => 'user' . $i . '@example.com',
                'password' => Hash::make('password'),
                'otp' => rand(100000, 999999),
                'role' => 'user',
                'created_at' => now(),
            ];
        }

        User::insert($users);
    }
}
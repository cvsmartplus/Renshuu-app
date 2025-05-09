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
        //
        $otp = rand(100000, 999999);
        User::insert([[
                'name' => 'Habibi Ahmad Aziz',
                'email' => 'habibiahmadaziz@gmail.com',
                'password' => Hash::make("jojomakan"),
                'otp' => $otp,
                'role' => 'user',
                'created_at' => now(),
            ],[
                'name' => 'Smartplus Indonesia',
                'email' => 'smartplusindonesia@gmail.com',
                'password' => Hash::make("jojomakan"),
                'otp' => $otp,
                'role' => 'company',
                'created_at' => now(),
            ],[
                'name' => 'Ahmad Aziz',
                'email' => 'habibi.ahmad1735@smk.belajar.id',
                'password' => Hash::make("jojomakan"),
                'otp' => $otp,
                'role' => 'admin',
                'created_at' => now(),
            ]]);
    }
}

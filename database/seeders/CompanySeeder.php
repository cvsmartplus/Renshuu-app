<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\User;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $user = User::where('email', 'smartplusindonesia@gmail.com')->first();

        Company::create([
            'user_id' => $user->id,
            'industry' => 'Technology',
            'profile' => 'company-profile.jpg',
            'banner' => 'company-banner.jpg',
            'specialisation' => 'Web Development',
            'website' => 'https://company1.com',
            'phone' => '081234567890',
            'address' => json_encode([
                'street' => 'Jl. Mawar',
                'city' => 'Jakarta',
                'province' => 'DKI Jakarta',
                'postal_code' => '12345'
            ]),
            'description' => 'Kami adalah perusahaan teknologi yang berfokus pada web development.',
            'employment_count' => '50-100',
        ]);
    }
}

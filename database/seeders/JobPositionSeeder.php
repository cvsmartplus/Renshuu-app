<?php

namespace Database\Seeders;

use App\Models\JobPosition;
use App\Models\Company;
use App\Models\User;
use Illuminate\Database\Seeder;

class JobPositionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $company = Company::first();

        JobPosition::create([
            'title' => 'Backend Developer',
            'description' => 'Membangun dan merawat API backend menggunakan Laravel.',
            'job_model' => 'Remote',
            'location' => 'Jakarta',
            'company_id' => $company->id,
            'posted_at' => now(),
            'slug' => 'backend-developer',
            'salary_min' => 10000000,
            'salary_max' => 20000000,
            'employment_type' => 'Full-time',
            'deadline_at' => now()->addDays(30),
            'category' => 'IT',
            'apply_url' => 'https://example.com/apply',
        ]);
    }
}

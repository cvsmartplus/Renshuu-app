<?php

namespace Database\Seeders;

use App\Models\JobPosition;
use App\Models\Company;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class JobPositionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $company = Company::first();

        $jobTitles = [
            'Backend Developer', 'Frontend Developer', 'Full Stack Developer',
            'DevOps Engineer', 'Mobile Developer', 'UI/UX Designer',
            'Data Engineer', 'Machine Learning Engineer', 'Cloud Architect',
            'QA Engineer', 'System Administrator', 'Database Administrator',
            'Network Engineer', 'Security Engineer', 'Technical Support',
            'Product Manager', 'Project Manager', 'Scrum Master',
            'Business Analyst', 'Data Scientist', 'IT Support Specialist',
            'Software Architect', 'ERP Consultant', 'AI Engineer',
            'Blockchain Developer', 'Game Developer', 'Embedded Systems Engineer',
            'SEO Specialist', 'Digital Marketing Specialist', 'Content Writer',
            'Graphic Designer', '3D Artist', 'Video Editor', 'HR Manager',
            'Recruitment Specialist', 'Financial Analyst', 'Accountant',
            'Sales Manager', 'Customer Success Specialist', 'Operations Manager',
            'Supply Chain Manager', 'Business Development Manager',
            'Social Media Specialist', 'Network Administrator', 'IT Manager',
            'Cybersecurity Specialist', 'IoT Developer', 'PHP Developer',
            'Python Developer', 'Node.js Developer'
        ];

        $jobModels = ['Remote', 'Hybrid', 'On-site'];
        $locations = ['Jakarta', 'Bandung', 'Surabaya', 'Yogyakarta', 'Medan', 'Bali'];
        $employmentTypes = ['Full-time', 'Part-time', 'Contract'];
        $categories = ['IT', 'Marketing', 'Finance', 'HR', 'Design', 'Sales'];

        for ($i = 1; $i <= 50; $i++) {
            $title = $jobTitles[array_rand($jobTitles)];
            $slug = Str::slug($title) . '-';

            JobPosition::create([
                'title' => $title,
                'description' => "Membangun dan mengembangkan sistem $title menggunakan teknologi terkini. Dibutuhkan pengalaman minimal 2 tahun di bidang yang relevan.",
                'job_model' => $jobModels[array_rand($jobModels)],
                'location' => $locations[array_rand($locations)],
                'company_id' => $company->id,
                'posted_at' => now(),
                'slug' => $slug,
                'salary_min' => rand(8, 15) * 1000000,
                'salary_max' => rand(16, 30) * 1000000,
                'employment_type' => $employmentTypes[array_rand($employmentTypes)],
                'deadline_at' => now()->addDays(rand(14, 60)),
                'category' => $categories[array_rand($categories)],
                'apply_url' => 'https://karir.example.com/apply/' . $slug,
            ]);
        }
    }
}

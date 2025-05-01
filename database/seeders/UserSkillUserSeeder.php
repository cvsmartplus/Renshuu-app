<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\UserSkill;

class UserSkillUserSeeder extends Seeder
{
    public function run()
    {
        $user = User::find(1);

        if ($user) {
            $skillIds = UserSkill::whereIn('name', ['Laravel', 'React'])->pluck('id');
            $user->userSkills()->sync($skillIds);
        }
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class JobPosition extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'job_model',
        'location',
        'company_id',
        'posted_at',
        'slug',
        'salary_min',
        'salary_max',
        'employment_type',
        'deadline_at',
        'category',
        'apply_url',
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function skills()
    {
        return $this->belongsToMany(Skill::class, 'job_position_skill')
                    ->withTimestamps();
    }
}

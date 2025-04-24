<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Skill extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function jobPositions()
    {
        return $this->belongsToMany(JobPosition::class, 'job_position_skill')
                    ->withTimestamps();
    }
}

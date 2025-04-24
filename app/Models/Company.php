<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'industry',
        'profile',
        'banner',
        'specialisation',
        'website',
        'phone',
        'address',
        'description',
    ];

    protected $casts = [
        'address' => 'array',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function jobPositions()
    {
        return $this->hasMany(JobPosition::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Trainer extends Model
{
    //
    protected $fillable = [
        'name',
        'description',
        'image',
        'email',
        'phone',
        'social_links',
    ];
    protected $casts = [
        'social_links' => 'array',
    ];
    public function courses()
    {
        return $this->hasMany(Course::class);
    }
}

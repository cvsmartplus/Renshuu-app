<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserProfile extends Model
{
    protected $fillable = [
        'user_id',
        'avatar',
        'banner',
        'tagline',
        'bio',
        'phone',
        'website',
        'social_links',
        'gender',
        'marital_status',
        'birth_date',
        'age',
        'province',
        'city',
        'district',
        'village',
        'address_detail',
    ];

    protected $casts = [
        'social_links' => 'array',
        'birth_date' => 'date',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

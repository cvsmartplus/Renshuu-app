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

        'avatar_crop_x',
        'avatar_crop_y',
        'avatar_crop_width',
        'avatar_crop_height',

        'avatar_image_width',
        'avatar_image_height',
    ];

    protected $casts = [
    'social_links' => 'array',
    'birth_date' => 'date',

    'avatar_crop_x' => 'float',
    'avatar_crop_y' => 'float',
    'avatar_crop_width' => 'float',
    'avatar_crop_height' => 'float',

    'avatar_image_width' => 'float',
    'avatar_image_height' => 'float',
];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

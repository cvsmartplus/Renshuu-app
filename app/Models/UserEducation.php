<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserEducation extends Model
{
    protected $fillable = [
        'user_id',
        'degree',
        'institution',
        'start_date',
        'end_date',
        'description',
    ];

    protected $casts = [
        'start_date' => 'date',
        'end_date' => 'date',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

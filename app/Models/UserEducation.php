<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserEducation extends Model
{
        protected $table = 'user_educations';

        protected $fillable = [
        'user_id',
        'degree',
        'field_of_study',
        'institution',
        'title',
        'grade',
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

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'price',
        'trainer_id', // ini yang benar, bukan trainers_id
        'group_chat_link',
        'course_admin_id',
        'image',
        'duration',
        'level',
        'status',
        'content',
        'student',
        'slug',
        'discount',
    ];

    public function trainer()
    {
        return $this->belongsTo(Trainer::class);
    }
}

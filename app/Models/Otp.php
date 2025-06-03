<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Otp extends Model
{
    //
    protected $table = 'otps';

    protected $fillable = [
        'user_id',
        'code',
        'expired_at',
        'is_used',
    ];
}

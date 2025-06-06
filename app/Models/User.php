<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

use App\Models\UserProfile;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'email_verified_at',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function otps()
    {
        return $this->hasMany(Otp::class);
    }

    // User.php

    public function hasVerifiedOtp()
    {
        return (bool) $this->email_verified_at;
    }
    
    public function company()
    {
        return $this->hasOne(Company::class);
    }

    public function profile()
    {
        return $this->hasOne(UserProfile::class);
    }

    public function userSkills()
    {
        return $this->belongsToMany(UserSkill::class, 'user_skill_user');
    }


    public function experiences()
    {
        return $this->hasMany(UserExperience::class);
    }

    public function educations()
    {
        return $this->hasMany(UserEducation::class);
    }

    public function documents()
    {
        return $this->hasMany(UserDocument::class);
    }

}

<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Laratrust\Traits\LaratrustUserTrait;

class User extends Authenticatable implements MustVerifyEmail
{
    use LaratrustUserTrait;
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'active',
        'email_verified_at',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function userProfile()
    {
        return $this->hasOne('App\Models\UserProfile', 'user_id');
    }
    public function getCreatedAtFormattedAttribute()
    {
        try {
            if (!empty($this->created_at)) {
                return $this->created_at->format('d/m/Y');
            }
        } catch (\Exception $ex) {
        }

        return "";
    }
    public function getAllPermissionsAttribute()
    {
        return $this->allPermissions();
    }
    public function getAllPermissionsArrayAttribute()
    {
        $data = [];
        foreach ($this->allPermissions() as $permission) {
            $data[] = $permission->name;
        }
        return $data;
    }
}

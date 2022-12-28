<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserProfile extends Model
{
    use HasFactory;

    protected $table = "user_profiles";

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function scopeUsers($query)
    {
        return $query->join('users', 'users.id', '=', 'user_profiles.user_id');
    }

    public function getFullNameAttribute()
    {
        return trim(ucfirst($this->attributes['first_name']) . " " . ucfirst($this->attributes['last_name']));
    }
    public function getInitialNamesAttribute()
    {
        $name = !empty($this->attributes['first_name']) ? substr($this->attributes['first_name'], 0, 1) : null;
        $last_name = !empty($this->attributes['last_name']) ? substr($this->attributes['last_name'], 0, 1) : null;

        return trim(strtoupper($name . $last_name));
    }

    public function getBirthdateFormattedAttribute()
    {
        if (!empty($this->birthdate)) {
            return (Carbon::createFromFormat('Y-m-d', $this->birthdate))->format('d/m/Y');
        }

        return '';
    }
}

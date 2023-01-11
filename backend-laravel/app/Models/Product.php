<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'description', 'active', "price"];
    protected $table = 'products';

    public function scopeActive($query)
    {
        return $query->where('active', 1);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserDetail extends Model
{
    protected $fillable = [
        'name',
        'image',
        'cv'

    ];

    public function getImageAttribute($value)
    {
        return $value ? asset('storage/' . $value) : null;
    }
    public function getCvAttribute($value)
    {
        return $value ? asset('storage/' . $value) : null;
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Trustee extends Model
{
    protected $fillable = [
        'name',
        'logo'

    ];

    public function getLogoAttribute($value)
    {
        return $value ? asset('storage/' . $value) : null;
    }
}

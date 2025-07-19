<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Recommendation extends Model
{
    protected $fillable = [
        'name',
        'occupation',
        'company',
        'message',
        'github_link',
        'linkedin_link',
        'phone_number',
        'email',
        'image'

    ];
}

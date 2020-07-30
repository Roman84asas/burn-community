<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    /**
     * @var string
     */
    protected $table = 'articles';

    /**
     * @var string[]
     */
    protected $fillable = [
        'user_id',
        'title',
        'description',
        'image',
        'content',
        'b2b',
        'published_at',
    ];
}

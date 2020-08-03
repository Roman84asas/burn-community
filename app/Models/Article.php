<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphTo;

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


    /**
     * @return MorphTo
     */
    public function user(): BelongsTo
    {
        return $this->BelongsTo(User::class);
    }
}

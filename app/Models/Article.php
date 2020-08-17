<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Article extends Model
{
    //protected $dateFormat = 'U';
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
     * @return MorphMany
     */
    public function comment(): hasMany
    {
        return $this->hasMany(Comment::class );
    }

    /**
     * @return MorphTo
     */
    public function user(): BelongsTo
    {
        return $this->BelongsTo(User::class);
    }
}

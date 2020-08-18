<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Comment extends Model
{

    //protected $dateFormat = 'U';

    /**
     * @var string
     */
    protected $table = 'comments';

    protected $fillable = [
        'article_id', 'user_id', 'content'
    ];

    public static function scopeArticleAsk(Builder $builder, $id): Builder
    {
        return $builder
            ->where('article_id', $id)
            ->with('user');
    }

    /**
     * @return BelongsTo
     */
    public function article(): BelongsTo
    {
        return $this->BelongsTo(Article::class);
    }

    /**
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->BelongsTo(User::class);
    }
}

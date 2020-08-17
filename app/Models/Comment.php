<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Comment extends Model
{
    use SoftDeletes;

    //protected $dateFormat = 'U';

    /**
     * @var string
     */
    protected $table = 'comments';

    protected $fillable = [
        'article_id', 'user_id', 'content'
    ];

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

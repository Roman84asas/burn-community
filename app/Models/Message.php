<?php

namespace App\Models;

use App\Models\Topic;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Message extends Model
{

    use SoftDeletes;

    //protected $dateFormat = 'U';

    /**
     * @var string
     */
    protected $table = 'message';

    /**
     * @var string[]
     */
    protected $fillable = [
        'topic_id', 'user_id', 'content'
    ];

    /**
     * @return BelongsTo
     */
    public function topic(): BelongsTo
    {
        return $this->BelongsTo(Topic::class);
    }

    /**
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->BelongsTo(User::class);
    }
}

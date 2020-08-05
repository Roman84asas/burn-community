<?php


namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Str;



class Topic extends Model
{

    /**
     * @var array
     */
    protected $dates = [
        'created_at',
        'updated_at',
        'published_at'
    ];

    /**
     * @var string
     */
    protected $table = 'topic';

    /**
     * @var string[]
     */
    protected $fillable = [
        'user_id',
        'title',
        'image',
        'content_source',
        'status',
        'b2b',
        'published_at',
    ];

    public static function scopeLatestPublished(Builder $builder): Builder
    {
        return $builder
            ->with('user')
            ->with('tags')
            ->latest('published_at')
            ->published();
    }



    /**
     * @param  Builder $builder
     * @return Builder
     */
    public static function scopeLatest(Builder $builder): Builder
    {
        return $builder->orderBy('published_at', 'desc');
    }

    /**
     * @param Builder $builder
     * @return Builder
     */
    public static function scopePublished(Builder $builder): Builder
    {
        return $builder
            ->where('published_at', '<=', Carbon::now())
            ->where('status', Article\Status::PUBLISHED);
    }


    /**
     * @param Authenticatable|null $user
     * @return bool
     */
    /*public function isAllowedForUser(?Authenticatable $user): bool
    {
        $isAuthor = $user === null ? false : ($this->user->id === $user->getAuthIdentifier());

        $isPublished = $this->status === Article\Status::PUBLISHED;

        $isAllowPublishedTime = $this->published_at <= Carbon::now();

        return $isAuthor || ($isPublished && $isAllowPublishedTime);
    }*/

    /**
    * @return string
    */
    public function getCapitalizeTitleAttribute(): string
    {
        return Str::ucfirst($this->title);
    }

    /**
     * @return string
     */
    public function scopeNicePublishedDateAttribute()
    {
        if ($this->published_at > Carbon::now()->subMonth()) {
            return $this->published_at->diffForHumans();
        }

        return $this->published_at->toDateTimeString();
    }


    /**
     * @return MorphTo
     */
    public function user(): BelongsTo
    {
        return $this->BelongsTo(User::class);
    }

    /**
     * @return BelongsToMany
     */
    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class, 'topic_tags');
    }
}

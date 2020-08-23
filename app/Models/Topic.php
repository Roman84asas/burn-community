<?php


namespace App\Models;

use App\Traits\HasUserSubcatandTagsTopic;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Str;



class Topic extends Model
{
    use Notifiable, HasUserSubcatandTagsTopic;
    //protected $dateFormat = 'U';


    /**
     * @var string
     */
    protected $table = 'topic';

    /**
     * @var array
     */
    protected $dates = [
        'created_at',
        'updated_at',
        'published_at'
    ];

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

    /**
     * @param Builder $builder
     * @return Builder
     */

    public static function scopeLatestPublished(Builder $builder): Builder
    {
        return $builder
            ->with('user')
            ->latest('published_at')
            ->published();
    }


    /**
     * @param Builder $builder
     * @return Builder
     */
    public static function scopeMooLikesPublished(Builder $builder): Builder
    {
        return $builder
            ->with('user')
            ->likes()
            ->published();
    }

    /**
     * @param Builder $builder
     * @return Builder
     */
    public static function scopeWithoutMessage(Builder $builder): Builder
    {
        return $builder
            ->with('user')
            ->withoutMessages()
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
    public static function scopeLikes(Builder $builder): Builder
    {
        return $builder->orderByRaw('cast(likes as decimal(20,2)) desc');
    }

    /**
     * @param Builder $builder
     * @return Builder
     */
    public static function scopeWithoutMessages(Builder $builder): Builder
    {
        return $builder->where('messages', '=', 0);
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
}

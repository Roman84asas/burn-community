<?php

namespace App\Models;



use App\Models\Message;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

use Tymon\JWTAuth\Contracts\JWTSubject;


class User extends Authenticatable implements JWTSubject
{

    use Notifiable;

    //protected $dateFormat = 'U';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'name',
        'email',
        'password',
        'is_confirmed',
        'avatar',
    ];


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public static function scopeGetTopUsers(Builder $builder): Builder
    {
        return $builder->orderByRaw('cast(messages as decimal(20,2)) desc');
    }

    /**
     * @return bool
     */
    public function scopeOnline() {
        return ($this->last_activity > new \DateTime('-15 minutes') && user()->check()) ? true : false;
    }

    /**
     * @return hasMany
     */
    public function messages(): hasMany
    {
        return $this->hasMany(Message::class );
    }

    /**
     * @return hasMany
     */
    public function comment(): hasMany
    {
        return $this->hasMany(Comment::class );
    }

    /**
    * @return MorphMany
    */
    public function topic(): MorphMany
    {
        return $this->morphMany(Topic::class, 'user');
    }

    /**
     * @return MorphMany
     */
    public function articles(): MorphMany
    {
        return $this->morphMany(Article::class, 'user');
    }

    /**
     * @return string
     */
    public function getJWTIdentifier(): string
    {
        return $this->getKey();
    }

    /**
     * @return array
     */
    public function getJWTCustomClaims(): array
    {
        return [
            'name' => $this->name,
        ];
    }
}

<?php

/**
 * This file is part of laravel.su package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * Class Tag.
 */
class Tag extends Model
{
    /**
     * @var bool
     */
    public $timestamps = false;

    /**
     * @var string
     */
    protected $table = 'tags';

    /**
     * @var string[]
     */
    protected $fillable = [
        'name',
    ];

    /**
     * @param $id
     * @return mixed
     */
    public static function TopicFromTagPublished($id)
    {
        $tag = Tag::find($id);
        return $tag->topics()->paginate(2);
    }


    /**
    * @return BelongsToMany
    */
    public function topics(): BelongsToMany
    {
        return $this->belongsToMany(Topic::class, 'topic_tags');
    }
}

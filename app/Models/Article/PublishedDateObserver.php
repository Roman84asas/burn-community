<?php

/**
 * This file is part of laravel.su package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
declare(strict_types=1);

namespace App\Models\Article;

use App\Models\Topic;
use Carbon\Carbon;

/**
 * Class PublishedDateObserver.
 */
class PublishedDateObserver
{
    /**
     * @param Topic $topic
     */
    public function saving(Topic $topic)
    {
        if (! $topic->published_at) {
            $topic->published_at = Carbon::now();
        }
    }
}

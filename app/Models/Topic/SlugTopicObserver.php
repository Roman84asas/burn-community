<?php


declare(strict_types=1);

namespace App\Models\Topic;


use App\Models\Topic;
use Illuminate\Support\Str;

class SlugTopicObserver
{
    /**
     * @param Topic $topic
     */
    public function creating(Topic $topic)
    {
        $topic->slug = Str::slug($topic->title) . '-' . ($this->getElementsLastId() + 1);
    }

    /**
     * @return int
     */
    private function getElementsLastId(): int
    {
        $lastTopic = Topic::orderBy('id', 'desc')->first();

        return $lastTopic ? $lastTopic->id : 0;
    }
}

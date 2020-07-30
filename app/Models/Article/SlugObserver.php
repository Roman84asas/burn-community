<?php

declare(strict_types=1);

namespace App\Models\Article;

use App\Models\Article;
use Illuminate\Support\Str;

/**
 * Class SlugObserver.
 */
class SlugObserver
{
    /**
     * @param Article $article
     */
    public function creating(Article $article)
    {
        $article->slug = Str::slug($article->title) . '-' . ($this->getElementsLastId() + 1);
    }

    /**
     * @return int
     */
    private function getElementsLastId(): int
    {
        $lastArticle = Article::orderBy('id', 'desc')->first();

        return $lastArticle ? $lastArticle->id : 0;
    }
}

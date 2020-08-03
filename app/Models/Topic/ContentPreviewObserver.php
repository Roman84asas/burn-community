<?php

/**
 * This file is part of laravel.su package.
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
declare(strict_types=1);

namespace App\Models\Topic;

use App\Models\Topic;
use App\Services\ContentRendererInterface;
use Illuminate\Support\Str;

/**
 * Class ContentPreviewObserver.
 */
class ContentPreviewObserver
{
    /**
     * @var ContentRendererInterface
     */
    private $renderer;

    /**
     * ContentObserver constructor.
     * @param ContentRendererInterface $renderer
     */
    public function __construct(ContentRendererInterface $renderer)
    {
        $this->renderer = $renderer;
    }

    /**
     * @param Topic $topic
     */
    public function saving(Topic $topic): void
    {
        if ($topic->content_source) {
            if (! $topic->preview_source) {
                $topic->preview_source = Str::words($topic->content_source, 100, '…');
            }

            $topic->preview_rendered = $this->renderer->renderBody($topic->preview_source);
        }
    }
}

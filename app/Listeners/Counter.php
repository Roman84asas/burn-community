<?php

namespace App\Listeners;

use App\Events\TopicHasViewed;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class Counter
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  TopicHasViewed  $event
     * @return void
     */
    public function handle(TopicHasViewed $event)
    {
        $event->topic->increment('views');
    }
}

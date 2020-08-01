<?php


namespace App\Http\Resources;


use Illuminate\Http\Resources\Json\ResourceCollection;

class TopicCollection extends ResourceCollection
{

    public $collection = Topic::class;

    public function toArray($request)
    {
        return [
            'success' => true,
            'data'    => $this->collection,
        ];
    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ArticlesCollection extends ResourceCollection
{

    public $collection = Articles::class;

    public function toArray($request)
    {
        return [
            'success' => true,
            'data'    => $this->collection,
        ];
    }
}

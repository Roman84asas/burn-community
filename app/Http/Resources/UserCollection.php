<?php

//declare(strict_types=1);

namespace App\Http\Resources;


use Illuminate\Http\Resources\Json\ResourceCollection;

/**
 * Class UserResource.
 */
class UserCollection extends ResourceCollection
{



    public $collection = Users::class;

    public function toArray($request)
    {
        return [
            'success' => true,
            'data'    => $this->collection,
        ];
    }
}

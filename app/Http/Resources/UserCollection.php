<?php

declare(strict_types=1);

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Class UserResource.
 */
class UserCollection extends JsonResource
{


    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return array
     */
    public $collection = Users::class;

    public function toArray($request)
    {
        return [
            'success' => true,
            'data'    => $this->collection,
        ];
    }
}

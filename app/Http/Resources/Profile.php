<?php


namespace App\Http\Resources;


use Illuminate\Http\Resources\Json\JsonResource;



class Profile extends JsonResource
{
/**
* Transform the resource into an array.
*
* @param  \Illuminate\Http\Request  $request
* @return array
*/
    public function toArray($request): array
    {
        return [
            'id'            => $this->resource->id,
            'name'          => $this->resource->name,
            'avatar'        => $this->resource->avatar
        ];
    }
}

<?php


namespace App\Http\Resources;


use Illuminate\Http\Resources\Json\JsonResource;

class Users extends JsonResource
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
            'email'         => $this->resource->email,
            'avatar'        => $this->resource->avatar,
            'is_confirmed'  => $this->resource->is_confirmed
        ];
    }
}

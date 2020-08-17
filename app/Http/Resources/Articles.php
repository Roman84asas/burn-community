<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class Articles extends JsonResource
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
            'user'          => User::findOrFail($this->resource->user_id),
            'title'         => $this->resource->title,
            'description'   => $this->resource->description,
            'image'         => $this->resource->image,
            'content'       => $this->resource->content,
            'b2b'           => $this->resource->b2b,
            'slug'          => $this->resource->slug,
            'created_at'    => $this->resource->created_at->toDateTimeString(),
            'updated_at'    => $this->resource->updated_at->toDateTimeString(),
        ];
    }
}

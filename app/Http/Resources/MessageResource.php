<?php


namespace App\Http\Resources;


use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class MessageResource extends JsonResource
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
            'user_id'       => User::find($this->resource->user),
            'topic_id'      => $this->resource->topic_id,
            'content'       => $this->resource->content,
            'is_confirmed'  => $this->resource->is_confirmed
        ];
    }
}

<?php


namespace App\Http\Resources;


use Illuminate\Http\Resources\Json\JsonResource;

class Users extends JsonResource
{


    public function toArray($request)
    {
        return [
            'id'            => $this->id,
            'name'          => $this->name,
            'email'         => $this->email,
            'avatar'        => $this->avatar,
            'is_confirmed'  => $this->is_confirmed
        ];
    }
}

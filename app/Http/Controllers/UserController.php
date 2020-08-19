<?php

namespace App\Http\Controllers;


use App\Http\Resources\ProfileCollection;
use App\Http\Resources\UserCollection;
use App\Models\User;
use Illuminate\Http\Request;



class UserController extends Controller
{


    public function index()
    {
        return new UserCollection(User::all());
    }


    public function showProfile($id)
    {
        return [ 'user' => new ProfileCollection($user = User::find(['id' => $id])),
        'online' => User::online(),
            ];
    }
}

<?php


namespace App\Repositories;


use App\Models\Tag;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;

class GetTooIdInTag
{

    public static function GetTag()
    {
        $tags= DB::table('tags')
            ->orderByDesc('count')
            ->take(6)
            ->get();
        return $tags;
   }


}

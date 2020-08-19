<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticlesCollection;
use App\Models\Article;
use App\Models\Topic;
use App\Models\User;
use App\Repositories\GetTooIdInTag;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    /**
     * @return array
     */
    public function index()
    {
        return [
            'topicTop'       => Topic::mooLikesPublished()->take(5)->get(),
            'topicLatest'    => Topic::latestPublished()->take(5)->get(),
            'topicWiMessage' => Topic::withoutMessage()->take(5)->get(),
            'news'           => new ArticlesCollection(Article::take(5)->get()),
            'topTags'        => GetTooIdInTag::GetTag(),
            'users'          => User::getTopUsers()->take(5)->get(),
            'articlesLatest' => new ArticlesCollection(Article::take(3)->get()),
        ];
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticlesCollection;
use App\Models\Article;
use App\Models\Topic;
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
        return view('app');/*[
            'topicLatest'    => Topic::latestPublished()->take(5)->get(),
            'topTags'        => GetTooIdInTag::GetTag(),
            'articlesLatest' => new ArticlesCollection(Article::paginate(3)),
        ]*/
    }
}

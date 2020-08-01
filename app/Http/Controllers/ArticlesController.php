<?php

declare(strict_types=1);


namespace App\Http\Controllers;

//use App\Models\Article;
//use Illuminate\Contracts\View\View;
//use Illuminate\Contracts\Auth\Guard;
//use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

use App\Http\Resources\Articles;
use App\Http\Resources\ArticlesCollection;
use App\Http\Resources\UserCollection;
use App\Models\Article;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

class ArticlesController extends Controller
{

    /**
     * @return ArticlesCollection
     */
    public function index()
    {

        return new ArticlesCollection(Article::paginate(5));
    }

    /**
     * @param string $slug
     * @return array
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException
     */
    public function show(string $slug)
    {
        $article = Article::where('slug', $slug)->firstOrFail();

        return  [
            'article' => $article,
        ];
    }
}

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
use Illuminate\Http\Client\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;
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

        $user = $this->userArticle($article->user_id);
        return  [
            'article' => $article,
            'user'    => $user,
        ];
    }


    public function create(Request $request)
    {
        $data = $request->isJson();
        if (empty($data['slug'])) {
            $data['slug'] = Str::slug($data['title'].$data['id']);
        }
        $newArticle = new Article($data);
        $newArticle->save();

        return [
            'success' => true,
        ];
    }
    /**
     * @param $id
     * @return array
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException
     */
    public function userArticle($id)
    {
        return [
            User::find(['id' => $id]),
        ];
    }
}

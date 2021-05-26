<?php

declare(strict_types=1);


namespace App\Http\Controllers;




use App\Http\Resources\ArticlesCollection;
use App\Models\Article;
use App\Models\Comment;
use App\Models\User;
use Illuminate\Http\Client\Request;
use Illuminate\Support\Str;

class ArticlesController extends Controller
{

    /**
     * @return ArticlesCollection
     */
    public function index()
    {
        return new ArticlesCollection(Article::paginate(6));
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
            'article' => new ArticlesCollection(Article::find(['id', $article->id])),
            'comments'    => Comment::articleAsk($article->id)->paginate(8),
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
    public function userArticle(string $id)
    {
        return [
            User::find(['id' => $id]),
        ];
    }
}

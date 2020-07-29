<?php

declare(strict_types=1);


namespace App\Http\Controllers;

//use App\Models\Article;
//use Illuminate\Contracts\View\View;
//use Illuminate\Contracts\Auth\Guard;
//use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

use App\Http\Resources\Articles;
use App\Http\Resources\ArticlesCollection;
use Illuminate\Http\Resources\Json\JsonResource;

class ArticlesController extends Controller
{

    public function index()
    {
        return 'ha ah';
    }

}

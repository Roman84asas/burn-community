<?php


//use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* @var Route $router */


//Группа не требующая аутентификации
Route::group([
    'middleware' => 'api',
], function (){
    //Группа утентификации
    Route::post('/login', 'Auth\LoginController@login');
    Route::get('/login', 'Auth\LoginController@login');
    Route::post('/refresh', 'Auth\LoginController@refresh');
    Route::post('/logout', 'Auth\LoginController@logout');
    Route::post('/register', 'Auth\RegisterController@register');
    Route::post('/confirm/{token}', function (string $token) {
        return response()->json([
            'success' => true,
            'token'   => $token,
        ]);
    })->name('confirm');


    //Группа профиль
    Route::get('/profile/{id}', 'UserController@showProfile');


    //Группа Статьи
    Route::get('articles', 'ArticlesController@index');
    Route::get('articles/{slug}', 'ArticlesController@show');

    //Группа Темы
    Route::get('/forum/category/subcategory/topic', 'TopicController@index');
    Route::get('topic/{id}', 'TopicController@indexForId');

    //Домашняя
    Route::get('/', 'HomeController@index')->name('/');
    Route::get('/login', 'HomeController@index');
    Route::get('/register', 'HomeController@index');
    Route::get('/verify', 'HomeController@index');
    Route::get('/search', 'HomeController@index');
    Route::get('/forum', 'HomeController@index')->name('/forum');
    Route::get('/category', 'HomeController@index');
    Route::get('/category/subcategory', 'HomeController@index');


    Route::get('/tags/{id}', 'TopicController@indexForTag');

//Группа требующая аутентификации
    //Route::get('/profiles', 'UserController@index')->middleware('auth');
    //Route::get('/profile', 'UserController@profile')->middleware('jwt');
});




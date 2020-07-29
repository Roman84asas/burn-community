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

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router){
    Route::post('/login', 'Auth\LoginController@login')->name('auth.login');
    Route::post('/refresh', 'Auth\LoginController@refresh')->name('auth.refresh');
    Route::post('/logout', 'Auth\LoginController@logout')->name('auth.logout');
    Route::post('/register', 'Auth\RegisterController@register')->name('auth.register');
    Route::get('/profile', 'Auth\LoginController@profile')->name('auth.profile');
    /*Route::get('/profile', function (Request $request){
        return response()->json([
            'success' => true,
            'data' => $request->user(),
        ]);
    });*/
    Route::post('/confirm/{token}', function (string $token) {
        return response()->json([
            'success' => true,
            'token'   => $token,
        ]);
    })->name('auth.register.confirm');
});

Route::get('articles', 'ArticlesController@index')
    ->middleware('api');

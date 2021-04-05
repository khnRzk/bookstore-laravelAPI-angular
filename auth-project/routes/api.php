<?php

use Illuminate\Http\Request;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register','App\Http\Controllers\AuthController@register');
Route::post('/login','App\Http\Controllers\AuthController@login');


Route::get('/books','App\Http\Controllers\BooksController@show');
Route::post('/add-book','App\Http\Controllers\BooksController@create');
Route::get('/search','App\Http\Controllers\BooksController@search');

Route::get('/author','App\Http\Controllers\UsersController@show');
Route::put('/status','App\Http\Controllers\UsersController@authorStatus');

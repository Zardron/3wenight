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

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::get('event', 'EventController@event');
    Route::post('comment-event', 'EventController@commentEvent');
    Route::get('get-event/{slug}', 'EventController@getEvent');
    Route::get('get-comment/{slug}', 'EventController@getEventComment');
    Route::get('get-comment-count/{slug}', 'EventController@getEventCommentCount');
    Route::get('get-country-event/{event_country}', 'EventController@getCountryEvent');
    Route::get('filter-country-event/{filter_event}/{country}', 'EventController@filterCountryEvent');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
});

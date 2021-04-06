<?php

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::get('event', 'EventController@event');
    Route::get('get-event/{event_title}', 'EventController@getEvent');
    Route::get('get-country-event/{event_country}', 'EventController@getCountryEvent');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});
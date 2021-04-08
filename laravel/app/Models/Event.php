<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
// use Illuminate\Foundation\Auth\User as Authenticatable;
// // use Illuminate\Notifications\Notifiable;
// use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Event extends Model
{


    protected $table = 'event';
	public $timestamps = true;
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'event_id',
		'event_src',
		'event_title',
        'event_day',
        'event_time',
		'event_type',
		'country',
		'country_code',
        'event_details',
        'slug',
	];

	 protected $dates = ['deleted_at'];
    // public function getRouteKeyName()
	// {
	// 	return 'slug';
	// }
}

<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
// use Illuminate\Foundation\Auth\User as Authenticatable;
// // use Illuminate\Notifications\Notifiable;
// use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Comment extends Model
{


    protected $table = 'comments';
	public $timestamps = true;
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'commentId',
		'slug',
		'name',
        'message',
        'message_at',
	];

	 protected $dates = ['deleted_at'];
    // public function getRouteKeyName()
	// {
	// 	return 'slug';
	// }
}

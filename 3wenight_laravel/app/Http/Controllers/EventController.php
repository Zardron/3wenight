<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;
use App\Models\Comment;

class EventController extends Controller
{
    public function event(Event $event){
        $event = Event::toBase()->get();
        return response()->json($event);
    }

    public function getEvent(Request $request){
        $slug = $request->route('slug');
        $event = Event::where("slug", $slug)->first();

        return response()->json($event);
    }

    public function commentEvent(Request $request){

        $comment = new Comment;
        $comment->slug = $request->slug;
        $comment->message = $request->comment;
        $comment->name = $request->name;
        $comment->save();
        return response()->json($comment);
    }

    public function getEventComment(Request $request){
        $slug = $request->route('slug');
        $event = Comment::where("slug", $slug)->orderByDesc('created_at')->get();

        return response()->json($event);
    }

    public function getEventCommentCount(Request $request){
        $slug = $request->route('slug');
        $event = Comment::where("slug", $slug)->count();

        return $event;
    }

    public function getCountryEvent(Request $request){
        $country = $request->route('event_country');
        $event = Event::where("country", $country)->get();

        return response()->json($event);
    }
    

    public function filterCountryEvent(Request $request){
        $event_type = $request->route('filter_event');
        $country = $request->route('country');
        $event = Event::where([
            ['event_type', $event_type], 
            ['country', $country]
        ])->get();

        return response()->json($event);
    }
}

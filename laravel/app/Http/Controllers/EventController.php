<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;
use App\Models\Comment;

class EventController extends Controller
{
    public function event(Event $event){
        $event = Event::toBase()->get();
        return $event;
    }

    public function getEvent(Request $request){
        $title = $request->route('event_title');
        $event = Event::where("slug", $title)->first();

        return $event;
    }

    public function getEventComment(Request $request){
        $slug = $request->route('slug');
        $event = Comment::where("slug", $slug)->get();

        return $event;
    }

    public function getEventCommentCount(Request $request){
        $slug = $request->route('slug');
        $event = Comment::where("slug", $slug)->count();

        return $event;
    }

    public function getCountryEvent(Request $request){
        $country = $request->route('event_country');
        $event = Event::where("country", $country)->get();

        return $event;
    }

    public function filterCountryEvent(Request $request){
        $event_type = $request->route('filter_event');
        $country = $request->route('country');
        $event = Event::where([
            ['event_type', $event_type], 
            ['country', $country]
        ])->get();

        return $event;
    }
}

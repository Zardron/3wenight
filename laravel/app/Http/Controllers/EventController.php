<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;

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

    public function getCountryEvent(Request $request){
        $country = $request->route('event_country');
        $event = Event::where("country", $country)->get();

        return $event;
    }
}

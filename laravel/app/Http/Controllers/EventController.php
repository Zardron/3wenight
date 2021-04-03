<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;

class EventController extends Controller
{
    public function event(Event $Event){
        $Event = Event::toBase()->get();
        return $Event;
    }
}

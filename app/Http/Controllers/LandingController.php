<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LandingController extends Controller
{
    public function index(){
        return Inertia::render('Landing');
    }

    public function createBooking(Request $request){
        $validated = $request->validate([
            'name' =>  'string|max:255',
            'address' => 'string|max:255',
            'email' => 'email',
            'phone_number' => 'regex:/^\d{11}$/',
            'daily_acts' => 'string|nullable',
            'last_checkup' => 'date|nullable',
            'complaints' => 'string|nullable',
        ]);

        $booking = Booking::create($validated);

        return redirect()->back()->with([
            'booking' => $booking,
            'message' => 'Booking successfully created!'
        ]);
    }
}

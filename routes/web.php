<?php

use App\Http\Controllers\LandingController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Landing
Route::get('/', [LandingController::class, 'index']);
Route::post('/booking', [LandingController::class, 'createBooking']);

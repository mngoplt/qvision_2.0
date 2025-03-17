<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $fillable = ['id', 'name', 'address', 'email', 'phone_number', 'daily_acts', 'last_checkup', 'complaints'];

    public $incrementing = false;
    protected $keyType = 'string';

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($booking) {
            $booking->id = self::generateUniqueBookingId();
        });
    }

    private static function generateUniqueBookingId()
    {
        do {
            $randomId = random_int(100000, 999999); // Prefix for clarity
        } while (self::where('id', $randomId)->exists());

        return $randomId;
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('name');
            $table->string('address');
            $table->string('email')->unique();
            $table->string('phone_number', 11)->unique();
            $table->string('daily_acts')->nullable();
            $table->date('last_checkup')->nullable();
            $table->text('complaints')->nullable();
            $table->dateTime('consultation_date')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};

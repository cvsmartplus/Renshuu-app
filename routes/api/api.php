<?php

use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\LogoutController;
use App\Http\Controllers\Api\OtpController;
use App\Http\Controllers\Api\RegisterUserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/register', RegisterUserController::class);
Route::post('/otp-verification', OtpController::class);
Route::post('/login', LoginController::class);

Route::middleware(['auth:sanctum', 'ensureOtpVerified'])->group(function () {
    Route::post('/logout', LogoutController::class);
    Route::get('/user', fn (Request $request) => $request->user());
});

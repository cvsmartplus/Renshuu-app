<?php

use App\Http\Controllers\Api\Auth\LoginController;
use App\Http\Controllers\Api\Auth\LogoutController;
use App\Http\Controllers\Api\Auth\OtpController;
use App\Http\Controllers\Api\Auth\RegisterUserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/register', RegisterUserController::class);
Route::post('/otp-verification', [OtpController::class, 'store']);
Route::post('/resend-otp', [OtpController::class, 'resend']);
Route::post('/login', LoginController::class);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/logout', LogoutController::class);
    Route::get('/user', fn (Request $request) => $request->user());
});

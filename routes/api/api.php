<?php

use App\Http\Controllers\Api\ArticleController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Auth\LoginController;
use App\Http\Controllers\Api\Auth\LogoutController;
use App\Http\Controllers\Api\Auth\NewPasswordController;
use App\Http\Controllers\Api\Auth\OtpController;
use App\Http\Controllers\Api\Auth\PasswordResetLinkController;
use App\Http\Controllers\Api\Auth\RegisterUserController;
use Illuminate\Http\Request;

Route::post('/register', RegisterUserController::class);
Route::post('/otp-verification', [OtpController::class, 'store']);
Route::post('/resend-otp', [OtpController::class, 'resend']);
Route::post('/login', LoginController::class);
Route::post('/forgot-password', PasswordResetLinkController::class);
Route::post('/reset-password', NewPasswordController::class);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/logout', LogoutController::class);
    Route::get('/user', fn (Request $request) => $request->user());
});


Route::get('/articles', [ArticleController::class, 'index']);
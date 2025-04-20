<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'role:user'])->group(function () {
    //here the route just for user
    Route::get('/user/dashboard', function () {return Inertia::render('Dashboard');})->name('dashboard');
});

<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CourseController;

Route::middleware(['auth', 'role:user'])->group(function () {
    //here the route just for user
    Route::get('/user/dashboard', function () {return Inertia::render('Dashboard');})->name('dashboard');

    Route::get('courses', [CourseController::class, 'index'])->name('course.index');
    Route::get('courses/{slug}', [CourseController::class, 'show'])->name('course.show');

});

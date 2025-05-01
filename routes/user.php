<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\ArticlesController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\ProfileController;

Route::middleware(['auth', 'role:user'])->group(function () {
    Route::prefix('user')->group(function () {
        Route::get('/dashboard', function () {
            return Inertia::render('Dashboard');
        })->name('user.dashboard');
    });

    Route::get('courses', [CourseController::class, 'index'])->name('course.index');
    Route::get('courses/{slug}', [CourseController::class, 'show'])->name('course.show');

    Route::get('Jobs', [JobController::class, 'index'])->name('job.index');
    Route::get('Jobs/{slug}', [JobController::class, 'show'])->name('job.show');


    Route::get('profile', [ProfileController::class, 'index'])->name('profile.index');
    Route::put('profile', [ProfileController::class, 'update'])->name('profile.update');
});

Route::prefix('article')->group(function () {
    Route::get('/', [ArticlesController::class, 'index'])->name('article.index');
    Route::get('/{slug}', [ArticlesController::class, 'show'])->name('article.show');
});

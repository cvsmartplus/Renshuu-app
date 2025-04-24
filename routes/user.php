<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\ArticlesController;

Route::middleware(['auth', 'role:user'])->group(function () {
    Route::prefix('user')->group(function () {
        Route::get('/dashboard', function () {
            return Inertia::render('Dashboard');
        })->name('dashboard');
    });

    Route::get('courses', [CourseController::class, 'index'])->name('course.index');
    Route::get('courses/{slug}', [CourseController::class, 'show'])->name('course.show');

});

Route::prefix('article')->group(function () {
    Route::get('/', [ArticlesController::class, 'index'])->name('article.index');
    Route::get('/{slug}', [ArticlesController::class, 'show'])->name('article.show');
});
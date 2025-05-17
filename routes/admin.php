<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\ArticleController;
use App\Http\Controllers\Admin\CourseController;
use App\Http\Controllers\Admin\JobController;
use App\Http\Controllers\Admin\UsersController;

Route::middleware(['auth', 'role:admin'])->prefix('admin')->group(function () {

    Route::prefix('dashboard')->group( function() {
        Route::get('/', [AdminController::class, 'dashboard'])->name('admin.dashboard');
    });

    Route::prefix('courses')->group( function() {
        Route::get('/', [CourseController::class, 'index'])->name('admin.courses');
    });

    Route::prefix('jobs')->group( function() {
        Route::get('/', [JobController::class, 'index'])->name('admin.jobs');
    });

    Route::prefix('articles')->group( function() {
        Route::get('/', [ArticleController::class, 'index'])->name('admin.articles');
    });

    Route::prefix('users')->group( function() {
        Route::get('/', [UsersController::class, 'index'])->name('admin.users');
        Route::get('/detail/{id}', [UsersController::class, 'show'])->name('admin.users.detail');
    });
});

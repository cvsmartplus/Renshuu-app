<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\ArticleController;
use App\Http\Controllers\Admin\CourseController;
use App\Http\Controllers\Admin\JobController;

Route::middleware(['auth', 'role:admin'])->prefix('admin')->group(function () {
    Route::get('dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');

    Route::get('courses', [CourseController::class, 'index'])->name('admin.courses');

    Route::get('jobs', [JobController::class, 'index'])->name('admin.jobs');

    Route::get('articles', [ArticleController::class, 'index'])->name('admin.articles');
});

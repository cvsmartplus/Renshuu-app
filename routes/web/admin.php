<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\ArticleController;
use App\Http\Controllers\Admin\JobController;
use App\Http\Controllers\Admin\UsersController;

Route::middleware(['auth', 'role:admin'])->prefix('admin')->group(function () {

    Route::prefix('dashboard')->group( function() {
        Route::get('/', [AdminController::class, 'dashboard'])->name('admin.dashboard');
    });
    
    Route::prefix('jobs')->group( function() {
        Route::get('/', [JobController::class, 'index'])->name('admin.jobs');
    });

    Route::prefix('articles')->group( function() {
        Route::get('/', [ArticleController::class, 'index'])->name('admin.articles');
        Route::get('/create', [ArticleController::class, 'create'])->name('admin.articles.create');
        Route::post('/store', [ArticleController::class, 'store'])->name('admin.articles.store');
    });

    Route::prefix('users')->group( function() {
        Route::get('/', [UsersController::class, 'index'])->name('admin.users');
        Route::get('/detail/{id}', [UsersController::class, 'show'])->name('admin.users.detail');
        Route::patch('/documents/{id}/{document}/verify', [UsersController::class, 'verify'])->name('admin.users.documents.verify');
    });
});

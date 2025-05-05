<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\ArticlesController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\ProfileController;

// User routes
Route::middleware(['auth', 'role:user'])->group(function () {
    
    Route::prefix('user')->group(function () {
        Route::get('/dashboard', function () {
            return Inertia::render('Dashboard');
        })->name('user.dashboard');
    });

    // Courses routes
    Route::prefix('courses')->group(function () {
        Route::get('/', [CourseController::class, 'index'])->name('course.index');
        Route::get('{slug}', [CourseController::class, 'show'])->name('course.show');
    });

    // Jobs routes
    Route::prefix('jobs')->group(function () {
        Route::get('/', [JobController::class, 'index'])->name('job.index');
        Route::get('{slug}', [JobController::class, 'show'])->name('job.show');
    });

    Route::prefix('profile')->group(function () {
        Route::get('/', [ProfileController::class, 'index'])->name('profile.index');
        Route::put('/data', [ProfileController::class, 'update'])->name('profile.update');
        Route::put('/bio', [ProfileController::class, 'updateBio'])->name('profile.bio');
        
        Route::post('/avatar', [ProfileController::class, 'updateAvatar'])->name('profile.avatar.update');
        
        Route::prefix('educations')->group(function () {
            Route::post('/', [ProfileController::class, 'storeEducation'])->name('profile.education.store');
            Route::put('/', [ProfileController::class, 'updateEducation'])->name('profile.education.update');
            Route::delete('{id}', [ProfileController::class, 'educationDestroy'])->name('profile.education.destroy');
        });
        
        Route::prefix('experiences')->group(function () {
            Route::post('/', [ProfileController::class, 'storeExperiences'])->name('profile.experience.store');
            Route::put('/', [ProfileController::class, 'updateExperience'])->name('profile.experience.update');
            Route::delete('{id}', [ProfileController::class, 'experienceDestroy'])->name('profile.experience.destroy');
        });

        Route::prefix('skills')->group(function () {
            Route::post('/', [ProfileController::class, 'storeSkill'])->name('profile.skills.store');
            Route::delete('{skill}', [ProfileController::class, 'skillDestroy'])->name('profile.skills.destroy');
        });
    });

    Route::prefix('documents')->group(function () {
        Route::get('/', [DocumentController::class, 'index'])->name('document.index');
        Route::post('/ktp/upload', [DocumentController::class, 'uploadKTP'])->name('document.ktp.upload');
        Route::delete('/ktp', [DocumentController::class, 'deleteKTP'])->name('document.ktp.delete');

        Route::post('cv/upload', [DocumentController::class, 'uploadCV'])->name('document.cv.upload');
        Route::delete('cv', [DocumentController::class, 'deleteCV'])->name('document.cv.delete');

    });
});

Route::prefix('article')->group(function () {
    Route::get('/', [ArticlesController::class, 'index'])->name('article.index');
    Route::get('{slug}', [ArticlesController::class, 'show'])->name('article.show');
});

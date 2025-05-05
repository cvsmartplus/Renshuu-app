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


    Route::get('/profile', [ProfileController::class, 'index'])->name('profile.index');
    Route::post('/profile/avatar', [ProfileController::class, 'updateAvatar'])->name('profile.avatar.update');
    Route::put('/profile/data', [ProfileController::class, 'update'])->name('profile.update');
    Route::put('/profile/bio', [ProfileController::class, 'updateBio'])->name('profile.bio');
    Route::post('/profile/educations', [ProfileController::class, 'storeEducation'])->name('profile.education.store');
    Route::put('/profile/educations', [ProfileController::class, 'updateEducation'])->name('profile.education.update');
    Route::delete('/profile/educations/{id}', [ProfileController::class, 'educationDestroy'])->name('profile.education.destroy');
    Route::post('/profile/experiences', [ProfileController::class, 'storeExperiences'])->name('profile.experience.store');
    Route::put('/profile/experiences', [ProfileController::class, 'updateExperience'])->name('profile.experience.update');
    Route::delete('/profile/experiences/{id}', [ProfileController::class, 'experienceDestroy'])->name('profile.experience.destroy');
    Route::post('/profile/skills', [ProfileController::class, 'storeSkill'])->name('profile.skills.store');
    Route::delete('/profile/skills/{skill}', [ProfileController::class, 'skillDestroy'])->name('profile.skills.destroy');
});

Route::prefix('article')->group(function () {
    Route::get('/', [ArticlesController::class, 'index'])->name('article.index');
    Route::get('/{slug}', [ArticlesController::class, 'show'])->name('article.show');
});

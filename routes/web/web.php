<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Article;
use App\Models\JobPosition;

Route::domain(env('APP_URL'))->group(function () {
        Route::get('/', function () {
        $articles = Article::latest()->take(4)->get();
        $jobs = JobPosition::latest()->take(4)->get();

        return Inertia::render('Landing', [
            'title' => 'Selamat Datang!',
            'articles' => $articles,
            'jobs' => $jobs
        ]);
    })->middleware('onlyUser')->name('welcome');
});

Route::fallback(function () {
    return response()->view('errors.page.404', [], 404);
});


require __DIR__ . '/auth.php';
require __DIR__ . '/user.php';
require __DIR__ . '/company.php';
require __DIR__ . '/admin.php';

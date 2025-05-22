<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Article;
use App\Models\Course;

Route::get('/', function () {
    $articles = Article::latest()->take(4)->get();
    $courses = Course::latest()->take(3)->get();

    return Inertia::render('Landing', [
        'title' => 'Selamat Datang!',
        'articles' => $articles,
        'courses' => $courses,
    ]);
})->middleware('onlyUser')->name('welcome');


Route::get('/test-500', function () {
    abort(500);
});
Route::get('/test-403', function () {
    abort(403);
});

Route::fallback(function () {
    return response()->view('errors.page.404', [], 404);
});

require __DIR__ . '/auth.php';
require __DIR__ . '/user.php';
require __DIR__ . '/company.php';
require __DIR__ . '/admin.php';

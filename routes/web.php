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
})->name('welcome');


require __DIR__ . '/auth.php';
require __DIR__ . '/user.php';
require __DIR__ . '/company.php';
require __DIR__ . '/admin.php';

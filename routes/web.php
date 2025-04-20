<?php


use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Landing', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('landing');



require __DIR__ . '/auth.php';
require __DIR__ . '/user.php';
require __DIR__ . '/company.php';
require __DIR__ . '/admin.php';

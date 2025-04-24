<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Company\CompanyController;

Route::prefix('dashboard')->middleware(['auth', 'role:company'])->group(function () {
    Route::get('/', [CompanyController::class, 'dashboard'])->name('company.dashboard');
});


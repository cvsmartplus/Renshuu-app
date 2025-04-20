<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Company\CompanyController;

Route::middleware(['auth', 'role:company'])->group(function () {
    Route::get('/company/dashboard', [CompanyController::class, 'dashboard'])->name('company.dashboard');
});

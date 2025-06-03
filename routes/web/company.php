<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Company\CompanyController;

Route::middleware(['auth', 'role:company'])->prefix('company')->group(function () {
    Route::get('dashboard', [CompanyController::class, 'dashboard'])->name('company.dashboard');
});

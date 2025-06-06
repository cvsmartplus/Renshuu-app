<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function __invoke()
    {
        return Inertia::render('Auth/Login', [
            //'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }
}

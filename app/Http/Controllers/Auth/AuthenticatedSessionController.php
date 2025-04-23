<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Response as BaseResponse;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): BaseResponse | RedirectResponse
    {
        $request->validate([
            'email' => 'required|email|exists:users,email',
            'password' => 'required|string',
        ], [
            'email.required' => 'Email tidak boleh kosong.',
            'email.email' => 'Format email tidak valid.',
            'email.exists' => 'Email ini belum terdaftar.',
            'password.required' => 'Password tidak boleh kosong.',
            'password.exists' => 'Password tidak valid.',
        ]);

        $request->authenticate();
        $request->session()->regenerate();

        $user = Auth::user();

        switch ($user->role) {
            case 'admin':
                return Inertia::location(route('admin.dashboard'));
            case 'company':
                return Inertia::location(route('company.dashboard'));
            case 'user':
                return redirect()->route('dashboard');
            default:
                Auth::logout();
                return redirect()->route('login')->withErrors([
                    'email' => 'Role tidak dikenali.',
                ]);
        }
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}

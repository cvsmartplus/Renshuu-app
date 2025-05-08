<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class VerifyEmailController extends Controller
{
    /**
     * Mark the authenticated user's email address as verified.
     */
    public function __invoke(EmailVerificationRequest $request): RedirectResponse
    {
        if ($request->user()->hasVerifiedEmail()) {
            return $this->redirectByRole($request->user()->role);
        }

        if ($request->user()->markEmailAsVerified()) {
            event(new Verified($request->user()));
        }

        return $this->redirectByRole($request->user()->role);
    }

    /**
     * Redirect user based on role.
     */
    private function redirectByRole(string $role): RedirectResponse
    {
        switch ($role) {
            case 'admin':
                return Inertia::location(route('admin.dashboard') . '?verified=1');
            case 'company':
                return Inertia::location(route('company.dashboard') . '?verified=1');
            case 'user':
                return redirect()->route('user.dashboard', ['verified' => 1]);
            default:
                Auth::logout();
                return redirect()->route('login')->withErrors([
                    'email' => 'Role tidak dikenali.',
                ]);
        }
    }
}

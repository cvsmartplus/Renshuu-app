<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;

class EmailVerificationNotificationController extends Controller
{
    /**
     * Send a new email verification notification.
     */
    public function store(Request $request): RedirectResponse
    {
        $user = $request->user();

        if ($user->hasVerifiedEmail()) {
            return $this->redirectByRole($user->role);
        }

        $user->sendEmailVerificationNotification();

        return back()->with('status', 'Link verifikasi baru telah dikirim ke email Anda.');
    }

    /**
     * Redirect user based on role.
     */
    private function redirectByRole(string $role): RedirectResponse
    {
        switch ($role) {
            case 'admin':
                return Inertia::location(route('admin.dashboard'));
            case 'company':
                return Inertia::location(route('company.dashboard'));
            case 'user':
                return redirect()->route('user.dashboard');
            default:
                Auth::logout();
                return redirect()->route('login')->withErrors([
                    'email' => 'Role tidak dikenali.',
                ]);
        }
    }
}

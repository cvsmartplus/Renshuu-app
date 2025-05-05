<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class OTPVerificationController extends Controller
{
    //
    public function create()
{
    $email = session('otp_email');

    if (!$email) {
        return redirect(route('register'))->withErrors(['error' => 'Sesi anda telah berakhir, silahkan coba lagi']);
    }

    return Inertia::render('Auth/OTPVerification', [
        'email' => $email
    ]);
}


public function store(Request $request)
{
    $request->validate([
        'otp' => 'required|digits:6',
    ]);

    $otp = (int) trim($request->otp);
    $user = User::where('otp', $otp)->first();


    if ($user) {
        $user->update(['otp' => null, 'email_verified_at' => now()]);
        Auth::login($user);

        switch ($user->role) {
        case 'admin':
            return Inertia::location(route('admin.dashboard'));

        case 'company':
            return Inertia::location(route('company.dashboard'));

            case 'user':
            default:
                return redirect()->route('user.dashboard');
        }
    }

    return redirect()->back()->withErrors(['otp' => 'OTP yang Anda masukkan salah!']);
}

}

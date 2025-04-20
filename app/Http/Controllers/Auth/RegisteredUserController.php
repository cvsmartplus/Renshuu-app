<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Mail\OTPMail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle registration for normal users (React-based)
     */
    public function store(Request $request): RedirectResponse
    {
        if (User::where('email', $request->email)->exists()) {
            return redirect()->back()->withErrors(['email' => 'Email sudah terdaftar!']);
        }

        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'role' => ['required']
        ], [
            'password.confirmed' => 'Kata sandi tidak sesuai!',
        ]);

        $otp = rand(100000, 999999);

        $user = User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
            'otp'      => $otp,
            'role'     => $request->role
        ]);

        try {
            Mail::to($user->email)->send(new OTPMail($user->otp, $user->name, $user->email));
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['email' => 'Gagal mengirim email OTP. Silakan coba lagi.']);
        }

        session(['otp_email' => $user->email]);

        return redirect()->route('otp.verify');
    }

    /**
     * Show company registration form (Blade-based)
     */
    public function createCompany()
    {
        return view('companyAdmin.auth.register');
    }

    /**
     * Handle company registration (Blade-based)
     */
    public function storeCompany(Request $request)
    {
        if (User::where('email', $request->email)->exists()) {
            return redirect()->back()->withErrors(['email' => 'Email sudah terdaftar!']);
        }

        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'role' => ['required']
        ], [
            'password.confirmed' => 'Kata sandi tidak sesuai!',
        ]);

        $otp = rand(100000, 999999);

        $user = User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
            'otp'      => $otp,
            'role'     => $request->role
        ]);

        try {
            Mail::to($user->email)->send(new OTPMail($user->otp, $user->name, $user->email));
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['email' => 'Gagal mengirim email OTP. Silakan coba lagi.']);
        }

        session(['otp_email' => $user->email]);

        return redirect()->route('otp.verify')->with('success', 'Akun perusahaan berhasil dibuat. Silakan verifikasi OTP.');
    }
}

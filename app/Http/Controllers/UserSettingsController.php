<?php

namespace App\Http\Controllers;

use App\Mail\OTPMail;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class UserSettingsController extends Controller
{
    //
    public function index()
    {
        $user = Auth::user();
        $profile = $user->profile;
        return inertia('Profile/UserSettings',
            [
                'auth' => ['user' => $user],
                'profile' => $profile
            ]);
    }


    public function update(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255'],
        ]);

        $user = $request->user();

        // Cek apakah email berubah
        if ($user->email !== $request->email) {
            if (User::where('email', $request->email)->exists()) {
                return back()->withErrors(['email' => 'Email sudah terdaftar!']);
            }

            $otp = $user->otp ?? rand(100000, 999999);

            $user->update([
                'email' => $request->email,
                'email_verified_at' => null,
                'otp' => $otp,
                'name' => $request->name,
            ]);

            try {
                Mail::to($request->email)->send(new OTPMail($otp, $user->name, $request->email));
            } catch (\Exception $e) {
                return back()->withErrors(['email' => 'Gagal mengirim email OTP. Silakan coba lagi.']);
            }

            session(['otp_email' => $request->email]);

            return redirect()->route('otp.verify');
        }

        $user->update([
            'name' => $request->name,
        ]);

        return back()->with('success', 'Profil berhasil diperbarui.');
    }
}

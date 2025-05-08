<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Mail\OTPMail;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class UpdateEmailController extends Controller
{
    public function __invoke(Request $request): RedirectResponse
    {
        $request->validate([
            'email' => ['required', 'string', 'email', 'max:255'],
        ]);

        $user = $request->user();

        if ($user->email !== $request->email) {
            if (User::where('email', $request->email)->exists()) {
                return back()->withErrors(['email' => 'Email sudah terdaftar!']);
            }

            $otp = $user->otp ?? rand(100000, 999999);

            $user->update([
                'email' => $request->email,
                'email_verified_at' => null,
                'otp' => $otp,
            ]);

            try {
                Mail::to($request->email)->send(new OTPMail($otp, $user->name, $request->email));
            } catch (\Exception $e) {
                return back()->withErrors(['email' => 'Gagal mengirim email OTP. Silakan coba lagi.']);
            }

            auth()->logout();

            session()->forget('otp_email');

            session(['otp_email' => $request->email]);

            return redirect()->route('otp.verify');
        }

        return back()->with('success', 'Email tidak mengalami perubahan.');
    }
}

<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Mail\OTPMail;
use App\Models\Otp;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class OtpController extends Controller
{
    //
    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'otp' => 'required'
        ]);

        $user = User::where('email', $request->email)->firstOrFail();

        $otpRecord = Otp::where('user_id', $user->id)
            ->where('code', $request->otp)
            ->where('is_used', false)
            ->where('expired_at', '>', now())
            ->first();

        if (!$otpRecord) {
            return response()->json(['message' => 'OTP tidak valid'], 422);
        }

        $otpRecord->update(['is_used' => true]);

        $user->email_verified_at = now();
        $user->save();

        Auth::login($user);
        $request->session()->regenerate();

        return response()->json([
            'message' => 'OTP berhasil diverifikasi',
            'user' => $user,
        ]);
    }

    public function resend(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ], [
            'email.required' => 'Email tidak boleh kosong.',
            'email.email' => 'Format email tidak valid.',
        ]);

        $user = User::where('email', $request->email)->firstOrFail();

        $otp = rand(100000, 999999);

        Otp::updateOrCreate([
            'user_id' => $user->id,
        ], [
            'code' => $otp,
            'expired_at' => now()->addMinutes(60),
        ]);

        try {
            Mail::to($user->email)->send(new OTPMail($otp, $user->name, $user->email));

            return response()->json([
                'message' => 'OTP berhasil dikirim ulang.',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Gagal mengirim email OTP. Silakan coba lagi.',
            ], 500);
        }
    }
}

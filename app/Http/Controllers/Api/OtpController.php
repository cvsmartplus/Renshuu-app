<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Otp;
use App\Models\User;
use Illuminate\Http\Request;

class OtpController extends Controller
{
    //
    public function __invoke(Request $request)
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

        $user->otp_verified = true;
        $user->save();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'OTP berhasil diverifikasi',
            'user' => $user,
            'token' => $token
        ]);
    }
}

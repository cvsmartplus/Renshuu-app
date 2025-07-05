<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function __invoke(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
            'remember' => 'boolean',
        ], [
            'email.required' => 'Email tidak boleh kosong.',
            'email.email' => 'Format email tidak valid.',
            'password.required' => 'Password tidak boleh kosong.',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'Email ini belum terdaftar.',
                'data' => null,
                'errors' => [
                    'email' => ['Email ini belum terdaftar.']
                ]
            ], 422);
        }

        if (!Hash::check($request->password, $user->password)) {
            return response()->json([
                'success' => false,
                'message' => 'Kata sandi salah.',
                'data' => null,
                'errors' => [
                    'password' => ['Kata sandi salah.']
                ]
            ], 422);
        }

        if (!$user->hasVerifiedOtp()) {
            return response()->json([
                'success' => false,
                'message' => 'Anda belum memverifikasi OTP! Silahkan cek email Anda.',
                'data' => [
                    'email' => $user->email,
                ],
                'errors' => null
            ], 403);
        }

        Auth::login($user);
        $request->session()->regenerate();

        return response()->json([
            'success' => true,
            'message' => 'Login berhasil.',
            'data' => [
                'user' => $user
            ],
            'errors' => null
        ], 200);
    }
}

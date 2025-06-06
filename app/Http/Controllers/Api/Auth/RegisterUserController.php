<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\Otp;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\OTPMail;

class RegisterUserController extends Controller
{
    //
    public function __invoke(Request $request)
    {
        if (User::where('email', $request->email)->exists()) {
            return response()->json([
                'message' => 'Email sudah terdaftar!',
                'errors' => [
                    'email' => ['Email sudah terdaftar!']
                ]
            ], 409);
        }

        $validated = $request->validate([
            'name' => 'required|string|min:3',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed|min:8',
            'terms' => 'accepted',
        ], [
            'name.required' => 'Nama tidak boleh kosong.',
            'name.min' => 'Nama minimal 3 karakter.',
            'email.required' => 'Email tidak boleh kosong.',
            'email.email' => 'Format email tidak valid.',
            'email.unique' => 'Email sudah terdaftar.',
            'password.required' => 'Password tidak boleh kosong.',
            'password.confirmed' => 'Password tidak sesuai.',
            'terms.accepted' => 'Anda harus menyetujui syarat dan ketentuan sebelum melanjutkan.',
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => bcrypt($validated['password']),
        ]);

        $otp = rand(100000, 999999);
        Otp::create([
            'user_id' => $user->id,
            'code' => $otp,
            'expired_at' => now()->addMinutes(60),
        ]);

        try {
            Mail::to($user->email)->send(new OTPMail($otp, $user->name, $user->email));
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Registrasi gagal!.',
            ]);
        }

        return response()->json([
            'message' => 'Registrasi berhasil! Silakan cek email untuk verifikasi.',
            'user' => $user,
        ]);
    }
}

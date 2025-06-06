<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Mail\ResetPasswordMail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;

class PasswordResetLinkController extends Controller
{
    //
    public function __invoke(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return back()->withErrors(['email' => 'Email tidak terdaftar.']);
        }

        $token = Password::createToken($user);

        Mail::to($user->email)->send(new ResetPasswordMail($token, $user->email));

        return response()->json(['status' => 'success', 'message' => 'Kami telah mengirimkan tautan reset password ke email Anda.']);
    }
}

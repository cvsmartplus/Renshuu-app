<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\Rules;

class NewPasswordController extends Controller
{
    //
    public function __invoke(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ],
        [
            'token.required' => 'Token diperlukan',
            'email.required' => 'Email diperlukan',
            'password.required' => 'Password diperlukan',
            'password.confirmed' => 'Password tidak sesuai',
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user) use ($request) {
                $user->forceFill([
                    'password' => Hash::make($request->password),
                ])->save();

                event(new PasswordReset($user));
            }
        );

        return $status === Password::PASSWORD_RESET
                    ? response()->json(['message' => __("Password berhasil diganti")])
                    : response()->json(['message' => __("Password gagal diganti")], 500);
    }
}

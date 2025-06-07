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
    public function create(Request $request)
    {
        $email = $request->query('email');

        if (!$email) {
            return redirect(route('register'))->withErrors([
                'error' => 'Email tidak ditemukan. Silakan daftar ulang.'
            ]);
        }

        if (!User::where('email', $email)->exists()) {
            return redirect(route('register'))->withErrors([
                'error' => 'Email tidak ditemukan. Silakan daftar ulang.'
            ]);
        }


        return Inertia::render('Auth/OTPVerification', [
            'email' => $email
        ]);
    }
}

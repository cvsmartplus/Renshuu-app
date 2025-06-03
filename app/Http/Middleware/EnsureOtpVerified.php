<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureOtpVerified
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    // EnsureOtpVerified.php

    public function handle($request, Closure $next)
    {
        $user = $request->user();   

        if (!$user || !$user->hasVerifiedOtp()) {
            return response()->json([
                'message' => 'Anda belum memverifikasi OTP',
                ], 403);
        }

        return $next($request);
    }

}

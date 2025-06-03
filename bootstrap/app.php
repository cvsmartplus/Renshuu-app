<?php

use App\Http\Middleware\EnsureOtpVerified;
use App\Http\Middleware\RedirectIfNotUser;
use App\Http\Middleware\RoleMiddleware;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web/web.php',
        api: __DIR__.'/../routes/api/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
        ]);
        $middleware->alias([
        'role' => RoleMiddleware::class,
        'onlyUser' => RedirectIfNotUser::class,
        'ensureOtpVerified' => EnsureOtpVerified::class
    ]);

        //
    })

    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();

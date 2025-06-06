<?php

use App\Http\Middleware\EnsureOtpVerified;
use App\Http\Middleware\RedirectIfNotUser;
use App\Http\Middleware\RoleMiddleware;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Session\Middleware\StartSession;
use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful;

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
            'ensureOtpVerified' => EnsureOtpVerified::class,
        ]);
        //  
        $middleware->statefulApi();  
    })

    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();

    $app->middleware([
        EncryptCookies::class,
        AddQueuedCookiesToResponse::class,
        StartSession::class,
    ]);

    $app->router->middlewareGroup('api', [
    EnsureFrontendRequestsAreStateful::class,
    'throttle:api',
    \Illuminate\Routing\Middleware\SubstituteBindings::class,
]);
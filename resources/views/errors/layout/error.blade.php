<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Error')</title>
    {{-- Load CSS and JS via Vite --}}
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
</head>
<body>
    <div class="container text-center mt-5">
        @yield('content')
    </div>
</body>
</html>

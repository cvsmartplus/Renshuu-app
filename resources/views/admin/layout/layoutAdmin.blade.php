<!DOCTYPE html>
<html lang="en">
<head>
    <x-head />
    @stack('styles')
</head>
<body class="d-flex flex-column flex-lg-row vh-100">
    <x-admin.sidebar />
    <div class="d-flex flex-column flex-grow-1">
        <x-admin.navbar />
        <main id="main-content" class="flex-grow-1">
            <div class="container-fluid py-4">
                @yield('content')
            </div>
            <x-admin.footer />
        </main>
    </div>
    <x-script script='{!! isset($script) ? $script : "" !!}' />
    @stack('scripts')
    @include('partials.sidebarToggle')
</body>
</html>

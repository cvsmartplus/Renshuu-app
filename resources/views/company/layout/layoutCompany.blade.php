<!DOCTYPE html>
<html lang="en">
<head>
    <x-head />
</head>
<body class="d-flex flex-column flex-lg-row vh-100 overflow-hidden">
    <x-company.sidebar />
    <div class="d-flex flex-column flex-grow-1">
        <x-company.navbar />
        <main id="main-content" class="flex-grow-1 overflow-auto">
            <div class="container-fluid py-4">
                @yield('content')
            </div>
            <x-company.footer />
        </main>
    </div>
    <x-script script='{!! isset($script) ? $script : "" !!}' />
    @include('partials.sidebarToggle')
</body>
</html>

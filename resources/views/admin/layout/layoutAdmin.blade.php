<!DOCTYPE html>
<html lang="en" data-theme="light">

<x-head />

<body class="custom-bg">

    <x-admin.sidebar />

    <main class="dashboard-main">

        <x-admin.navbar />

        <div class="dashboard-main-body">
            @yield('content')
        </div>

        <x-admin.footer />
        
    </main>

    <x-script script='{!! isset($script) ? $script : "" !!}' />

</body>
</html>
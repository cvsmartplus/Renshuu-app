<!DOCTYPE html>
<html lang="en" data-theme="light">

<x-head />

<body class="custom-bg">

    <x-company.sidebar />

    <main class="dashboard-main">

        <x-company.navbar />

        <div class="dashboard-main-body">
            @yield('content')
        </div>

        <x-company.footer />
        
    </main>

    <x-script script='{!! isset($script) ? $script : "" !!}' />

</body>
</html>
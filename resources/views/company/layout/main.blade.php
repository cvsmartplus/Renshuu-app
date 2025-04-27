<!DOCTYPE html>
<html lang="en" data-theme="light">

<x-head />

<body class="custom-bg">
    @yield('content')
    <x-script script='{!! isset($script) ? $script : "" !!}' />
    @stack('scripts')
</body>
</html>

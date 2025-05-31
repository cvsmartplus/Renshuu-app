<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', config('app.name') . ' | Admin')</title>

    <link rel="icon" type="image/png" href="{{ asset('assets/images/favicon.png') }}" sizes="16x16">

    {{-- Custom Font --}}
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

    {{-- chart js --}}
    <script src="{{ asset('assets/js/lib/chart.min.js') }}"></script>
    
    {{-- data tables --}}
    <link rel="stylesheet"  href="{{ asset('assets/css/lib/datatables.min.css') }}">

    <!-- Text Editor css -->
    <link rel="stylesheet" href="{{ asset('assets/js/richtexteditor/rte_theme_default.css') }}" />
    <script type="text/javascript" src="{{ asset('assets/js/richtexteditor/rte.js') }}"></script>
    <script type="text/javascript" src='{{ asset('assets/js/richtexteditor/plugins/all_plugins.js') }}'></script>

    <link href="{{ asset('assets/css/lib/bootstrap.min.css') }}" rel="stylesheet" type="text/css">
    <!-- Scripts -->
    <script src="{{ asset('assets/js/lib/popper.min.js') }}"></script>
    <script src="{{ asset('assets/js/lib/bootstrap.min.js') }}"></script>
    
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
</head>

@extends('company.layout.layoutCompany')

@section('content')
    <div class="col-12 col-lg-6 d-flex align-items-center justify-content-center py-5 px-4">
        <div class="w-100" style="max-width: 480px;">
            <div class="mb-4 text-center text-lg-start">
                <a href="#" class="d-inline-block mb-4">
                    <img src="{{ asset('images/renshuu-logo.png') }}" alt="logo" style="max-width: 200px;">
                </a>
                <h4 class="mb-2 text-black">Dashboard</h4>
                <p class="text-darkblue">
                    Hai Company Admin! Selamat datang di dashboard
                </p>
            </div>
        </div>
    </div>
@endsection

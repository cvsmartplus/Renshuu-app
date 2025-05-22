@extends('errors.layout.error')

@section('title', '500 Kesalahan Server')

@section('content')
<div class="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
    <img src="{{ asset('images/status_code/500.png') }}" alt="500 Internal Server Error" class="img-fluid" style="max-width: 400px;">
    <h1 class="text-danger fw-bold mt-3">Oops! Error 500</h1>
    <p class="text-secondary fs-5">
        Servernya lagi pusing, mungkin kebanyakan beban kerja... <br> Coba lagi nanti ya!
    </p>
    <a href="{{ route('welcome') }}" class="btn btn-cta rounded-pill fw-bold text-jost" style="text-decoration: none">
        Pulang ke Beranda
    </a>
</div>
@endsection

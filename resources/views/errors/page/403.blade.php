@extends('errors.layout.error')

@section('title', '403 Akses Ditolak')

@section('content')
<div class="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
    <img src="{{ asset('images/status_code/403.png') }}" alt="403 Forbidden" class="img-fluid" style="max-width: 400px;">
    <h1 class="text-warning fw-bold mt-3">Yah! Error 403</h1>
    <p class="text-secondary fs-5">
        Eh, akses ditolak nih! <br> Kayaknya kamu nggak punya izin buat masuk ke sini...
    </p>
    <a href="{{ route('welcome') }}" class="btn btn-cta rounded-pill fw-bold text-jost" style="text-decoration: none">
        Pulang ke Beranda
    </a>
</div>
@endsection

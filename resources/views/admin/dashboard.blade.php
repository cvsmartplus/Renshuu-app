@extends('admin.layout.layoutAdmin')

@section('content')
    {{-- <div class="col-12 col-lg-6 d-flex align-items-center justify-content-center py-5 px-4">
        <div class="w-100" style="max-width: 480px;">
            <div class="mb-4 text-center text-lg-start">
                <a href="#" class="d-inline-block mb-4">
                    <img src="{{ asset('images/renshuu-logo.png') }}" alt="logo" style="max-width: 200px;">
                </a>
                <h4 class="mb-2 text-black">Dashboard</h4>
                <p class="text-secondary text-base">
                    Hai Admin! Selamat datang di dashboard
                </p>
            </div>
        </div>
    </div> --}}

    <div class="container">
        <div class="row ">
            <div class="col-xl-4 col-lg-4">
                <div class="card" style="background: linear-gradient(135deg, #e0f7fa, #ffffff); border-radius: 12px;">
                  <div class="card-body p-4">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <h5 class="card-title mb-0 text-muted">Total Anggota</h5>
                        <h2 class="mb-0 fw-bold">{{$users}}</h2>
                        <small class="{{ $growth >= 0 ? 'text-success' : 'text-danger' }}">
                          {{ $growth >= 0 ? '+' : '' }}{{ $growth }} dibandingkan bulan lalu
                      </small>
                      </div>
                      <div class="card-icon" style="background-color: #003366; padding: 10px; border-radius: 50%;">
                        <i class="fas fa-users text-white fa-2x"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
        </div>
    </div>
@endsection
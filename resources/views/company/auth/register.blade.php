@extends('company.layout.main')

@section('content')
<section class="d-flex flex-wrap min-vh-100 bg-white">
    <div class="d-none d-lg-block col-lg-6 p-0">
        <img src="{{ asset('assets/images/auth/auth-img.jpg') }}"
            alt="register banner"
            class="w-100 h-100 object-fit-cover">
    </div>

    <div class="col-12 col-lg-6 d-flex align-items-center justify-content-center py-5 px-4">
        <div class="w-100" style="max-width: 480px;">
            <div class="mb-4 text-center text-lg-start">
                <a href="#" class="d-inline-block mb-4">
                    <img src="{{ asset('images/renshuu-logo.png') }}" alt="logo" style="max-width: 200px;">
                </a>
                <h4 class="mb-2 text-black">Daftar Akun Perusahaan Anda</h4>
                <p class="text-secondary text-base">
                    Selamat datang! Mohon untuk mengisi form di bawah ini.
                </p>
            </div>

            <form action="{{ route('register.company.post') }}" method="POST">
                @csrf

                <input type="hidden" name="role" value="company">

                <div class="mb-3">
                    <label for="company_name" class="form-label text-black">Nama Perusahaan</label>
                    <div class="input-group">
                        <span class="input-group-text bg-white text-black">
                            <iconify-icon icon="f7:person"></iconify-icon>
                        </span>
                        <input type="text" name="name" id="company_name" class="form-control bg-white" placeholder="Nama Perusahaan" required>
                    </div>
                </div>

                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <div class="input-group">
                        <span class="input-group-text bg-white">
                            <iconify-icon icon="mage:email"></iconify-icon>
                        </span>
                        <input type="email" name="email" id="email" class="form-control bg-white" placeholder="Email" required>
                    </div>
                </div>

                <div class="mb-3">
                    <label for="your-password" class="form-label">Kata Sandi</label>
                    <div class="input-group">
                        <span class="input-group-text bg-white">
                            <iconify-icon icon="solar:lock-password-outline"></iconify-icon>
                        </span>
                        <input type="password" name="password" id="your-password" class="form-control bg-white" placeholder="Kata Sandi" required>
                        <span class="input-group-text bg-white toggle-password cursor-pointer" data-toggle="#your-password">
                            <i class="ri-eye-line"></i>
                        </span>
                    </div>
                    <small class="text-secondary d-block mt-2">Buatlah kata sandi yang kuat dan unik</small>
                </div>

                <div class="mb-3">
                    <label for="password_confirmation" class="form-label">Konfirmasi Kata Sandi</label>
                    <div class="input-group">
                        <span class="input-group-text bg-white">
                            <iconify-icon icon="solar:lock-password-outline"></iconify-icon>
                        </span>
                        <input type="password" name="password_confirmation" id="password_confirmation" class="form-control bg-white" placeholder="Konfirmasi Kata Sandi" required>
                    </div>
                </div>

                <div class="form-check d-flex align-items-center mb-3">
                    <input class="form-check-input custom-check-blue me-2" type="checkbox" id="condition" required>
                    <label class="form-check-label" for="condition">
                        Dengan ini saya setuju dengan
                        <a href="#" class="text-blue">Syarat dan Ketentuan</a> serta
                        <a href="#" class="text-blue">Kebijakan Privasi</a>.
                    </label>
                </div>

                <button type="submit" class="btn-darkblue text-center w-100 radius-12">Daftar</button>

                <div class="mt-4 text-center">
                    <p class="mb-0 text-sm">
                        Sudah punya akun?
                        <a href="/login" class="text-blue fw-semibold">Masuk</a>
                    </p>
                </div>
            </form>

        </div>
    </div>
</section>

@php
    $script = '<script>
        function initializePasswordToggle(toggleSelector) {
            $(toggleSelector).on("click", function() {
                $(this).find("i").toggleClass("ri-eye-line ri-eye-off-line");
                var input = $($(this).attr("data-toggle"));
                if (input.attr("type") === "password") {
                    input.attr("type", "text");
                } else {
                    input.attr("type", "password");
                }
            });
        }
        initializePasswordToggle(".toggle-password");
    </script>';
@endphp
@endsection

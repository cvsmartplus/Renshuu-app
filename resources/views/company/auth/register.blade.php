@extends('company.layout.main')

@section('content')
<section class="d-flex flex-wrap min-vh-100 bg-white">
    <div class="d-none d-lg-block col-lg-6 p-0">
        <img src="{{ asset('images/assets/auth/auth-img.jpg') }}"
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
                            <i class="text-secondary fas fa-building"></i>
                        </span>
                        <input type="text" name="name" id="company_name" class="form-control bg-white" placeholder="Nama Perusahaan" required>
                    </div>
                </div>

                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <div class="input-group">
                        <span class="input-group-text bg-white">
                            <i class="text-secondary fas fa-envelope"></i>
                        </span>
                        <input type="email" name="email" id="email" class="form-control bg-white" placeholder="Email" required>
                    </div>
                </div>

                <div class="mb-3">
                    <label for="your-password" class="form-label">Kata Sandi</label>
                    <div class="input-group">
                        <span class="input-group-text bg-white">
                            <i class="text-secondary fas fa-lock"></i>
                        </span>
                        <input type="password" name="password" id="your-password" class="form-control bg-white" placeholder="Kata Sandi" required>
                        <span class="input-group-text bg-white toggle-password cursor-pointer" data-toggle="#your-password" type="button">
                            <i class="text-secondary fas fa-eye"></i>
                        </span>
                    </div>
                    <small class="text-secondary d-block mt-2">Buatlah kata sandi yang kuat dan unik</small>
                    @error('password')
                        <div class="text-danger mt-1">{{ $message }}</div>
                    @enderror
                </div>

                <div class="mb-3">
                    <label for="password_confirmation" class="form-label">Konfirmasi Kata Sandi</label>
                    <div class="input-group">
                        <span class="input-group-text bg-white">
                            <i class="text-secondary fas fa-lock"></i>
                        </span>
                        <input type="password" name="password_confirmation" id="password_confirmation" class="form-control bg-white" placeholder="Konfirmasi Kata Sandi" required>
                        <span class="input-group-text bg-white toggle-password cursor-pointer" data-toggle="#password_confirmation" type="button">
                            <i class="text-secondary fas fa-eye"></i>
                        </span>
                    </div>
                    @error('password_confirmation')
                        <div class="text-danger mt-1">{{ $message }}</div>
                    @enderror
                </div>

                <div class="form-check d-flex align-items-center mb-3">
                    <input class="form-check-input custom-check-blue me-2" type="checkbox" id="condition" required>
                    <label class="form-check-label" for="condition">
                        Dengan ini saya setuju dengan
                        <a href="#" class="text-brand-950 text-decoration-none">Kebijakan Privasi</a> serta
                        <a href="#" class="text-brand-950 text-decoration-none">Syarat dan Ketentuan</a> Kami.
                    </label>
                </div>

                <button type="submit" class="btn-brand-950 text-center w-100 radius-12">Daftar</button>

                <div class="mt-4 text-center">
                    <p class="mb-0 text-sm">
                        Sudah punya akun?
                        <a href="/login" class="text-brand-950 fw-semibold">Masuk</a>
                    </p>
                </div>
            </form>

        </div>
    </div>
</section>

@push('scripts')
<script>
    $(document).ready(function() {
        $(".toggle-password").on("click", function(event) {
            event.preventDefault(); // Mencegah halaman refresh

            var icon = $(this).find("i");
            var input = $($(this).attr("data-toggle"));

            if (input.length > 0) {
                if (icon.hasClass("fa-eye")) {
                    icon.removeClass("fa-eye").addClass("fa-eye-slash");
                    input.attr("type", "text");
                } else {
                    icon.removeClass("fa-eye-slash").addClass("fa-eye");
                    input.attr("type", "password");
                }
            } else {
                console.error("Input tidak ditemukan untuk selector:", $(this).attr("data-toggle"));
            }
        });
    });
</script>
@endpush
@endsection

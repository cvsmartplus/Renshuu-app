@component('mail::message')
# Verifikasi Akun Anda

Halo, **{{ $name }}**  

Terima kasih telah bergabung dengan platform kami! Untuk mengaktifkan akun Anda, silakan masukkan kode OTP berikut:

@component('mail::panel')
# {{ $otp }}
@endcomponent

Kode OTP ini hanya berlaku selama beberapa menit. Jika Anda tidak merasa mendaftar di platform kami, abaikan email ini.

Terima kasih telah menggunakan layanan kami.  
Salam,  
{{ config('app.name') }}
@endcomponent

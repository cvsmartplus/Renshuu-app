@component('mail::message')
# Verifikasi Alamat Email Anda

Silakan klik tombol di bawah ini untuk memverifikasi email Anda:

@component('mail::button', ['url' => $url])
Verifikasi Email
@endcomponent

Jika Anda tidak mendaftar, abaikan email ini.

Salam,<br>
{{ config('app.name') }}
@endcomponent

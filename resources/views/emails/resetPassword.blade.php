@component('mail::message')

Kami menerima permintaan untuk mereset password akun Anda.

Silakan klik tombol di bawah ini untuk melanjutkan proses reset password:

@component('mail::button', ['url' => $url, 'color' => 'primary'])
Reset Password
@endcomponent

Jika Anda tidak meminta reset password, abaikan email ini.

<p style="font-size: 12px; color: #888; text-align: center;">
    Terima kasih telah menggunakan layanan kami. Hubungi kami jika ada pertanyaan lebih lanjut.
</p>

Salam,<br>
{{ config('app.name') }}
@endcomponent

<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;

class ResetPasswordMail extends Mailable
{
    public $token;
    public $email;

    public function __construct($token, $email)
    {
        $this->token = $token;
        $this->email = $email;
    }

    public function build()
    {
        return $this->subject('Permintaan Reset Password di Renshuu')
            ->markdown('emails.resetPassword')
            ->with([
                'url' => url('/reset-password/' . $this->token . '?email=' . urlencode($this->email)),
            ]);
    }
}

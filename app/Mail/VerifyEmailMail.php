<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;

class VerifyEmailMail extends Mailable implements ShouldQueue
{
    use Queueable;

    public $url;

    public function __construct(string $url)
    {
        $this->url = $url;
    }
    
    public function build()
    {
        
        return $this->subject('Verifikasi Email Anda')
            ->markdown('emails.verifyEmail')
            ->with([
                'url' => $this->url,
            ]);
    }
}
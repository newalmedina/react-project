<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ForgetPasswordMail extends Mailable
{
    use Queueable, SerializesModels;

    private $reciever;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($reciever)
    {
        $this->reciever = $reciever;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $reciever = $this->reciever;
        return $this
            ->subject('Restablecer contraseña')
            ->view('mails.forget_password', compact("reciever"));
    }
}

@extends('layouts.front.default_email')
@section('head_page')
    <style>
        .boton {
            border: 1px solid #2e518b; /*anchura, estilo y color borde*/
            padding: 10px; /*espacio alrededor texto*/
            background-color: #2e518b; /*color botón*/
            color: #ffffff; /*color texto*/
            text-decoration: none; /*decoración texto*/
            text-transform: uppercase; /*capitalización texto*/
            font-family: 'Helvetica', sans-serif; /*tipografía texto*/
            border-radius: 50px; /*bordes redondos*/
            }
    </style>
@stop
@section('content')
  <div>
    <p>Hola <strong>{{ $reciever->userProfile->full_name }}</strong>!</p>
    <p>Acabas de enviar una solicitud para restablecer contraseña.</p>
  </div>
  <div style="margin-top: 30px;">
    <a class="boton" target="_blank" href="{{ env("FRONT_URL")."reset-password/".$reciever->id.'/'. $reciever->forget_password_token  }}"> Cambiar Contraseña</a>
  </div>
@stop
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use App\Mail\ContatoMail;

class ContatoController extends Controller
{
    public function index()
    {
        return view('app');
    }

    public function enviar(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nome' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'telefone' => 'required|string|max:20',
            'empresa' => 'nullable|string|max:255',
            'tipo_projeto' => 'nullable|string|max:255',
            'mensagem' => 'required|string|max:2000',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            Mail::to('corporativo@biig.com.br')->send(new ContatoMail($request->all()));
        } catch (\Throwable $e) {
            return response()->json([
                'success' => false,
                'message' => 'Não foi possível enviar a mensagem no momento. Tente novamente mais tarde.'
            ], 500);
        }

        return response()->json([
            'success' => true,
            'message' => 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
        ]);
    }
}


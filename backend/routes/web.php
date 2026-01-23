<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ServicosController;
use App\Http\Controllers\SobreController;
use App\Http\Controllers\ClientesController;
use App\Http\Controllers\ContatoController;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/servicos', [ServicosController::class, 'index'])->name('servicos');
Route::get('/sobre', [SobreController::class, 'index'])->name('sobre');
Route::get('/login', [HomeController::class, 'index'])->name('login');
Route::get('/contato', [ContatoController::class, 'index'])->name('contato');
Route::post('/contato', [ContatoController::class, 'enviar'])->name('contato.enviar');


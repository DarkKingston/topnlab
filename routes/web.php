<?php
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [\App\Http\Controllers\IndexController::class, 'login'])->name('login');
Route::get('/test', [\App\Http\Controllers\IndexController::class, 'test'])->name('test');
Route::get('/dashboard', [\App\Http\Controllers\IndexController::class, 'index'])->name('dashboard');


?>

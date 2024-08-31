<?php
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [\App\Http\Controllers\IndexController::class, 'loginShow'])->name('login')->middleware('guest');
Route::post('/', [\App\Http\Controllers\IndexController::class, 'loginCheck'])->name('login.check')->middleware('guest');
Route::get('/test', [\App\Http\Controllers\IndexController::class, 'test'])->name('test');
Route::get('/dashboard', [\App\Http\Controllers\IndexController::class, 'index'])->name('dashboard');
Route::get('/object/{id}', [\App\Http\Controllers\IndexController::class, 'object'])->name('object');


?>

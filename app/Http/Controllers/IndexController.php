<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class IndexController extends Controller
{
    public function login(){
        return Inertia::render('Login', [
            'title'=>'Login'
        ]);
    }

    public function test(){
        return Inertia::render('Test', [
            'title'=>'Test'
        ]);
    }

    public function index(){
        return Inertia::render('Dashboard', [
            'title'=>'Dashboard'
        ]);
    }

    public function object($id) {
        $object = ['id'=>$id];
        return Inertia::render('Object', [
            'title'=>'Object',
            'id' => $id,
            'object' => $object,
        ]);
    }
}

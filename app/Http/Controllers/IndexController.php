<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class IndexController extends Controller
{
    public function loginShow(){


        return Inertia::render('Login', [
            'title'=>'Login'
        ]);
    }

    public function loginCheck(Request $request)
    {
        if ($request->isMethod('post')) {
//            \Log::info('Login Request:', $request->all());  // Log the incoming request data

            $credentials = $request->validate([
                'username' => 'required',  // Validate that username and password are required
                'password' => 'required'
            ]);

            // Attempt to authenticate.
            if (Auth::attempt($credentials, $request->filled('remember'))) {
                request()->session()->regenerate();

//                \Log::debug('Authenticated user:', ['user' => Auth::user()]);
                return redirect('/dashboard');
            }
            return back()->withErrors([
                'email' => 'The provided credentials are incorrect.',
            ]);
        }else{
            return Inertia::render('Login', [
                'title' => 'Login'
            ]);
        }

    }


    public function test(){
        if (Auth::check()) {
            \Log::info('User is authenticated', ['user' => Auth::user()]);
            return Inertia::render('Test', [
                'title'=>'Test',
                'user' => Auth::user()
            ]);
        } else {
            \Log::warning('User is not authenticated');
            return redirect()->route('login');
        }

    }

//    public function index(){
////        if (Auth::check()) {
////            \Log::info('User is authenticated', ['user' => Auth::user()]);
////            return Inertia::render('Dashboard', [
////                'title'=>'Dashboard',
////                'user' => Auth::user()
////            ]);
////        } else {
////            \Log::warning('User is not authenticated');
////            return redirect()->route('login');
////        }
//        return Inertia::render('Dashboard', [
//            'title'=>'Dashboard',
//            'user' => Auth::user()
//        ]);
//    }

    public function index(){
        $data = [
            "hash" => "790ebb21ae5ebb8d5c8cb0b14460c11a"
        ];
        $url = 'https://crm.mirax.md/restapi/deal.list';

        $response = Http::withOptions([
            'verify' => false  // Disable SSL certificate verification
        ])->post($url, $data);

        if ($response->successful()) {
            $responseData = $response->json();

            $items = $responseData['items'] ?? [];

            return Inertia::render('Dashboard', [
                'title' => 'Dashboard',
                'user' => Auth::user(),
                'objects' => $items
            ]);
        } else {
            // Log error or handle it accordingly
            \Log::error('Failed to fetch deals from the API', [
                'status' => $response->status(),
                'error' => $response->body()
            ]);

            // Optionally, redirect back or show an error page
            return back()->withErrors('Failed to load deals from the API.');
        }
    }


    public function object($id) {
        $object = ['id'=>$id];
//        if (Auth::check()) {
//            \Log::info('User is authenticated', ['user' => Auth::user()]);
//            return Inertia::render('Object', [
//                'title'=>'Object',
//                'id' => $id,
//                'object' => $object,
//                'user' => Auth::user()
//            ]);
//        } else {
//            \Log::warning('User is not authenticated');
//            return redirect()->route('login');
//        }
        return Inertia::render('Object', [
            'title'=>'Object',
            'id' => $id,
            'object' => $object,
            'user' => Auth::user()
        ]);
    }
}

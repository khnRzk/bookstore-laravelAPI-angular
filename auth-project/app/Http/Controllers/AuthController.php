<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use \Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request) {

        $validatedData = request()->validate([
            'name' => 'required|string|max:255',
            'password' => 'required|string|min:6',
         ]);

        $validatedData['password'] = bcrypt($validatedData['password']);

        $user = User::create($validatedData);
        $accessToken = $user->createToken('authToken')->accessToken;

        return response(['user' => $user, 'token' => $accessToken, 'status'=>'200']);
    }

    public function login(Request $request) {
        $loginData = request()->validate([
            'name' => 'required|string|max:255',
            'password' => 'required'
         ]);

         if(!auth()->attempt($loginData)) {
            return response(['message'=>'Invalid credentials']);
         }
         $roleid = auth()->user()->role_id;
         $userid = auth()->user()->id;

        $accessToken =auth()->user()->createToken('authToken')->accessToken;

        return response(['user' => $userid, 'token' => $accessToken, 'role'=> $roleid]);

    }
}

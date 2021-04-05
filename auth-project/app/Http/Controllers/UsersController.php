<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function show() {
        $users = User::where('role_id','!=', 2)->get();

        return response($users);
    }
    public function authorStatus(Request $request){

        $user = User::find($request->user_id);

        $user->role_id = $request->role_id;
        $user->save();
        return response(['status'=>$user]);
    }
}

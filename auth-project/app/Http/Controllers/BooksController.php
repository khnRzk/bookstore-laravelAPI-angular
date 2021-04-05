<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\User;
use Illuminate\Http\Request;

class BooksController extends Controller
{
    // protected guarded = [];
    public function create(){
        $data = request()->validate([
            'user_id' => 'required',
            'title' => 'required',
            'price' => 'required',
        ]);

        $books = Book::create($data);
        
        return response(['status'=>true]);
    } 
    
    public function show() {

        $users = User::where('role_id','!=', 1 && 2)->get();
        $books =User::with('books.user')->where('role_id','!=', 1 && 2)->get();

        return response($books);
    }

    public function search(Request $request) {
        $query = Book::query();
        $key = $request->input('key');
        $query->whereRaw("title LIKE '%".$key ."%'");

        return $query->get();

    }
}

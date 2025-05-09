<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    //
    public function index() {
        $article = Article::all();
        return view('admin.pages.articles', compact('article'));    
    }
}

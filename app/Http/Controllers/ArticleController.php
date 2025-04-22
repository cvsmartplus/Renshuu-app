<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $articles = Article::latest()->get(); // Ambil data terbaru dulu
        return Inertia::render('Article', [
            'articles' => $articles
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
public function show(Article $artikel)
{
    $relatedArticles = Article::where('id', '!=', $artikel->id)
                            ->latest()
                            ->take(4)
                            ->get();

    return Inertia::render('Article/SingleArticle', [
        'article' => [
            'id' => $artikel->id,
            'title' => $artikel->title,
            'slug' => $artikel->slug,
            'content' => $artikel->content,
            'excerpt' => $artikel->excerpt,
            'media_path' => $artikel->media_path,
            'created_at' => $artikel->created_at->format('d M Y'),
            'author' => $artikel->author->name ?? 'Anonim',
        ],
        'relatedArticles' => $relatedArticles
    ]);
}



    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

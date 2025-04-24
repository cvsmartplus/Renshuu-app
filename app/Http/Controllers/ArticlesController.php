<?php

namespace App\Http\Controllers;

use App\Models\Article;

class ArticlesController extends Controller
{
    //
    public function index()
    {
        $articles = Article::latest()->get();
        return inertia('Article', [
            'articles' => $articles
        ]);
    }

    public function show($slug)
    {
        $article = Article::where('slug', $slug)->firstOrFail();

        $relatedArticles = Article::where('id', '!=', $article->id)
            ->latest()
            ->take(4)
            ->get();

        return inertia('Article/SingleArticle', [
            'article' => [
                'id' => $article->id,
                'title' => $article->title,
                'slug' => $article->slug,
                'content' => $article->content,
                'excerpt' => $article->excerpt,
                'media_path' => $article->media_path,
                'created_at' => $article->created_at->format('d M Y'),
                'author' => $article->author->name ?? 'Anonim',
            ],
            'relatedArticles' => $relatedArticles
        ]);
    }
}

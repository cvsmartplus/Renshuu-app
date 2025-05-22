<?php

namespace App\Http\Controllers;

use App\Models\Article;

class ArticlesController extends Controller
{
    //
    public function index()
    {
        $articles = Article::where('status', 'published')->latest()->get();
        return inertia('Article', [
            'articles' => $articles
        ]);
    }

    public function show($slug)
    {
        $article = Article::with(['author', 'category'])->where('slug', $slug)->firstOrFail();

        $relatedArticles = Article::with(['author', 'category'])
            ->where('id', '!=', $article->id)
            ->latest()
            ->take(4)
            ->get()
            ->map(function ($a) {
                return [
                    'id' => $a->id,
                    'title' => $a->title,
                    'slug' => $a->slug,
                    'excerpt' => $a->excerpt,
                    'media_path' => $a->media_path,
                    'published_at' => $a->published_at,
                    'author' => [
                        'name' => $a->author->name ?? 'Anonim',
                    ],
                    'category' => [
                        'name' => $a->category->name ?? 'Tanpa Kategori',
                    ],
                ];
            });

        return inertia('Article/SingleArticle', [
            'article' => [
                'id' => $article->id,
                'title' => $article->title,
                'slug' => $article->slug,
                'content' => $article->content,
                'excerpt' => $article->excerpt,
                'media_path' => $article->media_path,
                'published_at' => $article->published_at,
                'reading_time' => $article->reading_time,
                'views_count' => $article->views_count,
                'author' => [
                    'name' => $article->author->name ?? 'Anonim',
                ],
                'category' => [
                    'name' => $article->category->name ?? 'Tanpa Kategori',
                ],
            ],
            'relatedArticles' => $relatedArticles,
        ]);
    }
}

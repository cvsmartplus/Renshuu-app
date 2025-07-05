<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index(Request $request)
    {
        // Mulai query builder dengan relasi
        $query = Article::with('categories');

        // Validasi dan batasi query parameter
        $limit = $request->query('latest');
        if ($request->has('latest')) {
            $query->latestLimit($limit);
        }

        // Tambahan: filter berdasarkan kategori
        if ($request->has('category')) {
            $categoryId = intval($request->query('category'));
            $query->whereHas('categories', function ($q) use ($categoryId) {
                $q->where('categories.id', $categoryId);
            });
        }

        // Ambil data
        $articles = $query->get();

        // Buat response JSON
        return response()->json([
            'success' => true,
            'message' => 'Artikel ditemukan',
            'data' => [
                'count' => $articles->count(),
                'articles' => $articles
            ],
            'errors' => null
        ], 200);
    }
}
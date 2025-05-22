<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class ArticleController extends Controller
{
    // Tampilkan semua artikel (list)
    public function index()
    {
        $article = Article::with(['author', 'category'])->latest()->get();
        return view('admin.pages.articles', compact('article'));
    }

    // Form tambah artikel
    public function create()
    {
        $categories = Category::all();
        return view('admin.pages.createArticles', compact('categories'));
    }

    // Simpan artikel baru
public function store(Request $request)
{
    $request->validate([
        'title' => 'required|string|max:255',
        'content' => 'required|string',
        'excerpt' => 'nullable|string',
        'category_id' => 'nullable|exists:categories,id',
        'status' => 'required|in:draft,published',
        'published_at' => 'nullable|date',
        'media_path' => 'nullable|image|max:2048',
    ]);

    // Simpan thumbnail
    $mediaPath = null;
    if ($request->hasFile('media_path')) {
        $mediaPath = $request->file('media_path')->store('articles', 'public');
    }

    $article = Article::create([
        'title' => $request->title,
        'slug' => $request->slug,
        'content' => $request->content,
        'excerpt' => Str::limit(strip_tags($request->content), 150),
        'media_path' => $mediaPath,
        'category_id' => $request->category_id,
        'author_id' => auth()->user()->id,
        'status' => $request->status,
        'published_at' => $request->published_at ?? now(),
        'reading_time' => $this->estimateReadingTime($request->content),
        'seo_title' => $request->seo_title ?? $request->title,
        'meta_description' => $request->meta_description ?? Str::limit(strip_tags($request->content), 160),
    ]);

    return redirect()->route('admin.articles.index')->with('success', 'Artikel berhasil ditambahkan!');
}

private function estimateReadingTime($content)
{
    $wordCount = str_word_count(strip_tags($content));
    $minutes = ceil($wordCount / 200); 
    return $minutes . ' menit';
}


    // Tampilkan detail artikel
    public function show($id)
    {
        $article = Article::with(['author', 'category'])->findOrFail($id);
        return view('admin.pages.showArticle', compact('article'));
    }

    // Form edit artikel
    public function edit($id)
    {
        $article = Article::findOrFail($id);
        $categories = Category::all();
        return view('admin.pages.editArticle', compact('article', 'categories'));
    }

    // Simpan perubahan artikel
    public function update(Request $request, $id)
    {
        $article = Article::findOrFail($id);

        $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|unique:articles,slug,' . $article->id,
            'content' => 'required',
            'excerpt' => 'nullable|string',
            'category_id' => 'nullable|exists:categories,id',
            'status' => 'required|in:published,draft',
            'published_at' => 'nullable|date',
        ]);

        $article->update([
            'title' => $request->title,
            'slug' => $request->slug,
            'content' => $request->content,
            'excerpt' => $request->excerpt,
            'category_id' => $request->category_id,
            'status' => $request->status,
            'published_at' => $request->published_at,
        ]);

        return redirect()->route('admin.articles.index')->with('success', 'Artikel berhasil diperbarui!');
    }

    // Hapus artikel
    public function destroy($id)
    {
        $article = Article::findOrFail($id);
        $article->delete();

        return redirect()->route('admin.articles.index')->with('success', 'Artikel berhasil dihapus.');
    }
}
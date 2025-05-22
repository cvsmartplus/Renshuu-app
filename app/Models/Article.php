<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Article extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'content',
        'media_path',
        'status',
        'excerpt',
        'category_id',
        'author_id',
        'published_at',
        'reading_time',
        'seo_title',
        'meta_description'
    ];

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($article) {
            $article->slug = self::generateUniqueSlug($article->title);
        });
    }

    private static function generateUniqueSlug($title)
    {
        $originalSlug = Str::slug($title);
        $slug = $originalSlug;
        $count = 1;

        while (Article::where('slug', $slug)->exists()) {
            $slug = $originalSlug . '-' . $count;
            $count++;
        }

        return $slug;
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function author()
    {
        return $this->belongsTo(User::class, 'author_id');
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
}
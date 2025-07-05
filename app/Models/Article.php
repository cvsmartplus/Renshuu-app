<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    //
    use HasFactory;
    protected $fillable = [
        'author',
        'title',
        'slug',
        'description',
        'image',
        'content',
    ];

    public function categories()
    {
        return $this->belongsToMany(ArticlesCategory::class, 'article_category', 'article_id', 'category_id');
    }
    // Di app/Models/Article.php
    public function scopeLatestLimit($query, $limit = 3)
    {
        return $query->latest()->take($limit);
    }

}

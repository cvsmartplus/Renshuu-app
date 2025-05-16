<?php

namespace App\View\Components\Admin;

use Illuminate\View\Component;
use Illuminate\Contracts\View\View;

class ArticleCard extends Component
{
    public $title, $excerpt, $slug, $media_path;

    public function __construct($title, $excerpt, $slug, $media_path)
    {
        $this->title = $title;
        $this->excerpt = $excerpt;
        $this->slug = $slug;
        $this->media_path = $media_path;
    }

    public function render(): View
    {
        return view('components.admin.article-card');
    }
}

<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class ChartBox extends Component
{
    /**
     * Create a new component instance.
     */

     public $id, $title, $subtitle;

    public function __construct($id, $title, $subtitle)
    {
        //
        $this->id = $id;
        $this->title = $title;
        $this->subtitle = $subtitle;
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.chart-box');
    }
}

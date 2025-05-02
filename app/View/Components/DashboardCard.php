<?php

namespace App\View\Components;

use Illuminate\View\Component;

class DashboardCard extends Component
{
    public $title, $value, $growth, $bgGradient, $icon, $iconBg;

    public function __construct($title, $value, $growth, $bgGradient, $icon, $iconBg)
    {
        $this->title = $title;
        $this->value = $value;
        $this->growth = $growth;
        $this->bgGradient = $bgGradient;
        $this->icon = $icon;
        $this->iconBg = $iconBg;
    }

    public function render()
    {
        return view('components.dashboard-card');
    }
}

<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\User;
use App\Models\JobPosition;
use App\Models\Company;
use Carbon\Carbon;

class AdminController extends Controller
{
    public function dashboard()
    {
        return view('admin.dashboard', [
            'users' => User::count(),
            'growth' => $this->calculateGrowth(User::class),
            'articles' => Article::count(),
            'articlesGrowth' => $this->calculateGrowth(Article::class),
            'jobs' => JobPosition::count(),
            'jobsGrowth' => $this->calculateGrowth(JobPosition::class),
            'companies' => Company::count(),
            'companiesGrowth' => $this->calculateGrowth(Company::class),
            'userData' => $this->monthlyChartData(User::class),
            'articleData' => $this->monthlyChartData(Article::class),
            'latestArticles' => Article::latest()->take(5)->get(),
        ]);
    }

    private function calculateGrowth($model, $additionalWhere = [])
    {
        $thisMonth = Carbon::now()->month;
        $lastMonth = Carbon::now()->subMonth()->month;

        $thisMonthCount = $model::whereMonth('created_at', $thisMonth)
            ->when($additionalWhere, fn($q) => $q->where($additionalWhere))
            ->count();

        $lastMonthCount = $model::whereMonth('created_at', $lastMonth)
            ->when($additionalWhere, fn($q) => $q->where($additionalWhere))
            ->count();

        return $thisMonthCount - $lastMonthCount;
    }

    private function monthlyChartData($model, $additionalWhere = [])
    {
        $data = $model::selectRaw('MONTH(created_at) as month, COUNT(*) as total')
            ->when($additionalWhere, fn($q) => $q->where($additionalWhere))
            ->groupByRaw('MONTH(created_at)')
            ->pluck('total', 'month');

        $result = [];
        for ($i = 1; $i <= 12; $i++) {
            $result[] = $data[$i] ?? 0;
        }

        return $result;
    }
}
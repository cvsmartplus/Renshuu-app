<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Course;
use App\Models\User;
use Carbon\Carbon;

class AdminController extends Controller
{
    //

    public function dashboard()
    {
        $users = User::count();
        $courses = Course::count();
        $articles = Article::count();

        $thisMonth = Carbon::now()->month;
        $lastMonth = Carbon::now()->subMonth()->month;

        $usersThisMonth = User::whereMonth('created_at', $thisMonth)->count();
        $usersLastMonth = User::whereMonth('created_at', $lastMonth)->count();

        $coursesThisMonth = Course::whereMonth('created_at', $thisMonth)->count();
        $coursesLastMonth = Course::whereMonth('created_at', $lastMonth)->count();

        $articlesThisMonth = Article::whereMonth('created_at', $thisMonth)->count();
        $articlesLastMonth = Article::whereMonth('created_at', $lastMonth)->count();

        $growth = $usersThisMonth - $usersLastMonth;
        $coursesGrowth = $coursesThisMonth - $coursesLastMonth;
        $articlesGrowth = $articlesThisMonth - $articlesLastMonth;

        $userMonthly = User::selectRaw('MONTH(created_at) as month, COUNT(*) as total')
            ->groupByRaw('MONTH(created_at)')
            ->pluck('total', 'month');

        $courseMonthly = Course::selectRaw('MONTH(created_at) as month, COUNT(*) as total')
            ->groupByRaw('MONTH(created_at)')
            ->pluck('total', 'month');

        $articleMonthly = Article::selectRaw('MONTH(created_at) as month, COUNT(*) as total')
            ->groupByRaw('MONTH(created_at)')
            ->pluck('total', 'month');

        $userData = [];
        $courseData = [];
        $articleData = [];
        for ($i = 1; $i <= 12; $i++) {
            $userData[] = $userMonthly[$i] ?? 0;
            $courseData[] = $courseMonthly[$i] ?? 0;
            $articleData[] = $articleMonthly[$i] ?? 0;
        }

        return view('admin.dashboard', compact([
            'users', 'growth', 'courses', 'coursesGrowth', 'articles', 'articlesGrowth',
            'userData', 'courseData', 'articleData'
        ]));
    }
}

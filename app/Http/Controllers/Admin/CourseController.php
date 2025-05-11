<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Carbon\Carbon;

class CourseController extends Controller
{
    //
    public function index()
    {
        return view('admin.pages.courses', [
            'courses' => Course::count(),
            'coursesList' => Course::all(),
            'coursesGrowth' => $this->calculateGrowth(Course::class),
            'courseData' => $this->monthlyChartData(Course::class),
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
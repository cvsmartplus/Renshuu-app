<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    //
    public function index() {
        $user = User::all();
        $userGrowth = $this->calculateGrowth(User::class);
        $userVerifiedGrowth = $this->calculateGrowth(User::class, 'email_verified_at');
        return view('admin.pages.users', [
            'user' => $user,
            'userGrowth' => $userGrowth,
            'userVerifiedGrowth' => $userVerifiedGrowth
            ]);
    }

    public function show($id) {
        return view('admin.pages.userDetail', [
            'user' => User::findOrFail($id)
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
}

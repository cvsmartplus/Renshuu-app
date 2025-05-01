<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Carbon\Carbon;

class AdminController extends Controller
{
    //

    

public function dashboard()
{
    $users = User::count();

    $thisMonth = Carbon::now()->month;
    $lastMonth = Carbon::now()->subMonth()->month;

    $usersThisMonth = User::whereMonth('created_at', $thisMonth)->count();
    $usersLastMonth = User::whereMonth('created_at', $lastMonth)->count();

    $growth = $usersThisMonth - $usersLastMonth;

    return view('admin.dashboard', compact('users', 'growth'));
}

}

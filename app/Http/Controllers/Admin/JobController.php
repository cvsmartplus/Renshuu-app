<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\JobPosition;
use Illuminate\Http\Request;

class JobController extends Controller
{
    //
    public function index()
    {
        $jobs = JobPosition::all();
        return view('admin.pages.jobs', compact('jobs'));
    }
}

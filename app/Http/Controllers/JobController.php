<?php

namespace App\Http\Controllers;

use App\Models\JobPosition;

class JobController extends Controller
{
    //
    public function index()
    {
        $jobs = JobPosition::with(['company.user', 'skills'])->get();
        return inertia('Job', [
            'Jobs' => $jobs,
        ]);
    }

    public function show($slug)
    {
        $job = JobPosition::with(['company.user', 'skills'])->where('slug', $slug)->firstOrFail();
        return inertia('Job/SingleJob', [
            'job' => $job,
        ]);
    }
}

<?php

namespace App\Http\Controllers\Company;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class CompanyController extends Controller
{
    //
    public function dashboard()
    {
        $user = Auth::user();
        return view('company.dashboard', compact('user'));
    }
}

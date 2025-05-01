<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{

    public function index()
    {
        $user = Auth::user();
        $profile = $user->profile;
        $educations = $user->educations;     
        $experiences = $user->experiences;   
        $skills = $user->userSkills;              

        return inertia('Profile/UserProfile', [
            'auth' => ['user' => $user],
            'profile' => $profile,
            'educations' => $educations,
            'experiences' => $experiences,
            'skills' => $skills,
        ]);
    }

    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $user = $request->user();

        $fullName = trim($request->input('first_name') . ' ' . $request->input('last_name'));

        $user->name = $fullName;

        if ($user->isDirty('email')) {
            $user->email_verified_at = null;
        }

        $user->save();

        $user->profile()->updateOrCreate(
            ['user_id' => $user->id],
            [
                'phone'        => $request->input('phone'),
                'birth_date'   => $request->input('birth_date'),
                'gender'       => $request->input('gender'),
                'city'         => $request->input('city'),
                'province'     => $request->input('province'),
                'website'      => $request->input('website'),
                'social_links' => $request->input('social_links'),
            ]
        );

        return Redirect::back()->with('success', 'Profil berhasil diperbarui.');
    }


    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}

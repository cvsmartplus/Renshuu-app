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
            'avatarUrl' => $profile->avatar ? asset('storage/' . $profile->avatar) : null,
            'avatarCrop' => [
                'x' => $profile->avatar_crop_x,
                'y' => $profile->avatar_crop_y,
                'width' => $profile->avatar_crop_width,
                'height' => $profile->avatar_crop_height,
            ],
            'avatarOriginalSize' => [
                'width' => $profile->avatar_image_width,
                'height' => $profile->avatar_image_height,
            ],
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

    public function updateAvatar(Request $request): RedirectResponse
    {
        $request->validate([
            'avatar' => ['nullable', 'image', 'max:3548'],
            'avatar_crop_x' => ['nullable', 'numeric'],
            'avatar_crop_y' => ['nullable', 'numeric'],
            'avatar_crop_width' => ['nullable', 'numeric'],
            'avatar_crop_height' => ['nullable', 'numeric'],
            'avatar_image_width' => ['nullable', 'numeric'],
            'avatar_image_height' => ['nullable', 'numeric'],
        ]);

        $user = $request->user();
        $profile = $user->profile ?? $user->profile()->create(['user_id' => $user->id]);

        if ($request->hasFile('avatar')) {
            $path = $request->file('avatar')->store('avatars', 'public');
            $profile->avatar = $path;

            $profile->avatar_image_width = $request->input('avatar_image_width');
            $profile->avatar_image_height = $request->input('avatar_image_height');

            if (!$profile->avatar_image_width || !$profile->avatar_image_height) {
                $imagePath = storage_path("app/public/{$path}");
                if (file_exists($imagePath)) {
                    [$width, $height] = getimagesize($imagePath);
                    $profile->avatar_image_width = $width;
                    $profile->avatar_image_height = $height;
                }
            }
        }

        $profile->avatar_crop_x = $request->input('avatar_crop_x');
        $profile->avatar_crop_y = $request->input('avatar_crop_y');
        $profile->avatar_crop_width = $request->input('avatar_crop_width');
        $profile->avatar_crop_height = $request->input('avatar_crop_height');

        $profile->save();

        return Redirect::back()->with('success', 'Foto profil berhasil diperbarui.');
    }

    public function updateBio(Request $request): RedirectResponse
    {
        $user = $request->user();
        $profile = $user->profile ?? $user->profile()->create(['user_id' => $user->id]);

        $profile->bio = $request->input('bio');
        $profile->save();

        return Redirect::back()->with('success', 'Bio berhasil diperbarui.');
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

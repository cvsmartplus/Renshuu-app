<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\UserEducation;
use App\Models\UserExperience;
use App\Models\UserSkill;
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
            'availableSkills' => UserSkill::all(),              
            'avatarUrl' => $profile?->avatar ? asset('storage/' . $profile->avatar) : null,
            'avatarCrop' => $profile ? [
                'x' => $profile->avatar_crop_x,
                'y' => $profile->avatar_crop_y,
                'width' => $profile->avatar_crop_width,
                'height' => $profile->avatar_crop_height,
            ] : null,
            'avatarOriginalSize' => $profile ? [
                'width' => $profile->avatar_image_width,
                'height' => $profile->avatar_image_height,
            ] : null,
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

    public function updateEducation(Request $request): RedirectResponse
    {
        $user = Auth::user();

        // Validasi data
        $validated = $request->validate([
            'education' => 'required|array',
            'education.*.id' => 'required|exists:user_educations,id',
            'education.*.degree' => 'nullable|string|max:255',
            'education.*.field_of_study' => 'nullable|string|max:255',
            'education.*.institution' => 'nullable|string|max:255',
            'education.*.title' => 'nullable|string|max:255',
            'education.*.grade' => 'nullable|string|max:255',
            'education.*.start_date' => 'nullable|date',
            'education.*.end_date' => 'nullable|date|after_or_equal:educations.*.start_date',
            'education.*.description' => 'nullable|string',
        ]);

        foreach ($validated['education'] as $eduData) {
            $education = UserEducation::where('id', $eduData['id'])
                ->where('user_id', $user->id)
                ->first();

            if ($education) {
                $education->update($eduData);
            }
        }

        return Redirect::back()->with('success', 'Pendidikan berhasil diperbarui.');
    }

    public function storeEducation(Request $request): RedirectResponse
    {
        $user = Auth::user();

        // Validasi data
        $validated = $request->validate([
            'degree' => 'required|string|max:255',
            'field_of_study' => 'required|string|max:255',
            'institution' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'grade' => 'nullable|string|max:255',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'description' => 'nullable|string',
        ]);

        UserEducation::create([
            'user_id' => $user->id,
            'degree' => $validated['degree'],
            'field_of_study' => $validated['field_of_study'],
            'institution' => $validated['institution'],
            'title' => $validated['title'],
            'grade' => $validated['grade'],
            'start_date' => $validated['start_date'],
            'end_date' => $validated['end_date'],
            'description' => $validated['description'],
        ]);


        return redirect()->back()->with('success', 'Pendidikan berhasil ditambahkan.');
    }

    public function educationDestroy($id)
    {
        $user = Auth::user();

        $education = UserEducation::where('id', $id)
            ->where('user_id', $user->id)
            ->firstOrFail();

        $education->delete();

        return back()->with('success', 'Pendidikan berhasil dihapus.');
    }

    public function updateExperience(Request $request): RedirectResponse
{
    $user = Auth::user();

    $validated = $request->validate([
        'experience' => 'required|array',
        'experience.*.id' => 'required|exists:user_experiences,id',
        'experience.*.title' => 'required|string|max:255',
        'experience.*.company' => 'required|string|max:255',
        'experience.*.start_date' => 'required|date',
        'experience.*.end_date' => 'nullable|date|after_or_equal:experience.*.start_date',
        'experience.*.description' => 'nullable|string',
    ]);

    foreach ($validated['experience'] as $expData) {
        $experience = UserExperience::where('id', $expData['id'])
            ->where('user_id', $user->id)
            ->first();

        if ($experience) {
            $experience->update($expData);
        }
    }

    return Redirect::back()->with('success', 'Pengalaman berhasil diperbarui.');
}

    public function storeExperiences(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'company' => 'required|string|max:255',
            'location' => 'nullable|string|max:255',
            'job_type' => 'nullable|string|max:100',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'description' => 'nullable|string',
        ]);

        $validated['user_id'] = Auth::id();

        UserExperience::create($validated);

        return redirect()->back()->with('success', 'Pengalaman berhasil ditambahkan.');
    }

    public function experienceDestroy($id)
    {
        $user = Auth::user();

        $experience = UserExperience::where('id', $id)
            ->where('user_id', $user->id)
            ->firstOrFail();

        $experience->delete();

        return back()->with('success', 'Pengalaman berhasil dihapus.');
    }

    public function skillDestroy($id)
    {
        $user = Auth::user();

        $user->userSkills()->detach($id);

        return back()->with('success', 'Skill berhasil dihapus.');
    }

    public function storeSkill(Request $request)
    {
        $request->validate([
        'skills' => 'required|array|min:1',
        'skills.*' => 'string|max:255'
    ]);

    $user = Auth::user();

    foreach ($request->skills as $skillName) {
        $cleaned = strtolower(trim($skillName));
        if (!$cleaned) continue;

        $skill = UserSkill::firstOrCreate([
            'name' => $cleaned
        ]);

        if (!$user->userSkills()->where('user_skill_id', $skill->id)->exists()) {
            $user->userSkills()->attach($skill->id);
        }
    }

    return back()->with('success', 'Skill berhasil ditambahkan.');
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

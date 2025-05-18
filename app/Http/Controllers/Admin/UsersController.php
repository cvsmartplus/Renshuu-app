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

    public function show($id)
    {
        $user = User::with(['profile', 'experiences', 'educations', 'userSkills', 'documents'])->findOrFail($id);

        return view('admin.pages.userDetail', compact('user'));
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
    public function verify($id, $documentId, Request $request)
    {
        $user = User::findOrFail($id);
        $document = $user->documents()->findOrFail($documentId);

        // Validasi input jika ditolak
        if ($request->input('action') === 'reject') {
            $request->validate([
                'rejected_reason' => 'required|string|max:255',
            ]);

            $document->update([
                'status' => 'rejected',
                'rejected_at' => now(),
                'verified_at' => null,
                'rejected_reason' => $request->input('rejected_reason'),
            ]);

            return redirect()->back()->with('status', 'Dokumen ditolak.');
        }

        // Verifikasi
        $document->update([
            'status' => 'verified',
            'verified_at' => now(),
            'rejected_at' => null,
            'rejected_reason' => null,
        ]);

        return redirect()->back()->with('status', 'Dokumen berhasil diverifikasi.');
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Models\UserDocument;

class DocumentController extends Controller
{
    /**
     * Tampilkan halaman dokumen pengguna.
     */
    public function index()
    {
        $documents = auth()->user()->documents()->get()->map(function ($doc) {
            $doc->mime_type = Storage::disk('public')->mimeType($doc->document_path);
            return $doc;
        });

        return inertia('Profile/UserDocument', [
            'documents' => $documents,
        ]);
    }


    /**
     * Upload dan simpan foto KTP dari base64 image.
     */
     
    public function uploadKTP(Request $request)
    {
        if ($request->hasFile('file')) {
            $request->validate([
                'file' => 'required|file|mimes:jpg,jpeg,png,pdf|max:5120', 
            ]);

            $uploadedFile = $request->file('file');
            $extension = $uploadedFile->getClientOriginalExtension();
            $filename = 'ktp_' . auth()->id() . '_' . Str::random(10) . '.' . $extension;
            $path = 'documents/ktp/' . $filename;

            Storage::disk('public')->putFileAs('documents/ktp', $uploadedFile, $filename);
        }

        elseif ($request->filled('photo')) {
            $request->validate([
                'photo' => 'required|string',
            ]);

            $base64Image = $request->photo;

            if (!preg_match('/^data:image\/(\w+);base64,/', $base64Image, $type)) {
                return back()->withErrors(['photo' => 'Format gambar tidak valid.']);
            }

            $image = substr($base64Image, strpos($base64Image, ',') + 1);
            $extension = strtolower($type[1]);

            if (!in_array($extension, ['jpg', 'jpeg', 'png'])) {
                return back()->withErrors(['photo' => 'Ekstensi gambar tidak didukung.']);
            }

            $image = base64_decode($image);
            if ($image === false) {
                return back()->withErrors(['photo' => 'Gagal memproses gambar.']);
            }

            $filename = 'ktp_' . auth()->id() . '_' . Str::random(10) . '.' . $extension;
            $path = 'documents/ktp/' . $filename;
            Storage::disk('public')->put($path, $image);
        }

        else {
            return back()->withErrors(['photo' => 'Tidak ada data yang dikirim.']);
        }

        $existing = UserDocument::where('user_id', auth()->id())
            ->where('document_type', 'ktp')
            ->first();

        if ($existing && $existing->document_path && Storage::disk('public')->exists($existing->document_path)) {
            Storage::disk('public')->delete($existing->document_path);
        }

        UserDocument::updateOrCreate(
            [
                'user_id' => auth()->id(),
                'document_type' => 'ktp',
            ],
            [
                'document_path' => $path,
                'status' => 'pending',
                'verified_at' => null,
                'rejected_at' => null,
                'rejected_reason' => null,
            ]
        );

        return redirect()->back()->with('success', 'Foto KTP berhasil diunggah.');
    }

    public function deleteKTP()
    {
        $document = UserDocument::where('user_id', auth()->id())
            ->where('document_type', 'ktp')
            ->first();

        if (!$document) {
            return back()->withErrors(['document' => 'Dokumen tidak ditemukan.']);
        }

        if ($document->document_path && Storage::disk('public')->exists($document->document_path)) {
            Storage::disk('public')->delete($document->document_path);
        }

        $document->delete();

        return redirect()->back()->with('success', 'Dokumen KTP berhasil dihapus.');
    }


    public function uploadCV(Request $request)
    {
        $request->validate([
            'file' => 'required|mimes:pdf,doc,docx,rtf,txt,odt|max:15360', 
        ]);

        $user = $request->user();
        $file = $request->file('file');

        $extension = $file->getClientOriginalExtension();
        $filename = 'cv_' . $user->id . '_' . Str::random(10) . '.' . $extension;
        $path = 'documents/cv/' . $filename;

        $existing = UserDocument::where('user_id', $user->id)
            ->where('document_type', 'cv')
            ->first();

        if ($existing && $existing->document_path && Storage::disk('public')->exists($existing->document_path)) {
            Storage::disk('public')->delete($existing->document_path);
        }

        Storage::disk('public')->putFileAs('documents/cv', $file, $filename);

        UserDocument::updateOrCreate(
            [
                'user_id' => $user->id,
                'document_type' => 'cv',
            ],
            [
                'document_path' => $path,
                'status' => 'pending',
                'verified_at' => null,
                'rejected_at' => null,
                'rejected_reason' => null,
            ]
        );

        return redirect()->back()->with('success', 'CV berhasil diunggah.');
    }

    public function deleteCV()
    {
        $document = UserDocument::where('user_id', auth()->id())
            ->where('document_type', 'cv')
            ->first();

        if (!$document) {
            return back()->withErrors(['document' => 'Dokumen tidak ditemukan.']);
        }

        if ($document->document_path && Storage::disk('public')->exists($document->document_path)) {
            Storage::disk('public')->delete($document->document_path);
        }

        $document->delete();

        return redirect()->back()->with('success', 'Dokumen CV berhasil dihapus.');
    }
}

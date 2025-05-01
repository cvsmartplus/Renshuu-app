<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\UserDocument;

class UserDocumentSeeder extends Seeder
{
    public function run()
    {
        UserDocument::create([
            'user_id' => 1,
            'document_type' => 'KTP',
            'document_path' => 'documents/ktp_user1.pdf',
            'status' => 'pending',
        ]);
    }
}

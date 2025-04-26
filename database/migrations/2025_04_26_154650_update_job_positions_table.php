<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //
        // Update job_positions table
        Schema::table('job_positions', function (Blueprint $table) {
            $table->unsignedInteger('salary_min')->nullable()->after('description');
            $table->unsignedInteger('salary_max')->nullable()->after('salary_min');
            $table->enum('employment_type', ['Full-time', 'Part-time', 'Contract', 'Internship', 'Temporary'])->default('Full-time')->after('job_model');
            $table->timestamp('deadline_at')->nullable()->after('posted_at');
            $table->string('category')->nullable()->after('slug');
            $table->string('apply_url')->nullable()->after('company_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};

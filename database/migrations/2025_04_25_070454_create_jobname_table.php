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
        Schema::create('job_positions', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->enum('job_model', ['Remote', 'On-Site', 'Flexible', 'Hybrid', 'Contract', 'Internship'])->default('Remote');
            $table->string('location');
            $table->foreignId('company_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });

        Schema::create('skills', function(Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->timestamps();
        });

        Schema::create('job_position_skill', function(Blueprint $table){
            $table->id();
            $table->foreignId('job_position_id')->constrained()->onDelete('cascade');
            $table->foreignId('skill_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_position_skill');
        Schema::dropIfExists('skills');
        Schema::dropIfExists('job_positions');
    }
};

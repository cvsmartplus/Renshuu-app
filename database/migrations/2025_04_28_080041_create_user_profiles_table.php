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
        Schema::create('user_profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');

            $table->string('avatar')->nullable();
            $table->string('banner')->nullable();
            $table->string('tagline')->nullable();
            $table->text('bio')->nullable();

            $table->string('phone')->nullable();
            $table->string('website')->nullable();
            $table->json('social_links')->nullable();

            $table->enum('gender', ['male', 'female', 'other'])->nullable(); 
            $table->enum('marital_status', ['single', 'married', 'divorced', 'widowed'])->nullable(); 
            $table->date('birth_date')->nullable(); 
            $table->integer('age')->nullable();     
            $table->string('province')->nullable();  
            $table->string('city')->nullable();
            $table->string('district')->nullable();  
            $table->string('village')->nullable();   
            $table->text('address_detail')->nullable(); 

            $table->timestamps();
        });


        Schema::create('user_skills', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->timestamps();
        });


        Schema::create('user_experiences', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');

            $table->string('title')->nullable();
            $table->string('company')->nullable();
            $table->string('location')->nullable();
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->text('description')->nullable();
            $table->string('job_type')->nullable();

            $table->timestamps();
        });


        Schema::create('user_education', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');

            $table->string('degree')->nullable();
            $table->string('institution')->nullable();
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->text('description')->nullable();

            $table->timestamps();
        });

        Schema::create('user_skill_user', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('user_skill_id')->constrained('user_skills')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_profiles');
        Schema::dropIfExists('user_skills');
        Schema::dropIfExists('user_experiences');
        Schema::dropIfExists('user_educations');
    }
};

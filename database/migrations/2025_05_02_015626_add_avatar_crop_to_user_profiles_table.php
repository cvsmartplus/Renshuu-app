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
        Schema::table('user_profiles', function (Blueprint $table) {
            $table->float('avatar_crop_x')->nullable();
            $table->float('avatar_crop_y')->nullable();
            $table->float('avatar_crop_width')->nullable();
            $table->float('avatar_crop_height')->nullable();
            $table->float('avatar_image_width')->nullable();
            $table->float('avatar_image_height')->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('user_profiles', function (Blueprint $table) {
            $table->dropColumn([
                'avatar_crop_x',
                'avatar_crop_y',
                'avatar_crop_width',
                'avatar_crop_height',
            ]);
        });
    }

};

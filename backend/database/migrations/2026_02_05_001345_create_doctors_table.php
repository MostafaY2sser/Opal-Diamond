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
        // Schema::create('doctors', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('name');
        //     $table->string('specialization');
        //     $table->text('details')->nullable();
        //     $table->string('image')->nullable();
        //     $table->timestamps();
        // });
        Schema::create('doctors', function (Blueprint $table) {
            $table->id();

            // عربي
            $table->string('name_ar');
            $table->string('specialty_ar');
            $table->text('description_ar')->nullable();

            // انجليزي
            $table->string('name_en');
            $table->string('specialty_en');
            $table->text('description_en')->nullable();

            // صورة الدكتور
            $table->string('image')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('doctors');
    }
};

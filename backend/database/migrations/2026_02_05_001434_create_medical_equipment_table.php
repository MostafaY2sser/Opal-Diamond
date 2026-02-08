<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('medical_equipments', function (Blueprint $table) {
            $table->id();

            $table->string('name_ar');
            $table->string('name_en');

            $table->text('description_ar')->nullable();
            $table->text('description_en')->nullable();

            $table->json('features_ar')->nullable();
            $table->json('features_en')->nullable();

            $table->string('image')->nullable();
            $table->json('images')->nullable();

            $table->enum('status', ['available','maintenance','unavailable'])
                ->default('available');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('medical_equipments');
    }
};

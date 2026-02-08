<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalEquipment extends Model
{
    use HasFactory;

    protected $table = 'medical_equipments'; // اسم الجدول

    protected $fillable = [
        'name_ar',
        'name_en',
        'description_ar',
        'description_en',
        'features_ar',
        'features_en',
        'image',
        'images',
        'status'
    ];

    protected $casts = [
        'features_ar' => 'array',
        'features_en' => 'array',
        'images' => 'array',
    ];
}

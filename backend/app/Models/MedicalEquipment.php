<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalEquipment extends Model
{
    use HasFactory;

    protected $table = 'medical_equipments';

    protected $fillable = [
        'name',
        'description',
        'features',
        'image',
        'status',
    ];

    protected $casts = [
        'features' => 'array',
    ];
}

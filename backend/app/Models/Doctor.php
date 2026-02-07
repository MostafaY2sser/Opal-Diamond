<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    protected $fillable = [
        'name_ar',
        'name_en',
        'specialty_ar',
        'specialty_en',
        'description_ar',
        'description_en',
        'image',
    ];

    // 👇 ضيف دي تحت
    public function certificates()
    {
        return $this->hasMany(DoctorCertificate::class);
    }
}

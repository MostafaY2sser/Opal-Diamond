<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Doctor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;

class DoctorController extends Controller
{
    // GET /api/doctors
    public function index()
    {
        $doctors = Doctor::with('certificates')->latest()->get();

        // تحويل مسارات الصور إلى روابط كاملة
        $doctors->transform(function ($doctor) {
            if ($doctor->image) {
                $doctor->image = url('storage/' . $doctor->image);
            }

            $doctor->certificates->transform(function ($cert) {
                $cert->image = url('storage/' . $cert->image);
                return $cert;
            });

            return $doctor;
        });

        return response()->json($doctors);
    }



    // POST /api/doctors
   public function store(Request $request)
{
    // تعريف البيانات والتحقق
    $data = $request->validate([
        'name_ar' => 'required',
        'name_en' => 'required',
        'specialty_ar' => 'required',
        'specialty_en' => 'required',
        'description_ar' => 'nullable',
        'description_en' => 'nullable',
        'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        'certificates' => 'nullable|array',
        'certificates.*' => 'image|mimes:jpg,jpeg,png,webp|max:2048'
    ]);

    // رفع صورة الطبيب
    if ($request->hasFile('image')) {
        $data['image'] = $request->file('image')->store('doctors', 'public');
    }

    // إنشاء الطبيب
    $doctor = Doctor::create($data);

    // رفع شهادات الطبيب
    if ($request->hasFile('certificates')) {
        foreach ($request->file('certificates') as $file) {
            $path = $file->store('certificates', 'public');

            $doctor->certificates()->create([
                'image' => $path
            ]);
        }
    }

    // تحويل المسارات إلى روابط كاملة قبل الإرجاع
    if ($doctor->image) {
        $doctor->image = url('storage/' . $doctor->image);
    }

    $doctor->certificates->transform(function ($cert) {
        $cert->image = url('storage/' . $cert->image);
        return $cert;
    });

    return response()->json($doctor->load('certificates'), 201);
}




    // GET /api/doctors/{id}
    public function show($id)
    {
        $doctor = Doctor::with('certificates')->findOrFail($id);

        if ($doctor->image) {
            $doctor->image = URL::to('storage/' . $doctor->image);
        }

        $doctor->certificates->transform(function ($cert) {
            $cert->image = URL::to('storage/' . $cert->image);
            return $cert;
        });

        return response()->json($doctor);
    }


    
    // PUT /api/doctors/{id}
    public function update(Request $request, $id)
    {
        $doctor = Doctor::findOrFail($id);

        $data = $request->validate([
            'name_ar' => 'required',
            'name_en' => 'required',
            'specialty_ar' => 'required',
            'specialty_en' => 'required',
            'description_ar' => 'nullable',
            'description_en' => 'nullable',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'certificates' => 'nullable|array',
            'certificates.*' => 'image|mimes:jpg,jpeg,png,webp|max:2048'
        ]);

        // تحديث صورة الطبيب
        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('doctors', 'public');
        }

        $doctor->update($data);

        // ✅ تحديث الشهادات لو تم رفع ملفات جديدة
        if ($request->hasFile('certificates')) {

            // امسح الملفات القديمة من التخزين
            foreach ($doctor->certificates as $cert) {
                if (\Illuminate\Support\Facades\Storage::disk('public')->exists($cert->image)) {
                    \Illuminate\Support\Facades\Storage::disk('public')->delete($cert->image);
                }
            }

            // امسح السجلات القديمة من قاعدة البيانات
            $doctor->certificates()->delete();

            // أضف الشهادات الجديدة
            foreach ($request->file('certificates') as $file) {
                $path = $file->store('certificates', 'public');

                $doctor->certificates()->create([
                    'image' => $path
                ]);
            }
        }

        $doctor = $doctor->fresh()->load('certificates');

        // توحيد روابط الصور
        if ($doctor->image) {
            $doctor->image = url('storage/' . $doctor->image);
        }

        $doctor->certificates->transform(function ($cert) {
            $cert->image = url('storage/' . $cert->image);
            return $cert;
        });

        return response()->json($doctor);
    }




    // DELETE /api/doctors/{id}
    public function destroy($id)
    {
        $doctor = Doctor::findOrFail($id);

        $doctor->delete();

        return response()->json(['message' => 'Doctor deleted successfully']);
    }
}

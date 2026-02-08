<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\MedicalEquipment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;

class EquipmentController extends Controller
{
    public function index()
    {
        $equipments = MedicalEquipment::latest()->get();

        // تحويل الصور إلى روابط كاملة
        $equipments->transform(function ($equipment) {
            if ($equipment->image) {
                $equipment->image = URL::to('storage/' . $equipment->image);
            }

            if ($equipment->images) {
                $equipment->images = array_map(function ($img) {
                    return URL::to('storage/' . $img);
                }, $equipment->images);
            }

            return $equipment;
        });

        return $equipments;
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name_ar' => 'required|string',
            'name_en' => 'required|string',
            'description_ar' => 'nullable|string',
            'description_en' => 'nullable|string',
            'features_ar' => 'nullable|array',
            'features_en' => 'nullable|array',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'images' => 'nullable|array',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'status' => 'in:available,maintenance,unavailable'
        ]);

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('equipments', 'public');
        }

        if ($request->hasFile('images')) {
            $imagePaths = [];
            foreach ($request->file('images') as $file) {
                $imagePaths[] = $file->store('equipments', 'public');
            }
            $data['images'] = $imagePaths;
        }

        $equipment = MedicalEquipment::create($data);

        // تحويل الصور إلى روابط كاملة قبل الإرجاع
        if ($equipment->image) {
            $equipment->image = URL::to('storage/' . $equipment->image);
        }

        if ($equipment->images) {
            $equipment->images = array_map(function ($img) {
                return URL::to('storage/' . $img);
            }, $equipment->images);
        }

        return $equipment;
    }

    public function show($id)
    {
        $equipment = MedicalEquipment::findOrFail($id);

        // تحويل الصور إلى روابط كاملة
        if ($equipment->image) {
            $equipment->image = URL::to('storage/' . $equipment->image);
        }

        if ($equipment->images) {
            $equipment->images = array_map(function ($img) {
                return URL::to('storage/' . $img);
            }, $equipment->images);
        }

        return $equipment;
    }

    public function update(Request $request, $id)
    {
        $equipment = MedicalEquipment::findOrFail($id);

        $data = $request->validate([
            'name_ar' => 'nullable|string',
            'name_en' => 'nullable|string',
            'description_ar' => 'nullable|string',
            'description_en' => 'nullable|string',
            'features_ar' => 'nullable|array',
            'features_en' => 'nullable|array',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'images' => 'nullable|array',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'status' => 'in:available,maintenance,unavailable'
        ]);

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('equipments', 'public');
        }

        if ($request->hasFile('images')) {
            $imagePaths = [];
            foreach ($request->file('images') as $file) {
                $imagePaths[] = $file->store('equipments', 'public');
            }
            $data['images'] = $imagePaths;
        }

        $equipment->update($data);

        // تحويل الصور إلى روابط كاملة قبل الإرجاع
        if ($equipment->image) {
            $equipment->image = URL::to('storage/' . $equipment->image);
        }

        if ($equipment->images) {
            $equipment->images = array_map(function ($img) {
                return URL::to('storage/' . $img);
            }, $equipment->images);
        }

        return $equipment;
    }

    public function destroy($id)
    {
        MedicalEquipment::findOrFail($id)->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }
}

<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\MedicalEquipment;
use Illuminate\Http\Request;

class EquipmentController extends Controller
{
    public function index()
    {
        return MedicalEquipment::latest()->get();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'description' => 'nullable|string',
            'features' => 'nullable|array',
            'features.*' => 'string',
            'image' => 'nullable|string',
            'status' => 'in:available,maintenance,unavailable'
        ]);

        return MedicalEquipment::create($data);
    }

    public function show($id)
    {
        return MedicalEquipment::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $equipment = MedicalEquipment::findOrFail($id);

        $equipment->update($request->all());

        return $equipment;
    }

    public function destroy($id)
    {
        MedicalEquipment::findOrFail($id)->delete();

        return response()->json(['message' => 'Deleted successfully']);
    }
}

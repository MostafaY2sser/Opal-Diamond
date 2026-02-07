<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\DoctorController;
use App\Http\Controllers\API\EquipmentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/



// Public doctors
Route::get('doctors', [DoctorController::class, 'index']);
Route::get('doctors/{id}', [DoctorController::class, 'show']);


// public equipment
Route::get('equipment', [EquipmentController::class, 'index']);
Route::get('equipment/{id}', [EquipmentController::class, 'show']);


// ---------- Admin Auth ----------
Route::prefix('admin')->group(function () {
    Route::post('login', [AuthController::class, 'login']);
});


// ---------- Admin Protected ----------
Route::middleware('auth:sanctum')->prefix('admin')->group(function () {

    Route::post('logout', [AuthController::class, 'logout']);

    Route::apiResource('doctors', DoctorController::class)->except(['index','show']);
    Route::apiResource('equipment', EquipmentController::class)->except(['index','show']);
});

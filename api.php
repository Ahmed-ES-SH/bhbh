<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UploadFileController;

Route::post('/upload', [UploadFileController::class, 'uploadFile']);
Route::get('/uploads', [UploadFileController::class, 'getAllUploads']);
Route::post('/file-by-id-serial', [UploadFileController::class, 'getFileByIdAndSerial']);
Route::delete('/uploads/{id}', [UploadFileController::class, 'deleteUpload']);
Route::get('/file/{name}', [UploadFileController::class, 'getFile']);
Route::get('api/uploads/{filename}', [UploadFileController::class, 'downloadFile']);

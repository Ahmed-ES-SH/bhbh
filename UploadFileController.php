<?php

namespace App\Http\Controllers;

use App\Models\UploadFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class UploadFileController extends Controller
{


    public function uploadFile(Request $request)
    {
        try {
            // تسجيل الطلب
            Log::info('Starting file upload process', ['request_data' => $request->all()]);

            // تحقق من صحة المدخلات
            $validatedData = $request->validate([
                'file' => 'required|file|mimes:pdf,jpeg,png,doc,docx|max:2048', // تحديد أنواع الملفات والحجم الأقصى (2MB)
                'id_number' => 'required|string|max:50',
                'serial_number' => 'required|string|max:50',
            ]);

            // الحصول على الملف
            $file = $request->file('file');

            // تحديد مسار التخزين
            $destinationPath = public_path('uploads'); // مسار المجلد
            $fileName = time() . '_' . $file->getClientOriginalName(); // إنشاء اسم جديد للملف لتجنب التكرار

            // نقل الملف إلى المسار المحدد باستخدام move()
            if (!$file->move($destinationPath, $fileName)) {
                Log::error('File move failed', ['file_name' => $fileName]);
                return response()->json(['error' => 'File move failed'], 500);
            }

            $filePath = 'uploads/' . $fileName;

            Log::info('File stored successfully', ['file_path' => $filePath]);

            // حفظ البيانات في قاعدة البيانات
            $upload = new UploadFile();
            $upload->id_number = $validatedData['id_number'];
            $upload->serial_number = $validatedData['serial_number'];
            $upload->file_path = $filePath;
            $upload->save();

            // تسجيل نجاح العملية
            Log::info('File record saved in database', ['file_id' => $upload->id]);

            // إرسال استجابة بنجاح العملية
            return response()->json([
                'message' => 'File uploaded successfully!',
                'file_path' => $filePath
            ], 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            // تسجيل خطأ التحقق من صحة المدخلات
            Log::error('Validation failed', ['errors' => $e->errors()]);
            return response()->json([
                'error' => 'Validation failed',
                'details' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            // معالجة أي أخطاء أخرى
            Log::error('File upload failed', ['exception' => $e->getMessage()]);
            return response()->json([
                'error' => 'File upload failed: ' . $e->getMessage()
            ], 500);
        }
    }





    // دالة لاسترجاع جميع الملفات
    // دالة لاسترجاع جميع الملفات
    public function getAllUploads()
    {
        $uploads = UploadFile::all();
        return response()->json($uploads, 200);
    }

    // دالة لحذف ملف معين
    public function deleteUpload($id)
    {
        $upload = UploadFile::find($id);

        if (!$upload) {
            return response()->json(['message' => 'File not found.'], 404);
        }

        // حذف الملف من التخزين
        $filePath = public_path($upload->file_path); // تحديد المسار الكامل للملف
        if (file_exists($filePath)) {
            unlink($filePath); // استخدام unlink لحذف الملف
        } else {
            return response()->json(['message' => 'File not found on the server.'], 404);
        }

        // حذف السجل من قاعدة البيانات
        $upload->delete();

        return response()->json(['message' => 'File deleted successfully!'], 200);
    }

    public function getFile($id_number)
    {
        // البحث عن الملف في قاعدة البيانات باستخدام رقم الهوية
        $upload = UploadFile::where('id_number', $id_number)->first();

        if ($upload) {
            // إذا تم العثور على السجل، أعد رابط الوصول مع إضافة /api/
            $filePath = $upload->file_path; // استرجاع مسار الملف من السجل
            $url = url('/api/' . $filePath); // استخدام الدالة url مع إضافة /api/
            return response()->json(['file_path' => $url], 200);
        }

        // إذا لم يتم العثور على السجل، أعد رسالة خطأ
        return response()->json(['message' => 'الملف غير موجود'], 404);
    }

    public function getFileByIdAndSerial(Request $request)
    {
        // تحقق من صحة المدخلات
        $request->validate([
            'id_number' => 'required|string|max:50',
            'serial_number' => 'required|string|max:50',
        ]);

        // جلب الملف من قاعدة البيانات بناءً على رقم الهوية والرقم التسلسلي
        $upload = UploadFile::where('id_number', $request->input('id_number'))
            ->where('serial_number', $request->input('serial_number'))
            ->first();

        if ($upload) {
            // استخدم asset لتوليد الرابط الكامل مع إضافة /api/
            return response()->json(['file_path' => url($upload->file_path)], 200);
        } else {
            return response()->json(['message' => 'No file found for the given ID and Serial Number.'], 404);
        }
    }

    public function downloadFile($filename)
    {
        $filePath = public_path('uploads/' . $filename); // تأكد من المسار الصحيح

        if (file_exists($filePath)) {
            return response()->download($filePath);
        } else {
            return response()->json(['message' => 'الملف غير موجود'], 404);
        }
    }
}

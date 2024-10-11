<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('upload_files', function (Blueprint $table) {
            $table->id(); // لإنشاء مفتاح أساسي
            $table->string('id_number', 50); // رقم الهوية
            $table->string('serial_number', 50); // الرقم التسلسلي
            $table->string('file_path'); // مسار الملف المرفوع
            $table->timestamps(); // لإنشاء created_at و updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('upload_files');
    }
};

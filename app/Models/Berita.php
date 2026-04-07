<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Berita extends Model
{
    use HasFactory;

    // Menentukan kolom mana saja yang boleh diisi (Mass Assignment)
    protected $fillable = [
        'title',
        'slug',
        'content',
        'image',
        'published_at',
    ];

    // Mengatur agar published_at otomatis dianggap sebagai objek waktu (Carbon)
    protected $casts = [
        'published_at' => 'datetime',
    ];
}
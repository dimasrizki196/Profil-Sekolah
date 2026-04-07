<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PublicBeritaController extends Controller
{
    // Menampilkan halaman daftar berita (Grid Card)
    public function index()
    {
        // Mengambil berita dari yang paling baru, dibatasi 6 per halaman (Pagination)
        $beritas = Berita::latest()->paginate(6);
        
        return Inertia::render('Informasi/Berita', [
            'beritas' => $beritas
        ]);
    }

    // Menampilkan halaman baca isi berita secara penuh
    public function show($slug)
    {
        // Mencari berita berdasarkan slug di URL, memunculkan error 404 jika tidak ketemu
        $berita = Berita::where('slug', $slug)->firstOrFail();
        
        return Inertia::render('Informasi/DetailBerita', [
            'berita' => $berita
        ]);
    }
}
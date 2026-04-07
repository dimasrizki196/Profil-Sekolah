<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class BeritaController extends Controller
{
    // 1. Menampilkan Halaman Daftar Berita
    public function index()
    {
        $beritas = Berita::latest()->get();

        return Inertia::render('Admin/Berita/Index', [
            'beritas' => $beritas
        ]);
    }

    // 2. Menampilkan Halaman Form Tambah Berita
    public function create()
    {
        return Inertia::render('Admin/Berita/Create');
    }

    // 3. Menyimpan Data Berita Baru
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        $imagePath = null;

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('berita_images', 'public');
        }

        Berita::create([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'content' => $request->content,
            'image' => $imagePath,
            'published_at' => now(),
        ]);

        return redirect()->route('admin.berita.index')->with('message', 'Berita berhasil ditambahkan!');
    }

    // 4. Menampilkan Halaman Edit Berita
    public function edit($id)
    {
        $berita = Berita::findOrFail($id);

        return Inertia::render('Admin/Berita/Edit', [
            'berita' => $berita
        ]);
    }

    // 5. Memperbarui Data Berita
    public function update(Request $request, $id)
    {
        $berita = Berita::findOrFail($id);

        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        $imagePath = $berita->image;

        // Proses jika ada upload gambar baru
        if ($request->hasFile('image')) {
            if ($berita->image) {
                Storage::disk('public')->delete($berita->image);
            }
            $imagePath = $request->file('image')->store('berita_images', 'public');
        }

        $berita->update([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'content' => $request->content,
            'image' => $imagePath,
        ]);

        return redirect()->route('admin.berita.index')->with('message', 'Berita berhasil diperbarui!');
    }

    // 6. Menghapus Data Berita
    public function destroy($id)
    {
        $berita = Berita::findOrFail($id);

        // Hapus file gambar dari storage
        if ($berita->image) {
            Storage::disk('public')->delete($berita->image);
        }

        $berita->delete();

        return redirect()->route('admin.berita.index')->with('message', 'Berita berhasil dihapus!');
    }

    // 7. Menampilkan Halaman Detail Berita
    public function show($id)
    {
        $berita = Berita::findOrFail($id);

        return Inertia::render('Admin/Berita/Show', [
            'berita' => $berita
        ]);
    }
}

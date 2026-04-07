<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use App\Models\Berita;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BeritaController;
use App\Http\Controllers\PublicBeritaController;

use Inertia\Inertia;

Route::get('/', function () {
    $beritaTerbaru = Berita::latest()->take(6)->get(); 
    
    return Inertia::render('Beranda', [
        'beritaTerbaru' => $beritaTerbaru
    ]);
});
Route::inertia('/profil/tentang', 'Profil/Tentang');
Route::inertia('/profil/visi-misi', 'Profil/VisiMisi');
Route::inertia('/profil/sejarah', 'Profil/Sejarah');
Route::inertia('/info/ppdb', 'Informasi/Ppdb');
Route::get('/info/berita', [PublicBeritaController::class, 'index'])->name('berita.index');
Route::get('/info/berita/{slug}', [PublicBeritaController::class, 'show'])->name('berita.show');
Route::inertia('/profil/ekstrakurikuler', 'Profil/Ekstrakurikuler');
Route::inertia('/profil/galeri', 'Profil/Galeri');
Route::inertia('/hubungi', 'Hubungi');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::resource('/admin/berita', BeritaController::class)->names('admin.berita');
});

require __DIR__.'/auth.php';

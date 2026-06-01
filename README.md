# 🏫 Website Profil MIN 6 Boyolali

Sistem Informasi dan Profil Sekolah interaktif untuk MIN 6 Boyolali. Website ini dibangun dengan antarmuka yang modern, responsif, dan dinamis untuk memudahkan penyampaian informasi kepada siswa, wali murid, dan masyarakat luas.

## ✨ Fitur Utama

- **Beranda Interaktif**: Menampilkan _hero banner_, sambutan kepala madrasah, dan pintasan informasi ringkas.
- **Profil Madrasah**: Halaman khusus yang memuat Sejarah, Visi Misi & Tujuan, serta profil Tentang Kami.
- **Berita & Pengumuman**: Sistem artikel dinamis dengan detail bacaan untuk membagikan kabar terbaru.
- **Galeri Kegiatan**: Etalase dokumentasi madrasah dengan fitur _Lightbox/Pop-up_ saat foto diperbesar.
- **Program Ekstrakurikuler**: Katalog ekstrakurikuler madrasah dengan tampilan _grid_ yang responsif.
- **Informasi PPDB**: Halaman Informasi Penerimaan Peserta Didik Baru lengkap dengan jadwal, syarat, dan tombol integrasi langsung ke WhatsApp panitia.
- **Hubungi Kami**: Terintegrasi langsung dengan API WhatsApp dan Google Maps sekolah.
- **UI/UX Modern**: Dilengkapi dengan animasi AOS (_Animate On Scroll_) untuk transisi halaman yang mulus.

## 🛠️ Teknologi yang Digunakan

Proyek ini dikembangkan menggunakan teknologi modern:

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Laravel 12, Inertia.js
- **Database:** MySQL
- **Animasi:** AOS (Animate On Scroll) Library

## 🚀 Panduan Instalasi & Penggunaan

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di _Localhost_ (komputer lokal):

### 1. Kloning Repositori

git clone [https://github.com/dimasrizki196/Profil-Sekolah.git](https://github.com/dimasrizki196/Profil-Sekolah.git)
cd profil-sekolah

### 2. Instalasi Dependensi

Buka terminal di dalam folder proyek, lalu jalankan perintah berikut untuk mengunduh modul PHP dan Node.js:

composer install
npm install

### 3. Konfigurasi Environment & Database

Salin file .env.example menjadi .env:

cp .env.example .env

Buka file .env di teks editor, lalu sesuaikan kredensial koneksi database MySQL kamu:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nama_database_kamu
DB_USERNAME=root
DB_PASSWORD=

### 4. Generate Key & Migrasi Database

Buat kunci aplikasi Laravel dan jalankan migrasi tabel ke database:

php artisan key:generate
php artisan migrate

### 5. Tautkan Folder Storage (Sangat Penting!)

Agar gambar-gambar dari database (seperti _thumbnail_ berita) bisa diakses oleh publik, jalankan:

php artisan storage:link

### 6. Jalankan Server Lokal

Kamu perlu membuka **dua terminal secara bersamaan** untuk menjalankan sisi _frontend_ dan _backend_.

**Terminal 1 (Menjalankan Vite/React):**
npm run dev

**Terminal 2 (Menjalankan server PHP Laravel):**
php artisan serve

Aplikasi sekarang dapat diakses melalui browser di alamat: http://localhost:8000

## 📁 Pengaturan Aset Statis (Gambar)

Beberapa gambar _layout_ statis memanggil file langsung dari folder public/images/. Pastikan file-file berikut tersedia di dalam folder tersebut agar _User Interface_ berjalan sempurna:

- logo.png (Logo madrasah)
- kepala-madrasah.png (Foto sambutan)
- bg-hero-mobile.png (Ilustrasi Tentang Kami)
- Foto ekstrakurikuler statis (contoh: ekskul-tahfidz.jpg, ekskul-pramuka.jpg, dll.)
- Folder public/images/galery/ berisi foto g1.jpg hingga g15.jpeg.

_Dibuat dengan dedikasi untuk kemajuan sistem informasi pendidikan MIN 6 Boyolali._

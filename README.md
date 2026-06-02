# 🏫 Website Profil MIN 6 Boyolali

Website Profil dan Sistem Informasi MIN 6 Boyolali yang dirancang untuk menyajikan informasi sekolah secara modern, responsif, dan mudah diakses oleh siswa, wali murid, serta masyarakat umum.

---

## ✨ Fitur Utama

### 🏠 Beranda Interaktif

- Hero banner informatif
- Sambutan Kepala Madrasah
- Informasi dan tautan penting dalam satu halaman

### 📖 Profil Madrasah

Menampilkan informasi lengkap mengenai:

- Sejarah Madrasah
- Visi, Misi, dan Tujuan
- Tentang Kami

### 📰 Berita & Pengumuman

- Manajemen artikel dinamis
- Halaman detail berita
- Penyampaian informasi terbaru kepada pengunjung

### 🖼️ Galeri Kegiatan

- Dokumentasi kegiatan madrasah
- Tampilan galeri responsif
- Fitur Lightbox untuk memperbesar gambar

### 🎯 Program Ekstrakurikuler

- Daftar kegiatan ekstrakurikuler
- Tampilan grid modern dan responsif

### 📝 Informasi PPDB

- Jadwal penerimaan siswa baru
- Persyaratan pendaftaran
- Tombol pendaftaran melalui WhatsApp

### 📞 Hubungi Kami

- Integrasi WhatsApp
- Integrasi Google Maps
- Informasi kontak sekolah

### 🎨 UI/UX Modern

- Responsive Design
- Animasi menggunakan AOS (Animate On Scroll)
- Tampilan yang nyaman di desktop maupun perangkat mobile

---

## 🛠️ Teknologi yang Digunakan

| Teknologi    | Keterangan                   |
| ------------ | ---------------------------- |
| Laravel 12   | Backend Framework            |
| React.js     | Frontend Library             |
| Inertia.js   | Penghubung Laravel dan React |
| Tailwind CSS | Styling Framework            |
| MySQL        | Database                     |
| AOS          | Library Animasi Scroll       |

---

## 🚀 Instalasi dan Menjalankan Proyek

### 1. Clone Repository

```bash
git clone https://github.com/dimasrizki196/Profil-Sekolah.git
cd Profil-Sekolah
```

---

### 2. Install Dependencies

Install seluruh dependency backend dan frontend:

```bash
composer install

npm install
npm install aos
npm install @heroicons/react
```

---

### 3. Konfigurasi Environment

Salin file `.env.example` menjadi `.env`:

```bash
cp .env.example .env
```

Kemudian sesuaikan konfigurasi database pada file `.env`:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nama_database
DB_USERNAME=root
DB_PASSWORD=
```

---

### 4. Generate Application Key

```bash
php artisan key:generate
```

---

### 5. Migrasi Database

```bash
php artisan migrate
```

---

### 6. Buat Storage Link

Agar file gambar yang tersimpan di storage dapat diakses publik:

```bash
php artisan storage:link
```

---

### 7. Jalankan Aplikasi

Buka **dua terminal** secara bersamaan.

#### Terminal 1 - Menjalankan Frontend (Vite)

```bash
npm run dev
```

#### Terminal 2 - Menjalankan Backend (Laravel)

```bash
php artisan serve
```

Setelah berhasil dijalankan, aplikasi dapat diakses melalui:

```text
http://localhost:8000
```

---

## 🔐 Akun Administrator

Untuk keperluan pengujian dan pengelolaan konten website, gunakan akun administrator berikut:

### Login Admin

**Email**

```text
admin@sekolah.com
```

**Password**

```text
password123
```

### Halaman Login

Akses halaman login melalui:

```text
http://localhost:8000/login
```

> ⚠️ Catatan:
>
> - Akun di atas hanya digunakan untuk pengembangan atau demo.
> - Untuk penggunaan di server produksi, segera ubah email dan password administrator demi keamanan.

---

## 📁 Struktur Aset Gambar

Beberapa halaman menggunakan gambar statis yang berada di folder:

```text
public/images/
```

Pastikan file berikut tersedia:

```text
public/images/
│
├── logo.png
├── kepala-madrasah.png
├── bg-hero-mobile.png
│
├── galery/
│   ├── g1.jpg
│   ├── g2.jpg
│   ├── ...
│   └── g15.jpeg
│
└── ekstrakurikuler/
    ├── ekskul-pramuka.jpg
    ├── ekskul-tahfidz.jpg
    └── lainnya...
```

---

## 📌 Persyaratan Sistem

- PHP 8.2 atau lebih baru
- Composer
- Node.js dan NPM
- MySQL
- Git

---

## 👨‍💻 Developer

Dikembangkan sebagai media informasi digital untuk mendukung penyebaran informasi dan promosi pendidikan di **MIN 6 Boyolali**.

---

## 📄 Lisensi

Proyek ini dibuat untuk kebutuhan pengembangan dan publikasi informasi sekolah MIN 6 Boyolali.

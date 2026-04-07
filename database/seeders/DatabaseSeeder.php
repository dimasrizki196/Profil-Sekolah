<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
        * Seed the application's database.
        */
    public function run(): void
    {
        // Membuat 1 akun Admin utama
        User::updateOrCreate(
            ['email' => 'admin@sekolah.com'], // Cari berdasarkan email ini
            [
                'name' => 'Admin Sekolah',
                'password' => Hash::make('password123'), // Jangan lupa ganti passwordnya nanti
                'email_verified_at' => now(),
            ]
        );
    }
}
import { Link } from "@inertiajs/react";

export default function Topbar() {
    return (
        <div className="bg-white border-b border-gray-100 py-3 px-4 md:px-8 animate-fade-in">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
                {/* 1. Bagian Logo dan Nama Sekolah */}
                <Link href="/" className="flex items-center gap-3">
                    {/* Placeholder untuk logo sekolah - ganti dengan gambar asli */}
                    <div className="w-16 h-16 bg-gray-100 rounded-lg border border-gray-200 shadow-inner"></div>
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-primary">
                            Sekolah Kita
                        </h1>
                        <p className="text-sm text-secondary font-medium">
                            KABUPATEN BYL
                        </p>
                    </div>
                </Link>

                {/* 2. Bagian Informasi Kontak */}
                <div className="flex justify-center md:justify-end items-center ml-4">
                    <Link
                        href="/hubungi"
                        className="bg-[#0f5132] hover:bg-green-800 shadow-md text-white px-8 py-2.5 rounded-full font-bold tracking-wide transition inline-flex items-center justify-center transform hover:-translate-y-0.5"
                    >
                        Hubungi Kami
                    </Link>
                </div>
            </div>
        </div>
    );
}

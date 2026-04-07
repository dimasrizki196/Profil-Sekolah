import { Link } from "@inertiajs/react";

const ChevronDown = () => (
    <svg
        className="w-4 h-4 text-gray-400 transition group-hover:text-primary group-hover:-rotate-180 duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
        ></path>
    </svg>
);

export default function Navbar() {
    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm animate-fade-in">
            {/* Menggunakan grid 3 kolom agar menu tengah benar-benar center sempurna */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4">
                {/* Kolom 1: Kosong (hanya untuk menyeimbangkan layout grid) */}
                <div className="hidden md:block"></div>

                {/* Kolom 2: Menu Navigasi (Center) */}
                <div className="flex flex-wrap items-center justify-center gap-1 md:gap-4 text-[15px] font-bold text-secondary">
                    <Link
                        href="/"
                        className="px-3 py-6 hover:text-primary transition"
                    >
                        Beranda
                    </Link>

                    {/* Profil Kami */}
                    <div className="group relative cursor-pointer px-3 py-6 flex items-center gap-1 hover:text-primary transition">
                        <span>Profil Kami</span>
                        <ChevronDown />
                        <div className="absolute hidden group-hover:block bg-white shadow-xl top-full left-0 w-48 rounded-b-lg border-t-4 border-primary">
                            <Link
                                href="/profil/sejarah"
                                className="block px-5 py-3 hover:bg-gray-50 transition"
                            >
                                Sejarah
                            </Link>
                            <Link
                                href="/profil/tentang"
                                className="block px-5 py-3 hover:bg-gray-50 transition"
                            >
                                Tentang Kami
                            </Link>
                            <Link
                                href="/profil/visi-misi"
                                className="block px-5 py-3 hover:bg-gray-50 transition"
                            >
                                Visi Misi Tujuan
                            </Link>
                        </div>
                    </div>

                    {/* Informasi */}
                    <div className="group relative cursor-pointer px-3 py-6 flex items-center gap-1 hover:text-primary transition">
                        <span>Informasi</span>
                        <ChevronDown />
                        <div className="absolute hidden group-hover:block bg-white shadow-xl top-full left-0 w-48 rounded-b-lg border-t-4 border-primary">
                            <Link
                                href="/info/berita"
                                className="block px-5 py-3 hover:bg-gray-50 transition"
                            >
                                Berita
                            </Link>
                            <Link
                                href="/info/ppdb"
                                className="block px-5 py-3 hover:bg-gray-50 transition"
                            >
                                Info PPDB
                            </Link>
                        </div>
                    </div>

                    <Link
                        href="/profil/ekstrakurikuler"
                        className="px-3 py-6 hover:text-primary transition"
                    >
                        Ekstrakurikuler
                    </Link>
                    <Link
                        href="/profil/galeri"
                        className="px-3 py-6 hover:text-primary transition"
                    >
                        Galeri
                    </Link>
                </div>
            </div>
        </nav>
    );
}

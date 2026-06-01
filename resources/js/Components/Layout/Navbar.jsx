import { Link } from "@inertiajs/react";
import { useState } from "react";

// Komponen Ikon Panah
const ChevronDown = ({ className = "" }) => (
    <svg
        className={`w-4 h-4 transition-transform duration-300 ${className}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M19 9l-7 7-7-7"
        ></path>
    </svg>
);

export default function Navbar() {
    // State untuk membuka/tutup menu utama di Mobile
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // State untuk membuka/tutup submenu (dropdown) di Mobile
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMobileDropdown = (menu) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    return (
        // Tambahkan relative di sini agar menu dropdown absolute tahu batasnya
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* ========================================= */}
                {/* 1. TAMPILAN MOBILE (Hamburger Menu)       */}
                {/* ========================================= */}
                <div className="flex md:hidden items-center justify-between py-4 relative z-10 bg-white">
                    <span className="font-bold text-[#0f5132] text-sm tracking-widest">
                        Madrasah Hebat, Bermartabat
                    </span>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-600 hover:text-[#0f5132] focus:outline-none p-2 rounded-xl bg-gray-50 border border-gray-200 transition"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* ========================================= */}
                {/* 2. TAMPILAN DESKTOP                       */}
                {/* ========================================= */}
                <div className="hidden md:grid grid-cols-[1fr_auto_1fr] h-16 items-center gap-4">
                    {/* Kolom 1: Penyeimbang (Kosong) */}
                    <div></div>

                    {/* Kolom 2: Menu Navigasi (Tengah Sempurna) */}
                    <div className="flex items-center justify-center gap-6 text-[15px] font-bold text-gray-600">
                        <Link
                            href="/"
                            className="px-2 py-5 hover:text-[#0f5132] transition border-b-2 border-transparent hover:border-[#0f5132]"
                        >
                            Beranda
                        </Link>

                        {/* Dropdown Profil Kami (Desktop: Hover) */}
                        <div className="group relative cursor-pointer px-2 py-5 flex items-center gap-1.5 hover:text-[#0f5132] transition border-b-2 border-transparent hover:border-[#0f5132]">
                            <span>Profil Kami</span>
                            <ChevronDown className="text-gray-400 group-hover:text-[#0f5132] group-hover:-rotate-180" />

                            <div className="absolute hidden group-hover:block bg-white shadow-xl top-full left-1/2 -translate-x-1/2 w-52 rounded-xl border-t-4 border-[#0f5132] overflow-hidden transform opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Link
                                    href="/profil/sejarah"
                                    className="block px-5 py-3.5 hover:bg-green-50 hover:text-[#0f5132] transition border-b border-gray-50 text-sm"
                                >
                                    Sejarah
                                </Link>
                                <Link
                                    href="/profil/tentang"
                                    className="block px-5 py-3.5 hover:bg-green-50 hover:text-[#0f5132] transition border-b border-gray-50 text-sm"
                                >
                                    Tentang Kami
                                </Link>
                                <Link
                                    href="/profil/visi-misi"
                                    className="block px-5 py-3.5 hover:bg-green-50 hover:text-[#0f5132] transition text-sm"
                                >
                                    Visi Misi Tujuan
                                </Link>
                            </div>
                        </div>

                        {/* Dropdown Informasi (Desktop: Hover) */}
                        <div className="group relative cursor-pointer px-2 py-5 flex items-center gap-1.5 hover:text-[#0f5132] transition border-b-2 border-transparent hover:border-[#0f5132]">
                            <span>Informasi</span>
                            <ChevronDown className="text-gray-400 group-hover:text-[#0f5132] group-hover:-rotate-180" />

                            <div className="absolute hidden group-hover:block bg-white shadow-xl top-full left-1/2 -translate-x-1/2 w-48 rounded-xl border-t-4 border-[#0f5132] overflow-hidden">
                                <Link
                                    href="/info/berita"
                                    className="block px-5 py-3.5 hover:bg-green-50 hover:text-[#0f5132] transition border-b border-gray-50 text-sm"
                                >
                                    Berita Sekolah
                                </Link>
                                <Link
                                    href="/info/ppdb"
                                    className="block px-5 py-3.5 hover:bg-green-50 hover:text-[#0f5132] transition text-sm"
                                >
                                    Info PPDB
                                </Link>
                            </div>
                        </div>

                        <Link
                            href="/profil/ekstrakurikuler"
                            className="px-2 py-5 hover:text-[#0f5132] transition border-b-2 border-transparent hover:border-[#0f5132]"
                        >
                            Ekstrakurikuler
                        </Link>
                        <Link
                            href="/profil/galeri"
                            className="px-2 py-5 hover:text-[#0f5132] transition border-b-2 border-transparent hover:border-[#0f5132]"
                        >
                            Galeri
                        </Link>
                    </div>

                    {/* Kolom 3: Penyeimbang (Kosong) */}
                    <div></div>
                </div>
            </div>

            {/* ========================================= */}
            {/* 3. ISI MENU MOBILE (Absolute / Pop-up Melayang) */}
            {/* ========================================= */}
            {/* Perhatikan penambahan 'absolute top-full left-0 w-full' di bawah ini */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-white shadow-2xl overflow-y-auto transition-all duration-300 ease-in-out origin-top border-t border-gray-100 ${isMobileMenuOpen ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"}`}
            >
                <div className="px-4 py-4 space-y-1 font-bold text-gray-700">
                    <Link
                        href="/"
                        className="block px-4 py-3 rounded-xl hover:bg-green-50 hover:text-[#0f5132] transition"
                    >
                        Beranda
                    </Link>

                    {/* Accordion Profil Kami */}
                    <div>
                        <button
                            onClick={() => toggleMobileDropdown("profil")}
                            className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-green-50 hover:text-[#0f5132] transition"
                        >
                            <span>Profil Kami</span>
                            <ChevronDown
                                className={`text-gray-400 ${activeDropdown === "profil" ? "-rotate-180 text-[#0f5132]" : ""}`}
                            />
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 bg-gray-50 rounded-xl mx-2 ${activeDropdown === "profil" ? "max-h-48 mt-1" : "max-h-0"}`}
                        >
                            <Link
                                href="/profil/sejarah"
                                className="block px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-[#0f5132] border-b border-gray-200/50"
                            >
                                Sejarah
                            </Link>
                            <Link
                                href="/profil/tentang"
                                className="block px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-[#0f5132] border-b border-gray-200/50"
                            >
                                Tentang Kami
                            </Link>
                            <Link
                                href="/profil/visi-misi"
                                className="block px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-[#0f5132]"
                            >
                                Visi Misi Tujuan
                            </Link>
                        </div>
                    </div>

                    {/* Accordion Informasi */}
                    <div>
                        <button
                            onClick={() => toggleMobileDropdown("informasi")}
                            className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-green-50 hover:text-[#0f5132] transition"
                        >
                            <span>Informasi</span>
                            <ChevronDown
                                className={`text-gray-400 ${activeDropdown === "informasi" ? "-rotate-180 text-[#0f5132]" : ""}`}
                            />
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 bg-gray-50 rounded-xl mx-2 ${activeDropdown === "informasi" ? "max-h-32 mt-1" : "max-h-0"}`}
                        >
                            <Link
                                href="/info/berita"
                                className="block px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-[#0f5132] border-b border-gray-200/50"
                            >
                                Berita
                            </Link>
                            <Link
                                href="/info/ppdb"
                                className="block px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-[#0f5132]"
                            >
                                Info PPDB
                            </Link>
                        </div>
                    </div>

                    <Link
                        href="/profil/ekstrakurikuler"
                        className="block px-4 py-3 rounded-xl hover:bg-green-50 hover:text-[#0f5132] transition"
                    >
                        Ekstrakurikuler
                    </Link>
                    <Link
                        href="/profil/galeri"
                        className="block px-4 py-3 rounded-xl hover:bg-green-50 hover:text-[#0f5132] transition"
                    >
                        Galeri
                    </Link>
                </div>
            </div>
        </nav>
    );
}

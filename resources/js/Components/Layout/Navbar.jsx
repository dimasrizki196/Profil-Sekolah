import { Link } from "@inertiajs/react";
import { useState } from "react";

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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMobileDropdown = (menu) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link
                        href="/"
                        className="flex items-center gap-2.5 md:gap-3 hover:opacity-90 transition group shrink-0"
                    >
                        <img
                            src="/images/logo.png"
                            alt="Logo MIN 6 Boyolali"
                            className="w-10 h-10 md:w-12 md:h-12 object-contain transform group-hover:scale-105 transition duration-300"
                        />
                        <div className="flex flex-col justify-center">
                            <h1 className="text-sm sm:text-base md:text-lg font-extrabold text-[#0f5132] tracking-tight leading-tight">
                                MIN 6 Boyolali
                            </h1>
                            <p className="hidden sm:block text-[10px] md:text-xs text-gray-500 font-semibold tracking-wide">
                                Kabupaten Boyolali
                            </p>
                        </div>
                    </Link>

                    <div className="hidden lg:flex items-center justify-center gap-6 text-[15px] font-bold text-gray-600">
                        <Link
                            href="/"
                            className="px-2 py-5 hover:text-[#0f5132] transition border-b-2 border-transparent hover:border-[#0f5132]"
                        >
                            Beranda
                        </Link>

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

                    <div className="flex items-center gap-4">
                        <Link
                            href="/hubungi"
                            className="hidden lg:inline-flex bg-[#0f5132] hover:bg-green-800 shadow-md shadow-green-900/20 text-white px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition items-center justify-center transform hover:-translate-y-0.5 whitespace-nowrap"
                        >
                            Hubungi Kami
                        </Link>

                        <button
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            className="lg:hidden text-gray-600 hover:text-[#0f5132] focus:outline-none p-2 rounded-xl bg-gray-50 border border-gray-200 transition"
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
                </div>
            </div>

            <div
                className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl overflow-y-auto transition-all duration-300 ease-in-out origin-top border-t border-gray-100 ${isMobileMenuOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"}`}
            >
                <div className="px-4 py-4 space-y-1 font-bold text-gray-700">
                    <Link
                        href="/"
                        className="block px-4 py-3 rounded-xl hover:bg-green-50 hover:text-[#0f5132] transition"
                    >
                        Beranda
                    </Link>

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

                    <div className="pt-4 mt-2 border-t border-gray-100">
                        <Link
                            href="/hubungi"
                            className="flex items-center justify-center w-full bg-[#0f5132] text-white px-4 py-3 rounded-xl font-bold transition hover:bg-green-800"
                        >
                            Hubungi Kami
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <footer className="border-t-4 border-[#0f5132]">
            {/* Bagian Atas (Latar Hijau Gelap Elegan) */}
            <div className="bg-[#0a3822] text-white py-16 px-6 md:px-12">
                {/* Menggunakan grid 3 kolom yang sama rata agar layout seimbang */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {/* ===================================== */}
                    {/* KOLOM 1: Logo, Nama, & Alamat         */}
                    {/* ===================================== */}
                    <div className="flex flex-col">
                        {/* Logo & Nama (Dirapikan agar senter vertikal) */}
                        <Link
                            href="/"
                            className="flex items-center gap-4 mb-8 group w-fit"
                        >
                            <div className="bg-white p-1.5 rounded-xl shadow-lg transform group-hover:scale-105 transition duration-300 shrink-0">
                                <img
                                    src="/images/logo.png"
                                    alt="Logo MIN 6 Boyolali"
                                    className="w-12 h-12 md:w-14 md:h-14 object-contain"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h2 className="text-xl md:text-2xl font-extrabold text-white tracking-wide leading-tight">
                                    MIN 6 BOYOLALI
                                </h2>
                                <p className="text-xs md:text-sm text-green-400 font-bold tracking-widest mt-0.5">
                                    Kabupaten Boyolali
                                </p>
                            </div>
                        </Link>

                        {/* Alamat & Kontak */}
                        <div className="text-gray-300 text-sm leading-relaxed space-y-4">
                            <p className="flex items-start gap-3">
                                <svg
                                    className="w-5 h-5 text-green-400 shrink-0 mt-0.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    ></path>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    ></path>
                                </svg>
                                <span>Dibal RT 04/08, Ngemplak, Boyolali</span>
                            </p>
                            <p className="flex items-center gap-3">
                                <svg
                                    className="w-5 h-5 text-green-400 shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    ></path>
                                </svg>
                                <span>0851-1784-5202</span>
                            </p>
                        </div>
                    </div>

                    {/* ===================================== */}
                    {/* KOLOM 2: Menu Profil Sekolah          */}
                    {/* ===================================== */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider relative inline-block">
                            Profil Sekolah
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-green-500 rounded-full"></span>
                        </h3>
                        <ul className="flex flex-col gap-4 text-gray-300 text-sm font-medium">
                            <li>
                                <Link
                                    href="/profil/sejarah"
                                    className="hover:text-green-400 hover:translate-x-1 transition-all inline-block"
                                >
                                    Sejarah Madrasah
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/profil/tentang"
                                    className="hover:text-green-400 hover:translate-x-1 transition-all inline-block"
                                >
                                    Tentang Kami
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/profil/visi-misi"
                                    className="hover:text-green-400 hover:translate-x-1 transition-all inline-block"
                                >
                                    Visi Misi & Tujuan
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/profil/ekstrakurikuler"
                                    className="hover:text-green-400 hover:translate-x-1 transition-all inline-block"
                                >
                                    Ekstrakurikuler
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/profil/galeri"
                                    className="hover:text-green-400 hover:translate-x-1 transition-all inline-block"
                                >
                                    Galeri Kegiatan
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/hubungi"
                                    className="hover:text-green-400 hover:translate-x-1 transition-all inline-block"
                                >
                                    Hubungi Kami
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* ===================================== */}
                    {/* KOLOM 3: Sosial Media                 */}
                    {/* ===================================== */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider relative inline-block">
                            Sosial Media
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-green-500 rounded-full"></span>
                        </h3>
                        <ul className="flex flex-col gap-4 text-gray-300 text-sm font-medium">
                            {/* Facebook */}
                            <li>
                                <a
                                    href="https://www.facebook.com/min6byl/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-3 hover:text-green-400 group transition-all w-fit"
                                >
                                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#1877F2] transition duration-300">
                                        <svg
                                            className="w-4 h-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                                        </svg>
                                    </div>
                                    <span>Min VI Boyolali</span>
                                </a>
                            </li>
                            {/* Instagram */}
                            <li>
                                <a
                                    href="https://instagram.com/min_6boyolali"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-3 hover:text-green-400 group transition-all w-fit"
                                >
                                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#E4405F] transition duration-300">
                                        <svg
                                            className="w-4 h-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                                        </svg>
                                    </div>
                                    <span>min_6boyolali</span>
                                </a>
                            </li>
                            {/* TikTok */}
                            <li>
                                <a
                                    href="https://tiktok.com/@min6_boyolali"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-3 hover:text-green-400 group transition-all w-fit"
                                >
                                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-black transition duration-300">
                                        <svg
                                            className="w-4 h-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
                                        </svg>
                                    </div>
                                    <span>min6_boyolali</span>
                                </a>
                            </li>
                            {/* YouTube */}
                            <li>
                                <a
                                    href="https://youtube.com/@MIN6Boyolali"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-3 hover:text-green-400 group transition-all w-fit"
                                >
                                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#FF0000] transition duration-300">
                                        <svg
                                            className="w-4 h-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                                        </svg>
                                    </div>
                                    <span>MIN6Boyolali</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ===================================== */}
            {/* Bagian Bawah (Copyright)              */}
            {/* ===================================== */}
            <div className="bg-[#062415] text-green-200/60 py-5 text-center text-sm font-medium">
                <p>
                    {new Date().getFullYear()} &copy; MIN 6 Boyolali. All rights reserved.
                
                </p>
            </div>
        </footer>
    );
}

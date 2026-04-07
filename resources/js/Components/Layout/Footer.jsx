import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <footer>
            {/* Bagian Atas (Latar Hitam) */}
            <div className="bg-black text-white py-16 px-6 md:px-12 animate-fade-in">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
                    {/* Kolom 1: Logo, Alamat, dan Sosial Media (Lebih Lebar) */}
                    <div className="md:col-span-5">
                        {/* Logo & Nama */}
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="w-14 h-14 bg-green-700 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
                                LOGO
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-green-600">
                                    SMK Kita
                                </h2>
                                <p className="text-sm text-yellow-500 font-bold tracking-wide">
                                    KABUPATEN BYL
                                </p>
                            </div>
                        </Link>

                        {/* Alamat */}
                        <p className="text-gray-300 text-sm leading-relaxed mb-8 pr-0 md:pr-10">
                            Jl. ini, saya, situ, Kec. berbagi,
                            Kabupaten BYL, Oker 55711
                        </p>

                        {/* Sosial Media */}
                        <h3 className="text-lg font-bold mb-4">Sosial Media</h3>
                        <div className="flex items-center gap-4 text-2xl">
                            {/* Dummy Icon untuk Sosmed. Bisa diganti SVG asli atau FontAwesome */}
                            <a
                                href="#"
                                className="text-[#25D366] hover:opacity-80 transition"
                                title="WhatsApp"
                            >
                                <i className="fab fa-whatsapp"></i> WA
                            </a>
                            <a
                                href="#"
                                className="text-[#1877F2] hover:opacity-80 transition"
                                title="Facebook"
                            >
                                <i className="fab fa-facebook"></i> FB
                            </a>
                            <a
                                href="#"
                                className="text-[#1DA1F2] hover:opacity-80 transition"
                                title="Twitter"
                            >
                                <i className="fab fa-twitter"></i> TW
                            </a>
                            <a
                                href="#"
                                className="text-[#E4405F] hover:opacity-80 transition"
                                title="Instagram"
                            >
                                <i className="fab fa-instagram"></i> IG
                            </a>
                            <a
                                href="#"
                                className="text-[#FF0000] hover:opacity-80 transition"
                                title="YouTube"
                            >
                                <i className="fab fa-youtube"></i> YT
                            </a>
                            <a
                                href="#"
                                className="text-[#ff0050] hover:opacity-80 transition"
                                title="TikTok"
                            >
                                <i className="fab fa-tiktok"></i> TK
                            </a>
                        </div>
                    </div>

                    {/* Kolom 2: Profil Sekolah */}
                    <div className="md:col-span-3 lg:col-start-7">
                        <h3 className="text-xl font-bold mb-6">
                            Profil Sekolah
                        </h3>
                        <ul className="flex flex-col gap-3 text-gray-300 text-sm">
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-white transition"
                                >
                                    Profil Sekolah
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-white transition"
                                >
                                    Staf Tenaga Kependidikan
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-white transition"
                                >
                                    Staf Pengajar
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-white transition"
                                >
                                    Galeri
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-white transition"
                                >
                                    Agenda
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-white transition"
                                >
                                    Fasilitas
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-white transition"
                                >
                                    Kontak
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Kolom 3: Link Penting */}
                    <div className="md:col-span-4 lg:col-span-3">
                        <h3 className="text-xl font-bold mb-6">Link Penting</h3>
                        <ul className="flex flex-col gap-3 text-gray-300 text-sm">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition"
                                >
                                    Dapodikdasmen
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition"
                                >
                                    Informasi GTK
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition"
                                >
                                    Informasi NISN
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition"
                                >
                                    Verval PTK
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition"
                                >
                                    Verval PD
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition"
                                >
                                    PMP
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition"
                                >
                                    Absensi Online
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bagian Bawah (Copyright) */}
            <div className="bg-[#f3f4f6] text-[#4b5563] py-4 text-center text-sm font-medium border-t border-gray-200">
                <p>
                    {new Date().getFullYear()} &copy; SMK Kita
                    — Oleh{" "}
                    <a
                        href="#"
                        className="text-[#15803d] font-bold hover:underline"
                    >
                        Websekolah.co.id
                    </a>
                </p>
            </div>
        </footer>
    );
}

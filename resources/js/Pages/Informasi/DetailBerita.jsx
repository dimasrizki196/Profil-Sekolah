import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";

export default function DetailBerita({ berita }) {
    return (
        <MainLayout>
            <Head title={berita.title} />
            <div className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
                <div
                    className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100"
                    data-aos="fade-up"
                >
                    {/* Breadcrumb Navigasi */}
                    <div className="mb-8 flex items-center gap-2 text-sm text-gray-500 font-medium">
                        <Link
                            href="/"
                            className="hover:text-[#0f5132] transition-colors"
                        >
                            Beranda
                        </Link>
                        <span>/</span>
                        {/* Asumsi route untuk daftar berita bernama berita.index */}
                        <Link
                            href={route("berita.index")}
                            className="hover:text-[#0f5132] transition-colors"
                        >
                            Berita
                        </Link>
                        <span>/</span>
                        <span className="text-gray-400 truncate w-32 md:w-auto">
                            {berita.title}
                        </span>
                    </div>

                    {/* Judul & Meta */}
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        {berita.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
                        <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                            <svg
                                className="w-4 h-4 text-yellow-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                ></path>
                            </svg>
                            {new Date(berita.published_at).toLocaleDateString(
                                "id-ID",
                                {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                },
                            )}
                        </span>
                        <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                            <svg
                                className="w-4 h-4 text-[#0f5132]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                ></path>
                            </svg>
                            Admin Madrasah
                        </span>
                    </div>

                    {/* Gambar Utama Berita */}
                    {berita.image && (
                        <div className="mb-10 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                            <img
                                src={`/storage/${berita.image}`}
                                alt={berita.title}
                                className="w-full h-auto object-cover max-h-[500px]"
                            />
                        </div>
                    )}

                    {/* Isi Konten Berita */}
                    <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-line leading-relaxed text-justify mb-12">
                        {berita.content}
                    </div>

                    {/* ========================================= */}
                    {/* Tombol Aksi: Kembali & Berita Lainnya     */}
                    {/* ========================================= */}
                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-100">
                        {/* Tombol Kembali (Beraksen Abu-abu / Netral) */}
                        <Link
                            href={route("berita.index")}
                            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border-2 border-gray-200 text-gray-600 hover:border-[#0f5132] hover:text-[#0f5132] font-bold rounded-full transition-all duration-300 group"
                        >
                            <svg
                                className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                ></path>
                            </svg>
                            Kembali
                        </Link>

                        {/* Tombol Berita Lainnya (Beraksen Hijau Utama) */}
                        <Link
                            href={route("berita.index")}
                            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border-2 border-[#0f5132] text-white bg-[#0f5132] hover:bg-[#0a3822] hover:border-[#0a3822] font-bold rounded-full transition-all duration-300 shadow-sm group"
                        >
                            Lihat Berita Lainnya
                            <svg
                                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                ></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

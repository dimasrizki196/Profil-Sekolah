import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function Tentang() {
    return (
        <MainLayout>
            <Head title="Tentang Kami" />

            <div className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white min-h-screen overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    {/* 1. Judul Halaman (Simpel & Clean) */}
                    <div data-aos="fade-down" className="text-center mb-16">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                            Tentang <span className="text-[#0f5132]">Kami</span>
                        </h1>
                        <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full"></div>
                    </div>

                    {/* 2. Konten Utama (Grid 2 Kolom) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                        {/* Kolom Kiri: Gambar Minimalis */}
                        <div data-aos="fade-right" className="relative">
                            {/* Aksen bayangan solid di belakang gambar (Gaya Modern) */}
                            <div className="absolute inset-0 bg-[#0f5132] rounded-2xl transform translate-x-4 translate-y-4 -z-10 opacity-10"></div>
                            <img
                                src="/images/bg-hero-mobile.png"
                                alt="Gedung MIN 6 Boyolali"
                                className="relative z-10 w-full h-[400px] md:h-[500px] object-cover rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300"
                            />
                        </div>

                        {/* Kolom Kanan: Teks & Info */}
                        <div data-aos="fade-left" data-aos-delay="100">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-snug">
                                Mencetak Generasi Unggul,{" "}
                                <br className="hidden md:block" />
                                <span className="text-[#0f5132]">
                                    Berprestasi & Berakhlak Mulia
                                </span>
                            </h2>

                            <div className="space-y-5 text-gray-600 leading-relaxed text-justify mb-8">
                                <p>
                                    <strong>MIN 6 Boyolali</strong> adalah
                                    lembaga pendidikan tingkat dasar berciri
                                    khas agama Islam yang berdedikasi untuk
                                    mencetak generasi penerus bangsa yang
                                    cerdas, terampil, dan berkarakter Islami.
                                    Kami memadukan kurikulum nasional secara
                                    komprehensif dengan pendidikan keagamaan.
                                </p>
                                <p>
                                    Berkomitmen pada motto{" "}
                                    <span className="italic font-semibold text-gray-800">
                                        "Madrasah Hebat Bermartabat, Mandiri
                                        Berprestasi"
                                    </span>
                                    , kami terus berinovasi dalam memfasilitasi
                                    pembelajaran yang interaktif, menciptakan
                                    lingkungan yang nyaman, serta
                                    menyelenggarakan berbagai program pembiasaan
                                    positif agar setiap siswa dapat berkembang
                                    sesuai potensi maksimalnya.
                                </p>
                            </div>

                            {/* Statistik Cepat (Angka-angka penting) */}
                            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                                <div>
                                    <p className="text-3xl font-extrabold text-[#0f5132] mb-1">
                                        A
                                    </p>
                                    <p className="text-sm text-gray-500 font-medium">
                                        Akreditasi Madrasah
                                    </p>
                                </div>
                                <div>
                                    <p className="text-3xl font-extrabold text-[#0f5132] mb-1">
                                        8+
                                    </p>
                                    <p className="text-sm text-gray-500 font-medium">
                                        Program Ekstrakurikuler
                                    </p>
                                </div>
                                <div>
                                    <p className="text-3xl font-extrabold text-[#0f5132] mb-1">
                                        30+
                                    </p>
                                    <p className="text-sm text-gray-500 font-medium">
                                        Tenaga Pendidik
                                    </p>
                                </div>
                                <div>
                                    <p className="text-3xl font-extrabold text-[#0f5132] mb-1">
                                        100%
                                    </p>
                                    <p className="text-sm text-gray-500 font-medium">
                                        Lingkungan Islami
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import Card from "@/Components/UI/Card";

export default function VisiMisi() {
    return (
        <MainLayout>
            <Head title="Visi, Misi & Tujuan" />

            <div className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen overflow-hidden">
                <div className="max-w-5xl mx-auto">
                    {/* 1. Header Halaman */}
                    <div data-aos="fade-down" className="text-center mb-16">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                            Visi, Misi{" "}
                            <span className="text-[#0f5132]">& Tujuan</span>
                        </h1>
                        <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full"></div>
                    </div>

                    {/* 2. Visi (Tengah & Menonjol) */}
                    <div data-aos="zoom-in" className="mb-10">
                        <Card className="text-center p-8 md:p-12 border-t-4 border-t-[#0f5132] shadow-md hover:shadow-lg transition-all duration-300 bg-white">
                            {/* Ikon Target */}
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0f5132]/10 text-[#0f5132] mb-6">
                                <svg
                                    className="w-8 h-8"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    ></path>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    ></path>
                                </svg>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Visi Kami
                            </h2>
                            <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed italic max-w-3xl mx-auto">
                                "Terwujudnya Peserta didik yang berprestasi dan
                                berakhlak mulia"
                            </p>
                        </Card>
                    </div>

                    {/* 3. Misi & Tujuan (Grid 2 Kolom) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Box Misi */}
                        <div
                            data-aos="fade-right"
                            data-aos-delay="100"
                            className="h-full"
                        >
                            <Card className="p-8 shadow-md hover:shadow-lg transition-all duration-300 bg-white h-full">
                                <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                                    {/* Ikon Rocket */}
                                    <div className="w-12 h-12 rounded-full bg-[#0f5132]/10 text-[#0f5132] flex items-center justify-center shrink-0">
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        Misi Kami
                                    </h2>
                                </div>
                                <ul className="space-y-4 text-gray-600 text-sm md:text-base text-justify leading-relaxed">
                                    <li className="flex gap-3 items-start">
                                        <CheckIcon />
                                        <span>
                                            Meningkatkan profesionalisme
                                            pendidik dan tenaga kependidikan.
                                        </span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <CheckIcon />
                                        <span>
                                            Meningkatkan prestasi peserta didik
                                            dalam bidang akademik maupun non
                                            akademik.
                                        </span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <CheckIcon />
                                        <span>
                                            Meningkatkan sarana dan prasarana
                                            pendidikan yang memadai.
                                        </span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <CheckIcon />
                                        <span>
                                            Meningkatkan pembiasaan sholat
                                            berjamaah dan membaca Al Quran.
                                        </span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <CheckIcon />
                                        <span>
                                            Meningkatkan pembiasaan santun dalam
                                            perbuatan dan perkataan.
                                        </span>
                                    </li>
                                </ul>
                            </Card>
                        </div>

                        {/* Box Tujuan */}
                        <div
                            data-aos="fade-left"
                            data-aos-delay="200"
                            className="h-full"
                        >
                            <Card className="p-8 shadow-md hover:shadow-lg transition-all duration-300 bg-white h-full">
                                <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                                    {/* Ikon Flag */}
                                    <div className="w-12 h-12 rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center shrink-0">
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                                            ></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        Tujuan
                                    </h2>
                                </div>
                                <ul className="space-y-4 text-gray-600 text-sm md:text-base text-justify leading-relaxed">
                                    <li className="flex gap-3 items-start">
                                        <CheckIcon />
                                        <span>
                                            Mencetak lulusan yang unggul,
                                            berprestasi, dan memiliki dasar
                                            pemahaman agama Islam yang kuat.
                                        </span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <CheckIcon />
                                        <span>
                                            Menumbuhkan lingkungan madrasah yang
                                            religius, aman, nyaman, dan kondusif
                                            untuk belajar.
                                        </span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <CheckIcon />
                                        <span>
                                            Membangun karakter peserta didik
                                            yang mandiri, disiplin, bertanggung
                                            jawab, dan berjiwa sosial tinggi.
                                        </span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <CheckIcon />
                                        <span>
                                            Mengoptimalkan pemanfaatan fasilitas
                                            sarana dan prasarana untuk mendukung
                                            kualitas kegiatan belajar mengajar.
                                        </span>
                                    </li>
                                </ul>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

// Komponen kecil untuk Ikon Centang agar kode lebih rapi
const CheckIcon = () => (
    <svg
        className="w-5 h-5 text-[#0f5132] shrink-0 mt-0.5"
        fill="currentColor"
        viewBox="0 0 20 20"
    >
        <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
        />
    </svg>
);

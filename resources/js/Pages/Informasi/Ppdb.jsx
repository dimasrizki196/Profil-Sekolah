import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import Card from "@/Components/UI/Card";
import Button from "@/Components/UI/Button";

export default function Ppdb() {
    return (
        <MainLayout>
            <Head title="Informasi PPDB" />

            <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen overflow-hidden">
                <div className="max-w-5xl mx-auto">
                    {/* 1. Header Halaman */}
                    <div data-aos="fade-down" className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                            Informasi{" "}
                            <span className="text-[#0f5132]">PPDB</span>
                        </h1>
                        <p className="text-[#0f5132] font-bold text-lg">
                            Tahun Ajaran 2026/2027
                        </p>
                        <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full mt-4"></div>
                    </div>

                    {/* 2. Banner Status Pendaftaran */}
                    <div data-aos="zoom-in" className="mb-12">
                        <div className="bg-gradient-to-r from-[#0f5132] to-[#0a3822] rounded-2xl p-8 md:p-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
                            <div className="text-white">
                                <h2 className="text-2xl font-bold mb-2">
                                    Pendaftaran Sedang Dibuka!
                                </h2>
                                <p className="opacity-95 text-sm md:text-base">
                                    Mari bergabung bersama MIN 6 Boyolali
                                    menjadi generasi yang cerdas, mandiri, dan
                                    berakhlak mulia.
                                </p>
                            </div>
                            <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-full shrink-0 shadow-md transition-colors border-none">
                                Daftar Sekarang
                            </Button>
                        </div>
                    </div>

                    {/* 3. Jadwal Pendaftaran & Syarat (Grid 2 Kolom) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Kolom Kiri: Jadwal Gelombang */}
                        <div data-aos="fade-right" data-aos-delay="100">
                            <Card className="p-8 shadow-md bg-white border border-gray-100 rounded-2xl h-full">
                                <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                                    <svg
                                        className="w-8 h-8 text-[#0f5132]"
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
                                    <h3 className="text-xl font-bold text-gray-900">
                                        Jadwal Pendaftaran
                                    </h3>
                                </div>

                                <div className="space-y-6">
                                    {/* Gelombang 1 */}
                                    <div className="relative pl-6 border-l-2 border-[#0f5132]">
                                        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#0f5132] ring-4 ring-white"></div>
                                        <h4 className="font-bold text-gray-900">
                                            Gelombang 1 (Jalur Indent /
                                            Prestasi)
                                        </h4>
                                        <p className="text-sm text-gray-600 mt-1 font-medium">
                                            1 Mei - 30 Mei 2026
                                        </p>
                                    </div>

                                    {/* Gelombang 2 */}
                                    <div className="relative pl-6 border-l-2 border-gray-200">
                                        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gray-300 ring-4 ring-white"></div>
                                        <h4 className="font-bold text-gray-900">
                                            Gelombang 2 (Jalur Reguler)
                                        </h4>
                                        <p className="text-sm text-gray-600 mt-1 font-medium">
                                            1 Juni - 30 Juni 2026
                                        </p>
                                    </div>

                                    {/* Daftar Ulang */}
                                    <div className="relative pl-6 border-l-2 border-transparent">
                                        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gray-300 ring-4 ring-white"></div>
                                        <h4 className="font-bold text-gray-900">
                                            Daftar Ulang
                                        </h4>
                                        <p className="text-sm text-gray-600 mt-1 font-medium">
                                            5 Juli - 10 Juli 2026
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        {/* Kolom Kanan: Syarat Pendaftaran */}
                        <div data-aos="fade-left" data-aos-delay="200">
                            <Card className="p-8 shadow-md bg-white border border-gray-100 rounded-2xl h-full">
                                <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                                    <svg
                                        className="w-8 h-8 text-yellow-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        ></path>
                                    </svg>
                                    <h3 className="text-xl font-bold text-gray-900">
                                        Syarat Pendaftaran
                                    </h3>
                                </div>

                                <ul className="space-y-4 text-sm md:text-base text-gray-600">
                                    <li className="flex gap-3 items-start">
                                        <CheckIcon />
                                        <span>
                                            Mengisi formulir pendaftaran
                                            (Online/Offline).
                                        </span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <CheckIcon />
                                        <span>
                                            Fotokopi Akta Kelahiran calon siswa
                                            (2 lembar).
                                        </span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <CheckIcon />
                                        <span>
                                            Fotokopi Kartu Keluarga (KK).
                                        </span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <CheckIcon />
                                        <span>
                                            Pas foto ukuran 3x4 berwarna (4
                                            lembar).
                                        </span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <CheckIcon />
                                        <span>
                                            Fotokopi Ijazah/Sertifikat TK/RA
                                            (jika ada).
                                        </span>
                                    </li>
                                </ul>
                            </Card>
                        </div>
                    </div>

                    {/* 4. Kontak Bantuan */}
                    <div data-aos="fade-up" className="mt-12 text-center">
                        <p className="text-gray-600 mb-3 font-medium">
                            Ada pertanyaan seputar pendaftaran?
                        </p>
                        <a
                            href="https://wa.me/6285801051358"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-[#0f5132] hover:text-[#0a3822] font-bold transition-colors duration-300 bg-white border border-gray-200 px-6 py-3 rounded-full shadow-sm hover:shadow-md"
                        >
                            <svg
                                className="w-5 h-5 text-green-600"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12.004 2c-5.517 0-9.993 4.476-9.993 9.993 0 1.764.461 3.42 1.261 4.868l-1.122 4.093 4.186-1.1c1.37.747 2.924 1.182 4.588 1.182 5.517 0 9.993-4.476 9.993-9.993 0-5.517-4.476-9.993-9.993-9.993zm5.719 13.911c-.267.751-1.341 1.481-2.029 1.637-.625.143-1.312.247-3.996-.867-3.141-1.282-5.115-4.43-5.27-4.639-.153-.207-1.232-1.639-1.232-3.125 0-1.485.782-2.214 1.062-2.515.281-.302.601-.378.802-.378.199 0 .399.001.572.008.18.007.42-.069.658.508.238.577.82 1.996.892 2.146.072.15.121.325.022.522-.1.198-.152.325-.3.498-.153.175-.32.392-.458.526-.153.151-.31.325-.133.626.177.302.784 1.29 1.684 2.091.901.801 1.666 1.05 1.968 1.2.302.152.478.127.658-.076.18-.201.782-.903.99-.1.207.2.417.658.626.852.201.2.417.41.626.602.198.197.399.201.626.076z" />
                            </svg>
                            Hubungi Panitia PPDB via WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

// Ikon Centang
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

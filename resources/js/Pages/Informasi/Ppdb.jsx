import MainLayout from "@/Layouts/MainLayout";
import Card from "@/Components/UI/Card";
import Button from "@/Components/UI/Button";

export default function Ppdb() {
    return (
        <MainLayout>
            <div className="py-20 px-4 sm:px-6 lg:px-8 bg-background min-h-screen">
                <div className="max-w-5xl mx-auto">
                    {/* 1. Header Halaman */}
                    <div className="text-center mb-12 animate-fade-in">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">
                            Informasi <span className="text-primary">PPDB</span>
                        </h1>
                        <p className="text-secondary opacity-80 font-medium">
                            Tahun Ajaran 2026/2027
                        </p>
                        <div className="w-24 h-1.5 bg-primary mx-auto rounded-full opacity-80 mt-4"></div>
                    </div>

                    {/* 2. Banner Status Pendaftaran */}
                    <div className="mb-12 animate-slide-up">
                        <div className="bg-gradient-to-r from-green-800 to-green-600 rounded-2xl p-8 md:p-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
                            <div className="text-white">
                                <h2 className="text-2xl font-bold mb-2">
                                    Pendaftaran Sedang Dibuka!
                                </h2>
                                <p className="opacity-90">
                                    Mari bergabung bersama kami menjadi generasi
                                    yang cerdas dan berakhlak mulia.
                                </p>
                            </div>
                            <Button className="bg-yellow-500 hover:bg-yellow-400 text-green-950 font-bold px-8 py-3 rounded-full shrink-0 shadow-md">
                                Daftar Sekarang
                            </Button>
                        </div>
                    </div>

                    {/* 3. Jadwal Pendaftaran & Syarat (Grid 2 Kolom) */}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up"
                        style={{ animationDelay: "0.2s" }}
                    >
                        {/* Kolom Kiri: Jadwal Gelombang */}
                        <Card className="p-8 shadow-sm">
                            <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                                <svg
                                    className="w-8 h-8 text-primary"
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
                                <h3 className="text-xl font-bold text-gray-800">
                                    Jadwal Pendaftaran
                                </h3>
                            </div>

                            <div className="space-y-6">
                                {/* Gelombang 1 */}
                                <div className="relative pl-6 border-l-2 border-primary">
                                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-white"></div>
                                    <h4 className="font-bold text-gray-800">
                                        Gelombang 1 (Jalur Prestasi)
                                    </h4>
                                    <p className="text-sm text-secondary opacity-80 mt-1">
                                        1 Mei - 30 Mei 2026
                                    </p>
                                </div>
                                {/* Gelombang 2 */}
                                <div className="relative pl-6 border-l-2 border-gray-200">
                                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gray-300 ring-4 ring-white"></div>
                                    <h4 className="font-bold text-gray-800">
                                        Gelombang 2 (Jalur Reguler)
                                    </h4>
                                    <p className="text-sm text-secondary opacity-80 mt-1">
                                        1 Juni - 30 Juni 2026
                                    </p>
                                </div>
                                {/* Daftar Ulang */}
                                <div className="relative pl-6 border-l-2 border-transparent">
                                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gray-300 ring-4 ring-white"></div>
                                    <h4 className="font-bold text-gray-800">
                                        Daftar Ulang
                                    </h4>
                                    <p className="text-sm text-secondary opacity-80 mt-1">
                                        5 Juli - 10 Juli 2026
                                    </p>
                                </div>
                            </div>
                        </Card>

                        {/* Kolom Kanan: Syarat Pendaftaran */}
                        <Card className="p-8 shadow-sm">
                            <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                                <svg
                                    className="w-8 h-8 text-accent"
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
                                <h3 className="text-xl font-bold text-gray-800">
                                    Syarat Pendaftaran
                                </h3>
                            </div>

                            <ul className="space-y-4 text-sm md:text-base text-secondary opacity-90">
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
                                        Fotokopi Ijazah SMP/MTs yang dilegalisir
                                        (2 lembar).
                                    </span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <CheckIcon />
                                    <span>
                                        Fotokopi Kartu Keluarga (KK) & Akta
                                        Kelahiran.
                                    </span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <CheckIcon />
                                    <span>
                                        Pas foto ukuran 3x4 berwarna (4 lembar).
                                    </span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <CheckIcon />
                                    <span>
                                        Surat Keterangan Lulus (SKL) asli.
                                    </span>
                                </li>
                            </ul>
                        </Card>
                    </div>

                    {/* 4. Kontak Bantuan */}
                    <div
                        className="mt-12 text-center animate-fade-in"
                        style={{ animationDelay: "0.4s" }}
                    >
                        <p className="text-secondary mb-3">
                            Ada pertanyaan seputar pendaftaran?
                        </p>
                        <a
                            href="https://wa.me/6289688448050"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-bold transition"
                        >
                            <svg
                                className="w-6 h-6"
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
        className="w-5 h-5 text-primary shrink-0 mt-0.5"
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

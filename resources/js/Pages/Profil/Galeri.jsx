import React, { useState } from "react";
import MainLayout from "../../Layouts/MainLayout";
import { Head } from "@inertiajs/react";

const daftarFoto = [
    {
        id: 1,
        url: "/images/galery/g1.jpg",
        judul: "Kegiatan Ekstrakurikuler Pramuka",
        kategori: "Ekstrakurikuler",
    },
    {
        id: 2,
        url: "/images/galery/g2.jpg",
        judul: "Sholat Berjamaah di Halaman Madrasah",
        kategori: "Religius",
    },
    {
        id: 3,
        url: "/images/galery/g3.jpg",
        judul: "Sholat Dhuha Bersama Guru dan Siswa",
        kategori: "Religius",
    },
    {
        id: 4,
        url: "/images/galery/g4.jpg",
        judul: "Latihan Taekwondo Ekstrakurikuler",
        kategori: "Ekstrakurikuler",
    },
    {
        id: 5,
        url: "/images/galery/g5.jpg",
        judul: "Tanding Bola Voli",
        kategori: "Ekstrakurikuler",
    },
    {
        id: 6,
        url: "/images/galery/g6.jpg",
        judul: "Latihan Taekwondo Rutin",
        kategori: "Ekstrakurikuler",
    },
    {
        id: 7,
        url: "/images/galery/g7.jpg",
        judul: "Tahfidz Al-Qur'an di Masjid Madrasah",
        kategori: "Ekstrakurikuler",
    },
    {
        id: 8,
        url: "/images/galery/g8.jpeg",
        judul: "Hadroh Ekstrakurikuler Seni Islami",
        kategori: "Ekstrakurikuler",
    },
    {
        id: 9,
        url: "/images/galery/g9.jpeg",
        judul: "Foto Bersama",
        kategori: "Kegiatan",
    },
    {
        id: 10,
        url: "/images/galery/g10.jpeg",
        judul: "Pemadam Kebakaran Outing Class",
        kategori: "OutingClass",
    },
    {
        id: 11,
        url: "/images/galery/g11.jpeg",
        judul: "Manasik Haji Bersama Siswa dan Guru",
        kategori: "Keagamaan",
    },
    {
        id: 12,
        url: "/images/galery/g12.jpeg",
        judul: "Manasik Haji",
        kategori: "Keagamaan",
    },
    {
        id: 13,
        url: "/images/galery/g13.jpeg",
        judul: "Upacara Bendera",
        kategori: "Kegiatan",
    },
    {
        id: 14,
        url: "/images/galery/g14.jpeg",
        judul: "Paduan Suara Upacara Bendera",
        kategori: "Kegiatan",
    },
    {
        id: 15,
        url: "/images/galery/g15.jpeg",
        judul: "Foto Bersama Wisuda Kelulusan",
        kategori: "Akademik",
    },
];

export default function Galeri() {
    const [selectedFoto, setSelectedFoto] = useState(null);

    return (
        <MainLayout>
            <Head title="Galeri Kegiatan" />

            <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen overflow-hidden relative">
                <div className="max-w-7xl mx-auto">
                    <div data-aos="fade-down" className="text-center mb-16">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                            Galeri{" "}
                            <span className="text-[#0f5132]">Madrasah</span>
                        </h1>
                        <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
                            Dokumentasi momen berharga, kegiatan belajar
                            mengajar, fasilitas, dan berbagai prestasi di MIN 6
                            Boyolali.
                        </p>
                        <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {daftarFoto.map((foto, index) => (
                            <div
                                key={foto.id}
                                data-aos="fade-up"
                                data-aos-delay={(index % 3) * 100}
                                onClick={() => setSelectedFoto(foto.url)}
                                className="group relative h-72 overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 bg-gray-200"
                            >
                                <img
                                    src={foto.url}
                                    alt={foto.judul}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a3822]/90 via-[#0a3822]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <span className="text-yellow-400 font-bold text-xs uppercase tracking-wider mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {foto.kategori}
                                    </span>
                                    <h3 className="text-white font-bold text-lg md:text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        {foto.judul}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {selectedFoto && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                    onClick={() => setSelectedFoto(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                        onClick={() => setSelectedFoto(null)}
                    >
                        <svg
                            className="w-10 h-10"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>

                    <img
                        src={selectedFoto}
                        alt="Detail Galeri"
                        className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </MainLayout>
    );
}

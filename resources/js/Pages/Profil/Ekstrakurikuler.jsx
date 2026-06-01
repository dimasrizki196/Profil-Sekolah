import MainLayout from "../../Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import Card from "../../Components/UI/Card";

// Data Ekstrakurikuler MIN 6 Boyolali
const daftarEkskul = [
    {
        nama: "Tahfidz Al-Qur'an",
        jadwal: "Senin & Rabu, 14.00 WIB",
        deskripsi:
            "Program unggulan madrasah untuk mencetak generasi penghafal Al-Qur'an yang tartil dan berakhlakul karimah.",
        image: "/images/ekskul/ekskul-tahfidz.jpg",
    },
    {
        nama: "Seni Tilawah",
        jadwal: "Selasa, 14.00 WIB",
        deskripsi:
            "Melatih keindahan dan kelancaran melantunkan ayat-ayat suci Al-Qur'an menggunakan berbagai maqom (lagu).",
        image: "/images/ekskul/ekskul-tilawah.png",
    },
    {
        nama: "Pramuka",
        jadwal: "Jumat, 14.00 - 16.00 WIB",
        deskripsi:
            "Ekskul wajib untuk membentuk kemandirian, kedisiplinan, kerja sama tim, dan kepemimpinan siswa.",
        image: "/images/ekskul/ekskul-pramuka.jpg",
    },
    {
        nama: "Seni Hadroh",
        jadwal: "Kamis, 14.30 WIB",
        deskripsi:
            "Melestarikan kesenian Islam dan menumbuhkan rasa cinta kepada Nabi Muhammad SAW melalui lantunan shalawat.",
        image: "/images/ekskul/ekskul-hadroh.jpeg",
    },
    {
        nama: "Bola Voli",
        jadwal: "Selasa & Kamis, 15.00 WIB",
        deskripsi:
            "Menyalurkan bakat olahraga siswa untuk menjaga kebugaran fisik dan melatih kekompakan tim.",
        image: "/images/ekskul/ekskul-volly.jpg",
    },
    {
        nama: "Taekwondo",
        jadwal: "Rabu, 15.00 WIB",
        deskripsi:
            "Seni bela diri untuk melatih ketangkasan fisik, pertahanan diri, serta kedisiplinan dan mental siswa.",
        image: "/images/ekskul/ekskul-taekwondo.jpg",
    },
    {
        nama: "Atletik",
        jadwal: "Senin, 15.00 WIB",
        deskripsi:
            "Pembinaan cabang olahraga atletik (lari, lompat, lempar) untuk persiapan kompetisi olahraga pelajar.",
        image: "/images/ekskul/ekskul-atletik.png",
    },
    {
        nama: "Drumband",
        jadwal: "Sabtu, 08.00 - 10.00 WIB",
        deskripsi:
            "Melatih musikalitas, konsentrasi, dan kekompakan baris-berbaris untuk tampil di berbagai acara madrasah maupun daerah.",
        image: "/images/ekskul/ekskul-drumband.png",
    },
];

export default function Ekstrakurikuler() {
    return (
        <MainLayout>
            <Head title="Program Ekstrakurikuler" />

            <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    {/* 1. Header Halaman */}
                    <div data-aos="fade-down" className="text-center mb-16">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                            Ekstrakurikuler{" "}
                            <span className="text-[#0f5132]">Madrasah</span>
                        </h1>
                        <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
                            Wadah bagi siswa MIN 6 Boyolali untuk mengembangkan
                            minat, bakat, kepemimpinan, dan karakter positif di
                            luar jam pelajaran akademik.
                        </p>
                        <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full mt-6"></div>
                    </div>

                    {/* 2. Grid Daftar Ekskul */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {daftarEkskul.map((ekskul, index) => (
                            <Card
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={(index % 3) * 100}
                                className="overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col border border-gray-100 bg-white"
                            >
                                {/* Gambar Header */}
                                <div className="h-56 overflow-hidden relative border-b-4 border-[#0f5132]">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                    <img
                                        src={ekskul.image}
                                        alt={ekskul.nama}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>

                                {/* Konten Informasi */}
                                <div className="p-6 flex flex-col flex-grow relative">
                                    {/* Icon Mengambang (Bintang) */}
                                    <div className="absolute -top-6 right-6 w-12 h-12 bg-yellow-400 text-[#0f5132] rounded-full flex items-center justify-center shadow-lg z-20 border-4 border-white transform group-hover:rotate-12 transition-transform duration-300">
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                        </svg>
                                    </div>

                                    <h2 className="text-xl font-bold text-gray-900 mb-3 pr-8 group-hover:text-[#0f5132] transition-colors">
                                        {ekskul.nama}
                                    </h2>

                                    <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                                        {ekskul.deskripsi}
                                    </p>

                                    {/* Jadwal Latihan */}
                                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center gap-2 text-sm font-bold text-[#0f5132]">
                                        <svg
                                            className="w-5 h-5 text-yellow-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            ></path>
                                        </svg>
                                        {ekskul.jadwal}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

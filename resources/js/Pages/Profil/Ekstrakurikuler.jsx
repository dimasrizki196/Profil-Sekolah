import MainLayout from '../../Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import Card from '../../Components/UI/Card';

// Data Dummy Ekstrakurikuler Lengkap
const daftarEkskul = [
    {
        nama: "Hizbul Wathan (Kepanduan)",
        jadwal: "Jumat, 15.30 - 17.00 WIB",
        deskripsi: "Ekskul wajib kepanduan khas Muhammadiyah untuk melatih kemandirian, kedisiplinan, dan cinta alam berlandaskan ajaran Islam.",
        image: "https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?q=80&w=800&auto=format&fit=crop" // Ganti foto HW
    },
    {
        nama: "Tapak Suci Putera Muhammadiyah",
        jadwal: "Sabtu, 15.30 - 17.00 WIB",
        deskripsi: "Seni bela diri pencak silat untuk melatih ketangkasan fisik, mental, dan spiritual siswa.",
        image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800&auto=format&fit=crop" // Ganti foto Silat
    },
    {
        nama: "Palang Merah Remaja (PMR)",
        jadwal: "Kamis, 15.30 - 17.00 WIB",
        deskripsi: "Wadah pembinaan generasi muda di bidang kesehatan dan pertolongan pertama pada kecelakaan (P3K).",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop" // Ganti foto Medis
    },
    {
        nama: "Paskibra",
        jadwal: "Selasa & Kamis, 15.30 WIB",
        deskripsi: "Melatih baris-berbaris, kedisiplinan tingkat tinggi, dan kepemimpinan untuk persiapan upacara hari besar nasional.",
        image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=800&auto=format&fit=crop" // Ganti foto Paskibra
    },
    {
        nama: "Ikatan Pelajar Muhammadiyah (IPM)",
        jadwal: "Rabu, 15.30 - 17.00 WIB",
        deskripsi: "Organisasi otonom untuk melatih kaderisasi kepemimpinan, keislaman, dan keilmuan siswa di lingkungan sekolah.",
        image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=800&auto=format&fit=crop" // Ganti foto Masjid/Rohis
    },
    {
        nama: "Olahraga Futsal & Basket",
        jadwal: "Senin & Rabu, 15.30 WIB",
        deskripsi: "Menyalurkan bakat olahraga siswa untuk menjaga kebugaran fisik dan mengikuti berbagai turnamen antar pelajar.",
        image: "https://images.unsplash.com/photo-1518659328224-8b6ee0dc1875?q=80&w=800&auto=format&fit=crop" // Ganti foto Olahraga
    }
];

export default function Ekstrakurikuler() {
    return (
        <MainLayout>
            <Head title="Ekstrakurikuler" />
            
            <div className="py-20 px-4 sm:px-6 lg:px-8 bg-background min-h-screen">
                <div className="max-w-7xl mx-auto">
                    
                    {/* 1. Header Halaman */}
                    <div className="text-center mb-16 animate-fade-in">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">
                            Ekstrakurikuler <span className="text-primary">Sekolah</span>
                        </h1>
                        <p className="text-secondary opacity-80 max-w-2xl mx-auto text-lg">
                            Wadah bagi siswa untuk mengembangkan minat, bakat, kepemimpinan, dan karakter positif di luar jam pelajaran akademik.
                        </p>
                        <div className="w-24 h-1.5 bg-primary mx-auto rounded-full opacity-80 mt-6"></div>
                    </div>

                    {/* 2. Grid Daftar Ekskul */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {daftarEkskul.map((ekskul, index) => (
                            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                
                                {/* Gambar Header */}
                                <div className="h-56 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                    <img 
                                        src={ekskul.image} 
                                        alt={ekskul.nama} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>

                                {/* Konten Informasi */}
                                <div className="p-6 flex flex-col flex-grow relative">
                                    {/* Icon Mengambang (Opsional untuk estetika) */}
                                    <div className="absolute -top-6 right-6 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg z-20 border-4 border-white">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                                    </div>

                                    <h2 className="text-xl font-bold text-gray-800 mb-3 pr-8">
                                        {ekskul.nama}
                                    </h2>
                                    
                                    <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                                        {ekskul.deskripsi}
                                    </p>
                                    
                                    {/* Jadwal Latihan */}
                                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center gap-2 text-sm font-semibold text-primary">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
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
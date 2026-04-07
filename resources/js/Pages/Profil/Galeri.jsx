import MainLayout from '../../Layouts/MainLayout';
import { Head } from '@inertiajs/react';

// Data dummy foto galeri versi lengkap
const daftarFoto = [
    { id: 1, url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800", judul: "Suasana Kelulusan", kategori: "Akademik" },
    { id: 2, url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800", judul: "Diskusi Kelompok", kategori: "KBM" },
    { id: 3, url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800", judul: "Senam Pagi", kategori: "Olahraga" },
    { id: 4, url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800", judul: "Praktek Lapangan", kategori: "Kejuruan" },
    { id: 5, url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800", judul: "Perpustakaan", kategori: "Fasilitas" },
    { id: 6, url: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=800", judul: "Lab Komputer", kategori: "Fasilitas" },
    { id: 7, url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800", judul: "Pentas Seni", kategori: "Ekstrakurikuler" },
    { id: 8, url: "https://images.unsplash.com/photo-1577896850186-b480bdf5db99?q=80&w=800", judul: "Ujian Kompetensi", kategori: "Akademik" },
    { id: 9, url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800", judul: "Belajar Bersama", kategori: "KBM" },
];

export default function Galeri() {
    return (
        <MainLayout>
            <Head title="Galeri Sekolah" />
            
            <div className="py-20 px-4 sm:px-6 lg:px-8 bg-background min-h-screen">
                <div className="max-w-7xl mx-auto">
                    
                    {/* Header Halaman */}
                    <div className="text-center mb-16 animate-fade-in">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">
                            Galeri <span className="text-primary">Sekolah</span>
                        </h1>
                        <p className="text-secondary opacity-80 max-w-2xl mx-auto text-lg">
                            Dokumentasi momen berharga, kegiatan belajar, fasilitas, dan prestasi di sekolah kami.
                        </p>
                        <div className="w-24 h-1.5 bg-primary mx-auto rounded-full opacity-80 mt-6"></div>
                    </div>

                    {/* Grid Galeri */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {daftarFoto.map((foto, index) => (
                            <div 
                                key={foto.id} 
                                className="group relative h-72 overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 animate-slide-up cursor-pointer"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Gambar */}
                                <img 
                                    src={foto.url} 
                                    alt={foto.judul} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                
                                {/* Overlay Gelap saat di-hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <span className="text-primary font-bold text-xs uppercase tracking-wider mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {foto.kategori}
                                    </span>
                                    <h3 className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        {foto.judul}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}
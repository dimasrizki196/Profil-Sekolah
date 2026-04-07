import { Link } from '@inertiajs/react';

// Data dummy galeri (Bisa diganti dengan data dari database nanti)
const galeriData = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1546410531-bea5aad104ea?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop",
];

export default function Galeri() {
    return (
        <section id="galeri" className="py-20 px-4 sm:px-6 lg:px-8 bg-background animate-fade-in">
            <div className="max-w-7xl mx-auto">
                
                {/* Bagian Header: Judul dan Subjudul */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-secondary mb-3">Galeri <span className="text-primary">Kegiatan</span></h2>
                    <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
                        Dokumentasi berbagai aktivitas, fasilitas, dan momen penting yang ada di lingkungan sekolah kami.
                    </p>
                </div>

                {/* Grid Foto Galeri */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {galeriData.map((imageUrl, index) => (
                        <div 
                            key={index} 
                            className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-sm bg-gray-200"
                        >
                            {/* Gambar */}
                            <img 
                                src={imageUrl} 
                                alt={`Galeri ${index + 1}`} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                            />
                            
                            {/* Overlay Hitam Transparan & Ikon saat di-hover */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white transform scale-50 group-hover:scale-100 transition-transform duration-300">
                                    {/* Ikon Kaca Pembesar (Search/View) */}
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tombol Lihat Semua Galeri */}
                <div className="mt-12 text-center">
                    <Link href="/galeri" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-3 rounded-full transition-colors duration-300">
                        Lihat Semua Foto
                    </Link>
                </div>

            </div>
        </section>
    );
}
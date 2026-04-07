import React from 'react';

// Data dummy ekstrakurikuler (Bisa diganti dari database nantinya)
const ekskulData = [
    {
        title: "Ikatan Remaja Mesjid",
        image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Palang Merah Remaja",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Paskibra",
        image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=800&auto=format&fit=crop"
    }
];

export default function Ekstrakurikuler() {
    return (
        <section id="ekstrakurikuler" className="py-20 px-4 sm:px-6 lg:px-8 bg-white animate-fade-in">
            <div className="max-w-7xl mx-auto">
                
                {/* Bagian Header: Judul dan Tombol Panah */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
                    <div>
                        <h2 className="text-3xl font-extrabold text-secondary mb-2">Ekstrakurikuler</h2>
                        <p className="text-gray-500 text-sm md:text-base">Ekstrakurikuler yang ada di Sekolah kami</p>
                    </div>
                    
                    {/* Tombol Navigasi Slider (Visual Only) */}
                    <div className="flex gap-3">
                        <button className="w-10 h-10 rounded-full border border-green-800 text-green-800 flex items-center justify-center hover:bg-green-800 hover:text-white transition duration-300">
                            {/* SVG Panah Kiri */}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        </button>
                        <button className="w-10 h-10 rounded-full border border-green-800 text-green-800 flex items-center justify-center hover:bg-green-800 hover:text-white transition duration-300">
                            {/* SVG Panah Kanan */}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </button>
                    </div>
                </div>

                {/* Bagian Grid Card Ekstrakurikuler */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                    {ekskulData.map((item, index) => (
                        <div 
                            key={index} 
                            className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
                        >
                            {/* Gambar */}
                            <div className="w-full h-56 overflow-hidden">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            
                            {/* Judul di dalam Box Putih */}
                            <div className="p-5 text-center">
                                <h3 className="font-bold text-gray-800 text-lg group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
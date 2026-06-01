import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";

const allImages = [
    "/images/galery/g1.jpg",
    "/images/galery/g2.jpg",
    "/images/galery/g3.jpg",
    "/images/galery/g4.jpg",
    "/images/galery/g5.jpg",
    "/images/galery/g6.jpg",
    "/images/galery/g7.jpg",
    "/images/galery/g8.jpeg",
    "/images/galery/g9.jpeg",
    "/images/galery/g10.jpeg",
    "/images/galery/g11.jpeg",
    "/images/galery/g12.jpeg",
    "/images/galery/g13.jpeg",
    "/images/galery/g14.jpeg",
    "/images/galery/g15.jpeg",
];

export default function Galeri() {
    const [displayImages, setDisplayImages] = useState([]);
    // State untuk menyimpan URL foto yang sedang di-klik (jika null, pop-up tertutup)
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const shuffled = [...allImages].sort(() => 0.5 - Math.random());
        setDisplayImages(shuffled.slice(0, 8));
    }, []);

    return (
        <section
            id="galeri"
            className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden relative"
        >
            <div className="max-w-7xl mx-auto">
                <div data-aos="fade-down" className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                        Galeri <span className="text-[#0f5132]">Kegiatan</span>
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
                        Dokumentasi berbagai aktivitas, fasilitas, dan momen
                        penting di madrasah kami.
                    </p>
                    <div className="w-20 h-1.5 bg-yellow-400 mx-auto rounded-full mt-4"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {displayImages.map((imageUrl, index) => (
                        <div
                            key={index}
                            data-aos="zoom-in"
                            data-aos-delay={(index % 4) * 100}
                            onClick={() => setSelectedImage(imageUrl)} // Buka pop-up saat diklik
                            className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm bg-gray-200 border border-gray-100"
                        >
                            <img
                                src={imageUrl}
                                alt={`Galeri MIN 6 Boyolali ${index + 1}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                            />

                            <div className="absolute inset-0 bg-[#0a3822]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white transform scale-50 group-hover:scale-100 transition-all duration-300 shadow-lg">
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
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div data-aos="fade-up" className="mt-14 text-center">
                    <Link
                        href="/galeri"
                        className="inline-block border-2 border-[#0f5132] text-[#0f5132] hover:bg-[#0f5132] hover:text-white font-bold px-8 py-3 rounded-full transition-colors duration-300 shadow-sm"
                    >
                        Lihat Semua Foto
                    </Link>
                </div>
            </div>

            {/* ========================================= */}
            {/* Modal / Pop-up Foto                       */}
            {/* ========================================= */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8 transition-opacity"
                    onClick={() => setSelectedImage(null)} // Tutup pop-up jika area luar diklik
                >
                    {/* Tombol Close (X) */}
                    <button
                        className="absolute top-6 right-6 md:top-8 md:right-10 text-white/70 hover:text-white transition-colors duration-300 z-50"
                        onClick={() => setSelectedImage(null)}
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

                    {/* Gambar Full-size */}
                    <img
                        src={selectedImage}
                        alt="Zoom Galeri"
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-zoom-in"
                        onClick={(e) => e.stopPropagation()} // Mencegah pop-up tertutup saat gambar itu sendiri diklik
                    />
                </div>
            )}
        </section>
    );
}

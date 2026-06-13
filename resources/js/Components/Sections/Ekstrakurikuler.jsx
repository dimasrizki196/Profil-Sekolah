import React, { useState, useEffect, useCallback } from "react";

// Data ekstrakurikuler MIN 6 Boyolali
const ekskulData = [
    {
        title: "Tahfidz",
        image: "/images/ekskul/ekskul-tahfidz.jpg",
    },
    {
        title: "Tilawah",
        image: "/images/ekskul/ekskul-tilawah.png",
    },
    {
        title: "Pramuka",
        image: "/images/ekskul/ekskul-pramuka.jpg",
    },
    {
        title: "Hadroh",
        image: "/images/ekskul/ekskul-hadroh.jpeg",
    },
    {
        title: "Bola Volley",
        image: "/images/ekskul/ekskul-volly.jpg",
    },
    {
        title: "Taekwondo",
        image: "/images/ekskul/ekskul-taekwondo.jpg",
    },
    {
        title: "Atletik",
        image: "/images/ekskul/ekskul-atletik.png",
    },
    {
        title: "Drumband",
        image: "/images/ekskul/ekskul-drumband.png",
    },
];

export default function Ekstrakurikuler() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3);

    // Mengatur jumlah kartu yang tampil berdasarkan ukuran layar
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsPerView(1); // HP
            } else if (window.innerWidth < 1024) {
                setItemsPerView(2); // Tablet
            } else {
                setItemsPerView(3); // Desktop
            }
        };

        handleResize(); // Eksekusi saat pertama dimuat
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Menghitung batas maksimal geser
    const maxIndex = Math.max(0, ekskulData.length - itemsPerView);

    // Fungsi untuk geser ke kanan
    const nextSlide = useCallback(() => {
        if (maxIndex <= 0) return;
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    // Fungsi untuk geser ke kiri
    const prevSlide = () => {
        if (maxIndex <= 0) return;
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    // Auto-slide setiap 3 detik
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <section
            id="ekstrakurikuler"
            className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-yellow-50 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto">
                {/* Bagian Header: Judul di Kiri dan Tombol Panah di Kanan */}
                <div
                    data-aos="fade-down"
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 drop-shadow-sm">
                            Program{" "}
                            <span className="text-[#0f5132]">
                                Ekstrakurikuler
                            </span>
                        </h2>
                        {/* Warna teks dipergelap agar kontras dengan background kuning */}
                        <p className="text-gray-800 font-medium text-sm md:text-lg">
                            Wadah pengembangan bakat dan minat siswa di madrasah
                            kami
                        </p>
                    </div>

                    {/* Tombol Navigasi Slider */}
                    <div className="flex gap-3">
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 rounded-full bg-white text-[#0f5132] flex items-center justify-center hover:bg-[#0f5132] hover:text-white transition duration-300 shadow-md"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 19l-7-7 7-7"
                                ></path>
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 rounded-full bg-white text-[#0f5132] flex items-center justify-center hover:bg-[#0f5132] hover:text-white transition duration-300 shadow-md"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5l7 7-7 7"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Wrapper Area Slider */}
                <div
                    data-aos="fade-up"
                    className="relative w-full overflow-hidden"
                >
                    {/* Track (Lintasan Card yang akan bergeser) */}
                    <div
                        className="flex transition-transform duration-500 ease-in-out -mx-3 lg:-mx-4"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                        }}
                    >
                        {ekskulData.map((item, index) => (
                            <div
                                key={index}
                                style={{ width: `${100 / itemsPerView}%` }}
                                className="flex-shrink-0 px-3 lg:px-4 py-2"
                            >
                                {/* Card diperbarui dengan shadow lebih besar agar memisah dari background kuning */}
                                <div className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col border-0">
                                    <div className="w-full h-56 overflow-hidden shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    <div className="p-5 text-center flex-grow flex items-center justify-center">
                                        <h3 className="font-bold text-gray-800 text-lg group-hover:text-[#0f5132] transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

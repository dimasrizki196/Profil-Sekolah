export default function Hero() {
    return (
        <section
            id="hero"
            className="relative w-full h-[80vh] min-h-[500px] md:h-[600px] lg:h-[700px] flex items-center overflow-hidden"
        >
            <img
                src="/images/bg-hero-mobile.png"
                alt="Lingkungan MIN 6 Boyolali Mobile"
                className="absolute inset-0 w-full h-full object-cover object-center block md:hidden"
            />

            <img
                src="/images/bg-hero-desktop.png"
                alt="Lingkungan MIN 6 Boyolali Desktop"
                className="absolute inset-0 w-full h-full object-cover object-center hidden md:block"
            />

            <div className="absolute inset-0 bg-black/40 md:bg-black/20 bg-gradient-to-t md:bg-gradient-to-r from-[#0a3822]/90 via-[#0a3822]/50 to-transparent"></div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start text-left mt-10 md:mt-0">
                <span
                    data-aos="fade-down"
                    className="inline-block py-2 px-6 rounded-full bg-white/10 border border-white/20 text-yellow-300 text-xs md:text-sm font-bold tracking-widest uppercase mb-6 md:mb-8 backdrop-blur-md shadow-lg"
                >
                    Selamat Datang di Website Resmi
                </span>

                <h1
                    data-aos="fade-right"
                    data-aos-delay="100"
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-xl"
                >
                    MIN 6 <br className="sm:hidden" />
                    <span className="text-yellow-400">BOYOLALI</span>
                </h1>

                <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 font-medium max-w-2xl drop-shadow-md border-l-4 border-yellow-400 pl-5"
                >
                    <span className="italic leading-relaxed">
                        "Madrasah Hebat Bermartabat, Mandiri Berprestasi"
                    </span>
                </p>
            </div>
        </section>
    );
}

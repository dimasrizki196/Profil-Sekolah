import { Link } from '@inertiajs/react';

export default function Hero() {
    return (
        <section id="hero" className="relative w-full h-[600px] md:h-[700px] bg-green-900 overflow-hidden">
            
            {/* 1. Background Image & Overlay */}
            <img 
                // Ganti dengan URL gambar aslimu nanti
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop" 
                alt="Background Sekolah" 
                className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-green-800/90 to-transparent"></div>

            {/* 2. Main Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                
                {/* Left Side: Text Content */}
                <div className="w-full lg:w-3/5 text-left">
                    
                    {/* Welcome Badge */}
                    <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-yellow-400 text-xs md:text-sm font-bold tracking-widest uppercase mb-6 animate-fade-in backdrop-blur-sm shadow-sm">
                        Selamat Datang di Website
                    </span>
                    
                    {/* Main Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-slide-up">
                        SMA MUHAMMADIYAH 1 <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                            SURAKARTA
                        </span>
                    </h1>
                    
                    {/* Tagline */}
                    <p className="text-lg md:text-xl text-gray-100 font-medium mb-10 animate-slide-up border-l-4 border-yellow-400 pl-5 opacity-90 delay-200">
                        <span className="italic">"Insan yang Islami, Mandiri, Berakhlaqul Karimah, Berwawasan Global"</span>
                    </p>
                </div>

                {/* Right Side: Diamond Shape Image (Hidden on Mobile) */}
                <div className="hidden lg:block absolute right-4 xl:right-10 top-1/2 -translate-y-1/2 w-[450px] h-[450px] animate-fade-in delay-500">
                    
                    {/* Diamond Border */}
                    <div className="absolute inset-0 bg-white/30 scale-105 [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)] backdrop-blur-sm"></div>
                    
                    {/* Diamond Image Container */}
                    <div className="absolute inset-0 [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)] shadow-2xl">
                        <img 
                            // Ganti dengan URL gambar aslimu nanti
                            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop" 
                            alt="Siswa Belajar" 
                            className="w-full h-full object-cover hover:scale-110 transition duration-700"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
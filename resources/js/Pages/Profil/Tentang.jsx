import MainLayout from '@/Layouts/MainLayout';

export default function Tentang() {
    return (
        <MainLayout>
            <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
                <div className="max-w-7xl mx-auto">
                    
                    {/* 1. Judul Halaman (Simpel & Clean) */}
                    <div className="text-center mb-16 animate-fade-in">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">
                            Tentang <span className="text-primary">Kami</span>
                        </h1>
                        <div className="w-24 h-1.5 bg-primary mx-auto rounded-full opacity-80"></div>
                    </div>

                    {/* 2. Konten Utama (Grid 2 Kolom) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                        
                        {/* Kolom Kiri: Gambar Minimalis */}
                        <div className="relative animate-slide-up">
                            {/* Aksen bayangan solid di belakang gambar (Gaya Modern) */}
                            <div className="absolute inset-0 bg-green-100 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
                            <img 
                                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop" 
                                alt="Gedung Sekolah" 
                                className="relative z-10 w-full h-[400px] md:h-[500px] object-cover rounded-2xl border border-gray-100"
                            />
                        </div>

                        {/* Kolom Kanan: Teks & Info */}
                        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-snug">
                                Mencetak Generasi Unggul, <br className="hidden md:block" />
                                <span className="text-green-700">Berprestasi & Berakhlak Mulia</span>
                            </h2>
                            
                            <div className="space-y-5 text-secondary opacity-90 leading-relaxed text-justify mb-8">
                                <p>
                                    <strong>SMK Muhammadiyah 2</strong> adalah lembaga pendidikan vokasi yang berdedikasi untuk mencetak tenaga kerja profesional, terampil, dan berkarakter Islami. Kami memadukan kurikulum nasional dengan pendidikan agama dan keterampilan kejuruan yang relevan dengan kebutuhan industri masa kini.
                                </p>
                                <p>
                                    Berdiri dengan semangat persyarikatan Muhammadiyah, sekolah kami terus berinovasi dalam fasilitas pembelajaran, metode pengajaran, dan kerjasama dengan Dunia Usaha/Dunia Industri (DU/DI) untuk memastikan lulusan kami siap kerja, mandiri, dan mampu bersaing secara global.
                                </p>
                            </div>

                            {/* Statistik Cepat (Angka-angka penting) */}
                            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                                <div>
                                    <p className="text-3xl font-extrabold text-primary mb-1">A</p>
                                    <p className="text-sm text-gray-500 font-medium">Akreditasi Sekolah</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-extrabold text-primary mb-1">5</p>
                                    <p className="text-sm text-gray-500 font-medium">Program Keahlian</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-extrabold text-primary mb-1">45+</p>
                                    <p className="text-sm text-gray-500 font-medium">Tenaga Pengajar</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-extrabold text-primary mb-1">1990</p>
                                    <p className="text-sm text-gray-500 font-medium">Tahun Berdiri</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </MainLayout>
    );
}
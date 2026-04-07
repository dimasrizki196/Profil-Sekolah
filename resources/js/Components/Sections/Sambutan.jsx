import Card from '@/Components/UI/Card';

export default function Sambutan() {
    return (
        <section id="sambutan" className="py-24 bg-background">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="animate-slide-up">
                    <Card className="p-8 md:p-12 relative overflow-hidden">
                        
                        {/* Efek glow/blur halus di pojok atas (Modern UI touch) */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2 opacity-60"></div>
                        
                        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start relative z-10">
                            
                            {/* Bagian Kiri: Foto Kepala Sekolah (Di dalam Card) */}
                            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 relative group">
                                {/* Kotak bayangan aksen hijau di belakang foto */}
                                <div className="absolute inset-0 bg-green-100 rounded-2xl transform rotate-3 transition duration-500 group-hover:rotate-6"></div>
                                {/* Foto Utama */}
                                <img 
                                    // Ganti dengan foto asli Kepala Sekolah
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
                                    alt="Kepala Sekolah" 
                                    className="relative w-full h-full object-cover rounded-2xl shadow-sm border-4 border-white"
                                />
                            </div>

                            {/* Bagian Kanan: Teks Sambutan */}
                            <div className="flex-1 text-center md:text-left">
                                
                                {/* Judul & Nama */}
                                <div className="mb-6 border-b border-gray-100 pb-5">
                                    <h2 className="text-3xl font-extrabold text-secondary mb-1">
                                        Sambutan <span className="text-primary">Kepala Sekolah</span>
                                    </h2>
                                    <p className="text-primary font-bold text-lg">
                                        Bpk. Nama Kepala Sekolah, M.Pd.
                                    </p>
                                </div>
                                
                                {/* Isi Teks */}
                                <div className="space-y-4 text-secondary leading-relaxed text-sm md:text-base opacity-90">
                                    <p className="font-semibold text-gray-800">
                                        Assalamu'alaikum Warahmatullahi Wabarakatuh,
                                    </p>
                                    <p>
                                        Alhamdulillah, puji syukur kita panjatkan ke hadirat Allah SWT atas segala rahmat dan hidayah-Nya. Selamat datang di website resmi SMK Muhammadiyah 2.
                                    </p>
                                    <p>
                                        Di era digital yang serba cepat ini, kami menyadari betapa pentingnya informasi yang akurat dan mudah diakses. Website ini hadir sebagai media komunikasi interaktif antara sekolah dengan siswa, orang tua, alumni, dan masyarakat luas.
                                    </p>
                                    <p>
                                        Kami berkomitmen untuk terus mencetak generasi yang tidak hanya cerdas secara intelektual, tetapi juga memiliki pondasi akhlak yang kuat, sesuai dengan visi kami menjadi insan yang Islami, Mandiri, Berakhlaqul Karimah, dan Berwawasan Global.
                                    </p>
                                    <p className="font-semibold text-gray-800 pt-2">
                                        Wassalamu'alaikum Warahmatullahi Wabarakatuh.
                                    </p>
                                </div>
                                
                            </div>
                            
                        </div>
                    </Card>
                </div>

            </div>
        </section>
    );
}
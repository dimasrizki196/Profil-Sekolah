import MainLayout from '@/Layouts/MainLayout';

// Data dummy untuk Timeline Sejarah
const sejarahData = [
    {
        tahun: "1990",
        judul: "Awal Berdiri",
        deskripsi: "SMK Muhammadiyah 2 didirikan atas inisiatif tokoh masyarakat dan pengurus Muhammadiyah setempat untuk memenuhi kebutuhan pendidikan kejuruan yang berlandaskan nilai Islam."
    },
    {
        tahun: "1995",
        judul: "Gedung Baru & Tambahan Jurusan",
        deskripsi: "Sekolah resmi menempati gedung baru yang lebih luas. Pada tahun ini juga, dibuka program keahlian baru untuk merespons kebutuhan industri yang semakin berkembang."
    },
    {
        tahun: "2008",
        judul: "Akreditasi A",
        deskripsi: "Berkat dedikasi tenaga pendidik dan peningkatan fasilitas praktik, sekolah berhasil meraih predikat Akreditasi A dari Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M)."
    },
    {
        tahun: "2015",
        judul: "Kemitraan Industri Nasional",
        deskripsi: "Menjalin kerja sama (MoU) dengan berbagai perusahaan berskala nasional untuk program Praktik Kerja Lapangan (PKL) dan penyaluran lulusan langsung kerja."
    },
    {
        tahun: "2026",
        judul: "Pusat Keunggulan (Center of Excellence)",
        deskripsi: "Menjadi sekolah kejuruan rujukan dengan fasilitas praktik berstandar industri modern dan menerapkan kurikulum merdeka berbasis teaching factory."
    }
];

export default function Sejarah() {
    return (
        <MainLayout>
            <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
                <div className="max-w-4xl mx-auto">
                    
                    {/* 1. Header Halaman */}
                    <div className="text-center mb-16 animate-fade-in">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">
                            Sejarah <span className="text-primary">Sekolah</span>
                        </h1>
                        <div className="w-24 h-1.5 bg-primary mx-auto rounded-full opacity-80"></div>
                    </div>

                    {/* 2. Paragraf Pengantar */}
                    <div className="mb-16 animate-slide-up text-center">
                        <p className="text-secondary opacity-90 leading-relaxed text-lg">
                            Lebih dari tiga dekade, <strong>SMK Muhammadiyah 2</strong> telah mengabdi untuk mencerdaskan kehidupan bangsa. Perjalanan panjang ini penuh dengan dedikasi, inovasi, dan komitmen teguh untuk terus melahirkan generasi yang tidak hanya terampil, namun juga berkarakter Islami.
                        </p>
                    </div>

                    {/* 3. Timeline (Garis Waktu) */}
                    <div className="relative border-l-4 border-gray-100 ml-4 md:ml-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        {sejarahData.map((item, index) => (
                            <div key={index} className="mb-10 ml-8 relative group">
                                
                                {/* Titik Timeline (Dot) */}
                                <div className="absolute -left-[43px] top-1 w-6 h-6 bg-white border-4 border-primary rounded-full group-hover:bg-primary transition-colors duration-300"></div>
                                
                                {/* Konten Timeline */}
                                <div className="bg-background p-6 rounded-2xl shadow-sm border border-gray-50 group-hover:shadow-md transition duration-300">
                                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-sm mb-3">
                                        Tahun {item.tahun}
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.judul}</h3>
                                    <p className="text-secondary opacity-80 text-sm md:text-base leading-relaxed">
                                        {item.deskripsi}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}
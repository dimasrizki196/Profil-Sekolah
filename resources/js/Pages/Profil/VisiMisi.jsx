import MainLayout from '@/Layouts/MainLayout';
import Card from '@/Components/UI/Card';

export default function VisiMisi() {
    return (
        <MainLayout>
            <div className="py-20 px-4 sm:px-6 lg:px-8 bg-background min-h-screen">
                <div className="max-w-5xl mx-auto">
                    
                    {/* 1. Header Halaman */}
                    <div className="text-center mb-16 animate-fade-in">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">
                            Visi, Misi <span className="text-primary">& Tujuan</span>
                        </h1>
                        <div className="w-24 h-1.5 bg-primary mx-auto rounded-full opacity-80"></div>
                    </div>

                    {/* 2. Visi (Tengah & Menonjol) */}
                    <div className="mb-10 animate-slide-up">
                        <Card className="text-center p-8 md:p-12 border-t-4 border-t-primary shadow-sm hover:shadow-md transition">
                            {/* Ikon Target */}
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-primary mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Visi Kami</h2>
                            <p className="text-xl md:text-2xl text-secondary font-medium leading-relaxed italic opacity-90 max-w-3xl mx-auto">
                                "Menjadi institusi pendidikan kejuruan yang unggul, mandiri, berakhlak mulia, dan berwawasan global berlandaskan nilai-nilai Islam."
                            </p>
                        </Card>
                    </div>

                    {/* 3. Misi & Tujuan (Grid 2 Kolom) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        
                        {/* Box Misi */}
                        <Card className="p-8 shadow-sm hover:shadow-md transition">
                            <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                                {/* Ikon Rocket */}
                                <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Misi Kami</h2>
                            </div>
                            <ul className="space-y-4 text-secondary opacity-90 text-sm md:text-base text-justify">
                                <li className="flex gap-3 items-start">
                                    <CheckIcon />
                                    <span>Menyelenggarakan pendidikan kejuruan yang berkualitas dan relevan dengan kebutuhan industri.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <CheckIcon />
                                    <span>Membina karakter siswa agar memiliki akhlak mulia sesuai dengan ajaran agama Islam.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <CheckIcon />
                                    <span>Membekali siswa dengan keterampilan teknologi dan kewirausahaan agar mampu mandiri.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <CheckIcon />
                                    <span>Membangun kemitraan yang kuat dengan Dunia Usaha dan Dunia Industri (DU/DI).</span>
                                </li>
                            </ul>
                        </Card>

                        {/* Box Tujuan */}
                        <Card className="p-8 shadow-sm hover:shadow-md transition">
                            <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                                {/* Ikon Flag */}
                                <div className="w-12 h-12 rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center shrink-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path>
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Tujuan</h2>
                            </div>
                            <ul className="space-y-4 text-secondary opacity-90 text-sm md:text-base text-justify">
                                <li className="flex gap-3 items-start">
                                    <CheckIcon />
                                    <span>Menghasilkan lulusan yang kompeten, bersertifikasi, dan siap terserap di dunia kerja.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <CheckIcon />
                                    <span>Mencetak wirausahawan muda yang tangguh, inovatif, dan berdaya saing.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <CheckIcon />
                                    <span>Mewujudkan lingkungan sekolah yang bersih, sehat, aman, dan bernuansa Islami.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <CheckIcon />
                                    <span>Meningkatkan profesionalisme tenaga pendidik sesuai perkembangan teknologi pendidikan.</span>
                                </li>
                            </ul>
                        </Card>

                    </div>

                </div>
            </div>
        </MainLayout>
    );
}

// Komponen kecil untuk Ikon Centang agar kode lebih rapi
const CheckIcon = () => (
    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);
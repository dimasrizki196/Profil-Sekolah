import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

const sejarahData = [
    {
        tahun: "1985",
        judul: "Awal Berdiri",
        deskripsi:
            "Berawal dari inisiatif para tokoh agama dan masyarakat setempat, madrasah ini didirikan untuk memenuhi kebutuhan pendidikan dasar yang kuat akan penanaman nilai-nilai Islam di tengah masyarakat.",
    },
    {
        tahun: "1995",
        judul: "Penegerian Madrasah",
        deskripsi:
            "Berdasarkan Keputusan Menteri Agama Republik Indonesia, status madrasah resmi dialihkan menjadi Madrasah Ibtidaiyah Negeri (MIN) 6 Boyolali di bawah naungan penuh Kementerian Agama.",
    },
    {
        tahun: "2005",
        judul: "Pengembangan Fasilitas",
        deskripsi:
            "Merespons minat masyarakat yang semakin tinggi dari tahun ke tahun, MIN 6 Boyolali melakukan perluasan lahan dan pembangunan gedung kelas baru serta sarana ibadah yang lebih memadai.",
    },
    {
        tahun: "2012",
        judul: "Meraih Akreditasi A",
        deskripsi:
            "Berkat dedikasi seluruh tenaga pendidik, dukungan wali murid, dan peningkatan mutu kurikulum, madrasah berhasil meraih predikat Akreditasi A (Unggul) dari Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M).",
    },
    {
        tahun: "Sekarang",
        judul: "Madrasah Hebat Bermartabat",
        deskripsi:
            "Hingga saat ini, MIN 6 Boyolali terus berinovasi menjadi madrasah rujukan yang memadukan kurikulum nasional yang komprehensif dengan pembiasaan karakter Islami, serta aktif mencetak generasi yang berprestasi baik di bidang akademik maupun non-akademik.",
    },
];

export default function Sejarah() {
    return (
        <MainLayout>
            <Head title="Sejarah Madrasah" />

            <div className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
                <div className="max-w-4xl mx-auto">
                    {/* Header Halaman */}
                    <div data-aos="fade-down" className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                            Sejarah{" "}
                            <span className="text-[#0f5132]">Madrasah</span>
                        </h1>
                        <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
                    </div>

                    {/* Kertas/Card Artikel Sejarah */}
                    <div
                        data-aos="fade-up"
                        className="bg-white p-8 md:p-14 rounded-2xl shadow-sm border border-gray-100"
                    >
                        <p className="text-gray-700 leading-relaxed text-justify mb-10 text-base md:text-lg">
                            Lebih dari tiga dekade,{" "}
                            <strong>MIN 6 Boyolali</strong> telah mengabdi untuk
                            mencerdaskan kehidupan bangsa. Perjalanan panjang
                            ini penuh dengan dedikasi, inovasi, dan komitmen
                            teguh untuk terus melahirkan generasi yang cerdas
                            dan berkarakter Islami. Berikut adalah ringkasan
                            perjalanan madrasah kami dari masa ke masa:
                        </p>

                        <div className="space-y-8">
                            {sejarahData.map((item, index) => (
                                <div
                                    key={index}
                                    className="border-l-4 border-[#0f5132] pl-5 py-1"
                                >
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {item.tahun} — {item.judul}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-justify">
                                        {item.deskripsi}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

import Card from "@/Components/UI/Card";

export default function Sambutan() {
    return (
        <section
            id="sambutan"
            className="py-20 md:py-24 bg-gray-50 overflow-hidden"
        >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <Card
                    data-aos="fade-up"
                    className="p-8 md:p-12 relative overflow-hidden bg-white shadow-xl rounded-3xl border border-gray-100"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2 opacity-50"></div>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start relative z-10">
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="200"
                            className="w-48 h-64 md:w-64 md:h-80 shrink-0 relative group mx-auto md:mx-0"
                        >
                            <div className="absolute inset-0 bg-[#0a3822] rounded-2xl transform rotate-3 transition duration-500 group-hover:rotate-6 opacity-10"></div>
                            <img
                                src="/images/kepala-madrasah.png"
                                alt="Drs. H. Rochim, M.Pd.I"
                                className="relative w-full h-full object-cover rounded-2xl shadow-md border-4 border-white"
                            />
                        </div>
                        <div
                            data-aos="fade-left"
                            data-aos-delay="300"
                            className="flex-1 text-center md:text-left"
                        >
                            <div className="mb-6 border-b border-gray-100 pb-5">
                                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                                    Sambutan{" "}
                                    <span className="text-[#0f5132]">
                                        Kepala Madrasah
                                    </span>
                                </h2>
                                <p className="text-[#0f5132] font-bold text-lg">
                                    Drs. H. Rochim, M.Pd.I
                                </p>
                            </div>

                            <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                                <p className="font-semibold text-gray-800">
                                    Assalamu'alaikum Warahmatullahi Wabarakatuh,
                                </p>
                                <p>
                                    Alhamdulillah, puji syukur kita panjatkan ke
                                    hadirat Allah SWT atas segala rahmat dan
                                    hidayah-Nya. Selamat datang di website resmi
                                    MIN 6 Boyolali.
                                </p>
                                <p>
                                    Di era digital yang serba cepat ini, kami
                                    menyadari betapa pentingnya informasi yang
                                    akurat dan mudah diakses. Website ini hadir
                                    sebagai media komunikasi interaktif antara
                                    madrasah dengan siswa, orang tua, alumni,
                                    dan masyarakat luas.
                                </p>
                                <p>
                                    Kami berkomitmen untuk terus mencetak
                                    generasi yang tidak hanya cerdas secara
                                    intelektual, tetapi juga memiliki pondasi
                                    akhlak yang kuat, sesuai dengan visi kami
                                    menjadi Madrasah Hebat Bermartabat, Mandiri
                                    Berprestasi.
                                </p>
                                <p className="font-semibold text-gray-800 pt-2">
                                    Wassalamu'alaikum Warahmatullahi
                                    Wabarakatuh.
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
}

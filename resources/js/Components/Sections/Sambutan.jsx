export default function Sambutan() {
    return (
        <section
            id="sambutan"
            className="py-16 md:py-24 bg-gray-50 relative overflow-hidden"
        >
            <div data-aos="fade-down" className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                    Sambutan{" "}
                    <span className="text-[#0f5132]">Kepala Madrasah</span>
                </h2>
                <div className="w-20 h-1.5 bg-yellow-400 mx-auto rounded-full mt-4"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start relative z-10">
                    {/* Foto Kepala Madrasah */}
                    <div
                        data-aos="zoom-in"
                        className="w-48 h-64 md:w-64 md:h-80 shrink-0 relative group mx-auto md:mx-0"
                    >
                        <div className="absolute inset-0 bg-[#0a3822] rounded-2xl transform rotate-3 transition duration-500 group-hover:rotate-6 opacity-10"></div>
                        <img
                            src="/images/kepala-madrasah.png"
                            alt="Drs. H. Rochim, M.Pd.I"
                            className="relative w-full h-full object-cover rounded-2xl shadow-lg border-4 border-white"
                        />
                        <p className="text-gray-700 text-sm md:text-xl font-bold text-center mt-4">
                            Drs. H. Rochim, M.Pd.I
                        </p>
                    </div>

                    {/* Teks Sambutan */}
                    <div
                        data-aos="fade-left"
                        data-aos-delay="100"
                        className="flex-1 text-center md:text-left"
                    >
                        <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base text-justify md:text-left mt-4">
                            <p className="font-semibold text-xl text-gray-800">
                                Assalamu'alaikum Warahmatullahi Wabarakatuh,
                            </p>
                            <p className="text-justify text-xl">
                                Alhamdulillah, puji syukur kita panjatkan ke
                                hadirat Allah SWT atas segala rahmat dan
                                hidayah-Nya. Selamat datang di website resmi MIN
                                6 Boyolali.
                            </p>
                            <p className="text-justify text-xl">
                                Di era digital yang serba cepat ini, kami
                                menyadari betapa pentingnya informasi yang
                                akurat dan mudah diakses. Website ini hadir
                                sebagai media komunikasi interaktif antara
                                madrasah dengan siswa, orang tua, alumni, dan
                                masyarakat luas.
                            </p>
                            <p className="text-justify text-xl">
                                Kami berkomitmen untuk terus mencetak generasi
                                yang tidak hanya cerdas secara intelektual,
                                tetapi juga memiliki pondasi akhlak yang kuat,
                                sesuai dengan visi kami menjadi Madrasah Hebat
                                Bermartabat, Mandiri Berprestasi.
                            </p>
                            <p className="font-semibold text-xl text-gray-800 pt-2">
                                Wassalamu'alaikum Warahmatullahi Wabarakatuh.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

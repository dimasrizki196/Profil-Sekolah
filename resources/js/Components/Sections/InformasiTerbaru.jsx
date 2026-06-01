import { Link } from "@inertiajs/react";
import Card from "../UI/Card";

export default function InformasiTerbaru({ beritas }) {
    return (
        <section
            id="informasi"
            className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
        >
            <div className="max-w-6xl mx-auto">
                <div data-aos="fade-down" className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                        Informasi{" "}
                        <span className="text-[#0f5132]">Terbaru</span>
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base">
                        Kabar dan pengumuman terkini dari madrasah kami.
                    </p>
                    <div className="w-20 h-1.5 bg-yellow-400 mx-auto rounded-full mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {!beritas || beritas.length === 0 ? (
                        <div
                            data-aos="fade-up"
                            className="col-span-full text-center py-8"
                        >
                            <p className="text-gray-500 italic">
                                Belum ada informasi terbaru saat ini.
                            </p>
                        </div>
                    ) : (
                        beritas.map((item, index) => (
                            <Card
                                key={item.id}
                                data-aos="fade-up"
                                data-aos-delay={(index % 4) * 100}
                                className="flex flex-col sm:flex-row overflow-hidden hover:shadow-xl transition-shadow duration-300 group border border-gray-100"
                            >
                                <div className="sm:w-2/5 h-48 sm:h-auto shrink-0 bg-gray-100 relative overflow-hidden">
                                    {item.image ? (
                                        <img
                                            src={`/storage/${item.image}`}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 text-xs text-gray-400 italic">
                                            Tanpa Gambar
                                        </div>
                                    )}
                                </div>

                                <div className="p-6 flex flex-col flex-grow bg-white">
                                    <div className="text-xs font-bold text-yellow-600 mb-2 tracking-widest">
                                        {new Date(
                                            item.published_at,
                                        ).toLocaleDateString("id-ID", {
                                            day: "numeric",
                                            month: "short",
                                            year: "numeric",
                                        })}
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-3 line-clamp-2 group-hover:text-[#0f5132] transition-colors">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-gray-600 mb-5 line-clamp-2 leading-relaxed">
                                        {item.content}
                                    </p>

                                    <div className="mt-auto">
                                        <Link
                                            href={route(
                                                "berita.show",
                                                item.slug,
                                            )}
                                            className="inline-flex items-center text-sm font-bold text-[#0f5132] hover:text-[#0a3822] transition-colors"
                                        >
                                            Baca Selengkapnya
                                            {/* Icon panah yang akan bergeser saat dihover */}
                                            <svg
                                                className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                ></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        ))
                    )}
                </div>

                {beritas && beritas.length > 0 && (
                    <div data-aos="zoom-in" className="mt-14 text-center">
                        <Link
                            href={route("berita.index")}
                            className="inline-block border-2 border-[#0f5132] text-[#0f5132] hover:bg-[#0f5132] hover:text-white font-bold px-8 py-3 rounded-full transition-colors duration-300 shadow-sm"
                        >
                            Lihat Semua Berita
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}

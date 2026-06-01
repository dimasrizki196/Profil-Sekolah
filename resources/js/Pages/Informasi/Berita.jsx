import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";

export default function Berita({ beritas }) {
    return (
        <MainLayout>
            <Head title="Berita Madrasah" />
            <div className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div
                        data-aos="fade-down"
                        className="text-center mb-16 md:mb-20"
                    >
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                            Berita &{" "}
                            <span className="text-[#0f5132]">Informasi</span>
                        </h1>
                        <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
                            Kabar terbaru seputar kegiatan, prestasi, dan
                            pengumuman dari madrasah kami.
                        </p>
                        <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full mt-6"></div>
                    </div>

                    {/* Grid Berita */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {!beritas ||
                        !beritas.data ||
                        beritas.data.length === 0 ? (
                            <div
                                data-aos="fade-up"
                                className="col-span-full text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-100"
                            >
                                <p className="text-gray-500 text-lg">
                                    Belum ada berita yang diterbitkan saat ini.
                                </p>
                            </div>
                        ) : (
                            beritas.data.map((item, index) => (
                                <div
                                    key={item.id}
                                    data-aos="fade-up"
                                    data-aos-delay={(index % 3) * 100}
                                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
                                >
                                    {/* Gambar */}
                                    <Link
                                        href={route("berita.show", item.slug)}
                                        className="block aspect-[4/3] overflow-hidden bg-gray-100 relative"
                                    >
                                        {item.image ? (
                                            <img
                                                src={`/storage/${item.image}`}
                                                alt={item.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-50 text-sm italic">
                                                Tanpa Gambar
                                            </div>
                                        )}

                                        {/* Overlay tipis saat hover */}
                                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </Link>

                                    {/* Konten Text */}
                                    <div className="p-6 flex flex-col flex-grow relative">
                                        <div className="text-xs font-bold text-yellow-600 mb-2 uppercase tracking-wider">
                                            {new Date(
                                                item.published_at,
                                            ).toLocaleDateString("id-ID", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            })}
                                        </div>

                                        <Link
                                            href={route(
                                                "berita.show",
                                                item.slug,
                                            )}
                                        >
                                            <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#0f5132] transition-colors mb-3 line-clamp-2">
                                                {item.title}
                                            </h2>
                                        </Link>

                                        {/* Memotong teks cukup menggunakan line-clamp-3 dari Tailwind */}
                                        <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                                            {item.content}
                                        </p>

                                        <div className="mt-auto pt-4 border-t border-gray-100">
                                            <Link
                                                href={route(
                                                    "berita.show",
                                                    item.slug,
                                                )}
                                                className="inline-flex items-center text-[#0f5132] font-bold hover:text-[#0a3822] text-sm transition-colors"
                                            >
                                                Baca Selengkapnya
                                                {/* Icon panah yang bergeser saat dihover */}
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
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

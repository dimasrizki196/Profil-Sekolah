import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";

export default function Berita({ beritas }) {
    return (
        <MainLayout>
            <Head title="Berita Sekolah" />
            <div className="py-20 px-4 sm:px-6 lg:px-8 bg-background min-h-screen">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16 animate-fade-in">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">
                            Berita &{" "}
                            <span className="text-primary">Informasi</span>
                        </h1>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Kabar terbaru seputar kegiatan, prestasi, dan
                            pengumuman dari sekolah kami.
                        </p>
                        <div className="w-24 h-1.5 bg-primary mx-auto rounded-full opacity-80 mt-6"></div>
                    </div>

                    {/* Grid Berita */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
                        {beritas.data.length === 0 ? (
                            <div className="col-span-full text-center py-10">
                                <p className="text-gray-500 text-lg">
                                    Belum ada berita yang diterbitkan saat ini.
                                </p>
                            </div>
                        ) : (
                            beritas.data.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition duration-300 flex flex-col"
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
                                                className="w-full h-full object-cover hover:scale-105 transition duration-500"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                                Tidak ada gambar
                                            </div>
                                        )}
                                    </Link>

                                    {/* Konten Text */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">
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
                                            <h2 className="text-xl font-bold text-gray-800 hover:text-primary transition mb-3 line-clamp-2">
                                                {item.title}
                                            </h2>
                                        </Link>

                                        {/* Bagian ini yang kita ubah untuk memotong teks konten */}
                                        <p className="text-gray-600 text-sm mb-6">
                                            {item.content.length > 120
                                                ? item.content.substring(
                                                      0,
                                                      120,
                                                  ) + "..."
                                                : item.content}
                                        </p>

                                        <div className="mt-auto pt-4 border-t border-gray-100">
                                            <Link
                                                href={route(
                                                    "berita.show",
                                                    item.slug,
                                                )}
                                                className="text-primary font-bold hover:text-blue-800 text-sm flex items-center gap-1"
                                            >
                                                Baca Selengkapnya
                                                <svg
                                                    className="w-4 h-4"
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

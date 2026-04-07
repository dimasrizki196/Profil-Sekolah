import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";

export default function Index({ auth, beritas }) {
    const [showModal, setShowModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const executeDelete = (id) => {
        if (itemToDelete) {
            router.delete(route("admin.berita.destroy", itemToDelete), {
                onSuccess: () => {
                    setShowModal(false);
                    setItemToDelete(null);
                },
            });
        }
    };

    const confirmDelete = (id) => {
        setItemToDelete(id);
        setShowModal(true);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Kelola Berita
                </h2>
            }
        >
            <Head title="Kelola Berita" />

            <div className="py-8 md:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm sm:rounded-2xl p-4 md:p-8 border border-gray-100">
                        {/* Header Box & Tombol Tambah */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 border-b border-gray-100 pb-6">
                            <div>
                                <h3 className="text-xl md:text-2xl font-extrabold text-gray-900">
                                    Daftar Berita Sekolah
                                </h3>
                                <p className="text-sm text-gray-500 mt-1">
                                    Kelola semua publikasi berita dan informasi
                                    sekolah.
                                </p>
                            </div>
                            <Link
                                href={route("admin.berita.create")}
                                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-xl transition duration-300 shadow-sm focus:ring-4 focus:ring-blue-100"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        d="M12 4v16m8-8H4"
                                    ></path>
                                </svg>
                                Tambah Berita
                            </Link>
                        </div>

                        {beritas.length === 0 ? (
                            <div className="text-center py-16 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                                <svg
                                    className="w-16 h-16 text-gray-300 mx-auto mb-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z"
                                    ></path>
                                </svg>
                                <p className="text-gray-500 font-medium">
                                    Belum ada berita yang diterbitkan.
                                </p>
                            </div>
                        ) : (
                            <>
                                {/* 📱 TAMPILAN MOBILE (Cards) */}
                                <div className="grid grid-cols-1 gap-4 md:hidden">
                                    {beritas.map((berita) => (
                                        <div
                                            key={berita.id}
                                            className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-4 shadow-sm"
                                        >
                                            <div className="flex gap-4 items-start">
                                                {/* Thumbnail Mobile */}
                                                <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-gray-100 border border-gray-100">
                                                    {berita.image ? (
                                                        <img
                                                            src={`/storage/${berita.image}`}
                                                            alt={berita.title}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-400 font-medium">
                                                            No Image
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Info Mobile */}
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-bold text-gray-900 text-sm line-clamp-2 mb-1">
                                                        {berita.title}
                                                    </h4>

                                                    {/* CUPLIKAN KONTEN MOBILE */}
                                                    <p className="text-xs text-gray-500 line-clamp-2 mb-2 leading-relaxed">
                                                        {berita.content}
                                                    </p>

                                                    <p className="text-[11px] font-medium text-blue-600 flex items-center gap-1">
                                                        <svg
                                                            className="w-3.5 h-3.5"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                            ></path>
                                                        </svg>
                                                        {new Date(
                                                            berita.published_at,
                                                        ).toLocaleDateString(
                                                            "id-ID",
                                                            {
                                                                day: "numeric",
                                                                month: "short",
                                                                year: "numeric",
                                                            },
                                                        )}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Action Buttons Mobile (Dibagi 3) */}
                                            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-100">
                                                {/* Tombol Lihat (Membuka tab baru ke halaman publik) */}
                                                <Link
                                                    href={route(
                                                        "admin.berita.show",
                                                        berita.id,
                                                    )}
                                                    className="flex items-center justify-center gap-1 text-sm font-semibold text-green-700 bg-green-50 hover:bg-green-100 py-2 rounded-lg transition"
                                                >
                                                    Lihat
                                                </Link>
                                                <Link
                                                    href={route(
                                                        "admin.berita.edit",
                                                        berita.id,
                                                    )}
                                                    className="flex items-center justify-center gap-1 text-sm font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 py-2 rounded-lg transition"
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() =>
                                                        confirmDelete(berita.id)
                                                    }
                                                    className="flex items-center justify-center gap-1 text-sm font-semibold text-red-700 bg-red-50 hover:bg-red-100 py-2 rounded-lg transition"
                                                >
                                                    Hapus
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* 💻 TAMPILAN DESKTOP (Table) */}
                                <div className="hidden md:block overflow-x-auto border border-gray-200 rounded-xl">
                                    <table className="w-full text-sm text-left text-gray-600">
                                        <thead className="text-xs text-gray-700 bg-gray-50 border-b border-gray-200">
                                            <tr>
                                                <th className="px-4 py-5 font-extrabold w-12 text-center">
                                                    No
                                                </th>
                                                <th className="px-4 py-5 font-extrabold w-28">
                                                    Gambar
                                                </th>
                                                <th className="px-4 py-5 font-extrabold w-1/4">
                                                    Judul Berita
                                                </th>

                                                {/* TAMBAHAN KOLOM KONTEN */}
                                                <th className="px-4 py-5 font-extrabold w-1/3">
                                                    Cuplikan Konten
                                                </th>

                                                <th className="px-4 py-5 font-extrabold w-32">
                                                    Tanggal
                                                </th>
                                                <th className="px-4 py-5 font-extrabold text-center w-48">
                                                    Aksi
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {beritas.map((berita, index) => (
                                                <tr
                                                    key={berita.id}
                                                    className="bg-white hover:bg-gray-50 transition duration-150"
                                                >
                                                    <td className="px-4 py-4 text-center font-medium text-gray-900">
                                                        {index + 1}
                                                    </td>
                                                    <td className="px-4 py-4">
                                                        <div className="w-20 h-14 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 shadow-sm">
                                                            {berita.image ? (
                                                                <img
                                                                    src={`/storage/${berita.image}`}
                                                                    alt={
                                                                        berita.title
                                                                    }
                                                                    className="w-full h-full object-cover"
                                                                />
                                                            ) : (
                                                                <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-400 italic">
                                                                    No Image
                                                                </div>
                                                            )}
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 font-bold text-gray-900">
                                                        <div className="line-clamp-2">
                                                            {berita.title}
                                                        </div>
                                                    </td>

                                                    {/* ISI KOLOM KONTEN DENGAN EFEK POTONG 2 BARIS */}
                                                    <td className="px-4 py-4">
                                                        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                                                            {berita.content}
                                                        </p>
                                                    </td>

                                                    <td className="px-4 py-4 text-xs text-gray-500 font-medium">
                                                        {new Date(
                                                            berita.published_at,
                                                        ).toLocaleDateString(
                                                            "id-ID",
                                                            {
                                                                day: "2-digit",
                                                                month: "short",
                                                                year: "numeric",
                                                            },
                                                        )}
                                                    </td>
                                                    <td className="px-4 py-4 text-center">
                                                        <div className="flex justify-center gap-2">
                                                            {/* Tombol Lihat Baru */}
                                                            <Link
                                                                href={route(
                                                                    "admin.berita.show",
                                                                    berita.id,
                                                                )}
                                                                className="px-2.5 py-1.5 text-xs font-bold text-green-700 bg-green-50 rounded-md hover:bg-green-600 hover:text-white transition-colors border border-green-200 hover:border-transparent"
                                                            >
                                                                Lihat
                                                            </Link>
                                                            <Link
                                                                href={route(
                                                                    "admin.berita.edit",
                                                                    berita.id,
                                                                )}
                                                                className="px-2.5 py-1.5 text-xs font-bold text-blue-700 bg-blue-50 rounded-md hover:bg-blue-600 hover:text-white transition-colors border border-blue-200 hover:border-transparent"
                                                            >
                                                                Edit
                                                            </Link>
                                                            <button
                                                                onClick={() =>
                                                                    confirmDelete(
                                                                        berita.id,
                                                                    )
                                                                }
                                                                className="px-2.5 py-1.5 text-xs font-bold text-red-700 bg-red-50 rounded-md hover:bg-red-600 hover:text-white transition-colors border border-red-200 hover:border-transparent"
                                                            >
                                                                Hapus
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            {showModal && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
                    {/* Background Gelap (Blur) */}
                    <div
                        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity"
                        onClick={() => setShowModal(false)}
                    ></div>

                    {/* Kotak Putih Modal */}
                    <div className="bg-white rounded-3xl p-8 w-full max-w-sm shadow-2xl relative z-10 transform transition-all scale-100">
                        <div className="flex flex-col items-center text-center">
                            {/* Ikon Peringatan (Warning) */}
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-5">
                                <svg
                                    className="w-8 h-8 text-red-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    ></path>
                                </svg>
                            </div>

                            <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                                Hapus Berita?
                            </h3>
                            <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                                Tindakan ini tidak dapat dibatalkan. Berita yang
                                dihapus akan hilang dari sistem selamanya.
                            </p>

                            {/* Tombol Batal & Hapus */}
                            <div className="flex w-full gap-3">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3.5 rounded-xl transition-colors"
                                >
                                    Batal
                                </button>
                                <button
                                    onClick={executeDelete}
                                    className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-sm focus:ring-4 focus:ring-red-100 hover:-translate-y-0.5"
                                >
                                    Ya, Hapus
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}

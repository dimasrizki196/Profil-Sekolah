import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ auth, berita }) {
    // Inisialisasi form dengan data berita yang sudah ada
    const { data, setData, post, processing, errors } = useForm({
        title: berita.title || "",
        content: berita.content || "",
        image: null,
        _method: "PUT", // Trik Inertia untuk Update
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.berita.update", berita.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Berita
                </h2>
            }
        >
            <Head title="Edit Berita" />

            <div className="py-8 md:py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Kotak Utama Form */}
                    <div className="bg-white shadow-sm sm:rounded-2xl border border-gray-100 overflow-hidden">
                        {/* Header Form & Tombol Kembali (Di Kiri) */}
                        <div className="px-6 py-6 md:px-8 md:py-6 border-b border-gray-100 bg-gray-50/50 flex flex-col gap-4">
                            {/* Tombol Kembali di Kiri Atas */}
                            <div>
                                <Link
                                    href={route("admin.berita.index")}
                                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
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
                                            strokeWidth="2"
                                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                        ></path>
                                    </svg>
                                    Batal & Kembali
                                </Link>
                            </div>

                            {/* Judul Form */}
                            <div>
                                <h3 className="text-xl font-extrabold text-gray-900">
                                    Perbarui Berita
                                </h3>
                                <p className="text-sm text-gray-500 mt-1">
                                    Edit informasi atau perbaiki kesalahan
                                    penulisan pada berita ini.
                                </p>
                            </div>
                        </div>

                        {/* Area Form */}
                        <div className="p-6 md:p-8">
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-6"
                                encType="multipart/form-data"
                            >
                                {/* Input Judul */}
                                <div>
                                    <label
                                        htmlFor="title"
                                        className="block text-sm font-bold text-gray-700 mb-2"
                                    >
                                        Judul Berita{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        value={data.title}
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                        className={`w-full bg-gray-50 text-gray-900 text-sm rounded-xl border ${errors.title ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-200 focus:border-blue-500 focus:ring-blue-500"} block p-3.5 transition duration-200`}
                                    />
                                    {errors.title && (
                                        <p className="text-red-500 text-xs mt-1.5 font-medium">
                                            {errors.title}
                                        </p>
                                    )}
                                </div>

                                {/* Input Gambar Modern (Dashed Box) dengan Preview Lama */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        Ganti Foto / Thumbnail{" "}
                                        <span className="text-gray-400 font-normal">
                                            (Opsional)
                                        </span>
                                    </label>

                                    <div className="flex items-center justify-center w-full">
                                        <label
                                            htmlFor="image"
                                            className={`flex flex-col items-center justify-center w-full min-h-[10rem] border-2 border-dashed rounded-xl cursor-pointer transition-colors duration-200 p-4 ${data.image ? "border-blue-400 bg-blue-50" : "border-gray-300 bg-gray-50 hover:bg-gray-100"}`}
                                        >
                                            <div className="flex flex-col items-center justify-center text-center">
                                                {/* Kondisi 1: Admin sudah memilih file BARU */}
                                                {data.image ? (
                                                    <>
                                                        <svg
                                                            className="w-8 h-8 mb-3 text-blue-500"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            ></path>
                                                        </svg>
                                                        <p className="text-sm font-semibold text-blue-600 truncate max-w-xs">
                                                            {data.image.name}
                                                        </p>
                                                        <p className="text-xs text-blue-400 mt-1">
                                                            File baru siap
                                                            diupload
                                                        </p>
                                                    </>
                                                ) : /* Kondisi 2: Belum pilih file baru, tapi ada file LAMA di database */
                                                berita.image ? (
                                                    <>
                                                        <img
                                                            src={`/storage/${berita.image}`}
                                                            alt="Current"
                                                            className="h-24 w-auto object-cover rounded-lg shadow-sm border border-gray-200 mb-3"
                                                        />
                                                        <p className="mb-1 text-sm text-gray-500">
                                                            <span className="font-semibold text-blue-600">
                                                                Klik untuk
                                                                mengganti foto
                                                            </span>
                                                        </p>
                                                        <p className="text-xs text-gray-400">
                                                            Biarkan kosong jika
                                                            tidak ingin
                                                            mengganti
                                                        </p>
                                                    </>
                                                ) : (
                                                    /* Kondisi 3: Tidak ada file baru dan tidak ada file lama (Berita polosan) */
                                                    <>
                                                        <svg
                                                            className="w-8 h-8 mb-3 text-gray-400"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                                                            ></path>
                                                        </svg>
                                                        <p className="mb-1 text-sm text-gray-500">
                                                            <span className="font-semibold text-blue-600">
                                                                Klik untuk
                                                                upload foto baru
                                                            </span>
                                                        </p>
                                                        <p className="text-xs text-gray-400">
                                                            Format JPG, PNG,
                                                            WEBP (Maksimal 2MB)
                                                        </p>
                                                    </>
                                                )}
                                            </div>
                                            <input
                                                id="image"
                                                type="file"
                                                className="hidden"
                                                accept="image/*"
                                                onChange={(e) =>
                                                    setData(
                                                        "image",
                                                        e.target.files[0],
                                                    )
                                                }
                                            />
                                        </label>
                                    </div>
                                    {errors.image && (
                                        <p className="text-red-500 text-xs mt-1.5 font-medium">
                                            {errors.image}
                                        </p>
                                    )}
                                </div>

                                {/* Input Konten */}
                                <div>
                                    <label
                                        htmlFor="content"
                                        className="block text-sm font-bold text-gray-700 mb-2"
                                    >
                                        Isi Berita{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="content"
                                        rows="8"
                                        value={data.content}
                                        onChange={(e) =>
                                            setData("content", e.target.value)
                                        }
                                        className={`w-full bg-gray-50 text-gray-900 text-sm rounded-xl border ${errors.content ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-200 focus:border-blue-500 focus:ring-blue-500"} block p-4 transition duration-200`}
                                    ></textarea>
                                    {errors.content && (
                                        <p className="text-red-500 text-xs mt-1.5 font-medium">
                                            {errors.content}
                                        </p>
                                    )}
                                </div>

                                {/* Area Tombol Submit */}
                                <div className="flex items-center justify-end pt-6 border-t border-gray-100">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-white font-bold transition-all shadow-sm focus:ring-4 focus:ring-blue-200 ${
                                            processing
                                                ? "bg-blue-400 cursor-not-allowed"
                                                : "bg-blue-600 hover:bg-blue-700 hover:-translate-y-0.5"
                                        }`}
                                    >
                                        {processing ? (
                                            <>
                                                <svg
                                                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    ></circle>
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    ></path>
                                                </svg>
                                                Menyimpan Perubahan...
                                            </>
                                        ) : (
                                            <>
                                                <svg
                                                    className="w-5 h-5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M5 13l4 4L19 7"
                                                    ></path>
                                                </svg>
                                                Perbarui Berita
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

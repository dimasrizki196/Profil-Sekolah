import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Show({ auth, berita }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Preview Berita
                </h2>
            }
        >
            <Head title="Preview Berita" />

            <div className="py-8 md:py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm sm:rounded-2xl p-6 md:p-10 border border-gray-100">
                        
                        {/* Tombol Navigasi Atas */}
                        <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-100">
                            <Link
                                href={route("admin.berita.index")}
                                className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition font-medium"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                                Kembali
                            </Link>
                            
                            <Link
                                href={route("admin.berita.edit", berita.id)}
                                className="flex items-center gap-2 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg transition font-bold text-sm"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                Edit Berita Ini
                            </Link>
                        </div>

                        {/* Konten Preview */}
                        <div className="space-y-6">
                            {/* Meta & Tanggal */}
                            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                Tanggal Rilis: {new Date(berita.published_at).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
                            </div>

                            {/* Judul */}
                            <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
                                {berita.title}
                            </h1>

                            {/* Gambar */}
                            {berita.image ? (
                                <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                                    <img 
                                        src={`/storage/${berita.image}`} 
                                        alt={berita.title} 
                                        className="w-full h-auto max-h-[400px] object-cover"
                                    />
                                </div>
                            ) : (
                                <div className="w-full py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 text-center text-gray-400 font-medium">
                                    Berita ini tidak memiliki gambar thumbnail.
                                </div>
                            )}

                            {/* Isi Teks */}
                            <div className="pt-6">
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Isi Konten:</h3>
                                <div className="prose max-w-none text-gray-700 whitespace-pre-line leading-relaxed">
                                    {berita.content}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';

export default function DetailBerita({ berita }) {
    return (
        <MainLayout>
            <Head title={berita.title} />
            <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
                <div className="max-w-3xl mx-auto animate-fade-in">
                    
                    {/* Breadcrumb Navigasi */}
                    <div className="mb-8 flex items-center gap-2 text-sm text-gray-500 font-medium">
                        <Link href="/" className="hover:text-primary transition">Beranda</Link>
                        <span>/</span>
                        <Link href="/info/berita" className="hover:text-primary transition">Berita</Link>
                        <span>/</span>
                        <span className="text-gray-400 truncate w-32 md:w-auto">{berita.title}</span>
                    </div>

                    {/* Judul & Meta */}
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        {berita.title}
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
                        <span className="flex items-center gap-1">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            {new Date(berita.published_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            Admin Sekolah
                        </span>
                    </div>

                    {/* Gambar Utama Berita */}
                    {berita.image && (
                        <div className="mb-10 rounded-2xl overflow-hidden shadow-sm">
                            <img src={`/storage/${berita.image}`} alt={berita.title} className="w-full h-auto object-cover max-h-[500px]" />
                        </div>
                    )}

                    {/* Isi Konten Berita */}
                    <div className="prose prose-lg prose-blue max-w-none text-gray-700 whitespace-pre-line leading-relaxed">
                        {berita.content}
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}
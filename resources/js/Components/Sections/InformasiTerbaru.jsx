import { Link } from '@inertiajs/react';
import Card from '../UI/Card';

export default function InformasiTerbaru({ beritas }) {
    return (
        <section id="informasi" className="py-20 px-4 sm:px-6 lg:px-8 bg-white animate-fade-in">
            <div className="max-w-6xl mx-auto">
                
                {/* Judul Section */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl font-extrabold text-secondary mb-3">Informasi <span className="text-primary">Terbaru</span></h2>
                    <p className="text-gray-500 text-sm md:text-base">Kabar dan pengumuman terkini dari sekolah kami.</p>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4 opacity-80"></div>
                </div>

                {/* Grid 2 Kolom (Membentuk 3 Baris jika total 6) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {(!beritas || beritas.length === 0) ? (
                        <div className="col-span-full text-center py-8">
                            <p className="text-gray-500 italic">Belum ada informasi terbaru saat ini.</p>
                        </div>
                    ) : (
                        beritas.map((item, index) => (
                            <Card key={item.id} className="flex flex-col sm:flex-row overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                                {/* Gambar Thumbnail (Kiri di layar besar, Atas di layar HP) */}
                                <div className="sm:w-2/5 h-48 sm:h-auto shrink-0 bg-gray-100 relative overflow-hidden">
                                    {item.image ? (
                                        <img 
                                            src={`/storage/${item.image}`} 
                                            alt={item.title} 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-400 italic">Tanpa Gambar</div>
                                    )}
                                </div>

                                {/* Konten Teks (Kanan) */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="text-xs font-bold text-primary mb-1 uppercase tracking-widest">
                                        {new Date(item.published_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    
                                    {/* Memotong isi teks agar Card tetap rapi */}
                                    <p className="text-sm text-gray-600 mb-4 opacity-90 line-clamp-2">
                                        {item.content.length > 80 ? item.content.substring(0, 80) + '...' : item.content}
                                    </p>
                                    
                                    <div className="mt-auto">
                                        <Link 
                                            href={route('berita.show', item.slug)} 
                                            className="inline-flex items-center text-sm font-bold text-primary hover:text-blue-800 transition-colors"
                                        >
                                            Baca Selengkapnya
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        ))
                    )}
                </div>

                {/* Tombol Lihat Semua */}
                {beritas && beritas.length > 0 && (
                    <div className="mt-12 text-center">
                        <Link 
                            href={route('berita.index')} 
                            className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-3 rounded-full transition-colors duration-300"
                        >
                            Lihat Semua Berita
                        </Link>
                    </div>
                )}

            </div>
        </section>
    );
}
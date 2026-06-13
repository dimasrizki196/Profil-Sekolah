import { Link } from "@inertiajs/react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Topbar() {
    return (
        // Topbar disembunyikan di layar HP (hidden) dan baru muncul di layar menengah ke atas (md:block)
        <div className="hidden md:block bg-[#1e7a44] text-white py-1.5 px-4 sm:px-6 lg:px-8 text-[13px] sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                
                {/* Bagian Kiri: Informasi Kontak */}
                <div className="flex items-center gap-6 font-medium tracking-wide">
          
                </div>

                {/* Bagian Kanan: Menu Tambahan & Sosial Media */}
                <div className="flex items-center gap-6">
                    {/* Link Cepat */}
                    <div className="flex items-center gap-5 font-semibold tracking-wide">
                        
                    </div>

                    {/* Pembatas Garis Putih */}
                    <div className="w-[1px] h-4 bg-white/40"></div>

                    {/* Ikon Sosial Media (Menggunakan SVG langsung agar tidak perlu instal library baru) */}
                    <div className="flex items-center gap-4">
                     
                    </div>
                </div>
            </div>
        </div>
    );
}
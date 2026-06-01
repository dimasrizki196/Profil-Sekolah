import { Link } from "@inertiajs/react";

export default function Topbar() {
    return (
        <div className="bg-white border-b border-gray-100 py-3 px-4 md:px-8 animate-fade-in sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-2 md:gap-8">
                <Link
                    href="/"
                    className="flex items-center gap-2.5 md:gap-4 hover:opacity-90 transition group"
                >
                    <img
                        src="/images/logo.png"
                        alt="Logo MIN 6 Boyolali"
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain transform group-hover:scale-105 transition duration-300"
                    />
                    <div className="flex flex-col justify-center">
                        <h1 className="text-base sm:text-lg md:text-2xl font-extrabold text-[#0f5132] tracking-tight leading-tight">
                            MIN 6 Boyolali
                        </h1>
                        <p className="hidden sm:block text-xs md:text-sm text-gray-500 font-semibold tracking-wide">
                            Kabupaten Boyolali
                        </p>
                    </div>
                </Link>

                <div className="flex items-center shrink-0">
                    <Link
                        href="/hubungi"
                        className="bg-[#0f5132] hover:bg-green-800 shadow-md shadow-green-900/20 text-white px-4 py-2 md:px-8 md:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-bold tracking-wide transition inline-flex items-center justify-center transform hover:-translate-y-0.5 whitespace-nowrap"
                    >
                        Hubungi Kami
                    </Link>
                </div>
            </div>
        </div>
    );
}

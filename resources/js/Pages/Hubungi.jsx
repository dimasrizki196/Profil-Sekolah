import MainLayout from "@/Layouts/MainLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Hubungi() {
    // State form menggunakan Inertia
    const { data, setData, reset } = useForm({
        nama: "",
        email: "",
        whatsapp: "",
        pesan: "",
    });

    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const noTujuan = "6285801051358";

        const templatePesan = `*Kritik & Saran Baru - Website Sekolah*
--------------------------------------------
*Nama:* ${data.nama}
*Email:* ${data.email}
*No. WhatsApp:* ${data.whatsapp}
--------------------------------------------
*Pesan:*
${data.pesan}
--------------------------------------------
_Dikirim via Form Hubungi Kami_`;

        const pesanEncoded = encodeURIComponent(templatePesan);

        window.open(`https://wa.me/${noTujuan}?text=${pesanEncoded}`, "_blank");

        reset();
        setIsSent(true);
        setTimeout(() => setIsSent(false), 5000);
    };

    return (
        <MainLayout>
            <Head title="Hubungi Kami" />

            {/* Bagian Peta (Google Maps) */}
            <div className="w-full h-64 md:h-96 bg-gray-200 relative">
                {/* Iframe Peta Surakarta sesuai alamat di screenshot */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.1432415865243!2d110.82142277573673!3d-7.559365574653654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1688afbb28c5%3A0xc66fbfa99974bf30!2sJl.%20RM.%20Said%20No.35%2C%20Ketelan%2C%20Kec.%20Banjarsari%2C%20Kota%20Surakarta%2C%20Jawa%20Tengah%2057132!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Peta Lokasi Sekolah"
                ></iframe>
            </div>

            <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Kolom Kiri: Informasi Kontak */}
                        <div className="flex flex-col justify-center animate-slide-up">
                            <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-700 mb-4">
                                Hubungi Kami
                            </h1>
                            <p className="text-gray-600 mb-10 leading-relaxed">
                                Apakah Anda memiliki pertanyaan tentang program
                                akademik, kegiatan ekstrakurikuler, atau ingin
                                mengatur kunjungan ke sekolah kami? Jangan ragu
                                untuk menghubungi kami. Tim kami akan dengan
                                senang hati membantu Anda.
                            </p>

                            <div className="space-y-4">
                                {/* Card Phone */}
                                <div className="flex items-center gap-5 p-5 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition duration-300 group border border-gray-100">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm group-hover:scale-110 transition">
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-emerald-700 text-lg">
                                            Phone Number
                                        </h4>
                                        <p className="text-gray-600">
                                            628994455668
                                        </p>
                                    </div>
                                </div>

                                {/* Card Email */}
                                <div className="flex items-center gap-5 p-5 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition duration-300 group border border-gray-100">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm group-hover:scale-110 transition">
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-emerald-700 text-lg">
                                            Email
                                        </h4>
                                        <p className="text-gray-600">
                                            info@sekolah.sch.id
                                        </p>
                                    </div>
                                </div>

                                {/* Card WhatsApp */}
                                <div className="flex items-center gap-5 p-5 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition duration-300 group border border-gray-100">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm group-hover:scale-110 transition">
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M12 2C6.48 2 2 6.48 2 12c0 2.12.66 4.08 1.78 5.69L2.5 21.5l3.92-1.22A9.957 9.957 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.5 14.5c-.32.88-1.74 1.63-2.58 1.83-.69.17-1.57.25-2.79-.19-1.45-.53-3.32-2.18-4.57-3.79-1.4-1.8-2.19-3.79-2.19-5.71 0-1.99 1.01-3.05 1.36-3.41.36-.37.91-.49 1.25-.49.34 0 .61.02.85.02.32 0 .69-.07 1.06.84.44 1.09 1.15 2.84 1.25 3.06.1.22.18.49.03.8-.14.3-.22.48-.44.75-.22.25-.47.57-.66.77-.22.25-.46.51-.21.94.25.43 1.13 1.86 2.43 3.03 1.67 1.5 3.07 1.96 3.51 2.17.43.21.68.17.94-.13.25-.3.6-1.12 1.16-1.51.35-.24.71-.2.1.03.39.22 2.46 1.16 2.88 1.37.42.21.7.35.8.53.1.2.1.1.1.1-.19.98-.67 1.98-1.56 2.22z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-emerald-700 text-lg">
                                            WhatsApp
                                        </h4>
                                        <p className="text-gray-600">
                                            628994455668
                                        </p>
                                    </div>
                                </div>

                                {/* Card Alamat */}
                                <div className="flex items-start gap-5 p-5 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition duration-300 group border border-gray-100">
                                    <div className="w-12 h-12 shrink-0 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm group-hover:scale-110 transition mt-1">
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-emerald-700 text-lg">
                                            Alamat
                                        </h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Jl. Raden Mas Said No.35, Ketelan,
                                            Banjarsari, Kota Surakarta, Jawa
                                            Tengah 57131
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Kolom Kanan: Form Kritik & Saran */}
                        <div
                            className="flex items-center animate-slide-up"
                            style={{ animationDelay: "0.2s" }}
                        >
                            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 w-full relative overflow-hidden">
                                {/* Dekorasi Latar Form */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-10 opacity-50"></div>

                                {isSent ? (
                                    <div className="text-center py-16">
                                        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                                            <svg
                                                className="w-10 h-10"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="3"
                                                    d="M5 13l4 4L19 7"
                                                ></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                            Pesan Terkirim!
                                        </h3>
                                        <p className="text-gray-500">
                                            Terima kasih atas kritik dan saran
                                            Anda. Tim kami akan meninjaunya
                                            segera.
                                        </p>
                                    </div>
                                ) : (
                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-5"
                                    >
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Tulis Nama Anda"
                                                required
                                                value={data.nama}
                                                onChange={(e) =>
                                                    setData(
                                                        "nama",
                                                        e.target.value,
                                                    )
                                                }
                                                className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-emerald-500 focus:border-emerald-500 block p-4 placeholder-gray-400 transition"
                                            />
                                        </div>

                                        <div>
                                            <input
                                                type="email"
                                                placeholder="Alamat Email Anda"
                                                required
                                                value={data.email}
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value,
                                                    )
                                                }
                                                className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-emerald-500 focus:border-emerald-500 block p-4 placeholder-gray-400 transition"
                                            />
                                        </div>

                                        <div>
                                            <input
                                                type="text"
                                                placeholder="No. WhatsApp"
                                                required
                                                value={data.whatsapp}
                                                onChange={(e) =>
                                                    setData(
                                                        "whatsapp",
                                                        e.target.value,
                                                    )
                                                }
                                                className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-emerald-500 focus:border-emerald-500 block p-4 placeholder-gray-400 transition"
                                            />
                                        </div>

                                        <div>
                                            <textarea
                                                rows="5"
                                                placeholder="Isi Saran dan Kritik Anda Disini"
                                                required
                                                value={data.pesan}
                                                onChange={(e) =>
                                                    setData(
                                                        "pesan",
                                                        e.target.value,
                                                    )
                                                }
                                                className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-emerald-500 focus:border-emerald-500 block p-4 placeholder-gray-400 transition resize-none"
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-bold rounded-xl text-sm px-5 py-4 text-center transition shadow-lg shadow-emerald-200"
                                        >
                                            Kirim Kritik dan Saran
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

import MainLayout from "@/Layouts/MainLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";
import {
    PhoneIcon,
    EnvelopeIcon,
    MapPinIcon,
    PaperAirplaneIcon,
    CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function Hubungi() {
    const { data, setData, reset } = useForm({
        nama: "",
        email: "",
        kontak: "",
        pesan: "",
    });

    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const noTujuan = "6285801051358";
        const templatePesan = `*Pesan Website Sekolah*\nNama: ${data.nama}\nEmail: ${data.email}\nKontak: ${data.kontak}\n\nPesan: ${data.pesan}`;
        window.open(
            `https://wa.me/${noTujuan}?text=${encodeURIComponent(templatePesan)}`,
            "_blank",
        );
        reset();
        setIsSent(true);
        setTimeout(() => setIsSent(false), 5000);
    };

    return (
        <MainLayout>
            <Head title="Hubungi Kami" />

            <div className="flex flex-col min-h-screen">
                {/* Map Embed */}
                <div className="w-full h-72 md:h-80 bg-gray-200">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.604060559473!2d110.7770625750021!3d-7.508885592503722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a13958a2ee7d1%3A0xea6383467e382ef5!2sMIN%206%20BOYOLALI!5e0!3m2!1sid!2sid!4v1780370006227!5m2!1sid!2sid"
                        className="w-full h-full border-0"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

                {/* Main Content */}
                <div className="flex-grow py-12 md:py-16 px-4 bg-white">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Info Kontak yang dioptimalkan */}
                        <div className="space-y-8" data-aos="fade-right">
                            <div>
                                <h1 className="text-3xl font-extrabold text-[#0f5132] mb-4">
                                    Hubungi Kami
                                </h1>
                                <p className="text-gray-600 leading-relaxed">
                                    Ada pertanyaan atau butuh bantuan lebih
                                    lanjut? Silakan hubungi tim kami melalui
                                    kanal resmi berikut. Kami siap melayani Anda
                                    dengan sepenuh hati.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    {
                                        icon: PhoneIcon,
                                        label: "Telepon / WhatsApp",
                                        val: "0851-1784-5202",
                                        action: "https://wa.me/6285117845202",
                                    },
                                    {
                                        icon: EnvelopeIcon,
                                        label: "Email Resmi",
                                        val: "info@min6boyolali.sch.id",
                                        action: "mailto:info@min6boyolali.sch.id",
                                    },
                                    {
                                        icon: MapPinIcon,
                                        label: "Lokasi Madrasah",
                                        val: "Dibal RT 04/08, Ngemplak, Boyolali",
                                        action: "https://maps.app.goo.gl/kjrJkp8aCCkHYoyGA",
                                    },
                                ].map((item, i) => (
                                    <a
                                        href={item.action}
                                        target="_blank"
                                        rel="noreferrer"
                                        key={i}
                                        className="flex items-center gap-5 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-[#0f5132]/30 hover:shadow-md transition-all duration-300 group"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-[#0f5132]/5 flex items-center justify-center group-hover:bg-[#0f5132] transition-colors duration-300">
                                            <item.icon className="w-6 h-6 text-[#0f5132] group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                                {item.label}
                                            </p>
                                            <p className="font-bold text-gray-800 text-sm md:text-base group-hover:text-[#0f5132] transition-colors">
                                                {item.val}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Form yang dioptimalkan */}
                        <div
                            data-aos="fade-left"
                            data-aos-delay="200"
                            className="flex items-center"
                        >
                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-100 w-full">
                                {isSent ? (
                                    <div className="text-center py-10 animate-fade-in">
                                        <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                        <h3 className="text-xl font-bold text-gray-900">
                                            Pesan Terkirim!
                                        </h3>
                                        <p className="text-gray-500 mt-2">
                                            Terima kasih, tim kami akan segera
                                            menghubungi Anda.
                                        </p>
                                    </div>
                                ) : (
                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-600 ml-1">
                                                Nama Lengkap
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Masukkan nama lengkap Anda"
                                                className="w-full rounded-2xl border-gray-200 focus:border-[#0f5132] focus:ring-[#0f5132] transition-all duration-200 p-4"
                                                onChange={(e) =>
                                                    setData(
                                                        "nama",
                                                        e.target.value,
                                                    )
                                                }
                                                value={data.nama}
                                                required
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-600 ml-1">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    placeholder="contoh@gmail.com"
                                                    className="w-full rounded-2xl border-gray-200 focus:border-[#0f5132] focus:ring-[#0f5132] transition-all duration-200 p-4"
                                                    onChange={(e) =>
                                                        setData(
                                                            "email",
                                                            e.target.value,
                                                        )
                                                    }
                                                    value={data.email}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-600 ml-1">
                                                    WhatsApp / Telepon
                                                </label>
                                                <input
                                                    type="tel"
                                                    placeholder="0812xxxxxxxx"
                                                    className="w-full rounded-2xl border-gray-200 focus:border-[#0f5132] focus:ring-[#0f5132] transition-all duration-200 p-4"
                                                    onChange={(e) =>
                                                        setData(
                                                            "kontak",
                                                            e.target.value,
                                                        )
                                                    }
                                                    value={data.kontak}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-600 ml-1">
                                                Pesan Anda
                                            </label>
                                            <textarea
                                                rows="4"
                                                placeholder="Apa yang ingin Anda sampaikan?"
                                                className="w-full rounded-2xl border-gray-200 focus:border-[#0f5132] focus:ring-[#0f5132] transition-all duration-200 p-4 resize-none"
                                                onChange={(e) =>
                                                    setData(
                                                        "pesan",
                                                        e.target.value,
                                                    )
                                                }
                                                value={data.pesan}
                                                required
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-[#0f5132] text-white font-bold py-4 rounded-2xl hover:bg-[#0a3822] hover:scale-[1.01] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#0f5132]/20"
                                        >
                                            <PaperAirplaneIcon className="w-5 h-5" />
                                            Kirim Pesan Sekarang
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

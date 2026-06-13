import Navbar from "@/Components/Layout/Navbar";
import Footer from "@/Components/Layout/Footer";
import Topbar from "@/Components/Layout/Topbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Pembungkus semua halaman
export default function MainLayout({ children }) {
    useEffect(() => {
        AOS.init({
            duration: 800, 
            once: true, 
            offset: 50,
        });
    }, []);
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Topbar />
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
}

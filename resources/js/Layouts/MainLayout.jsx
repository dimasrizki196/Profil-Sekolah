import Topbar from '@/Components/Layout/Topbar';
import Navbar from '@/Components/Layout/Navbar';
import Footer from '@/Components/Layout/Footer';

// Pembungkus semua halaman
export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Topbar />
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
}
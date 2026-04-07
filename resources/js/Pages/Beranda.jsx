import MainLayout from "@/Layouts/MainLayout";
import Hero from "@/Components/Sections/Hero";
import Sambutan from "@/Components/Sections/Sambutan";
import Ekstrakurikuler from "@/Components/Sections/Ekstrakurikuler";
import Galery from "@/Components/Sections/Galery";
import InformasiTerbaru from "@/Components/Sections/InformasiTerbaru";

export default function Beranda({ beritaTerbaru }){
    return (
        <MainLayout>
            <Hero />
            <Sambutan />
            <InformasiTerbaru beritas={beritaTerbaru} />
            <Ekstrakurikuler />
            <Galery />
        </MainLayout>
    );
}

import { AboutUs } from "../components/AboutUs"
import { AcademicProgramsSection } from "../components/AcademicProgram"
import { ContactSection } from "../components/Contact"
import { FAQSection } from "../components/Faq"
import { GallerySection } from "../components/Gallery"
import Hero from "../components/Hero"
import { OptionSection } from "../components/Option"

const AcceuilPage = () => {
    return (
        <>
            <Hero />
            <AboutUs />
            <OptionSection />
            <AcademicProgramsSection />
            <GallerySection />
            <FAQSection />
            <ContactSection />
        </>
    )
}

export default AcceuilPage
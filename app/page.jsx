import HeroSection from "@/components/HeroSection/HeroSection";
import About from "@/components/About/About";
import Testimonials from "@/components/Testimonials/Testimonials";
import GridGalery from "@/components/GridGalery/GridGalery";
import Work from "@/components/Work/Work";

export default function Page() {
  return (
    <main>
    <HeroSection />
    <About />
    <Testimonials />
    <GridGalery />
    {/* <Work /> */}
    </main>
  );
}

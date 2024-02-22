
import LandingPage from "@/components/landingpage";
import About from "@/components/landingpage/about";
import Footer from "@/components/landingpage/footer";
import Header from "@/components/landingpage/header";
import Image from "next/image";

export default function Home() {
  return (
    <>
    
    <main className="absolute w-full h-screen">
      <nav className="z-50 w-full relative h-24">
        <Header />
      </nav>
      <section className="mt-24">
        <LandingPage />
        <About/>
        {/* <Services/>
        <Store />
        <Testimonial />
        <Contact /> */}
        
      </section>
      <footer className="container w-full">
        <Footer /> 
      </footer>
    </main>

    </>
  );
}
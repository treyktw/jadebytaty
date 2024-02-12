import LandingPage from "@/components/landingpage";
import NavbarComponent from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header>
        <NavbarComponent />
      </header>
      <section>
        <LandingPage/>
      </section>
    </main>
  );
}

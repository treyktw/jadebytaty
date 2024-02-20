import Header from "@/components/header";
import LandingPage from "@/components/landingpage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative  w-full h-screen">
      <header className="z-50 w-full relative h-24">
        <Header />
      </header>
      <section className="mt-24">
        <LandingPage />
      </section>
    </main>
  );
}
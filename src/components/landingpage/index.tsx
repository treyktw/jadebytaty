import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { NavSocials } from "@/lib/constants";

const LandingPage = () => {
  return (
    <main>
      <section className="relative top-[70px] flex justify-center items-center w-full h-[550px] z-[-9999]">
        <div className=" w-full flex flex-col  items-center justify-center lg:flex-row xs:top-96">
          <div className="bg-blue-500 w-full xs:w-full mb-10">
            <Image
              src="/placeholder.png"
              alt="placeholder1"
              width={800}
              height={800}
              className="items-center flex justify-center w-full xs:h-[900px]"
              loading="lazy"
            />
          </div>
          <div className=" w-full  items-center flex justify-center">
            <Image
              src="/placeholder2.png"
              alt="placeholder2"
              width={400}
              height={700}
              className="inset-0 lg:h-full xs:h-[450px]"
            />
          </div>
        </div>
      </section>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10  overflow-hidden">
        <h1 className="text-8xl font-bold mb-4 text-center m-10">
          Your Beauty <br />
          <span>Signature<br /></span>
        </h1>
        <Button className="rounded-none m-10 h-20  overflow-hidden" size={"lg"}>
          <Link href="/">
            <p className="text-3xl m-10 ">
             Schedule An Appointment 
            </p>
          </Link>
        </Button>
      </div>

      <aside
        aria-label="socials"
        className="absolute bottom-0 right-0 h-28 w-16 gap-y-10 xs:hidden lg:block"
      >
        {NavSocials.map((socials) => (
          <Link
            key={socials.key}
            href={socials.href}
            className="gap-y-10"
            target="_blank"
          >
            <Image src={socials.url} width={25} height={25} alt="Socials" />
          </Link>
        ))}
      </aside>
    </main>
  );
};

export default LandingPage;

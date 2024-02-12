'use client'

import { NavLinks, NavSocials } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import React, { useState } from "react";
import { Button } from "../ui/button";

type Props = {};

const NavbarComponent = (props: Props) => {
  const [isActive, setisActive] = useState(false)

  return (
    <nav className="w-full h-20 bg-accent fixed top-0 z-[9999] ">
      <div className="flex flex-row items-center justify-between h-full container-[1920px]">
        <section className="ml-10">
          <h1 className="text-4xl">JadeByTaty</h1>
        </section>
        <section className="">
          {!isActive ? 
          <Button onClick={() => setisActive}>Menu</Button> : 
          <h1 className="text-xl text-center justify-center flex items-center">
            {NavLinks.map((link) => (
              <Link href={link.href} key={link.key} className="p-5">
                {" "}
                {link.label}
              </Link>
            ))}
          </h1> }
          
        </section>
        <section className="flex flex-row bg-clip-text bg-white">
          {NavSocials.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="p-7"
              target="_blank"
            >
              <Image
                src={link.url}
                alt="social links"
                width={20}
                height={20}
                className="filter brightness-0 invert"
              />
            </Link>
          ))}
        </section>
      </div>
    </nav>
  );
};

export default NavbarComponent;

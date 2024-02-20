'use client';
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';

import Image from './Image'
import Body from './body';
import Footer from './footer';

const links = [
  {
    title: "Home",
    href: "/",
    src: "home.png"
  },
  {
    title: "Shop",
    href: "/shop",
    src: "shop.png"
  },
  {
    title: "About Us",
    href: "/about",
    src: "home.png"
  },
  {
    title: "Lookbook",
    href: "/lookbook",
    src: "lookbook.png"
  },
  {
    title: "Contact",
    href: "/contact",
    src: "contact.png"
  }
]

export default function NavComponent() {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
          <Footer />
        </div>
        {/* <Image src={links[selectedLink.index].src} selectedLink={selectedLink}/> */}
      </div>
    </motion.div>
  )
}
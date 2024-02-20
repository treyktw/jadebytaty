import React, { FC } from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import styles from './style.module.scss';
import { blur, translate } from '../../anim';

interface LinkProps {
  title: string;
  href: string;
}

interface BodyProps {
  links: LinkProps[];
  selectedLink: { isActive: boolean; index: number };
  setSelectedLink: (selectedLink: { isActive: boolean; index: number }) => void;
}

const Body: FC<BodyProps> = ({ links, selectedLink, setSelectedLink }) => {
  const getChars = (word: string) => {
    let chars: JSX.Element[] = [];
    word.split('').forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <div className={styles.body}>
      {links.map((link, index) => {
        const { title, href } = link;
        return (
          <Link key={`l_${index}`} href={href}>
            <motion.p
              onMouseOver={() => {
                setSelectedLink({ isActive: true, index });
              }}
              onMouseLeave={() => {
                setSelectedLink({ isActive: false, index });
              }}
              variants={blur}
              animate={selectedLink.isActive && selectedLink.index !== index ? 'open' : 'closed'}
            >
              {getChars(title)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
};

export default Body;
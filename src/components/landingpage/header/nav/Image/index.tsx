import React, { FC } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import styles from './style.module.scss';
import { opacity } from '../../anim';

interface IndexProps {
  src: string;
  selectedLink: {
    isActive: boolean;
  };
}

const Index: FC<IndexProps> = ({ src, selectedLink }) => {
  const containerVariants: Variants = {
    initial: {
      opacity: 0,
    },
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate={selectedLink.isActive ? "open" : "closed"}
      className={styles.imageContainer}
    >
      <Image
        src={`/images/${src}`}
        fill={true}
        alt="image"
      />
    </motion.div>
  );
}

export default Index;
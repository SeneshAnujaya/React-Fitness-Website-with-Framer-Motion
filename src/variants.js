import { delay, stagger } from "framer-motion";

export const fadeScaleVariant = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1 },
};

export const fadeUpVariant = {
  hidden: { opacity: 0, y: "2rem" },
  visible: { opacity: 1, y: 0 },
};

export const fadeDownVariant = {
  hidden: { opacity: 0, y: "-2rem" },
  visible: { opacity: 1, y: 0 },
};

export const fadeLeftVariant = {
  hidden: { opacity: 0, x: "6rem" },
  visible: { opacity: 1, x: 0 },
};

export const fadeZeroScaleVariant = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};



export const cardVariants = {
  hidden: { opacity: 0, x: [-60, 0] },
  visible: {
    opacity: 1,
    x: 0,

    transition: { duration: 0.4, ease: "easeIn" },
  },
};

export const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each child
    },
  },
};

export const fadeScaleSidePics = {
  hidden: { opacity: 0, scale: 0.5, borderRadius: '12rem' },
  visible: { opacity: 1, scale: 1 },
};

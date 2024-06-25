import { motion } from "framer-motion";

// one
// const opacityAnimation = {
//   initial: {
//     opacity: 0,
//   },
//   animate: {
//     opacity: 1,
//   },
//   exit: {
//     opacity: 0,
//   },
// };

// two
// const roatateAnimation = {
//   initial: {
//     rotateY: 90,
//   },
//   animate: {
//     rotateY: 0,
//   },
//   exit: {
//     rotateY: -90,
//   },
// };

// three
// const zoomAnimation = {
//   initial: {
//     scale: 0.7,
//     opacity: 1,
//   },
//   animate: {
//     scale: 1,
//     opacity: 1,
//   },
//   exit: {
//     scale: 0.7,
//     opacity: 0,
//   },
// };

// four
// const widthAnimation = {
//   initial: {
//     width: 0,
//   },
//   animate: {
//     width: "100%",
//   },
//   exit: {
//     width: "100%",
//     x: window.innerWidth,
//   },
// };

// Five
const fadeInAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

// six
// const slideRightAnimation = {
//   initial: {
//     opacity: 0,
//     x: -100,
//   },
//   animate: {
//     opacity: 1,
//     x: 0,
//   },
//   exit: {
//     opacity: 0,
//     x: 100,
//   },
// };

// seven
// const flipAnimation = {
//   initial: {
//     opacity: 0,
//     rotateY: -90,
//   },
//   animate: {
//     opacity: 1,
//     rotateY: 0,
//   },
//   exit: {
//     opacity: 0,
//     rotateY: 90,
//   },
// };

// const rotateAndScaleAnimation = {
//   initial: {
//     opacity: 0,
//     scale: 0.5,
//     rotate: -180,
//   },
//   animate: {
//     opacity: 1,
//     scale: 1,
//     rotate: 0,
//   },
//   exit: {
//     opacity: 0,
//     scale: 0.5,
//     rotate: 180,
//   },
// };

// shakeAnimation
// const shakeAnimation = {
//   animate: {
//     rotate: [0, -10, 10, -10, 10, 0],
//   },
// };

// flipVerticalAnimation
// const flipVerticalAnimation = {
//   initial: {
//     opacity: 0,
//     rotateX: -90,
//   },
//   animate: {
//     opacity: 1,
//     rotateX: 0,
//   },
//   exit: {
//     opacity: 0,
//     rotateX: 90,
//   },
// };

// const diagonalZoomAnimation = {
//   initial: {
//     opacity: 0,
//     scale: 0.5,
//     x: -100,
//     y: -100,
//   },
//   animate: {
//     opacity: 1,
//     scale: 1,
//     x: 0,
//     y: 0,
//   },
//   exit: {
//     opacity: 0,
//     scale: 0.5,
//     x: 100,
//     y: 100,
//   },
// };

// const fadeInAnimation = {
//   initial: {
//     opacity: 0,
//     transition: {
//       duration: 1,
//     },
//   },
//   animate: {
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       ease: "easeOut",
//     },
//   },
//   exit: {
//     opacity: 0,
//     transition: {
//       duration: 1,
//     },
//   },
// };

const PageTransitions = ({ children }) => {
  return (
    <motion.div
      className="page"
      style={{ willChange: "opacity" }}
      transition={{
        ease: "easeInOut",
        duration: 0.6,
        delay: 0.1,
      }}
      variants={fadeInAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default PageTransitions;

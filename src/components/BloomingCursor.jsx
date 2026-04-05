// import React, { useState, useEffect } from 'react';
// import { motion, useMotionValue, useSpring } from 'framer-motion';
// import '../index.css';

// // --- THE BLOOMING CURSOR ---
// function BloomingCursor() {
//   const [isHovered, setIsHovered] = useState(false);
//   const cursorX = useMotionValue(-100);
//   const cursorY = useMotionValue(-100);

//   const springConfig = { damping: 25, stiffness: 300 };
//   const cursorXSpring = useSpring(cursorX, springConfig);
//   const cursorYSpring = useSpring(cursorY, springConfig);

//   useEffect(() => {
//     const moveCursor = (e) => {
//       cursorX.set(e.clientX);
//       cursorY.set(e.clientY);
//     };

//     const handleMouseOver = (e) => {
//       if (e.target.closest('h1, h2, a, button, code')) {
//         setIsHovered(true);
//       } else {
//         setIsHovered(false);
//       }
//     };

//     window.addEventListener('mousemove', moveCursor);
//     window.addEventListener('mouseover', handleMouseOver);
    
//     return () => {
//       window.removeEventListener('mousemove', moveCursor);
//       window.removeEventListener('mouseover', handleMouseOver);
//     };
//   }, [cursorX, cursorY]);

//   const petals = [0, 1, 2, 3, 4];

//   return (
//     <motion.div
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         translateX: cursorXSpring,
//         translateY: cursorYSpring,
//         pointerEvents: 'none',
//         zIndex: 9999, // Extremely high so it's always on top
//       }}
//     >
//       {petals.map((index) => {
//         const rotationAngle = index * 72;

//         return (
//           <motion.div
//             key={index}
//             initial={false}
//             animate={{
//               rotate: isHovered ? rotationAngle : 0,
//               backgroundColor: isHovered ? '#c084fc' : '#22c55e',
//               scale: isHovered ? 1 : 1, // Kept at 1 as per your code
//             }}
//             transition={{
//               type: 'spring',
//               damping: 15,
//               stiffness: 250,
//             }}
//             style={{
//               position: 'absolute',
//               width: '24px',
//               height: '24px',
//               borderRadius: '0 50% 50% 50%',
//               originX: 0,
//               originY: 0,
//               marginLeft: '-2px',
//               marginTop: '-2px',
//             }}
//           />
//         );
//       })}
      
//       <motion.div 
//         animate={{
//           scale: isHovered ? 1 : 0,
//           opacity: isHovered ? 1 : 0
//         }}
//         style={{
//           position: 'absolute',
//           width: '8px',
//           height: '8px',
//           backgroundColor: '#fcd34d',
//           borderRadius: '50%',
//           top: '-4px',
//           left: '-4px',
//         }}
//       />
//     </motion.div>
//   );
// }


// export default BloomingCursor;

import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import '../index.css';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        pointerEvents: 'none',
        zIndex: 9999,
        width: '24px',
        height: '24px',
        backgroundColor: '#22c55e', // Stays green!
        borderRadius: '0 50% 50% 50%',
        originX: 0,
        originY: 0,
        marginLeft: '-2px',
        marginTop: '-2px',
      }}
    />
  );
}
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMousePointer } from 'react-icons/fi';

const TiltCard = () => {
  return (
    <div className='grid w-full place-content-center px-4 py-12 text-slate-900'>
      <Example />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const Example = () => {
  const ref = useRef(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        backgroundImage: `url('https://packschool.s3.amazonaws.com/card-back-sm.jpeg')`,
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      className='relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300 bg-cover bg-center'
    >
      <div
        style={{
          transform: 'translateZ(75px)',
          transformStyle: 'preserve-3d',
          backgroundImage: `url('https://packschool.s3.amazonaws.com/csp-cardback.png')`,
        }}
        className='absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg bg-cover bg-center'
      >
        <FiMousePointer
          style={{
            transform: 'translateZ(75px)',
          }}
          className='mx-auto text-4xl'
        />
        <p
          style={{
            transform: 'translateZ(50px)',
          }}
          className='text-center text-2xl font-bold text-white leading-tight'
        >
          Certificate of Sustainable Packaging
        </p>
      </div>
    </motion.div>
  );
};

export default TiltCard;

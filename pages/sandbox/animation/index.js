import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Gallery({ items, setIndex }) {
  return (
    <ul className='bg-[#eee] rounded-xl w-[500px] h-[500px] p-9 flex flex-wrap space-between'>
      {items.map((color, i) => (
        <motion.li
          className='rounded-lg p-6 cursor-pointer m-6 flex-1'
          key={color}
          onClick={() => setIndex(i)}
          style={{ backgroundColor: color }}
          layoutId={color}
        />
      ))}
    </ul>
  );
}

function SingleImage({ color, onClick }) {
  return (
    <div
      className='absolute inset-0 flex justify-center items-center pointer-events-none'
      onClick={onClick}
    >
      <motion.div
        layoutId={color}
        className='rounded-xl w-[500px] h-[300px]'
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

export default function Index() {
  const [index, setIndex] = useState(false);

  return (
    <>
      <Gallery items={colors} setIndex={setIndex} />
      <AnimatePresence>
        {index !== false && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            key='overlay'
            className='bg-white opacity-5 absolute inset-0'
            onClick={() => setIndex(false)}
          />
        )}

        {index !== false && (
          <SingleImage
            key='image'
            index={index}
            color={colors[index]}
            setIndex={setIndex}
            onClick={() => setIndex(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

const numColors = 4 * 4;
const makeColor = (hue) => `hsl(${hue}, 100%, 50%)`;
const colors = Array.from(Array(numColors)).map((_, i) =>
  makeColor(Math.round((360 / numColors) * i))
);

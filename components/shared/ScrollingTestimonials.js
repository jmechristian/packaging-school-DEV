import { useState, useEffect } from 'react';
import { PlayIcon, ArrowLeftCircleIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { API } from 'aws-amplify';
import { listTestimonials } from '../../src/graphql/queries';

const ScrollingTestimonials = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isTestimonials, setIsTestimonials] = useState([]);

  useEffect(() => {
    const getTestimonials = async () => {
      const res = await API.graphql({ query: listTestimonials });
      if (res.data) {
        setIsTestimonials(res.data.listTestimonials.items);
      }
    };

    getTestimonials();
  }, []);

  return (
    <div className='bg-white relative'>
      <div className='px-4 pt-4 overflow-x-hidden relative'>
        <div className='flex items-center mb-4'>
          <TestimonialList
            list={isTestimonials.slice(0, 3)}
            duration={125}
            fn={() => setIsOpen(true)}
            setSelected={(val) => setIsSelectedVid(val)}
          />
          <TestimonialList
            list={isTestimonials.slice(0, 3)}
            duration={125}
            fn={() => setIsOpen(true)}
            setSelected={(val) => setIsSelectedVid(val)}
          />
          <TestimonialList
            list={isTestimonials.slice(0, 3)}
            duration={125}
            fn={() => setIsOpen(true)}
            setSelected={(val) => setIsSelectedVid(val)}
          />
        </div>
        <div className='flex items-center mb-2'>
          <TestimonialList
            list={isTestimonials.slice(5, 9)}
            duration={75}
            reverse
            fn={() => setIsOpen(true)}
            setSelected={(val) => setIsSelectedVid(val)}
          />
          <TestimonialList
            list={isTestimonials.slice(5, 9)}
            duration={75}
            reverse
            fn={() => setIsOpen(true)}
            setSelected={(val) => setIsSelectedVid(val)}
          />
          <TestimonialList
            list={isTestimonials.slice(5, 9)}
            duration={75}
            reverse
            fn={() => setIsOpen(true)}
            setSelected={(val) => setIsSelectedVid(val)}
          />
        </div>
      </div>
    </div>
  );
};

const TestimonialList = ({
  list,
  reverse = false,
  duration = 50,
  fn,
  setSelected,
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? '-100%' : '0%' }}
      animate={{ translateX: reverse ? '0%' : '-100%' }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
      className='flex gap-4 px-2'
    >
      {list.map((t) => {
        return (
          <div
            key={t.id}
            className='shrink-0 w-[500px] hover:bg-amber-100 flex flex-col rounded-lg overflow-hidden group items-start relative ring-4 ring-black'
          >
            <div className='flex gap-3 px-4 w-full'>
              <div
                className='aspect-[1/1] rounded-full bg-indigo-400 w-20 mx-auto mt-4 bg-cover bg-center border-4 border-black'
                style={{ backgroundImage: `url(${t.headshot})` }}
              ></div>
              <div className='flex justify-between items-center w-full'>
                <div className='flex flex-col justify-center h-full'>
                  <span className='block font-semibold text-lg mb-1'>
                    {t.author}
                  </span>
                  <span className='block text-sm font-medium'>
                    {t.title}, {t.company}
                  </span>
                </div>
                <div
                  className='w-10 h-10 transition-all ease-in rounded-full bg-amber-300 group-hover:bg-neutral-900 flex items-center justify-center cursor-pointer'
                  onClick={() => {
                    setSelected(t.video);
                    fn();
                  }}
                >
                  <div>
                    <PlayIcon className='w-6 h-6 fill-white group-hover:fill-ap-yellow' />
                  </div>
                </div>
              </div>
            </div>
            {/* <img src={t.img} className='w-full h-44 object-cover' /> */}
            <div className='px-4 pt-4 pb-9'>
              <span className='block leading-snug'>{t.content}</span>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default ScrollingTestimonials;

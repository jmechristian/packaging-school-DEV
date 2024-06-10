import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

import BrutalWiredCourseCard from '../shared/BrutalWiredCourseCard';

const DemoOffering = ({ featured, reference }) => {
  return (
    <motion.div className='px-0 lg:px-6 w-fit mx-auto grid gap-12 md:gap-6 lg:gap-16 md:grid-cols-2 lg:grid-cols-3 md:pb-10 my-9 overflow-hidden'>
      <BrutalWiredCourseCard
        id={'927ba7b7-005d-42a2-af43-26e27f936b55'}
        reference={reference}
        external={true}
        link_text={'Select Topic'}
      />
      <BrutalWiredCourseCard
        id={'3b48be53-a8bf-43f1-b060-21054e419376'}
        reference={reference}
        external={true}
        link_text={'Select Topic'}
      />
      <BrutalWiredCourseCard
        id={'b6ca56ad-510d-4ca1-abec-a38f7e77294b'}
        reference={reference}
        external={true}
        link_text={'Select Topic'}
      />
      <BrutalWiredCourseCard
        id={'01b543df-cd37-4736-99bc-100f04065c3a'}
        reference={reference}
        external={true}
        link_text={'Select Topic'}
      />
      <BrutalWiredCourseCard
        id={'5309538c-d2a7-4817-bcec-22414d81b1d1'}
        reference={reference}
        external={true}
        link_text={'Select Topic'}
      />
    </motion.div>
  );
};

export default DemoOffering;

import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setSelectedFilter } from '../../all_courses/courseFilterSlice';
import {
  MdOutlineFactory,
  MdOutlineBusiness,
  MdOutlineDesignServices,
  MdOutlineLocalGroceryStore,
  MdOutlineLiquor,
  MdOutlineExtension,
  MdOutlineMultipleStop,
  MdOutlineDriveEta,
  MdOutlineAutoStories,
} from 'react-icons/md';
import {
  setMenuItem,
  setSelectedNav,
  closeMobileMenu,
} from '../navigationSlice';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import DropDownIconBlock from '../Header/MenuDropDowns/DropDownIconBlock';
import BusinessIcon from '../../../components/icons/BusinessIcon';
import DesignIcon from '../../../components/icons/DesignIcon';
import FoodIcon from '../../../components/icons/FoodIcon';
import IndustryIcon from '../../../components/icons/IndustryIcon';
import MaterialIcon from '../../../components/icons/MaterialIcon';
import SupplyIcon from '../../../components/icons/SupplyIcon';

const CourseMenuBlock = ({ onClose }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const categoryClickHandler = (name, value) => {
    onClose();
    let newVal = value?.toUpperCase();
    router.push(`/all_courses?category=${newVal}`);
    dispatch(closeMobileMenu());
    dispatch(setMenuItem());
    dispatch(setSelectedNav(null));
  };
  return (
    <>
      <DropDownIconBlock
        icon={<MdOutlineBusiness size={24} color='white' />}
        category='Business'
        value='business'
        desc='Optimize your sales ops and project management workflows'
        setFilter={categoryClickHandler}
      />
      <DropDownIconBlock
        icon={<MdOutlineDesignServices size={24} color='white' />}
        category='Design'
        value='design'
        desc='Design smarter with material best practices and human factors in mind'
        setFilter={categoryClickHandler}
      />
      <DropDownIconBlock
        icon={<MdOutlineLiquor size={24} color='white' />}
        category='Food & Beverage'
        value='FOODANDBEVERAGE'
        desc='Learn in partnership with the International Society of Beverage Technologists (ISBT).'
        setFilter={categoryClickHandler}
      />

      <DropDownIconBlock
        icon={<MdOutlineFactory size={24} color='white' />}
        category='Industry'
        value='industry'
        desc='Industry specific courses designed to give you an edge against your competitors'
        setFilter={categoryClickHandler}
      />
      <DropDownIconBlock
        icon={<MdOutlineExtension size={24} color='white' />}
        category='Materials'
        value='materials'
        desc='Master the building blocks of the packaging industry'
        setFilter={categoryClickHandler}
      />
      <DropDownIconBlock
        icon={<MdOutlineMultipleStop size={24} color='white' />}
        category='Supply Chain & Logistics'
        value='supplychain'
        desc='Optimize your logistics from hazmat packaging, regulations, distribution, and more.'
        setFilter={categoryClickHandler}
      />
      <DropDownIconBlock
        icon={<MdOutlineDriveEta size={24} color='white' />}
        category='Automotive'
        value='AUTO'
        desc='Optimize your logistics from hazmat packaging, regulations, distribution, and more.'
        setFilter={categoryClickHandler}
        callout='Just Added!'
      />
      <DropDownIconBlock
        icon={<MdOutlineAutoStories size={24} color='white' />}
        category='Explore All Courses'
        value='ALL'
        desc='Optimize your logistics from hazmat packaging, regulations, distribution, and more.'
        setFilter={() => categoryClickHandler('All', 'ALL')}
      />

      {/* <div
        className='col-span-2 bg-white rounded-md'
        onClick={() => {
          categoryClickHandler('All', 'all');
        }}
      >
        <div className='flex justify-center gap-2 items-center py-3 px-8 cursor-pointer'>
          <div
            className='font-bold text-slate-900 font-greycliff'
            onClick={() => onClose()}
          >
            Explore All Courses
          </div>
          <div>
            <ArrowLongRightIcon className='h-5 w-5 fill-slate-900 stroke-slate-900' />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default CourseMenuBlock;

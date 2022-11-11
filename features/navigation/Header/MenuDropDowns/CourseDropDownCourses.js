import React from 'react';
import BusinessIcon from '../../../../components/icons/BusinessIcon';
import DesignIcon from '../../../../components/icons/DesignIcon';
import FoodIcon from '../../../../components/icons/FoodIcon';
import IndustryIcon from '../../../../components/icons/IndustryIcon';
import SupplyIcon from '../../../../components/icons/SupplyIcon';
import MaterialIcon from '../../../../components/icons/MaterialIcon';
import DropDownIconBlock from './DropDownIconBlock';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';

const CourseDropDownCourses = () => {
  return (
    <div className='col-span-2 grid grid-cols-2 px-10 py-12 gap-10'>
      <DropDownIconBlock
        icon={<BusinessIcon style='h-6 w-6 stroke-slate-700 fill-slate-700' />}
        category='Business'
        desc='Optimize your sales ops and project management workflows'
      />
      <DropDownIconBlock
        icon={<DesignIcon style='h-6 w-6 stroke-slate-700 fill-slate-700' />}
        category='Design'
        desc='Design smarter with material best practices and human factors in mind'
      />
      <DropDownIconBlock
        icon={<FoodIcon style='h-6 w-6 stroke-slate-300 fill-slate-700' />}
        category='Food & Beverage'
        desc='Learn in partnership with the International Society of Beverage Technologists (ISBT).'
      />

      <DropDownIconBlock
        icon={<IndustryIcon style='h-7 w-7 stroke-slate-300 fill-slate-700' />}
        category='Industry'
        desc='Industry specific courses designed to give you an edge against your competitors'
      />
      <DropDownIconBlock
        icon={<MaterialIcon style='h-6 w-6 stroke-slate-300 fill-slate-700' />}
        category='Material'
        desc='Master the building blocks of the packaging industry'
      />
      <DropDownIconBlock
        icon={<SupplyIcon style='h-6 w-6 fill-slate-700 stroke-slate-300' />}
        category='Supply Chain & Logistics'
        desc='Optimize your logistics from hazmat packaging, regulations, distribution, and more.'
      />
      <div className='col-span-2 bg-slate-300 rounded-md'>
        <div className='flex justify-center gap-2 items-center py-3 px-8'>
          <div className='font-bold'>Explore All Courses</div>
          <div>
            <ArrowLongRightIcon className='h-5 w-5 fill-slate-900 stroke-slate-900' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDropDownCourses;

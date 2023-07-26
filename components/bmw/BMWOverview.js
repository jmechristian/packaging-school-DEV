import Link from 'next/link';
import React from 'react';
import {
  ArchiveBoxIcon,
  Cog8ToothIcon,
  ShareIcon,
  HandRaisedIcon,
  BuildingOffice2Icon,
  CpuChipIcon,
  GlobeAmericasIcon,
  TruckIcon,
  RocketLaunchIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';
import BMWCard from './BMWCard';

const BMWOverview = () => {
  return (
    <div className='w-full h-full bg-white' id='start'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 container-7xl gap-4'>
        <BMWCard
          title={'Introduction'}
          content={
            'In this module, suppliers will be introduced to BMW’s Customer Support Division and Network Structure. Suppliers will receive an overview of the Training and understand expectations and onboarding goals.'
          }
          icon={<HandRaisedIcon className='w-6 h-6 stroke-gray-900' />}
        />
        <BMWCard
          title={'B2B Portal'}
          content={
            'Suppliers will be introduced to BMW’s B2B Partner Portal. Suppliers will understand how to gain access to the portal and how to apply and work with relevant applications. This module also includes an overview for Master Administrators.'
          }
          icon={<BuildingOffice2Icon className='w-6 h-6 stroke-gray-900' />}
        />
        <BMWCard
          title={'EDI'}
          content={
            'In this module, suppliers will follow BMW’s EDI onboarding and testing procedures. Suppliers will learn about the different EDI connections types as well as review relevant EDI shipping documents.'
          }
          icon={<ShareIcon className='w-6 h-6 stroke-gray-900' />}
        />
        <BMWCard
          title={'Material Management'}
          content={
            'Suppliers will learn about important material management terms, figures, and deadlines. Suppliers will understand how to access and download purchase orders and receive an overview of the delivery schedule between supplier and BMW.'
          }
          icon={<Cog8ToothIcon className='w-6 h-6 stroke-gray-900' />}
        />
        <BMWCard
          title={'Packaging'}
          content={
            'The packaging module consists of several lessons that will provide knowledge concerning required access rights and systems, relevant packaging levels, and the packaging alignment process. Here, suppliers will learn ways to find the right container and individual packaging for their parts. Stackability, Palletization, and Handling Symbols as well as Service Parts Labeling Requirements are also part of this module.'
          }
          icon={<ArchiveBoxIcon className='w-6 h-6 stroke-gray-900' />}
        />
        <BMWCard
          title={'Parts Quality'}
          content={
            'In this module, suppliers will be introduced to the BMW Customer Support Quality Department and review the Initial Sample Inspection Report process conducted through the IPQ System.'
          }
          icon={<CpuChipIcon className='w-6 h-6 stroke-gray-900' />}
        />
        <BMWCard
          title={'Custom Declarations'}
          content={
            'Suppliers will receive an overview of the Application Callisto system and come to understand its relevance and importance.'
          }
          icon={<GlobeAmericasIcon className='w-6 h-6 stroke-gray-900' />}
        />
        <BMWCard
          title={'Transportation'}
          content={
            'In this module, suppliers will be introduced to BMW spare parts transportation processes.'
          }
          icon={<TruckIcon className='w-6 h-6 stroke-gray-900' />}
        />
        <BMWCard
          title={'Performance Measurement'}
          content={
            'Suppliers will receive an overview of the various possible complaint reports, including 8D reports, and learn how they can be reviewed and accessed. Suppliers will also learn about the importance of Self Notifications. This module will also introduce suppliers to the Supplier Performance and Competence Management tool, called LPKM.'
          }
          icon={<RocketLaunchIcon className='w-6 h-6 stroke-gray-900' />}
        />
        <BMWCard
          title={'Final Assignment'}
          content={
            'Generally, one nominated employee at each supplier is required to take a formal assignment additionally to completing this training. This employee was informed about this next step by BMW after taking the BMW onboarding survey. Only this contact will be able to see the Assignment at the end of this training. It is also possible for several contacts at a supplier to proceed with the final Assignment internally, to ensure processes are aligned with BMW requirements.'
          }
          icon={<AcademicCapIcon className='w-6 h-6 stroke-gray-900' />}
        />
      </div>
    </div>
  );
};

export default BMWOverview;

import React from 'react';
import { SocialIcon } from 'react-social-icons';

const FooterAboutDetail = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-1 text-sm'>
        <div className='font-extrabold font-greycliff uppercase tracking-widest text-slate-200'>
          Who We Are
        </div>
        <p className='text-sm text-slate-500 dark:text-slate-400'>
          The Packaging School brings together the business, art, and science of
          packaging so you can lead projects, optimize supply chains, increase
          margins, and develop sustainable solutions.
        </p>
      </div>
      <div className='flex gap-3'>
        <div>
          <SocialIcon
            url='https://www.facebook.com/packagingschool/'
            style={{ height: 30, width: 30 }}
          />
        </div>
        <div>
          <SocialIcon
            url='https://twitter.com/PackagingSchool'
            style={{ height: 30, width: 30 }}
          />
        </div>
        <div>
          <SocialIcon
            url='https://www.linkedin.com/school/the-packaging-school-llc'
            style={{ height: 30, width: 30 }}
          />
        </div>
        <div>
          <SocialIcon
            url='https://www.youtube.com/packagingschool'
            style={{ height: 30, width: 30 }}
          />
        </div>
        <div>
          <SocialIcon
            url='https://www.instagram.com/packagingschool/'
            style={{ height: 30, width: 30 }}
          />
        </div>
        <div>
          <SocialIcon
            url='https://www.tiktok.com/@thepackagingschool'
            style={{ height: 30, width: 30 }}
            bgColor='#ffffff'
          />
        </div>
      </div>
    </div>
  );
};

export default FooterAboutDetail;

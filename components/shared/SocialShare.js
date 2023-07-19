import React from 'react';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';

const SocialShare = ({ title, subhead, slug, type }) => {
  const socialShareClickHandler = async (param) => {
    console.log(param);
    gtag('event', 'social_share', {
      platform: param,
      lesson: title,
    });
  };

  return (
    <div
      style={{ background: 'linear-gradient(35deg, #1F97BF 20%, #FF9321 90%)' }}
    >
      <div className='mx-auto max-w-prose px-6 py-16 lg:py-20 lg:flex lg:items-center lg:justify-between lg:px-8'>
        <div className='prose prose-lg mb-4 text-center'>
          <h3 className='text-white font-bold text-2xl font-greycliff'>
            Share The Knowledge
          </h3>
        </div>
        <div className='flex gap-3 items-center justify-center mx-auto'>
          <FacebookShareButton
            url={`https://library.packagingschool.com/${type}/${slug}`}
            quote={subhead}
            onClick={() => socialShareClickHandler('facebook')}
            data-click-target='social_share'
            data-click-name='Facebook'
          >
            <FacebookIcon round size={50} />
          </FacebookShareButton>
          <LinkedinShareButton
            url={`https://library.packagingschool.com/${type}/${slug}`}
            title={title}
            source='PackagingSchool.com'
            summary={subhead}
            onClick={() => socialShareClickHandler('linkedin')}
            data-click-target='social_share'
            data-click-name='LinkedIn'
          >
            <LinkedinIcon round size={50} />
          </LinkedinShareButton>
          <TwitterShareButton
            url={`https://library.packagingschool.com/${type}/${slug}`}
            onClick={() => socialShareClickHandler('twitter')}
          >
            <TwitterIcon round size={50} />
          </TwitterShareButton>
          <RedditShareButton
            url={`https://library.packagingschool.com/${type}/${slug}`}
            title={title}
            onClick={() => socialShareClickHandler('reddit')}
            data-click-target='social_share'
            data-click-name='Reddit'
          >
            <RedditIcon round size={50} />
          </RedditShareButton>
          <EmailShareButton
            url={`https://library.packagingschool.com/${type}/${slug}`}
            onClick={() => socialShareClickHandler('email')}
            data-click-target='social_share'
            data-click-name='Email'
          >
            <EmailIcon round size={50} />
          </EmailShareButton>
        </div>
      </div>
    </div>
  );
};

export default SocialShare;

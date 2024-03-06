import React from 'react';
import Head from 'next/head';

const Page = () => {
  return (
    <>
      <Head>
        <title>Brandon Hall Excellence Awards 2023</title>
        <meta
          property='og:title'
          content={'Brandon Hall Excellence Awards 2023'}
        />
        <meta />
        <meta
          property='og:description'
          content={
            'The 2023 Brandon Hall Group HCM Excellence Awards™ recognizes best practices for initiatives in Learning and Development, Talent Management, Leadership Development, Talent Acquisition, Human Resources, Sales Performance, Diversity, Equity & Inclusion, and the Future of Work.'
          }
          key='desc'
        />
        <meta
          name='description'
          content={
            'The 2023 Brandon Hall Group HCM Excellence Awards™ recognizes best practices for initiatives in Learning and Development, Talent Management, Leadership Development, Talent Acquisition, Human Resources, Sales Performance, Diversity, Equity & Inclusion, and the Future of Work.'
          }
          key='desc'
        />
        <meta name='robots' content='index, follow' />
      </Head>

      <div className='flex flex-col gap-24 py-16 md:py-24 bg-white dark:bg-dark-dark'>
        <div className='max-w-4xl mx-auto flex flex-col gap-6 px-6 lg:px-0'>
          <div className='text-4xl font-semibold tracking-tight sm:text-5xl font-greycliff dark:text-white'>
            Brandon Hall Excellence Awards 2023
          </div>
          <div className='mx-auto mt-12 grid grid-cols-2 items-center gap-x-4 gap-y-10  sm:grid-cols-2 lg:mx-0'>
            <div className='flex flex-col items-center justify-center gap-4'>
              <img
                className='col-span-2 max-h-40 w-full object-contain lg:col-span-1'
                src='https://packschool.s3.amazonaws.com/2023_L%26D+Silver.png'
                alt='Silver Brandon Hall Group Excellence Award'
                width={400}
                height={400}
              />
              <div className='text-sm text-center font-semibold dark:text-base-brand'>
                Best Advance in Custom Content
              </div>
            </div>
            <div className='flex flex-col items-center gap-4'>
              <img
                className='col-span-2 max-h-40 w-full object-contain lg:col-span-1'
                src='https://packschool.s3.amazonaws.com/2023_L%26D+Bronze.png'
                alt='Bronze Brandon Hall Group Excellence Award'
                width={400}
                height={400}
              />
              <div className='text-sm font-semibold text-center dark:text-base-brand'>
                Best Advance in Competencies and Skill Development
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='max-w-prose dark:text-white mx-auto px-6 lg:px-0 md:text-lg flex flex-col gap-12'>
            <p>
              The 2023 Brandon Hall Group HCM Excellence Awards™ recognizes best
              practices for initiatives in Learning and Development, Talent
              Management, Leadership Development, Talent Acquisition, Human
              Resources, Sales Performance, Diversity, Equity & Inclusion, and
              the Future of Work.
            </p>
            <p>
              The Packaging School, a leader in innovative online education for
              the packaging industry worldwide, along with our multi-year
              client, Colgate, won a coveted Brandon Hall Group Silver and
              Bronze award for excellence in the category of Best Advance in
              Custom Content and Best Advance in Competencies and Skill
              Development for the entry: Packaging Curricula—Processes &
              Materials.
            </p>
            <p>
              You can view the complete list of winners here:{' '}
              <a
                href='https://excellenceawards.brandonhall.com/winners/'
                rel='noreferrer'
                target='_blank'
                className='text-base-mid'
              >
                excellenceawards.brandonhall.com
              </a>
            </p>
            <p>
              &quot;Excellence Award winners are shown to be organizations that
              truly value their employees and invest in them through their human
              capital management programs. These HCM programs have been
              validated as best in class for business value and the impact on
              the employees themselves,&quot; said Brandon Hall Group Chief
              Operating Officer Rachel Cooke, HCM Excellence Awards program
              leader.
            </p>
            <p>
              Entries were evaluated by a panel of veteran, independent senior
              industry experts, Brandon Hall Group analysts, and executives
              based on these criteria:
            </p>
            <div>
              <ul class='list-disc ml-16'>
                <li>Alignment to their business need and environment</li>
                <li>Program design, functionality, and delivery</li>
                <li>
                  Adoption, integration, user experience, innovation, and
                  creativity
                </li>
                <li>Overall effectiveness, impact, and measurable benefits</li>
              </ul>
            </div>
            <p>
              Excellence Award winners will continue to be honored at Brandon
              Hall Group&apos;s HCM Excellence Conference, February 13-15, 2024,
              at the Hilton West Palm Beach, Florida. Select winners also will
              serve as presenters in breakout sessions, sharing their leading
              practices during the conference.
            </p>
            <p>
              &quot;Our award winners are relentless in their pursuit of
              excellence,&quot; said Brandon Hall Group Chief Executive Officer
              Mike Cooke.&quot;We have received some of the most innovative use
              of HCM strategy that we have seen in the last 30 years, and in
              most cases, technology and collaboration across departments have
              helped them achieve amazing business results.
            </p>
            <div className='flex flex-col gap-3'>
              <h2 className='text-xl text-clemson'>
                About the Packaging School
              </h2>
              <p>
                The Packaging School is committed to developing new and
                empowering current packaging, logistics, and supply chain
                professionals globally in the art and science of packaging. Our
                distance education offerings are focused on dissemination of the
                highest quality, accessible, valuable, and professionally
                applicable information. The Packaging School bridges the gap
                between academia and industry by partnering with companies,
                subject matter experts and associations to create a shared
                learning management system. Our expanded catalog will enable
                knowledge-seekers to connect with knowledge-providers in all
                facets of packaging and processing. The Packaging School is the
                official licensee of Clemson University’s packaging curriculum,
                developed over a decade by leading faculty. We offer three
                Certificate programs:{' '}
                <a
                  href='https://packagingschool.com/certifications/get-to-know-cps'
                  rel='noreferrer'
                  target='_blank'
                  className='text-base-mid font-bold'
                >
                  Certificate of Packaging Science
                </a>
                ,{' '}
                <a
                  href='https://packagingschool.com/certifications/get-to-know-cmpm'
                  rel='noreferrer'
                  target='_blank'
                  className='text-base-mid font-bold'
                >
                  Certificate of Mastery in Packaging Management
                </a>
                , and the{' '}
                <a
                  href='https://packagingschool.com/certifications/get-to-know-apc'
                  rel='noreferrer'
                  target='_blank'
                  className='text-base-mid font-bold'
                >
                  Automotive Packaging Certificate
                </a>
                .
              </p>
            </div>
            <div className='flex flex-col gap-3'>
              <h2 className='text-xl dark:text-clemson'>
                About Brandon Hall Group™
              </h2>
              <p>
                Brandon Hall Group is the only professional development company
                that offers data, research, insights, and certification to
                Learning and Talent executives and organizations. The best minds
                in Human Capital Management (HCM) choose Brandon Hall Group to
                help them create future-proof employee development plans for the
                new era.
              </p>
            </div>
            <p>
              For over 30 years, we have empowered, recognized, and certified
              excellence in organizations worldwide, influencing the development
              of over 10 million employees and executives. Our HCM Excellence
              Awards program was the first to recognize organizations for
              learning and talent and is the gold standard, known as the
              &quot;Academy Awards of Human Capital Management.&quot;
            </p>
            <p>
              The awards recognize the best organizations that have successfully
              developed and deployed programs, strategies, modalities,
              processes, systems, and tools that have achieved measurable
              results. We are honored to receive applications from organizations
              worldwide ranging from small, medium, large, and global
              enterprises to government, not-for-profit, and associations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const faqs = [
  {
    question: 'Who created The Packaging School?',
    answer:
      'The Packaging School was founded by Dr. Andrew Hurley, Associate Professor of Packaging Science at Clemson University, after continuous requests from manufacturers, converters, distributors, printers, designers, logistics carriers and brand owners to provide continuing education for their employees.',
  },
  {
    question: 'So, are you Clemson University?',
    answer:
      'We are a separate entity from Clemson University, established as an LLC. We partner with schools, companies, associations and subject matter experts to create and provide unbiased online education in the realm of packaging. ',
  },
  {
    question: 'What courses/programs do you offer?',
    answer: (
      <div>
        <Link className='underline' href='/all_courses'>
          Check out our Course Catalog
        </Link>
      </div>
    ),
  },
  {
    question:
      'What is the difference between the Certificate of Packaging Science and the Certificate of Mastery in Packaging Management?',
    answer: (
      <div className='flex flex-col gap-4'>
        <div>
          The{' '}
          <Link
            href={'https://packagingschool.com/certifications/get-to-know-cps'}
          >
            Certificate of Packaging Science
          </Link>{' '}
          is a one year online program that teaches the materials, processes,
          and influences shaping the advancement of the industry. From design
          conception to production and end-of-life, students will learn how to
          speak the language of packaging and utilize it as a key differentiator
          for you and your company. This program has 60 hours of content, 12
          courses, and 6 CEUs (continuing education credits). The cost is $3,999
          or $349/month for 12 monthly payments.
        </div>
        <div>
          The{' '}
          <Link
            href={'https://packagingschool.com/certifications/get-to-know-cmpm'}
          >
            Certificate of Mastery in Packaging Management
          </Link>{' '}
          is an online, interactive teaching series that guides organization
          leaders through a process of designing effective packaging systems.
          The teachings enable students to realize their creativity, actualize
          cost-savings for their company, and develop complete packaging
          systems. Throughout the business quarter, students complete ten online
          courses and a packaging development plan, which applies the teachings
          of the courses to a current work project. The lessons within each
          course are on-demand, which means students can log in and learn at the
          time that best suits their schedule. This program has 80 hours of
          content, 10 courses, and 8 CEUs. The cost is $7,000 since it is
          instructor led and payment plans are available as well.
        </div>
      </div>
    ),
  },
  {
    question: 'What does it take to earn the Certificate of Packaging Science?',
    answer:
      'Composed of 12 courses, students will develop a comprehensive understanding of the industry, materials, processes, and development strategies.',
  },
  {
    question: 'What will the Certificate of Packaging Science do for me?',
    answer:
      'You will learn the knowledge necessary to have a holistic understanding of packaging. This intelligence will open up opportunities for you to advance into new packaging fields. Discover applications for innovation in your packaging career.',
  },
  {
    question: 'How are courses structured?',
    answer: (
      <div className='flex flex-col gap-4'>
        <div>
          We embrace MicroLearning! Smartphones have accustomed us to accessing
          the information we need at rapid speed and in short bursts. Long
          training sessions, multiple day workshops, and huge manuals are not a
          desirable way to learn information. Instead, we use a technique called
          MicroLearning to break difficult topics down into lessons of
          bite-sized chunks that students can engage with on any device. These
          lessons take the form of infographics, quick readings, videos,
          animations, discussions, and interactive slides. This delivery method
          empowers students to complete courses at their leisure, when they’re
          ready to learn, and still gain an essential education.
        </div>
        <div>
          Short, focused sessions (less than 7 minutes) avoid mental burnout and
          suit the brain with respect to energy and alertness. Bite-sized
          content perfectly suits an information-rich lifestyle because it
          enables learners to access small chunks of information instantly,
          anytime, and from anywhere. And because microlearning is short and
          seemingly current, trainees can rest easy that the content is up to
          date, correct, and meaningful to their work.
        </div>
        <div>
          Courses are organized by Modules, which are composed of Lessons and
          cover 3-5 Learning Goals over an hour-long engagement period. All
          lessons are unique, so the number of lessons it takes to communicate a
          course varies. In our experience, most courses incorporate 1-8 hours
          of engagement.
        </div>
      </div>
    ),
  },
  {
    question: 'What kind of experience can I expect when taking a course?',
    answer:
      'Each course with The Packaging School is an engaging experience. Lessons are structured in small pieces with a specific flow so it makes it easy for you to advance at your own pace. Within the lesson, you will encounter a variety of content types including text, graphics, images, videos, interactive application models, peer discussions and quizzes.',
  },
  {
    question: 'How do I know I’m really learning?',
    answer:
      'Learning goals with real world application guide all knowledge provided in the course. Each lesson presents information tailored to your professional growth. Simulations and small assessments at the end of lessons allow you to measure your progress. Track advancement in the My Achievements tab of your profile.',
  },
  {
    question: 'Can I access courses from my tablet or mobile device?',
    answer:
      'YES! The Packaging School’s learning management system is suited for on-the-go education. Access it from any smart phone.',
  },
  {
    question: 'How long will it take to finish the certificate?',
    answer:
      'The Packaging Certificate will take around 60 total hours to achieve. A working professional allocating 30 minutes of their lunch break a day could complete the Certificate in three months.',
  },
  {
    question: 'How much time may I have to complete the certificate program?',
    answer:
      'Students must finish each single course within 12 months from start of the course. Students who enroll in The Professional Certificate and Quarter Enrollment bundle, will have 24 months to complete all courses.',
  },
  {
    question: 'Do you offer refunds?',
    answer: (
      <div className=' flex flex-col gap-4'>
        <div>
          Purchase of individual courses are non-refundable upon enrollment of
          the online course. Course may be transferable if notified in writing
          within 5 days of purchase.
        </div>
        <div>
          Purchase of the full Certificate program can be canceled & partially
          refunded provided the student has completed less than 60% of the
          program. A $100 non-refundable application fee will be retained.
          Benchmarks for completion are based on program completion at 528
          microlessons. See the table below for refund percentages. For
          mitigating circumstances, please email info@packagingschool.com.
        </div>
        <div>
          <strong>
            Benchmarks to demonstrate percent of completion are as follows:
          </strong>
        </div>
        <div>
          A student has completed 10% of the program when he or she has
          completed 53 micro-lessons.
        </div>
        <div>
          A student has completed 20% of the program when he or she has
          completed 105 micro-lessons in the program.
        </div>
        <div>
          A student has completed 30% of the program when he or she has
          completed 158 micro-lessons in the program.
        </div>
        <div>
          A student has completed 40% of the program when he or she has
          completed 212 micro-lessons in the program.
        </div>
        <div>
          A student has completed 50% of the program when he or she has
          completed 264 micro-lessons.
        </div>
        <div>
          A student has completed 60% of the program when he or she has
          completed 317 micro-lessons in the program.{' '}
        </div>
        <div className='italic'>
          The Packaging School reserves the right to dispute claims based on
          student viewing history.
        </div>
      </div>
    ),
  },
  {
    question:
      'I see specific courses within the Certificate of Packaging Science that I’m interested in. Can I purchase individual courses?',
    answer:
      'Yes! You can purchase individual courses! However, in order to obtain your Certificate of Packaging Science you will need to complete all 12 courses.',
  },
  {
    question:
      'Is there a certificate of accomplishment for individual courses?',
    answer:
      'Yes, we do provide a certificate of accomplishment for all individual courses.',
  },
  {
    question: 'Does the Packaging School offer any scholarships?',
    answer: 'Inquiries should be directed to info@packagingschool.com',
  },
  {
    question: 'How long will this take?',
    answer:
      'Individual courses vary in length. We encourage you to complete a section at a time with breaks in between to ensure knowledge retention and immediate application to your real-world projects',
  },
  {
    question: 'Who creates the content you share?',
    answer:
      'The Packaging School is the Exclusive Licensee of a professional packaging curriculum developed at Clemson University. The courses are created in a collaborative process between academia and industry leveraging 600+ packaging professionals',
  },
  {
    question: 'Who else will be taking this course?',
    answer:
      'The Packaging School is the Exclusive Licensee of a professional packaging curriculum developed at Clemson University. The courses are created in a collaborative process between academia and industry leveraging 600+ packaging professionals',
  },
];

const Page = () => {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40'>
        <div className='mx-auto max-w-4xl divide-y divide-gray-900/10'>
          <h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-900'>
            Frequently asked questions
          </h2>
          <dl className='mt-10 space-y-6 divide-y divide-gray-900/10'>
            {faqs.map((faq) => (
              <Disclosure as='div' key={faq.question} className='pt-6'>
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className='flex w-full items-start justify-between text-left text-gray-900'>
                        <span className='text-base font-semibold leading-7'>
                          {faq.question}
                        </span>
                        <span className='ml-6 flex h-7 items-center'>
                          {open ? (
                            <MinusSmallIcon
                              className='h-6 w-6'
                              aria-hidden='true'
                            />
                          ) : (
                            <PlusSmallIcon
                              className='h-6 w-6'
                              aria-hidden='true'
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as='dd' className='mt-2 pr-12'>
                      <p className='text-base leading-7 text-gray-600'>
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Page;

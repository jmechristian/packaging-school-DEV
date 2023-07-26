import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'How do I log into the training?',
    answer:
      'Once you create an account, you can log into the training using the login button located in the header. Then, after selecting your region and language, enter the username and password that was created for you.',
  },
  {
    question:
      'I am not the main contact. Do I have to complete the quizzes throughout the training?',
    answer:
      'Yes, the quizzes are designed to refresh your knowledge and to determine if you should review a lesson again. We know you are busy, but generally, a quiz only requires a few minutes of your time.',
  },
  {
    question: 'Is this training fully online?',
    answer: 'This is a self paced training that can be taken fully online.',
  },
  {
    question: 'What do I need to complete this training?',
    answer:
      'Suppliers need access to the internet. Suppliers also need access to the training link that is provided by BMW.',
  },
  {
    question: 'How do I log into the training?',
    answer:
      'Once you create an account, you can log into the training using the login button located in the header. Then, after selecting your region and language, enter the username and password that was created for you.',
  },
  {
    question:
      'I am not a new supplier but I have received the link to complete the training. Do I have to take it?',
    answer:
      'Yes, this training is designed for new BMW suppliers as well as a refresher course for already existing suppliers.',
  },
];

export default function BMWFaqs() {
  return (
    <div className='bg-white' id='faqs'>
      <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40'>
        <div className='mx-auto max-w-7xl divide-y divide-gray-900/10'>
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
}

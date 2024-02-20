import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Row,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';
import * as React from 'react';

interface UnileverSuggestionFormProps {
  data: {
    suggestion: string;
  };
}

export const UnileverSuggestionForm = ({
  data,
}: UnileverSuggestionFormProps) => {
  const current = Date.now();
  const newDate = data && new Date(current).toDateString();

  return (
    <Html>
      <Tailwind>
        <Head />
        <Body className='bg-white mt-6'>
          <Container className='max-w-2xl mx-auto bg-white border-4 rounded-2xl md:shadow-[6px_8px_0_black] border-solid border-black w-full h-full p-3 md:p-5'>
            <Section className='rounded-2xl border-2 border-solid border-black p-5 w-full'>
              <Row className='w-full'>
                <Column className='w-[80%]'>
                  <Text className='text-2xl font-[HelveticaNeue-Bold] leading-[1.6rem] tracking-tight'>
                    Unilever Library
                    <br />
                    Suggestion Form
                  </Text>
                </Column>
                <Column>
                  <Img
                    src='https://packschool.s3.amazonaws.com/PS_com+LOGO+1.png'
                    width={'100px'}
                  />
                </Column>
              </Row>
            </Section>
            <Section className='mt-3'>
              <Row className='bg-neutral-200 rounded-xl p-7'>
                <Column className='w-full'>
                  <Text className='font-[HelveticaNeue-bold] text-neutral-500 text-[20px]'>
                    Library Suggestion
                  </Text>
                  <Text className=' text-neutral-700 font-[HelveticaNeue] leading-snug'>
                    {data.suggestion}
                  </Text>
                </Column>
              </Row>

              <Row className='bg-[#0585b0] rounded-xl px-5 mt-3'>
                <Column className='w-2/5'>
                  <Text className='font-[HelveticaNeue] text-white'>
                    Submitted:
                  </Text>
                </Column>
                <Column className='w-3/5'>
                  <Text className='font-[HelveticaNeue-Bold] text-white'>
                    {newDate}
                  </Text>
                </Column>
              </Row>
            </Section>
            <Section className='mt-10 text-center'>
              <Text className='font-[HelveticaNeue-Bold] text-[12px] text-black uppercase'>
                Powered by the Packaging School
                <sup className='text-[8px]'>&reg;</sup>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

UnileverSuggestionForm.PreviewProps = {
  data: {
    suggestion:
      'Nulla lobortis, nisi nec faucibus congue, augue eros feugiat erat, at sodales ex est ut mi. Pellentesque elementum ac tellus sit amet porta. Mauris eleifend porttitor sem. Donec porttitor at purus a suscipit. Vestibulum vitae mi ut diam vulputate vestibulum. Aenean pretium porta erat nec bibendum. Sed vitae volutpat metus. Morbi rhoncus, velit et ultricies viverra, magna urna volutpat magna, vel fringilla purus lacus ac nunc.',
  },
} as UnileverSuggestionFormProps;

export default UnileverSuggestionForm;

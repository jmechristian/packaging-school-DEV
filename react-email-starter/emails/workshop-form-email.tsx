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

interface WorkshopInterestEmailProps {
  data: {
    data: {
      createdOn: string | number | Date;
      firstName: string;
      phone: string;
      lastName: string;
      email: string;
      companyName: string;
      eventDate: string;
      eventDescription: string;
      eventLocation: string;
      audienceSize: string;
    };
  };
}

export const WorkshopInterestEmail = ({ data }: WorkshopInterestEmailProps) => {
  const current = Date.now();
  const newDate = data && new Date(current).toDateString();

  return (
    <Html>
      <Tailwind>
        <Head />
        <Body className='bg-white mt-6'>
          <Container className='max-w-2xl mx-auto bg-white border-4 rounded-2xl md:shadow-[6px_8px_0_black] border-solid border-black w-full h-full p-3 md:p-5'>
            <Section className='rounded-2xl border-2 border-solid border-black p-5'>
              <Row>
                <Column className='w-[20%] text-right md:hidden block'>
                  <Img
                    src='https://packschool.s3.amazonaws.com/PS_com+LOGO+1.png'
                    width={'125'}
                    className='mr-0'
                  />
                </Column>
              </Row>
              <Row>
                <Column className='md:w-[80%]'>
                  <Text className='text-3xl font-[HelveticaNeue-Bold] leading-tight tracking-tight'>
                    Interactive Workshop
                    <br />
                    Form Submission
                  </Text>
                </Column>
                <Column className='w-[20%] text-right hidden md:block'>
                  <Img
                    src='https://packschool.s3.amazonaws.com/PS_com+LOGO+1.png'
                    width={'150'}
                    className='mr-0'
                  />
                </Column>
              </Row>
            </Section>
            <Section className='my-5'>
              <Row className='bg-amber-300 rounded-xl px-5'>
                <Column className='w-2/5'>
                  <Text className='font-[HelveticaNeue]'>First Name:</Text>
                </Column>
                <Column className='w-3/5'>
                  <Text className='font-[HelveticaNeue-Bold]'>
                    {data.data.firstName}
                  </Text>
                </Column>
              </Row>
              <Row className='bg-white rounded-xl px-5'>
                <Column className='w-2/5'>
                  <Text className='font-[HelveticaNeue]'>Last Name:</Text>
                </Column>
                <Column className='w-3/5'>
                  <Text className='font-[HelveticaNeue-Bold]'>
                    {data.data.lastName}
                  </Text>
                </Column>
              </Row>
              <Row className='bg-amber-300 rounded-xl px-5'>
                <Column className='w-2/5'>
                  <Text className='font-[HelveticaNeue]'>Email:</Text>
                </Column>
                <Column className='w-3/5'>
                  <Text className='font-[HelveticaNeue-Bold]'>
                    {data.data.email}
                  </Text>
                </Column>
              </Row>
              <Row className='bg-white rounded-xl px-5'>
                <Column className='w-2/5'>
                  <Text className='font-[HelveticaNeue]'>Company:</Text>
                </Column>
                <Column className='w-3/5'>
                  <Text className='font-[HelveticaNeue-Bold]'>
                    {data.data.companyName}
                  </Text>
                </Column>
              </Row>
              <Row className='bg-amber-300 rounded-xl px-5'>
                <Column className='w-2/5'>
                  <Text className='font-[HelveticaNeue]'>Phone:</Text>
                </Column>
                <Column className='w-3/5'>
                  <Text className='font-[HelveticaNeue-Bold]'>
                    {data.data.phone}
                  </Text>
                </Column>
              </Row>
              <Row className='bg-white rounded-xl px-5'>
                <Column className='w-2/5'>
                  <Text className='font-[HelveticaNeue]'>Event Date:</Text>
                </Column>
                <Column className='w-3/5'>
                  <Text className='font-[HelveticaNeue-Bold]'>
                    {data.data.eventDate}
                  </Text>
                </Column>
              </Row>
              <Row className='bg-amber-300 rounded-xl px-5'>
                <Column className='w-2/5'>
                  <Text className='font-[HelveticaNeue]'>Audience Size:</Text>
                </Column>
                <Column className='w-3/5'>
                  <Text className='font-[HelveticaNeue-Bold]'>
                    {data.data.audienceSize}
                  </Text>
                </Column>
              </Row>
              <Row className='bg-white rounded-xl px-5'>
                <Column className='w-2/5'>
                  <Text className='font-[HelveticaNeue]'>Event Location:</Text>
                </Column>
                <Column className='w-3/5'>
                  <Text className='font-[HelveticaNeue-Bold]'>
                    {data.data.eventLocation}
                  </Text>
                </Column>
              </Row>
              <Row className='bg-amber-300 rounded-xl px-5'>
                <Column className='w-2/5'>
                  <Text className='font-[HelveticaNeue]'>
                    Event Description:
                  </Text>
                </Column>
                <Column className='w-3/5'>
                  <Text className='font-[HelveticaNeue-Bold]'>
                    {data.data.eventDescription}
                  </Text>
                </Column>
              </Row>
              <Row className='bg-black rounded-xl px-5 mt-6'>
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
            <Section className='mt-12 text-center'>
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

WorkshopInterestEmail.PreviewProps = {
  data: {
    data: {
      createdOn: '2024-02-13T17:48:27.923Z',
      firstName: 'Jamie',
      phone: '5122893696',
      lastName: 'Christian',
      email: 'jmechristian@gmail.com',
      companyName: 'Packaging School',
      eventDate: '2024-03-03',
      eventDescription:
        "A totally cool event in my mom's basement.  It's going to be totally cool.",
      eventLocation: "My Mom's basement",
      audienceSize: '10000',
    },
  },
} as WorkshopInterestEmailProps;

export default WorkshopInterestEmail;

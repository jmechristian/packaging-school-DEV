import React from 'react';
import appstarts from '../../data/appstarts.json';
import { API } from 'aws-amplify';
import {
  createApplicationStart,
  createCertAppStart,
} from '../../src/graphql/mutations';

const Page = () => {
  return (
    <div className='container-base'>
      <div>RUN</div>
    </div>
  );
};

export default Page;

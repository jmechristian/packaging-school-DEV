import React from 'react';
import appstarts from '../../data/appstarts.json';
import { API } from 'aws-amplify';
import {
  createApplicationStart,
  createCertAppStart,
} from '../../src/graphql/mutations';

const Page = () => {
  // const populate = async () => {
  //   for (let i = 0; i < appstarts.length; i++) {
  //     await API.graphql({
  //       query: createCertAppStart,
  //       variables: {
  //         input: {
  //           createdAt: appstarts[i].createdAt,
  //           firstName: appstarts[i].firstName,
  //           lastName: appstarts[i].lastName,
  //           email: appstarts[i].email,
  //           phone: appstarts[i].phone,
  //           source: appstarts[i].source,
  //           sourceUrl: appstarts[i].sourceUrl,
  //           type: 'APP_START',
  //         },
  //       },
  //     });
  //   }
  // };

  return (
    <div className='container-base'>
      <div>RUN</div>
    </div>
  );
};

export default Page;

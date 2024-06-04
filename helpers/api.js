import { Amplify, API } from 'aws-amplify';
import { getAuthor, listSalesBars } from '../src/graphql/queries';
import {
  createClick,
  createCourseClick,
  createLessonClick,
  listLMSCourses,
} from '../src/graphql/mutations';

export const getSalesBarItems = async () => {
  const items = await API.graphql({
    query: listSalesBars,
  });
  return items.data;
};

export const registerClick = async (
  id,
  link,
  path,
  ref,
  type,
  ip,
  location
) => {
  const res = await API.graphql({
    query: createClick,
    variables: {
      input: {
        identifier: id,
        nextPath: link,
        path: path,
        ref: ref,
        type: type,
        ipAddress: ip,
        location: location,
      },
    },
  });
};

export const getAuthors = async (id) => {
  const items = await API.graphql({
    query: getAuthor,
    variables: { id: id },
  });
  return items.data;
};

export const registgerCourseClick = async (
  id,
  page,
  location,
  next,
  format
) => {
  // const ip = await fetch('https://api.ipify.org/?format=json').then((res) =>
  //   res.json()
  // );

  const items = await API.graphql({
    query: createCourseClick,
    variables: {
      input: {
        courseID: id,
        page: page,
        nextPath: next,
        format: format,
        ipAddress: location.ip,
        country: location.country,
        lat: location.lat,
        long: location.long,
      },
    },
  });
  return items.data;
};

export const registgerLessonClick = async (id, page, location, format) => {
  // const ip = await fetch('https://api.ipify.org/?format=json').then((res) =>
  //   res.json()
  // );

  const items = await API.graphql({
    query: createLessonClick,
    variables: {
      input: {
        LessonID: id,
        page: page,
        ipAddress: location.ip,
        country: location.country,
        lat: location.lat,
        long: location.long,
        format: format,
      },
    },
  });
  return items.data;
};

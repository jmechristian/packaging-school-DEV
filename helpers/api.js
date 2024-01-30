import { Amplify, API } from 'aws-amplify';
import { getAuthor, listSalesBars } from '../src/graphql/queries';
import {
  createClick,
  createCourseClick,
  createLessonClick,
} from '../src/graphql/mutations';

export const getSalesBarItems = async () => {
  const items = await API.graphql({
    query: listSalesBars,
  });
  return items.data;
};

export const getAuthors = async (id) => {
  const items = await API.graphql({
    query: getAuthor,
    variables: { id: id },
  });
  return items.data;
};

export const registgerCourseClick = async (id, page) => {
  // const ip = await fetch('https://api.ipify.org/?format=json').then((res) =>
  //   res.json()
  // );

  const items = await API.graphql({
    query: createCourseClick,
    variables: {
      input: { courseID: id, page: page, ipAddress: 'undefined' },
    },
  });
  return items.data;
};

export const registgerLessonClick = async (id, page) => {
  // const ip = await fetch('https://api.ipify.org/?format=json').then((res) =>
  //   res.json()
  // );

  const items = await API.graphql({
    query: createLessonClick,
    variables: {
      input: { LessonID: id, page: page, ipAddress: 'undefined' },
    },
  });
  return items.data;
};

// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ModuleType = {
  "LESSON": "LESSON",
  "LOTM": "LOTM",
  "MICROLESSON": "MICROLESSON"
};

const { LessonSource, LessonLink, Tags, Lesson, Blog, Course, Article, APS, User, Company, APSSpeaker, ArticleRelatedCourses, APSUser, APSSponsor, RegistrationCode } = initSchema(schema);

export {
  LessonSource,
  LessonLink,
  Tags,
  Lesson,
  Blog,
  Course,
  Article,
  APS,
  User,
  Company,
  APSSpeaker,
  ArticleRelatedCourses,
  APSUser,
  APSSponsor,
  ModuleType,
  RegistrationCode
};
// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ModuleType = {
  "LESSON": "LESSON",
  "LOTM": "LOTM",
  "MICROLESSON": "MICROLESSON"
};

const CategoryType = {
  "MATERIALS": "MATERIALS",
  "INDUSTRY": "INDUSTRY",
  "FOODANDBEVERAGE": "FOODANDBEVERAGE",
  "BUSINESS": "BUSINESS",
  "SUPPLYCHAIN": "SUPPLYCHAIN",
  "DESIGN": "DESIGN"
};

const MediaType = {
  "VIDEO": "VIDEO",
  "IMAGE": "IMAGE",
  "SLIDES": "SLIDES"
};

const { LessonSource, LessonLink, Tags, Certificate, Course, Article, Lesson, Blog, DayInLifeItem, Career, APS, User, CMPMForm, Instructor, LMSCourse, LMSCirriculum, LMSLesson, Objective, Slide, LessonVideo, Timestamp, Student, Company, APSSpeaker, CertificateCourses, ArticleRelatedCourses, APSUser, APSSponsor, CourseInstructors, CirriculumCourses, CourseLessons, RegistrationCode } = initSchema(schema);

export {
  LessonSource,
  LessonLink,
  Tags,
  Certificate,
  Course,
  Article,
  Lesson,
  Blog,
  DayInLifeItem,
  Career,
  APS,
  User,
  CMPMForm,
  Instructor,
  LMSCourse,
  LMSCirriculum,
  LMSLesson,
  Objective,
  Slide,
  LessonVideo,
  Timestamp,
  Student,
  Company,
  APSSpeaker,
  CertificateCourses,
  ArticleRelatedCourses,
  APSUser,
  APSSponsor,
  CourseInstructors,
  CirriculumCourses,
  CourseLessons,
  ModuleType,
  CategoryType,
  MediaType,
  RegistrationCode
};
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLessonSource = /* GraphQL */ `
  mutation CreateLessonSource(
    $input: CreateLessonSourceInput!
    $condition: ModelLessonSourceConditionInput
  ) {
    createLessonSource(input: $input, condition: $condition) {
      id
      name
      link
      position
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonSourcesId
    }
  }
`;
export const updateLessonSource = /* GraphQL */ `
  mutation UpdateLessonSource(
    $input: UpdateLessonSourceInput!
    $condition: ModelLessonSourceConditionInput
  ) {
    updateLessonSource(input: $input, condition: $condition) {
      id
      name
      link
      position
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonSourcesId
    }
  }
`;
export const deleteLessonSource = /* GraphQL */ `
  mutation DeleteLessonSource(
    $input: DeleteLessonSourceInput!
    $condition: ModelLessonSourceConditionInput
  ) {
    deleteLessonSource(input: $input, condition: $condition) {
      id
      name
      link
      position
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonSourcesId
    }
  }
`;
export const createLessonLink = /* GraphQL */ `
  mutation CreateLessonLink(
    $input: CreateLessonLinkInput!
    $condition: ModelLessonLinkConditionInput
  ) {
    createLessonLink(input: $input, condition: $condition) {
      id
      name
      link
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonLinksId
    }
  }
`;
export const updateLessonLink = /* GraphQL */ `
  mutation UpdateLessonLink(
    $input: UpdateLessonLinkInput!
    $condition: ModelLessonLinkConditionInput
  ) {
    updateLessonLink(input: $input, condition: $condition) {
      id
      name
      link
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonLinksId
    }
  }
`;
export const deleteLessonLink = /* GraphQL */ `
  mutation DeleteLessonLink(
    $input: DeleteLessonLinkInput!
    $condition: ModelLessonLinkConditionInput
  ) {
    deleteLessonLink(input: $input, condition: $condition) {
      id
      name
      link
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonLinksId
    }
  }
`;
export const createTags = /* GraphQL */ `
  mutation CreateTags(
    $input: CreateTagsInput!
    $condition: ModelTagsConditionInput
  ) {
    createTags(input: $input, condition: $condition) {
      id
      tag
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonTagsId
      blogTagsId
      articleTagsId
    }
  }
`;
export const updateTags = /* GraphQL */ `
  mutation UpdateTags(
    $input: UpdateTagsInput!
    $condition: ModelTagsConditionInput
  ) {
    updateTags(input: $input, condition: $condition) {
      id
      tag
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonTagsId
      blogTagsId
      articleTagsId
    }
  }
`;
export const deleteTags = /* GraphQL */ `
  mutation DeleteTags(
    $input: DeleteTagsInput!
    $condition: ModelTagsConditionInput
  ) {
    deleteTags(input: $input, condition: $condition) {
      id
      tag
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonTagsId
      blogTagsId
      articleTagsId
    }
  }
`;
export const createCertificate = /* GraphQL */ `
  mutation CreateCertificate(
    $input: CreateCertificateInput!
    $condition: ModelCertificateConditionInput
  ) {
    createCertificate(input: $input, condition: $condition) {
      id
      slug
      title
      title_callout_1
      title_callout_2
      title_text
      title_button_1_text
      title_button_1_link
      title_button_2_text
      title_button_2_link
      title_image
      courses {
        items {
          id
          certificateId
          courseId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      whoText
      courses_total
      hours_total
      ceus_total
      brochure_link
      video
      price_full
      price_monthly
      price_features
      lmsLink
      demoLink
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCertificate = /* GraphQL */ `
  mutation UpdateCertificate(
    $input: UpdateCertificateInput!
    $condition: ModelCertificateConditionInput
  ) {
    updateCertificate(input: $input, condition: $condition) {
      id
      slug
      title
      title_callout_1
      title_callout_2
      title_text
      title_button_1_text
      title_button_1_link
      title_button_2_text
      title_button_2_link
      title_image
      courses {
        items {
          id
          certificateId
          courseId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      whoText
      courses_total
      hours_total
      ceus_total
      brochure_link
      video
      price_full
      price_monthly
      price_features
      lmsLink
      demoLink
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCertificate = /* GraphQL */ `
  mutation DeleteCertificate(
    $input: DeleteCertificateInput!
    $condition: ModelCertificateConditionInput
  ) {
    deleteCertificate(input: $input, condition: $condition) {
      id
      slug
      title
      title_callout_1
      title_callout_2
      title_text
      title_button_1_text
      title_button_1_link
      title_button_2_text
      title_button_2_link
      title_image
      courses {
        items {
          id
          certificateId
          courseId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      whoText
      courses_total
      hours_total
      ceus_total
      brochure_link
      video
      price_full
      price_monthly
      price_features
      lmsLink
      demoLink
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
      id
      slug
      category
      title
      subhead
      media
      video
      hour
      lessons
      videos
      price
      articles {
        items {
          id
          courseId
          articleId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      certificate {
        items {
          id
          certificateId
          courseId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
      id
      slug
      category
      title
      subhead
      media
      video
      hour
      lessons
      videos
      price
      articles {
        items {
          id
          courseId
          articleId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      certificate {
        items {
          id
          certificateId
          courseId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
      id
      slug
      category
      title
      subhead
      media
      video
      hour
      lessons
      videos
      price
      articles {
        items {
          id
          courseId
          articleId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      certificate {
        items {
          id
          certificateId
          courseId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createLesson = /* GraphQL */ `
  mutation CreateLesson(
    $input: CreateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    createLesson(input: $input, condition: $condition) {
      id
      slug
      title
      subhead
      type
      media
      mediaType
      slides
      seoImage
      content
      sources {
        items {
          id
          name
          link
          position
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonSourcesId
        }
        nextToken
        startedAt
      }
      links {
        items {
          id
          name
          link
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonLinksId
        }
        nextToken
        startedAt
      }
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonTagsId
          blogTagsId
          articleTagsId
        }
        nextToken
        startedAt
      }
      objectives
      actionCTA
      actionSubhead
      actionLink
      actionLinkTitle
      actionExample
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateLesson = /* GraphQL */ `
  mutation UpdateLesson(
    $input: UpdateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    updateLesson(input: $input, condition: $condition) {
      id
      slug
      title
      subhead
      type
      media
      mediaType
      slides
      seoImage
      content
      sources {
        items {
          id
          name
          link
          position
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonSourcesId
        }
        nextToken
        startedAt
      }
      links {
        items {
          id
          name
          link
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonLinksId
        }
        nextToken
        startedAt
      }
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonTagsId
          blogTagsId
          articleTagsId
        }
        nextToken
        startedAt
      }
      objectives
      actionCTA
      actionSubhead
      actionLink
      actionLinkTitle
      actionExample
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteLesson = /* GraphQL */ `
  mutation DeleteLesson(
    $input: DeleteLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    deleteLesson(input: $input, condition: $condition) {
      id
      slug
      title
      subhead
      type
      media
      mediaType
      slides
      seoImage
      content
      sources {
        items {
          id
          name
          link
          position
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonSourcesId
        }
        nextToken
        startedAt
      }
      links {
        items {
          id
          name
          link
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonLinksId
        }
        nextToken
        startedAt
      }
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonTagsId
          blogTagsId
          articleTagsId
        }
        nextToken
        startedAt
      }
      objectives
      actionCTA
      actionSubhead
      actionLink
      actionLinkTitle
      actionExample
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
      id
      slug
      title
      media
      content
      author
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonTagsId
          blogTagsId
          articleTagsId
        }
        nextToken
        startedAt
      }
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
      id
      slug
      title
      media
      content
      author
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonTagsId
          blogTagsId
          articleTagsId
        }
        nextToken
        startedAt
      }
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
      id
      slug
      title
      media
      content
      author
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonTagsId
          blogTagsId
          articleTagsId
        }
        nextToken
        startedAt
      }
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createArticle = /* GraphQL */ `
  mutation CreateArticle(
    $input: CreateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    createArticle(input: $input, condition: $condition) {
      id
      slug
      title
      subhead
      media
      seoImage
      content
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonTagsId
          blogTagsId
          articleTagsId
        }
        nextToken
        startedAt
      }
      relatedCourses {
        items {
          id
          courseId
          articleId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateArticle = /* GraphQL */ `
  mutation UpdateArticle(
    $input: UpdateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    updateArticle(input: $input, condition: $condition) {
      id
      slug
      title
      subhead
      media
      seoImage
      content
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonTagsId
          blogTagsId
          articleTagsId
        }
        nextToken
        startedAt
      }
      relatedCourses {
        items {
          id
          courseId
          articleId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteArticle = /* GraphQL */ `
  mutation DeleteArticle(
    $input: DeleteArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    deleteArticle(input: $input, condition: $condition) {
      id
      slug
      title
      subhead
      media
      seoImage
      content
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonTagsId
          blogTagsId
          articleTagsId
        }
        nextToken
        startedAt
      }
      relatedCourses {
        items {
          id
          courseId
          articleId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createDayInLifeItem = /* GraphQL */ `
  mutation CreateDayInLifeItem(
    $input: CreateDayInLifeItemInput!
    $condition: ModelDayInLifeItemConditionInput
  ) {
    createDayInLifeItem(input: $input, condition: $condition) {
      id
      name
      desc
      icon
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      careerDayInLifeId
    }
  }
`;
export const updateDayInLifeItem = /* GraphQL */ `
  mutation UpdateDayInLifeItem(
    $input: UpdateDayInLifeItemInput!
    $condition: ModelDayInLifeItemConditionInput
  ) {
    updateDayInLifeItem(input: $input, condition: $condition) {
      id
      name
      desc
      icon
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      careerDayInLifeId
    }
  }
`;
export const deleteDayInLifeItem = /* GraphQL */ `
  mutation DeleteDayInLifeItem(
    $input: DeleteDayInLifeItemInput!
    $condition: ModelDayInLifeItemConditionInput
  ) {
    deleteDayInLifeItem(input: $input, condition: $condition) {
      id
      name
      desc
      icon
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      careerDayInLifeId
    }
  }
`;
export const createCareer = /* GraphQL */ `
  mutation CreateCareer(
    $input: CreateCareerInput!
    $condition: ModelCareerConditionInput
  ) {
    createCareer(input: $input, condition: $condition) {
      id
      slug
      title
      altName
      subhead
      media
      dayInLife {
        items {
          id
          name
          desc
          icon
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          careerDayInLifeId
        }
        nextToken
        startedAt
      }
      cmpmCopy
      cpsCopy
      apcCopy
      coreCopy
      electiveCopy
      freeCopy
      beverageCopy
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCareer = /* GraphQL */ `
  mutation UpdateCareer(
    $input: UpdateCareerInput!
    $condition: ModelCareerConditionInput
  ) {
    updateCareer(input: $input, condition: $condition) {
      id
      slug
      title
      altName
      subhead
      media
      dayInLife {
        items {
          id
          name
          desc
          icon
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          careerDayInLifeId
        }
        nextToken
        startedAt
      }
      cmpmCopy
      cpsCopy
      apcCopy
      coreCopy
      electiveCopy
      freeCopy
      beverageCopy
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCareer = /* GraphQL */ `
  mutation DeleteCareer(
    $input: DeleteCareerInput!
    $condition: ModelCareerConditionInput
  ) {
    deleteCareer(input: $input, condition: $condition) {
      id
      slug
      title
      altName
      subhead
      media
      dayInLife {
        items {
          id
          name
          desc
          icon
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          careerDayInLifeId
        }
        nextToken
        startedAt
      }
      cmpmCopy
      cpsCopy
      apcCopy
      coreCopy
      electiveCopy
      freeCopy
      beverageCopy
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createAPS = /* GraphQL */ `
  mutation CreateAPS(
    $input: CreateAPSInput!
    $condition: ModelAPSConditionInput
  ) {
    createAPS(input: $input, condition: $condition) {
      id
      Registrants {
        items {
          id
          aPSId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Sponsors {
        items {
          id
          aPSId
          companyId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Speakers {
        items {
          firstName
          lastName
          email
          company
          title
          phone
          linkedin
          bio
          presentationTitle
          presentationSummary
          headshot
          mediaConsent
          privacyConsent
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          aPSSpeakersId
        }
        nextToken
        startedAt
      }
      year
      codes {
        code
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAPS = /* GraphQL */ `
  mutation UpdateAPS(
    $input: UpdateAPSInput!
    $condition: ModelAPSConditionInput
  ) {
    updateAPS(input: $input, condition: $condition) {
      id
      Registrants {
        items {
          id
          aPSId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Sponsors {
        items {
          id
          aPSId
          companyId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Speakers {
        items {
          firstName
          lastName
          email
          company
          title
          phone
          linkedin
          bio
          presentationTitle
          presentationSummary
          headshot
          mediaConsent
          privacyConsent
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          aPSSpeakersId
        }
        nextToken
        startedAt
      }
      year
      codes {
        code
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAPS = /* GraphQL */ `
  mutation DeleteAPS(
    $input: DeleteAPSInput!
    $condition: ModelAPSConditionInput
  ) {
    deleteAPS(input: $input, condition: $condition) {
      id
      Registrants {
        items {
          id
          aPSId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Sponsors {
        items {
          id
          aPSId
          companyId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Speakers {
        items {
          firstName
          lastName
          email
          company
          title
          phone
          linkedin
          bio
          presentationTitle
          presentationSummary
          headshot
          mediaConsent
          privacyConsent
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          aPSSpeakersId
        }
        nextToken
        startedAt
      }
      year
      codes {
        code
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
      id
      name
      Employees {
        items {
          id
          name
          title
          company
          email
          office
          cell
          picture
          linkedin
          companyID
          cmpmFormID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInstructorIdId
          userStudentIdId
        }
        nextToken
        startedAt
      }
      website
      email
      phone
      street_1
      street_2
      city
      state
      zip
      apsID {
        items {
          id
          aPSId
          companyId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
      id
      name
      Employees {
        items {
          id
          name
          title
          company
          email
          office
          cell
          picture
          linkedin
          companyID
          cmpmFormID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInstructorIdId
          userStudentIdId
        }
        nextToken
        startedAt
      }
      website
      email
      phone
      street_1
      street_2
      city
      state
      zip
      apsID {
        items {
          id
          aPSId
          companyId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
      id
      name
      Employees {
        items {
          id
          name
          title
          company
          email
          office
          cell
          picture
          linkedin
          companyID
          cmpmFormID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInstructorIdId
          userStudentIdId
        }
        nextToken
        startedAt
      }
      website
      email
      phone
      street_1
      street_2
      city
      state
      zip
      apsID {
        items {
          id
          aPSId
          companyId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      title
      company
      email
      office
      cell
      picture
      linkedin
      companyID
      apss {
        items {
          id
          aPSId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      cmpmFormID
      cmpmForm {
        id
        user {
          id
          name
          title
          company
          email
          office
          cell
          picture
          linkedin
          companyID
          cmpmFormID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInstructorIdId
          userStudentIdId
        }
        firstName
        lastName
        email
        phone
        streetAddress
        addressExtra
        city
        state
        country
        companyName
        companyTitle
        linkedin
        background
        whyPackaging
        areaOfInterest
        sessionApplying
        referral
        payment
        yearGoals
        cmpmGoals
        moreAboutYou
        createdOn
        updatedOn
        _version
        _deleted
        _lastChangedAt
        cMPMFormUserId
      }
      instructorId {
        id
        userId
        instructor {
          id
          name
          title
          company
          email
          office
          cell
          picture
          linkedin
          companyID
          cmpmFormID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInstructorIdId
          userStudentIdId
        }
        coursesTaught {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      studentId {
        id
        studentId
        student {
          id
          name
          title
          company
          email
          office
          cell
          picture
          linkedin
          companyID
          cmpmFormID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInstructorIdId
          userStudentIdId
        }
        courseEnrolled {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userInstructorIdId
      userStudentIdId
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      title
      company
      email
      office
      cell
      picture
      linkedin
      companyID
      apss {
        items {
          id
          aPSId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      cmpmFormID
      cmpmForm {
        id
        user {
          id
          name
          title
          company
          email
          office
          cell
          picture
          linkedin
          companyID
          cmpmFormID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInstructorIdId
          userStudentIdId
        }
        firstName
        lastName
        email
        phone
        streetAddress
        addressExtra
        city
        state
        country
        companyName
        companyTitle
        linkedin
        background
        whyPackaging
        areaOfInterest
        sessionApplying
        referral
        payment
        yearGoals
        cmpmGoals
        moreAboutYou
        createdOn
        updatedOn
        _version
        _deleted
        _lastChangedAt
        cMPMFormUserId
      }
      instructorId {
        id
        userId
        instructor {
          id
          name
          title
          company
          email
          office
          cell
          picture
          linkedin
          companyID
          cmpmFormID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInstructorIdId
          userStudentIdId
        }
        coursesTaught {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      studentId {
        id
        studentId
        student {
          id
          name
          title
          company
          email
          office
          cell
          picture
          linkedin
          companyID
          cmpmFormID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInstructorIdId
          userStudentIdId
        }
        courseEnrolled {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userInstructorIdId
      userStudentIdId
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      title
      company
      email
      office
      cell
      picture
      linkedin
      companyID
      apss {
        items {
          id
          aPSId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      cmpmFormID
      cmpmForm {
        id
        user {
          id
          name
          title
          company
          email
          office
          cell
          picture
          linkedin
          companyID
          cmpmFormID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInstructorIdId
          userStudentIdId
        }
        firstName
        lastName
        email
        phone
        streetAddress
        addressExtra
        city
        state
        country
        companyName
        companyTitle
        linkedin
        background
        whyPackaging
        areaOfInterest
        sessionApplying
        referral
        payment
        yearGoals
        cmpmGoals
        moreAboutYou
        createdOn
        updatedOn
        _version
        _deleted
        _lastChangedAt
        cMPMFormUserId
      }
      instructorId {
        id
        userId
        instructor {
          id
          name
          title
          company
          email
          office
          cell
          picture
          linkedin
          companyID
          cmpmFormID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInstructorIdId
          userStudentIdId
        }
        coursesTaught {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      studentId {
        id
        studentId
        student {
          id
          name
          title
          company
          email
          office
          cell
          picture
          linkedin
          companyID
          cmpmFormID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInstructorIdId
          userStudentIdId
        }
        courseEnrolled {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userInstructorIdId
      userStudentIdId
    }
  }
`;
export const createCMPMForm = /* GraphQL */ `
  mutation CreateCMPMForm(
    $input: CreateCMPMFormInput!
    $condition: ModelCMPMFormConditionInput
  ) {
    createCMPMForm(input: $input, condition: $condition) {
      id
      user {
        id
        name
        title
        company
        email
        office
        cell
        picture
        linkedin
        companyID
        apss {
          nextToken
          startedAt
        }
        cmpmFormID
        cmpmForm {
          id
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          createdOn
          updatedOn
          _version
          _deleted
          _lastChangedAt
          cMPMFormUserId
        }
        instructorId {
          id
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        studentId {
          id
          studentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInstructorIdId
        userStudentIdId
      }
      firstName
      lastName
      email
      phone
      streetAddress
      addressExtra
      city
      state
      country
      companyName
      companyTitle
      linkedin
      background
      whyPackaging
      areaOfInterest
      sessionApplying
      referral
      payment
      yearGoals
      cmpmGoals
      moreAboutYou
      createdOn
      updatedOn
      _version
      _deleted
      _lastChangedAt
      cMPMFormUserId
    }
  }
`;
export const updateCMPMForm = /* GraphQL */ `
  mutation UpdateCMPMForm(
    $input: UpdateCMPMFormInput!
    $condition: ModelCMPMFormConditionInput
  ) {
    updateCMPMForm(input: $input, condition: $condition) {
      id
      user {
        id
        name
        title
        company
        email
        office
        cell
        picture
        linkedin
        companyID
        apss {
          nextToken
          startedAt
        }
        cmpmFormID
        cmpmForm {
          id
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          createdOn
          updatedOn
          _version
          _deleted
          _lastChangedAt
          cMPMFormUserId
        }
        instructorId {
          id
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        studentId {
          id
          studentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInstructorIdId
        userStudentIdId
      }
      firstName
      lastName
      email
      phone
      streetAddress
      addressExtra
      city
      state
      country
      companyName
      companyTitle
      linkedin
      background
      whyPackaging
      areaOfInterest
      sessionApplying
      referral
      payment
      yearGoals
      cmpmGoals
      moreAboutYou
      createdOn
      updatedOn
      _version
      _deleted
      _lastChangedAt
      cMPMFormUserId
    }
  }
`;
export const deleteCMPMForm = /* GraphQL */ `
  mutation DeleteCMPMForm(
    $input: DeleteCMPMFormInput!
    $condition: ModelCMPMFormConditionInput
  ) {
    deleteCMPMForm(input: $input, condition: $condition) {
      id
      user {
        id
        name
        title
        company
        email
        office
        cell
        picture
        linkedin
        companyID
        apss {
          nextToken
          startedAt
        }
        cmpmFormID
        cmpmForm {
          id
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          createdOn
          updatedOn
          _version
          _deleted
          _lastChangedAt
          cMPMFormUserId
        }
        instructorId {
          id
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        studentId {
          id
          studentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInstructorIdId
        userStudentIdId
      }
      firstName
      lastName
      email
      phone
      streetAddress
      addressExtra
      city
      state
      country
      companyName
      companyTitle
      linkedin
      background
      whyPackaging
      areaOfInterest
      sessionApplying
      referral
      payment
      yearGoals
      cmpmGoals
      moreAboutYou
      createdOn
      updatedOn
      _version
      _deleted
      _lastChangedAt
      cMPMFormUserId
    }
  }
`;
export const createAPSSpeaker = /* GraphQL */ `
  mutation CreateAPSSpeaker(
    $input: CreateAPSSpeakerInput!
    $condition: ModelAPSSpeakerConditionInput
  ) {
    createAPSSpeaker(input: $input, condition: $condition) {
      firstName
      lastName
      email
      company
      title
      phone
      linkedin
      bio
      presentationTitle
      presentationSummary
      headshot
      mediaConsent
      privacyConsent
      apsHistory {
        id
        Registrants {
          nextToken
          startedAt
        }
        Sponsors {
          nextToken
          startedAt
        }
        Speakers {
          nextToken
          startedAt
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      aPSSpeakersId
    }
  }
`;
export const updateAPSSpeaker = /* GraphQL */ `
  mutation UpdateAPSSpeaker(
    $input: UpdateAPSSpeakerInput!
    $condition: ModelAPSSpeakerConditionInput
  ) {
    updateAPSSpeaker(input: $input, condition: $condition) {
      firstName
      lastName
      email
      company
      title
      phone
      linkedin
      bio
      presentationTitle
      presentationSummary
      headshot
      mediaConsent
      privacyConsent
      apsHistory {
        id
        Registrants {
          nextToken
          startedAt
        }
        Sponsors {
          nextToken
          startedAt
        }
        Speakers {
          nextToken
          startedAt
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      aPSSpeakersId
    }
  }
`;
export const deleteAPSSpeaker = /* GraphQL */ `
  mutation DeleteAPSSpeaker(
    $input: DeleteAPSSpeakerInput!
    $condition: ModelAPSSpeakerConditionInput
  ) {
    deleteAPSSpeaker(input: $input, condition: $condition) {
      firstName
      lastName
      email
      company
      title
      phone
      linkedin
      bio
      presentationTitle
      presentationSummary
      headshot
      mediaConsent
      privacyConsent
      apsHistory {
        id
        Registrants {
          nextToken
          startedAt
        }
        Sponsors {
          nextToken
          startedAt
        }
        Speakers {
          nextToken
          startedAt
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      aPSSpeakersId
    }
  }
`;
export const createLMSCirriculum = /* GraphQL */ `
  mutation CreateLMSCirriculum(
    $input: CreateLMSCirriculumInput!
    $condition: ModelLMSCirriculumConditionInput
  ) {
    createLMSCirriculum(input: $input, condition: $condition) {
      id
      title
      Courses {
        items {
          id
          lMSCirriculumId
          lMSCourseId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateLMSCirriculum = /* GraphQL */ `
  mutation UpdateLMSCirriculum(
    $input: UpdateLMSCirriculumInput!
    $condition: ModelLMSCirriculumConditionInput
  ) {
    updateLMSCirriculum(input: $input, condition: $condition) {
      id
      title
      Courses {
        items {
          id
          lMSCirriculumId
          lMSCourseId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteLMSCirriculum = /* GraphQL */ `
  mutation DeleteLMSCirriculum(
    $input: DeleteLMSCirriculumInput!
    $condition: ModelLMSCirriculumConditionInput
  ) {
    deleteLMSCirriculum(input: $input, condition: $condition) {
      id
      title
      Courses {
        items {
          id
          lMSCirriculumId
          lMSCourseId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createLMSCourse = /* GraphQL */ `
  mutation CreateLMSCourse(
    $input: CreateLMSCourseInput!
    $condition: ModelLMSCourseConditionInput
  ) {
    createLMSCourse(input: $input, condition: $condition) {
      id
      courseId
      Cirriculum {
        items {
          id
          lMSCirriculumId
          lMSCourseId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Lessons {
        items {
          id
          lMSCourseId
          lMSLessonId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Instructors {
        items {
          id
          lMSCourseId
          instructorId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      price
      hours
      videos
      seoImage
      description
      percentComplete
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      studentCourseEnrolledId
    }
  }
`;
export const updateLMSCourse = /* GraphQL */ `
  mutation UpdateLMSCourse(
    $input: UpdateLMSCourseInput!
    $condition: ModelLMSCourseConditionInput
  ) {
    updateLMSCourse(input: $input, condition: $condition) {
      id
      courseId
      Cirriculum {
        items {
          id
          lMSCirriculumId
          lMSCourseId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Lessons {
        items {
          id
          lMSCourseId
          lMSLessonId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Instructors {
        items {
          id
          lMSCourseId
          instructorId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      price
      hours
      videos
      seoImage
      description
      percentComplete
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      studentCourseEnrolledId
    }
  }
`;
export const deleteLMSCourse = /* GraphQL */ `
  mutation DeleteLMSCourse(
    $input: DeleteLMSCourseInput!
    $condition: ModelLMSCourseConditionInput
  ) {
    deleteLMSCourse(input: $input, condition: $condition) {
      id
      courseId
      Cirriculum {
        items {
          id
          lMSCirriculumId
          lMSCourseId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Lessons {
        items {
          id
          lMSCourseId
          lMSLessonId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Instructors {
        items {
          id
          lMSCourseId
          instructorId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      price
      hours
      videos
      seoImage
      description
      percentComplete
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      studentCourseEnrolledId
    }
  }
`;
export const createLMSLesson = /* GraphQL */ `
  mutation CreateLMSLesson(
    $input: CreateLMSLessonInput!
    $condition: ModelLMSLessonConditionInput
  ) {
    createLMSLesson(input: $input, condition: $condition) {
      id
      title
      Course {
        items {
          id
          lMSCourseId
          lMSLessonId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      subheadline
      objectives {
        items {
          id
          objective
          completed
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lMSLessonObjectivesId
        }
        nextToken
        startedAt
      }
      mediaType
      slides {
        items {
          id
          slideSource
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lMSLessonSlidesId
        }
        nextToken
        startedAt
      }
      video {
        id
        timestamps {
          nextToken
          startedAt
        }
        lessonId
        lesson {
          id
          title
          subheadline
          mediaType
          percentComplete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lMSLessonVideoId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      percentComplete
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lMSLessonVideoId
    }
  }
`;
export const updateLMSLesson = /* GraphQL */ `
  mutation UpdateLMSLesson(
    $input: UpdateLMSLessonInput!
    $condition: ModelLMSLessonConditionInput
  ) {
    updateLMSLesson(input: $input, condition: $condition) {
      id
      title
      Course {
        items {
          id
          lMSCourseId
          lMSLessonId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      subheadline
      objectives {
        items {
          id
          objective
          completed
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lMSLessonObjectivesId
        }
        nextToken
        startedAt
      }
      mediaType
      slides {
        items {
          id
          slideSource
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lMSLessonSlidesId
        }
        nextToken
        startedAt
      }
      video {
        id
        timestamps {
          nextToken
          startedAt
        }
        lessonId
        lesson {
          id
          title
          subheadline
          mediaType
          percentComplete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lMSLessonVideoId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      percentComplete
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lMSLessonVideoId
    }
  }
`;
export const deleteLMSLesson = /* GraphQL */ `
  mutation DeleteLMSLesson(
    $input: DeleteLMSLessonInput!
    $condition: ModelLMSLessonConditionInput
  ) {
    deleteLMSLesson(input: $input, condition: $condition) {
      id
      title
      Course {
        items {
          id
          lMSCourseId
          lMSLessonId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      subheadline
      objectives {
        items {
          id
          objective
          completed
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lMSLessonObjectivesId
        }
        nextToken
        startedAt
      }
      mediaType
      slides {
        items {
          id
          slideSource
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lMSLessonSlidesId
        }
        nextToken
        startedAt
      }
      video {
        id
        timestamps {
          nextToken
          startedAt
        }
        lessonId
        lesson {
          id
          title
          subheadline
          mediaType
          percentComplete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lMSLessonVideoId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      percentComplete
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lMSLessonVideoId
    }
  }
`;
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
      id
      studentId
      student {
        id
        name
        title
        company
        email
        office
        cell
        picture
        linkedin
        companyID
        apss {
          nextToken
          startedAt
        }
        cmpmFormID
        cmpmForm {
          id
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          createdOn
          updatedOn
          _version
          _deleted
          _lastChangedAt
          cMPMFormUserId
        }
        instructorId {
          id
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        studentId {
          id
          studentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInstructorIdId
        userStudentIdId
      }
      courseEnrolled {
        items {
          id
          courseId
          price
          hours
          videos
          seoImage
          description
          percentComplete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          studentCourseEnrolledId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
      id
      studentId
      student {
        id
        name
        title
        company
        email
        office
        cell
        picture
        linkedin
        companyID
        apss {
          nextToken
          startedAt
        }
        cmpmFormID
        cmpmForm {
          id
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          createdOn
          updatedOn
          _version
          _deleted
          _lastChangedAt
          cMPMFormUserId
        }
        instructorId {
          id
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        studentId {
          id
          studentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInstructorIdId
        userStudentIdId
      }
      courseEnrolled {
        items {
          id
          courseId
          price
          hours
          videos
          seoImage
          description
          percentComplete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          studentCourseEnrolledId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
      id
      studentId
      student {
        id
        name
        title
        company
        email
        office
        cell
        picture
        linkedin
        companyID
        apss {
          nextToken
          startedAt
        }
        cmpmFormID
        cmpmForm {
          id
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          createdOn
          updatedOn
          _version
          _deleted
          _lastChangedAt
          cMPMFormUserId
        }
        instructorId {
          id
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        studentId {
          id
          studentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInstructorIdId
        userStudentIdId
      }
      courseEnrolled {
        items {
          id
          courseId
          price
          hours
          videos
          seoImage
          description
          percentComplete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          studentCourseEnrolledId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createInstructor = /* GraphQL */ `
  mutation CreateInstructor(
    $input: CreateInstructorInput!
    $condition: ModelInstructorConditionInput
  ) {
    createInstructor(input: $input, condition: $condition) {
      id
      userId
      instructor {
        id
        name
        title
        company
        email
        office
        cell
        picture
        linkedin
        companyID
        apss {
          nextToken
          startedAt
        }
        cmpmFormID
        cmpmForm {
          id
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          createdOn
          updatedOn
          _version
          _deleted
          _lastChangedAt
          cMPMFormUserId
        }
        instructorId {
          id
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        studentId {
          id
          studentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInstructorIdId
        userStudentIdId
      }
      coursesTaught {
        items {
          id
          lMSCourseId
          instructorId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateInstructor = /* GraphQL */ `
  mutation UpdateInstructor(
    $input: UpdateInstructorInput!
    $condition: ModelInstructorConditionInput
  ) {
    updateInstructor(input: $input, condition: $condition) {
      id
      userId
      instructor {
        id
        name
        title
        company
        email
        office
        cell
        picture
        linkedin
        companyID
        apss {
          nextToken
          startedAt
        }
        cmpmFormID
        cmpmForm {
          id
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          createdOn
          updatedOn
          _version
          _deleted
          _lastChangedAt
          cMPMFormUserId
        }
        instructorId {
          id
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        studentId {
          id
          studentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInstructorIdId
        userStudentIdId
      }
      coursesTaught {
        items {
          id
          lMSCourseId
          instructorId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteInstructor = /* GraphQL */ `
  mutation DeleteInstructor(
    $input: DeleteInstructorInput!
    $condition: ModelInstructorConditionInput
  ) {
    deleteInstructor(input: $input, condition: $condition) {
      id
      userId
      instructor {
        id
        name
        title
        company
        email
        office
        cell
        picture
        linkedin
        companyID
        apss {
          nextToken
          startedAt
        }
        cmpmFormID
        cmpmForm {
          id
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          createdOn
          updatedOn
          _version
          _deleted
          _lastChangedAt
          cMPMFormUserId
        }
        instructorId {
          id
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        studentId {
          id
          studentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInstructorIdId
        userStudentIdId
      }
      coursesTaught {
        items {
          id
          lMSCourseId
          instructorId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createObjective = /* GraphQL */ `
  mutation CreateObjective(
    $input: CreateObjectiveInput!
    $condition: ModelObjectiveConditionInput
  ) {
    createObjective(input: $input, condition: $condition) {
      id
      objective
      completed
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lMSLessonObjectivesId
    }
  }
`;
export const updateObjective = /* GraphQL */ `
  mutation UpdateObjective(
    $input: UpdateObjectiveInput!
    $condition: ModelObjectiveConditionInput
  ) {
    updateObjective(input: $input, condition: $condition) {
      id
      objective
      completed
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lMSLessonObjectivesId
    }
  }
`;
export const deleteObjective = /* GraphQL */ `
  mutation DeleteObjective(
    $input: DeleteObjectiveInput!
    $condition: ModelObjectiveConditionInput
  ) {
    deleteObjective(input: $input, condition: $condition) {
      id
      objective
      completed
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lMSLessonObjectivesId
    }
  }
`;
export const createSlide = /* GraphQL */ `
  mutation CreateSlide(
    $input: CreateSlideInput!
    $condition: ModelSlideConditionInput
  ) {
    createSlide(input: $input, condition: $condition) {
      id
      slideSource
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lMSLessonSlidesId
    }
  }
`;
export const updateSlide = /* GraphQL */ `
  mutation UpdateSlide(
    $input: UpdateSlideInput!
    $condition: ModelSlideConditionInput
  ) {
    updateSlide(input: $input, condition: $condition) {
      id
      slideSource
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lMSLessonSlidesId
    }
  }
`;
export const deleteSlide = /* GraphQL */ `
  mutation DeleteSlide(
    $input: DeleteSlideInput!
    $condition: ModelSlideConditionInput
  ) {
    deleteSlide(input: $input, condition: $condition) {
      id
      slideSource
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lMSLessonSlidesId
    }
  }
`;
export const createLessonVideo = /* GraphQL */ `
  mutation CreateLessonVideo(
    $input: CreateLessonVideoInput!
    $condition: ModelLessonVideoConditionInput
  ) {
    createLessonVideo(input: $input, condition: $condition) {
      id
      timestamps {
        items {
          id
          time
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonVideoTimestampsId
        }
        nextToken
        startedAt
      }
      lessonId
      lesson {
        id
        title
        Course {
          nextToken
          startedAt
        }
        subheadline
        objectives {
          nextToken
          startedAt
        }
        mediaType
        slides {
          nextToken
          startedAt
        }
        video {
          id
          lessonId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        percentComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        lMSLessonVideoId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateLessonVideo = /* GraphQL */ `
  mutation UpdateLessonVideo(
    $input: UpdateLessonVideoInput!
    $condition: ModelLessonVideoConditionInput
  ) {
    updateLessonVideo(input: $input, condition: $condition) {
      id
      timestamps {
        items {
          id
          time
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonVideoTimestampsId
        }
        nextToken
        startedAt
      }
      lessonId
      lesson {
        id
        title
        Course {
          nextToken
          startedAt
        }
        subheadline
        objectives {
          nextToken
          startedAt
        }
        mediaType
        slides {
          nextToken
          startedAt
        }
        video {
          id
          lessonId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        percentComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        lMSLessonVideoId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteLessonVideo = /* GraphQL */ `
  mutation DeleteLessonVideo(
    $input: DeleteLessonVideoInput!
    $condition: ModelLessonVideoConditionInput
  ) {
    deleteLessonVideo(input: $input, condition: $condition) {
      id
      timestamps {
        items {
          id
          time
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonVideoTimestampsId
        }
        nextToken
        startedAt
      }
      lessonId
      lesson {
        id
        title
        Course {
          nextToken
          startedAt
        }
        subheadline
        objectives {
          nextToken
          startedAt
        }
        mediaType
        slides {
          nextToken
          startedAt
        }
        video {
          id
          lessonId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        percentComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        lMSLessonVideoId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTimestamp = /* GraphQL */ `
  mutation CreateTimestamp(
    $input: CreateTimestampInput!
    $condition: ModelTimestampConditionInput
  ) {
    createTimestamp(input: $input, condition: $condition) {
      id
      time
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonVideoTimestampsId
    }
  }
`;
export const updateTimestamp = /* GraphQL */ `
  mutation UpdateTimestamp(
    $input: UpdateTimestampInput!
    $condition: ModelTimestampConditionInput
  ) {
    updateTimestamp(input: $input, condition: $condition) {
      id
      time
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonVideoTimestampsId
    }
  }
`;
export const deleteTimestamp = /* GraphQL */ `
  mutation DeleteTimestamp(
    $input: DeleteTimestampInput!
    $condition: ModelTimestampConditionInput
  ) {
    deleteTimestamp(input: $input, condition: $condition) {
      id
      time
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonVideoTimestampsId
    }
  }
`;
export const createCertificateCourses = /* GraphQL */ `
  mutation CreateCertificateCourses(
    $input: CreateCertificateCoursesInput!
    $condition: ModelCertificateCoursesConditionInput
  ) {
    createCertificateCourses(input: $input, condition: $condition) {
      id
      certificateId
      courseId
      certificate {
        id
        slug
        title
        title_callout_1
        title_callout_2
        title_text
        title_button_1_text
        title_button_1_link
        title_button_2_text
        title_button_2_link
        title_image
        courses {
          nextToken
          startedAt
        }
        whoText
        courses_total
        hours_total
        ceus_total
        brochure_link
        video
        price_full
        price_monthly
        price_features
        lmsLink
        demoLink
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      course {
        id
        slug
        category
        title
        subhead
        media
        video
        hour
        lessons
        videos
        price
        articles {
          nextToken
          startedAt
        }
        certificate {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCertificateCourses = /* GraphQL */ `
  mutation UpdateCertificateCourses(
    $input: UpdateCertificateCoursesInput!
    $condition: ModelCertificateCoursesConditionInput
  ) {
    updateCertificateCourses(input: $input, condition: $condition) {
      id
      certificateId
      courseId
      certificate {
        id
        slug
        title
        title_callout_1
        title_callout_2
        title_text
        title_button_1_text
        title_button_1_link
        title_button_2_text
        title_button_2_link
        title_image
        courses {
          nextToken
          startedAt
        }
        whoText
        courses_total
        hours_total
        ceus_total
        brochure_link
        video
        price_full
        price_monthly
        price_features
        lmsLink
        demoLink
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      course {
        id
        slug
        category
        title
        subhead
        media
        video
        hour
        lessons
        videos
        price
        articles {
          nextToken
          startedAt
        }
        certificate {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCertificateCourses = /* GraphQL */ `
  mutation DeleteCertificateCourses(
    $input: DeleteCertificateCoursesInput!
    $condition: ModelCertificateCoursesConditionInput
  ) {
    deleteCertificateCourses(input: $input, condition: $condition) {
      id
      certificateId
      courseId
      certificate {
        id
        slug
        title
        title_callout_1
        title_callout_2
        title_text
        title_button_1_text
        title_button_1_link
        title_button_2_text
        title_button_2_link
        title_image
        courses {
          nextToken
          startedAt
        }
        whoText
        courses_total
        hours_total
        ceus_total
        brochure_link
        video
        price_full
        price_monthly
        price_features
        lmsLink
        demoLink
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      course {
        id
        slug
        category
        title
        subhead
        media
        video
        hour
        lessons
        videos
        price
        articles {
          nextToken
          startedAt
        }
        certificate {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createArticleRelatedCourses = /* GraphQL */ `
  mutation CreateArticleRelatedCourses(
    $input: CreateArticleRelatedCoursesInput!
    $condition: ModelArticleRelatedCoursesConditionInput
  ) {
    createArticleRelatedCourses(input: $input, condition: $condition) {
      id
      courseId
      articleId
      course {
        id
        slug
        category
        title
        subhead
        media
        video
        hour
        lessons
        videos
        price
        articles {
          nextToken
          startedAt
        }
        certificate {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      article {
        id
        slug
        title
        subhead
        media
        seoImage
        content
        tags {
          nextToken
          startedAt
        }
        relatedCourses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateArticleRelatedCourses = /* GraphQL */ `
  mutation UpdateArticleRelatedCourses(
    $input: UpdateArticleRelatedCoursesInput!
    $condition: ModelArticleRelatedCoursesConditionInput
  ) {
    updateArticleRelatedCourses(input: $input, condition: $condition) {
      id
      courseId
      articleId
      course {
        id
        slug
        category
        title
        subhead
        media
        video
        hour
        lessons
        videos
        price
        articles {
          nextToken
          startedAt
        }
        certificate {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      article {
        id
        slug
        title
        subhead
        media
        seoImage
        content
        tags {
          nextToken
          startedAt
        }
        relatedCourses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteArticleRelatedCourses = /* GraphQL */ `
  mutation DeleteArticleRelatedCourses(
    $input: DeleteArticleRelatedCoursesInput!
    $condition: ModelArticleRelatedCoursesConditionInput
  ) {
    deleteArticleRelatedCourses(input: $input, condition: $condition) {
      id
      courseId
      articleId
      course {
        id
        slug
        category
        title
        subhead
        media
        video
        hour
        lessons
        videos
        price
        articles {
          nextToken
          startedAt
        }
        certificate {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      article {
        id
        slug
        title
        subhead
        media
        seoImage
        content
        tags {
          nextToken
          startedAt
        }
        relatedCourses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createAPSUser = /* GraphQL */ `
  mutation CreateAPSUser(
    $input: CreateAPSUserInput!
    $condition: ModelAPSUserConditionInput
  ) {
    createAPSUser(input: $input, condition: $condition) {
      id
      aPSId
      userId
      aPS {
        id
        Registrants {
          nextToken
          startedAt
        }
        Sponsors {
          nextToken
          startedAt
        }
        Speakers {
          nextToken
          startedAt
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        name
        title
        company
        email
        office
        cell
        picture
        linkedin
        companyID
        apss {
          nextToken
          startedAt
        }
        cmpmFormID
        cmpmForm {
          id
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          createdOn
          updatedOn
          _version
          _deleted
          _lastChangedAt
          cMPMFormUserId
        }
        instructorId {
          id
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        studentId {
          id
          studentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInstructorIdId
        userStudentIdId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAPSUser = /* GraphQL */ `
  mutation UpdateAPSUser(
    $input: UpdateAPSUserInput!
    $condition: ModelAPSUserConditionInput
  ) {
    updateAPSUser(input: $input, condition: $condition) {
      id
      aPSId
      userId
      aPS {
        id
        Registrants {
          nextToken
          startedAt
        }
        Sponsors {
          nextToken
          startedAt
        }
        Speakers {
          nextToken
          startedAt
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        name
        title
        company
        email
        office
        cell
        picture
        linkedin
        companyID
        apss {
          nextToken
          startedAt
        }
        cmpmFormID
        cmpmForm {
          id
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          createdOn
          updatedOn
          _version
          _deleted
          _lastChangedAt
          cMPMFormUserId
        }
        instructorId {
          id
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        studentId {
          id
          studentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInstructorIdId
        userStudentIdId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAPSUser = /* GraphQL */ `
  mutation DeleteAPSUser(
    $input: DeleteAPSUserInput!
    $condition: ModelAPSUserConditionInput
  ) {
    deleteAPSUser(input: $input, condition: $condition) {
      id
      aPSId
      userId
      aPS {
        id
        Registrants {
          nextToken
          startedAt
        }
        Sponsors {
          nextToken
          startedAt
        }
        Speakers {
          nextToken
          startedAt
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        name
        title
        company
        email
        office
        cell
        picture
        linkedin
        companyID
        apss {
          nextToken
          startedAt
        }
        cmpmFormID
        cmpmForm {
          id
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          createdOn
          updatedOn
          _version
          _deleted
          _lastChangedAt
          cMPMFormUserId
        }
        instructorId {
          id
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        studentId {
          id
          studentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInstructorIdId
        userStudentIdId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createAPSSponsor = /* GraphQL */ `
  mutation CreateAPSSponsor(
    $input: CreateAPSSponsorInput!
    $condition: ModelAPSSponsorConditionInput
  ) {
    createAPSSponsor(input: $input, condition: $condition) {
      id
      aPSId
      companyId
      aPS {
        id
        Registrants {
          nextToken
          startedAt
        }
        Sponsors {
          nextToken
          startedAt
        }
        Speakers {
          nextToken
          startedAt
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      company {
        id
        name
        Employees {
          nextToken
          startedAt
        }
        website
        email
        phone
        street_1
        street_2
        city
        state
        zip
        apsID {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAPSSponsor = /* GraphQL */ `
  mutation UpdateAPSSponsor(
    $input: UpdateAPSSponsorInput!
    $condition: ModelAPSSponsorConditionInput
  ) {
    updateAPSSponsor(input: $input, condition: $condition) {
      id
      aPSId
      companyId
      aPS {
        id
        Registrants {
          nextToken
          startedAt
        }
        Sponsors {
          nextToken
          startedAt
        }
        Speakers {
          nextToken
          startedAt
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      company {
        id
        name
        Employees {
          nextToken
          startedAt
        }
        website
        email
        phone
        street_1
        street_2
        city
        state
        zip
        apsID {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAPSSponsor = /* GraphQL */ `
  mutation DeleteAPSSponsor(
    $input: DeleteAPSSponsorInput!
    $condition: ModelAPSSponsorConditionInput
  ) {
    deleteAPSSponsor(input: $input, condition: $condition) {
      id
      aPSId
      companyId
      aPS {
        id
        Registrants {
          nextToken
          startedAt
        }
        Sponsors {
          nextToken
          startedAt
        }
        Speakers {
          nextToken
          startedAt
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      company {
        id
        name
        Employees {
          nextToken
          startedAt
        }
        website
        email
        phone
        street_1
        street_2
        city
        state
        zip
        apsID {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCirriculumCourses = /* GraphQL */ `
  mutation CreateCirriculumCourses(
    $input: CreateCirriculumCoursesInput!
    $condition: ModelCirriculumCoursesConditionInput
  ) {
    createCirriculumCourses(input: $input, condition: $condition) {
      id
      lMSCirriculumId
      lMSCourseId
      lMSCirriculum {
        id
        title
        Courses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      lMSCourse {
        id
        courseId
        Cirriculum {
          nextToken
          startedAt
        }
        Lessons {
          nextToken
          startedAt
        }
        Instructors {
          nextToken
          startedAt
        }
        price
        hours
        videos
        seoImage
        description
        percentComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentCourseEnrolledId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCirriculumCourses = /* GraphQL */ `
  mutation UpdateCirriculumCourses(
    $input: UpdateCirriculumCoursesInput!
    $condition: ModelCirriculumCoursesConditionInput
  ) {
    updateCirriculumCourses(input: $input, condition: $condition) {
      id
      lMSCirriculumId
      lMSCourseId
      lMSCirriculum {
        id
        title
        Courses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      lMSCourse {
        id
        courseId
        Cirriculum {
          nextToken
          startedAt
        }
        Lessons {
          nextToken
          startedAt
        }
        Instructors {
          nextToken
          startedAt
        }
        price
        hours
        videos
        seoImage
        description
        percentComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentCourseEnrolledId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCirriculumCourses = /* GraphQL */ `
  mutation DeleteCirriculumCourses(
    $input: DeleteCirriculumCoursesInput!
    $condition: ModelCirriculumCoursesConditionInput
  ) {
    deleteCirriculumCourses(input: $input, condition: $condition) {
      id
      lMSCirriculumId
      lMSCourseId
      lMSCirriculum {
        id
        title
        Courses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      lMSCourse {
        id
        courseId
        Cirriculum {
          nextToken
          startedAt
        }
        Lessons {
          nextToken
          startedAt
        }
        Instructors {
          nextToken
          startedAt
        }
        price
        hours
        videos
        seoImage
        description
        percentComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentCourseEnrolledId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCourseLessons = /* GraphQL */ `
  mutation CreateCourseLessons(
    $input: CreateCourseLessonsInput!
    $condition: ModelCourseLessonsConditionInput
  ) {
    createCourseLessons(input: $input, condition: $condition) {
      id
      lMSCourseId
      lMSLessonId
      lMSCourse {
        id
        courseId
        Cirriculum {
          nextToken
          startedAt
        }
        Lessons {
          nextToken
          startedAt
        }
        Instructors {
          nextToken
          startedAt
        }
        price
        hours
        videos
        seoImage
        description
        percentComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentCourseEnrolledId
      }
      lMSLesson {
        id
        title
        Course {
          nextToken
          startedAt
        }
        subheadline
        objectives {
          nextToken
          startedAt
        }
        mediaType
        slides {
          nextToken
          startedAt
        }
        video {
          id
          lessonId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        percentComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        lMSLessonVideoId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCourseLessons = /* GraphQL */ `
  mutation UpdateCourseLessons(
    $input: UpdateCourseLessonsInput!
    $condition: ModelCourseLessonsConditionInput
  ) {
    updateCourseLessons(input: $input, condition: $condition) {
      id
      lMSCourseId
      lMSLessonId
      lMSCourse {
        id
        courseId
        Cirriculum {
          nextToken
          startedAt
        }
        Lessons {
          nextToken
          startedAt
        }
        Instructors {
          nextToken
          startedAt
        }
        price
        hours
        videos
        seoImage
        description
        percentComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentCourseEnrolledId
      }
      lMSLesson {
        id
        title
        Course {
          nextToken
          startedAt
        }
        subheadline
        objectives {
          nextToken
          startedAt
        }
        mediaType
        slides {
          nextToken
          startedAt
        }
        video {
          id
          lessonId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        percentComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        lMSLessonVideoId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCourseLessons = /* GraphQL */ `
  mutation DeleteCourseLessons(
    $input: DeleteCourseLessonsInput!
    $condition: ModelCourseLessonsConditionInput
  ) {
    deleteCourseLessons(input: $input, condition: $condition) {
      id
      lMSCourseId
      lMSLessonId
      lMSCourse {
        id
        courseId
        Cirriculum {
          nextToken
          startedAt
        }
        Lessons {
          nextToken
          startedAt
        }
        Instructors {
          nextToken
          startedAt
        }
        price
        hours
        videos
        seoImage
        description
        percentComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentCourseEnrolledId
      }
      lMSLesson {
        id
        title
        Course {
          nextToken
          startedAt
        }
        subheadline
        objectives {
          nextToken
          startedAt
        }
        mediaType
        slides {
          nextToken
          startedAt
        }
        video {
          id
          lessonId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        percentComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        lMSLessonVideoId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCourseInstructors = /* GraphQL */ `
  mutation CreateCourseInstructors(
    $input: CreateCourseInstructorsInput!
    $condition: ModelCourseInstructorsConditionInput
  ) {
    createCourseInstructors(input: $input, condition: $condition) {
      id
      lMSCourseId
      instructorId
      lMSCourse {
        id
        courseId
        Cirriculum {
          nextToken
          startedAt
        }
        Lessons {
          nextToken
          startedAt
        }
        Instructors {
          nextToken
          startedAt
        }
        price
        hours
        videos
        seoImage
        description
        percentComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentCourseEnrolledId
      }
      instructor {
        id
        userId
        instructor {
          id
          name
          title
          company
          email
          office
          cell
          picture
          linkedin
          companyID
          cmpmFormID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInstructorIdId
          userStudentIdId
        }
        coursesTaught {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCourseInstructors = /* GraphQL */ `
  mutation UpdateCourseInstructors(
    $input: UpdateCourseInstructorsInput!
    $condition: ModelCourseInstructorsConditionInput
  ) {
    updateCourseInstructors(input: $input, condition: $condition) {
      id
      lMSCourseId
      instructorId
      lMSCourse {
        id
        courseId
        Cirriculum {
          nextToken
          startedAt
        }
        Lessons {
          nextToken
          startedAt
        }
        Instructors {
          nextToken
          startedAt
        }
        price
        hours
        videos
        seoImage
        description
        percentComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentCourseEnrolledId
      }
      instructor {
        id
        userId
        instructor {
          id
          name
          title
          company
          email
          office
          cell
          picture
          linkedin
          companyID
          cmpmFormID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInstructorIdId
          userStudentIdId
        }
        coursesTaught {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCourseInstructors = /* GraphQL */ `
  mutation DeleteCourseInstructors(
    $input: DeleteCourseInstructorsInput!
    $condition: ModelCourseInstructorsConditionInput
  ) {
    deleteCourseInstructors(input: $input, condition: $condition) {
      id
      lMSCourseId
      instructorId
      lMSCourse {
        id
        courseId
        Cirriculum {
          nextToken
          startedAt
        }
        Lessons {
          nextToken
          startedAt
        }
        Instructors {
          nextToken
          startedAt
        }
        price
        hours
        videos
        seoImage
        description
        percentComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentCourseEnrolledId
      }
      instructor {
        id
        userId
        instructor {
          id
          name
          title
          company
          email
          office
          cell
          picture
          linkedin
          companyID
          cmpmFormID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInstructorIdId
          userStudentIdId
        }
        coursesTaught {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

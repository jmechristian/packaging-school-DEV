/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLessonSource = /* GraphQL */ `
  subscription OnCreateLessonSource {
    onCreateLessonSource {
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
export const onUpdateLessonSource = /* GraphQL */ `
  subscription OnUpdateLessonSource {
    onUpdateLessonSource {
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
export const onDeleteLessonSource = /* GraphQL */ `
  subscription OnDeleteLessonSource {
    onDeleteLessonSource {
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
export const onCreateLessonLink = /* GraphQL */ `
  subscription OnCreateLessonLink {
    onCreateLessonLink {
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
export const onUpdateLessonLink = /* GraphQL */ `
  subscription OnUpdateLessonLink {
    onUpdateLessonLink {
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
export const onDeleteLessonLink = /* GraphQL */ `
  subscription OnDeleteLessonLink {
    onDeleteLessonLink {
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
export const onCreateTags = /* GraphQL */ `
  subscription OnCreateTags {
    onCreateTags {
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
export const onUpdateTags = /* GraphQL */ `
  subscription OnUpdateTags {
    onUpdateTags {
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
export const onDeleteTags = /* GraphQL */ `
  subscription OnDeleteTags {
    onDeleteTags {
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
export const onCreateCertificate = /* GraphQL */ `
  subscription OnCreateCertificate {
    onCreateCertificate {
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
export const onUpdateCertificate = /* GraphQL */ `
  subscription OnUpdateCertificate {
    onUpdateCertificate {
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
export const onDeleteCertificate = /* GraphQL */ `
  subscription OnDeleteCertificate {
    onDeleteCertificate {
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
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse {
    onUpdateCourse {
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse {
    onDeleteCourse {
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
export const onCreateLesson = /* GraphQL */ `
  subscription OnCreateLesson {
    onCreateLesson {
      id
      slug
      title
      subhead
      type
      media
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
export const onUpdateLesson = /* GraphQL */ `
  subscription OnUpdateLesson {
    onUpdateLesson {
      id
      slug
      title
      subhead
      type
      media
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
export const onDeleteLesson = /* GraphQL */ `
  subscription OnDeleteLesson {
    onDeleteLesson {
      id
      slug
      title
      subhead
      type
      media
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
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
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
export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle {
    onCreateArticle {
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
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle {
    onUpdateArticle {
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
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle {
    onDeleteArticle {
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
export const onCreateDayInLifeItem = /* GraphQL */ `
  subscription OnCreateDayInLifeItem {
    onCreateDayInLifeItem {
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
export const onUpdateDayInLifeItem = /* GraphQL */ `
  subscription OnUpdateDayInLifeItem {
    onUpdateDayInLifeItem {
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
export const onDeleteDayInLifeItem = /* GraphQL */ `
  subscription OnDeleteDayInLifeItem {
    onDeleteDayInLifeItem {
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
export const onCreateCareer = /* GraphQL */ `
  subscription OnCreateCareer {
    onCreateCareer {
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
export const onUpdateCareer = /* GraphQL */ `
  subscription OnUpdateCareer {
    onUpdateCareer {
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
export const onDeleteCareer = /* GraphQL */ `
  subscription OnDeleteCareer {
    onDeleteCareer {
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
export const onCreateAPS = /* GraphQL */ `
  subscription OnCreateAPS {
    onCreateAPS {
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
export const onUpdateAPS = /* GraphQL */ `
  subscription OnUpdateAPS {
    onUpdateAPS {
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
export const onDeleteAPS = /* GraphQL */ `
  subscription OnDeleteAPS {
    onDeleteAPS {
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
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany {
    onCreateCompany {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userUserFormsId
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany {
    onUpdateCompany {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userUserFormsId
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany {
    onDeleteCompany {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userUserFormsId
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
      userForms {
        id
        userID
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userUserFormsId
        }
        cmpm {
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
          cMPMFormFormGroupId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userFormsCmpmId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userUserFormsId
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
      userForms {
        id
        userID
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userUserFormsId
        }
        cmpm {
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
          cMPMFormFormGroupId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userFormsCmpmId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userUserFormsId
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
      userForms {
        id
        userID
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userUserFormsId
        }
        cmpm {
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
          cMPMFormFormGroupId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userFormsCmpmId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userUserFormsId
    }
  }
`;
export const onCreateUserForms = /* GraphQL */ `
  subscription OnCreateUserForms {
    onCreateUserForms {
      id
      userID
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
        userForms {
          id
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userFormsCmpmId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userUserFormsId
      }
      cmpm {
        formGroup {
          id
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userFormsCmpmId
        }
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
        cMPMFormFormGroupId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userFormsCmpmId
    }
  }
`;
export const onUpdateUserForms = /* GraphQL */ `
  subscription OnUpdateUserForms {
    onUpdateUserForms {
      id
      userID
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
        userForms {
          id
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userFormsCmpmId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userUserFormsId
      }
      cmpm {
        formGroup {
          id
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userFormsCmpmId
        }
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
        cMPMFormFormGroupId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userFormsCmpmId
    }
  }
`;
export const onDeleteUserForms = /* GraphQL */ `
  subscription OnDeleteUserForms {
    onDeleteUserForms {
      id
      userID
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
        userForms {
          id
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userFormsCmpmId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userUserFormsId
      }
      cmpm {
        formGroup {
          id
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userFormsCmpmId
        }
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
        cMPMFormFormGroupId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userFormsCmpmId
    }
  }
`;
export const onCreateCMPMForm = /* GraphQL */ `
  subscription OnCreateCMPMForm {
    onCreateCMPMForm {
      formGroup {
        id
        userID
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userUserFormsId
        }
        cmpm {
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
          cMPMFormFormGroupId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userFormsCmpmId
      }
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
      cMPMFormFormGroupId
    }
  }
`;
export const onUpdateCMPMForm = /* GraphQL */ `
  subscription OnUpdateCMPMForm {
    onUpdateCMPMForm {
      formGroup {
        id
        userID
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userUserFormsId
        }
        cmpm {
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
          cMPMFormFormGroupId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userFormsCmpmId
      }
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
      cMPMFormFormGroupId
    }
  }
`;
export const onDeleteCMPMForm = /* GraphQL */ `
  subscription OnDeleteCMPMForm {
    onDeleteCMPMForm {
      formGroup {
        id
        userID
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userUserFormsId
        }
        cmpm {
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
          cMPMFormFormGroupId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userFormsCmpmId
      }
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
      cMPMFormFormGroupId
    }
  }
`;
export const onCreateAPSSpeaker = /* GraphQL */ `
  subscription OnCreateAPSSpeaker {
    onCreateAPSSpeaker {
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
export const onUpdateAPSSpeaker = /* GraphQL */ `
  subscription OnUpdateAPSSpeaker {
    onUpdateAPSSpeaker {
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
export const onDeleteAPSSpeaker = /* GraphQL */ `
  subscription OnDeleteAPSSpeaker {
    onDeleteAPSSpeaker {
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
export const onCreateCertificateCourses = /* GraphQL */ `
  subscription OnCreateCertificateCourses {
    onCreateCertificateCourses {
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
export const onUpdateCertificateCourses = /* GraphQL */ `
  subscription OnUpdateCertificateCourses {
    onUpdateCertificateCourses {
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
export const onDeleteCertificateCourses = /* GraphQL */ `
  subscription OnDeleteCertificateCourses {
    onDeleteCertificateCourses {
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
export const onCreateArticleRelatedCourses = /* GraphQL */ `
  subscription OnCreateArticleRelatedCourses {
    onCreateArticleRelatedCourses {
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
export const onUpdateArticleRelatedCourses = /* GraphQL */ `
  subscription OnUpdateArticleRelatedCourses {
    onUpdateArticleRelatedCourses {
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
export const onDeleteArticleRelatedCourses = /* GraphQL */ `
  subscription OnDeleteArticleRelatedCourses {
    onDeleteArticleRelatedCourses {
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
export const onCreateAPSUser = /* GraphQL */ `
  subscription OnCreateAPSUser {
    onCreateAPSUser {
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
        userForms {
          id
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userFormsCmpmId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userUserFormsId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateAPSUser = /* GraphQL */ `
  subscription OnUpdateAPSUser {
    onUpdateAPSUser {
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
        userForms {
          id
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userFormsCmpmId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userUserFormsId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteAPSUser = /* GraphQL */ `
  subscription OnDeleteAPSUser {
    onDeleteAPSUser {
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
        userForms {
          id
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userFormsCmpmId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userUserFormsId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateAPSSponsor = /* GraphQL */ `
  subscription OnCreateAPSSponsor {
    onCreateAPSSponsor {
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
export const onUpdateAPSSponsor = /* GraphQL */ `
  subscription OnUpdateAPSSponsor {
    onUpdateAPSSponsor {
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
export const onDeleteAPSSponsor = /* GraphQL */ `
  subscription OnDeleteAPSSponsor {
    onDeleteAPSSponsor {
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

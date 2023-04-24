/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLessonSource = /* GraphQL */ `
  query GetLessonSource($id: ID!) {
    getLessonSource(id: $id) {
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
export const listLessonSources = /* GraphQL */ `
  query ListLessonSources(
    $filter: ModelLessonSourceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessonSources(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncLessonSources = /* GraphQL */ `
  query SyncLessonSources(
    $filter: ModelLessonSourceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLessonSources(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getLessonLink = /* GraphQL */ `
  query GetLessonLink($id: ID!) {
    getLessonLink(id: $id) {
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
export const listLessonLinks = /* GraphQL */ `
  query ListLessonLinks(
    $filter: ModelLessonLinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessonLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncLessonLinks = /* GraphQL */ `
  query SyncLessonLinks(
    $filter: ModelLessonLinkFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLessonLinks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getTags = /* GraphQL */ `
  query GetTags($id: ID!) {
    getTags(id: $id) {
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
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncTags = /* GraphQL */ `
  query SyncTags(
    $filter: ModelTagsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getCertificate = /* GraphQL */ `
  query GetCertificate($id: ID!) {
    getCertificate(id: $id) {
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
export const listCertificates = /* GraphQL */ `
  query ListCertificates(
    $filter: ModelCertificateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCertificates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCertificates = /* GraphQL */ `
  query SyncCertificates(
    $filter: ModelCertificateFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCertificates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const certificatesBySlug = /* GraphQL */ `
  query CertificatesBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCertificateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    certificatesBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const searchCertificates = /* GraphQL */ `
  query SearchCertificates(
    $filter: SearchableCertificateFilterInput
    $sort: [SearchableCertificateSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableCertificateAggregationInput]
  ) {
    searchCertificates(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
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
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCourses = /* GraphQL */ `
  query SyncCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const coursesBySlug = /* GraphQL */ `
  query CoursesBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    coursesBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const searchCourses = /* GraphQL */ `
  query SearchCourses(
    $filter: SearchableCourseFilterInput
    $sort: [SearchableCourseSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableCourseAggregationInput]
  ) {
    searchCourses(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getLesson = /* GraphQL */ `
  query GetLesson($id: ID!) {
    getLesson(id: $id) {
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
export const listLessons = /* GraphQL */ `
  query ListLessons(
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        slug
        title
        subhead
        type
        media
        seoImage
        content
        sources {
          nextToken
          startedAt
        }
        links {
          nextToken
          startedAt
        }
        tags {
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
      nextToken
      startedAt
    }
  }
`;
export const syncLessons = /* GraphQL */ `
  query SyncLessons(
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLessons(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        slug
        title
        subhead
        type
        media
        seoImage
        content
        sources {
          nextToken
          startedAt
        }
        links {
          nextToken
          startedAt
        }
        tags {
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
      nextToken
      startedAt
    }
  }
`;
export const lessonsBySlug = /* GraphQL */ `
  query LessonsBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lessonsBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        slug
        title
        subhead
        type
        media
        seoImage
        content
        sources {
          nextToken
          startedAt
        }
        links {
          nextToken
          startedAt
        }
        tags {
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
      nextToken
      startedAt
    }
  }
`;
export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
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
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        slug
        title
        media
        content
        author
        tags {
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
      nextToken
      startedAt
    }
  }
`;
export const syncBlogs = /* GraphQL */ `
  query SyncBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBlogs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        slug
        title
        media
        content
        author
        tags {
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
      nextToken
      startedAt
    }
  }
`;
export const blogsBySlug = /* GraphQL */ `
  query BlogsBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    blogsBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        slug
        title
        media
        content
        author
        tags {
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
      nextToken
      startedAt
    }
  }
`;
export const searchBlogs = /* GraphQL */ `
  query SearchBlogs(
    $filter: SearchableBlogFilterInput
    $sort: [SearchableBlogSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableBlogAggregationInput]
  ) {
    searchBlogs(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        slug
        title
        media
        content
        author
        tags {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
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
export const listArticles = /* GraphQL */ `
  query ListArticles(
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncArticles = /* GraphQL */ `
  query SyncArticles(
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncArticles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const articlesBySlug = /* GraphQL */ `
  query ArticlesBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    articlesBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getDayInLifeItem = /* GraphQL */ `
  query GetDayInLifeItem($id: ID!) {
    getDayInLifeItem(id: $id) {
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
export const listDayInLifeItems = /* GraphQL */ `
  query ListDayInLifeItems(
    $filter: ModelDayInLifeItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDayInLifeItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncDayInLifeItems = /* GraphQL */ `
  query SyncDayInLifeItems(
    $filter: ModelDayInLifeItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDayInLifeItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getCareer = /* GraphQL */ `
  query GetCareer($id: ID!) {
    getCareer(id: $id) {
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
export const listCareers = /* GraphQL */ `
  query ListCareers(
    $filter: ModelCareerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCareers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        slug
        title
        altName
        subhead
        media
        dayInLife {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCareers = /* GraphQL */ `
  query SyncCareers(
    $filter: ModelCareerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCareers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        slug
        title
        altName
        subhead
        media
        dayInLife {
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
      nextToken
      startedAt
    }
  }
`;
export const careersBySlug = /* GraphQL */ `
  query CareersBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCareerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    careersBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        slug
        title
        altName
        subhead
        media
        dayInLife {
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
      nextToken
      startedAt
    }
  }
`;
export const getAPS = /* GraphQL */ `
  query GetAPS($id: ID!) {
    getAPS(id: $id) {
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
export const listAPS = /* GraphQL */ `
  query ListAPS($filter: ModelAPSFilterInput, $limit: Int, $nextToken: String) {
    listAPS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncAPS = /* GraphQL */ `
  query SyncAPS(
    $filter: ModelAPSFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAPS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
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
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCompanies = /* GraphQL */ `
  query SyncCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCompanies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
        userFormsUserId
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        apss {
          nextToken
          startedAt
        }
        userForms {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userFormsUserId
          userFormsCmpmId
        }
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
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        apss {
          nextToken
          startedAt
        }
        userForms {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userFormsUserId
          userFormsCmpmId
        }
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
  }
`;
export const usersByName = /* GraphQL */ `
  query UsersByName(
    $name: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByName(
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        apss {
          nextToken
          startedAt
        }
        userForms {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userFormsUserId
          userFormsCmpmId
        }
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
  }
`;
export const usersByEmail = /* GraphQL */ `
  query UsersByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        apss {
          nextToken
          startedAt
        }
        userForms {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userFormsUserId
          userFormsCmpmId
        }
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
  }
`;
export const usersByCompanyID = /* GraphQL */ `
  query UsersByCompanyID(
    $companyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByCompanyID(
      companyID: $companyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        apss {
          nextToken
          startedAt
        }
        userForms {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userFormsUserId
          userFormsCmpmId
        }
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
  }
`;
export const getUserForms = /* GraphQL */ `
  query GetUserForms($id: ID!) {
    getUserForms(id: $id) {
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
        userForms {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userFormsUserId
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userFormsUserId
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
      userFormsUserId
      userFormsCmpmId
    }
  }
`;
export const listUserForms = /* GraphQL */ `
  query ListUserForms(
    $filter: ModelUserFormsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        userFormsUserId
        userFormsCmpmId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserForms = /* GraphQL */ `
  query SyncUserForms(
    $filter: ModelUserFormsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserForms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        userFormsUserId
        userFormsCmpmId
      }
      nextToken
      startedAt
    }
  }
`;
export const getCMPMForm = /* GraphQL */ `
  query GetCMPMForm($id: ID!) {
    getCMPMForm(id: $id) {
      formGroup {
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
        userFormsUserId
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
export const listCMPMForms = /* GraphQL */ `
  query ListCMPMForms(
    $filter: ModelCMPMFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCMPMForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        formGroup {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userFormsUserId
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
      nextToken
      startedAt
    }
  }
`;
export const syncCMPMForms = /* GraphQL */ `
  query SyncCMPMForms(
    $filter: ModelCMPMFormFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCMPMForms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        formGroup {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userFormsUserId
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
      nextToken
      startedAt
    }
  }
`;
export const cMPMFormsByEmail = /* GraphQL */ `
  query CMPMFormsByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCMPMFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cMPMFormsByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        formGroup {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userFormsUserId
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
      nextToken
      startedAt
    }
  }
`;
export const getAPSSpeaker = /* GraphQL */ `
  query GetAPSSpeaker($id: ID!) {
    getAPSSpeaker(id: $id) {
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
export const listAPSSpeakers = /* GraphQL */ `
  query ListAPSSpeakers(
    $filter: ModelAPSSpeakerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSSpeakers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        apsHistory {
          id
          year
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
      nextToken
      startedAt
    }
  }
`;
export const syncAPSSpeakers = /* GraphQL */ `
  query SyncAPSSpeakers(
    $filter: ModelAPSSpeakerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAPSSpeakers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        apsHistory {
          id
          year
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
      nextToken
      startedAt
    }
  }
`;
export const getCertificateCourses = /* GraphQL */ `
  query GetCertificateCourses($id: ID!) {
    getCertificateCourses(id: $id) {
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
export const listCertificateCourses = /* GraphQL */ `
  query ListCertificateCourses(
    $filter: ModelCertificateCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCertificateCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCertificateCourses = /* GraphQL */ `
  query SyncCertificateCourses(
    $filter: ModelCertificateCoursesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCertificateCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const certificateCoursesByCertificateId = /* GraphQL */ `
  query CertificateCoursesByCertificateId(
    $certificateId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCertificateCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    certificateCoursesByCertificateId(
      certificateId: $certificateId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const certificateCoursesByCourseId = /* GraphQL */ `
  query CertificateCoursesByCourseId(
    $courseId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCertificateCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    certificateCoursesByCourseId(
      courseId: $courseId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getArticleRelatedCourses = /* GraphQL */ `
  query GetArticleRelatedCourses($id: ID!) {
    getArticleRelatedCourses(id: $id) {
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
export const listArticleRelatedCourses = /* GraphQL */ `
  query ListArticleRelatedCourses(
    $filter: ModelArticleRelatedCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticleRelatedCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncArticleRelatedCourses = /* GraphQL */ `
  query SyncArticleRelatedCourses(
    $filter: ModelArticleRelatedCoursesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncArticleRelatedCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const articleRelatedCoursesByCourseId = /* GraphQL */ `
  query ArticleRelatedCoursesByCourseId(
    $courseId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelArticleRelatedCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    articleRelatedCoursesByCourseId(
      courseId: $courseId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const articleRelatedCoursesByArticleId = /* GraphQL */ `
  query ArticleRelatedCoursesByArticleId(
    $articleId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelArticleRelatedCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    articleRelatedCoursesByArticleId(
      articleId: $articleId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getAPSUser = /* GraphQL */ `
  query GetAPSUser($id: ID!) {
    getAPSUser(id: $id) {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userFormsUserId
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
export const listAPSUsers = /* GraphQL */ `
  query ListAPSUsers(
    $filter: ModelAPSUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        aPSId
        userId
        aPS {
          id
          year
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
      nextToken
      startedAt
    }
  }
`;
export const syncAPSUsers = /* GraphQL */ `
  query SyncAPSUsers(
    $filter: ModelAPSUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAPSUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        aPSId
        userId
        aPS {
          id
          year
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
      nextToken
      startedAt
    }
  }
`;
export const aPSUsersByAPSId = /* GraphQL */ `
  query APSUsersByAPSId(
    $aPSId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAPSUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aPSUsersByAPSId(
      aPSId: $aPSId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        aPSId
        userId
        aPS {
          id
          year
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
      nextToken
      startedAt
    }
  }
`;
export const aPSUsersByUserId = /* GraphQL */ `
  query APSUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAPSUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aPSUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        aPSId
        userId
        aPS {
          id
          year
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
      nextToken
      startedAt
    }
  }
`;
export const getAPSSponsor = /* GraphQL */ `
  query GetAPSSponsor($id: ID!) {
    getAPSSponsor(id: $id) {
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
export const listAPSSponsors = /* GraphQL */ `
  query ListAPSSponsors(
    $filter: ModelAPSSponsorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSSponsors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        aPSId
        companyId
        aPS {
          id
          year
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        company {
          id
          name
          website
          email
          phone
          street_1
          street_2
          city
          state
          zip
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
      nextToken
      startedAt
    }
  }
`;
export const syncAPSSponsors = /* GraphQL */ `
  query SyncAPSSponsors(
    $filter: ModelAPSSponsorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAPSSponsors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        aPSId
        companyId
        aPS {
          id
          year
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        company {
          id
          name
          website
          email
          phone
          street_1
          street_2
          city
          state
          zip
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
      nextToken
      startedAt
    }
  }
`;
export const aPSSponsorsByAPSId = /* GraphQL */ `
  query APSSponsorsByAPSId(
    $aPSId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAPSSponsorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aPSSponsorsByAPSId(
      aPSId: $aPSId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        aPSId
        companyId
        aPS {
          id
          year
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        company {
          id
          name
          website
          email
          phone
          street_1
          street_2
          city
          state
          zip
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
      nextToken
      startedAt
    }
  }
`;
export const aPSSponsorsByCompanyId = /* GraphQL */ `
  query APSSponsorsByCompanyId(
    $companyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAPSSponsorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aPSSponsorsByCompanyId(
      companyId: $companyId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        aPSId
        companyId
        aPS {
          id
          year
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        company {
          id
          name
          website
          email
          phone
          street_1
          street_2
          city
          state
          zip
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
      nextToken
      startedAt
    }
  }
`;

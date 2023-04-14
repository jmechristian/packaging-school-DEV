/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      picture
      companyName
      companyTitle
      linkedin
      cmpmApplication {
        user {
          id
          name
          email
          picture
          companyName
          companyTitle
          linkedin
          createdAt
          updatedAt
          userCmpmApplicationId
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
        cMPMFormUserId
      }
      createdAt
      updatedAt
      userCmpmApplicationId
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
        email
        picture
        companyName
        companyTitle
        linkedin
        cmpmApplication {
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
          cMPMFormUserId
        }
        createdAt
        updatedAt
        userCmpmApplicationId
      }
      nextToken
    }
  }
`;
export const getCMPMForm = /* GraphQL */ `
  query GetCMPMForm($id: ID!) {
    getCMPMForm(id: $id) {
      user {
        id
        name
        email
        picture
        companyName
        companyTitle
        linkedin
        cmpmApplication {
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
          cMPMFormUserId
        }
        createdAt
        updatedAt
        userCmpmApplicationId
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
      cMPMFormUserId
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
        user {
          id
          name
          email
          picture
          companyName
          companyTitle
          linkedin
          createdAt
          updatedAt
          userCmpmApplicationId
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
        cMPMFormUserId
      }
      nextToken
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
        user {
          id
          name
          email
          picture
          companyName
          companyTitle
          linkedin
          createdAt
          updatedAt
          userCmpmApplicationId
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
        cMPMFormUserId
      }
      nextToken
    }
  }
`;

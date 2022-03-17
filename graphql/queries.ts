/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSubscriberGroup = /* GraphQL */ `
  query GetSubscriberGroup($id: ID!) {
    getSubscriberGroup(id: $id) {
      id
      name
      members {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSubscriberGroups = /* GraphQL */ `
  query ListSubscriberGroups(
    $filter: ModelSubscriberGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubscriberGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSubscriber = /* GraphQL */ `
  query GetSubscriber($id: ID!) {
    getSubscriber(id: $id) {
      id
      firstName
      lastName
      subscriberGroup {
        id
        name
        createdAt
        updatedAt
      }
      pubSubscriptions {
        nextToken
      }
      orders {
        nextToken
      }
      createdAt
      updatedAt
      subscriberGroupMembersId
    }
  }
`;
export const listSubscribers = /* GraphQL */ `
  query ListSubscribers(
    $filter: ModelSubscriberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubscribers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        createdAt
        updatedAt
        subscriberGroupMembersId
      }
      nextToken
    }
  }
`;
export const getPubSubscription = /* GraphQL */ `
  query GetPubSubscription($id: ID!) {
    getPubSubscription(id: $id) {
      id
      qty
      startDate
      status
      pendingQtyChanges {
        qty
        effectiveDate
      }
      periodical {
        id
        name
        recurrence
        createdAt
        updatedAt
      }
      subscriber {
        id
        firstName
        lastName
        createdAt
        updatedAt
        subscriberGroupMembersId
      }
      createdAt
      updatedAt
      subscriberPubSubscriptionsId
      periodicalPubSubscriptionsId
    }
  }
`;
export const listPubSubscriptions = /* GraphQL */ `
  query ListPubSubscriptions(
    $filter: ModelPubSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPubSubscriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        qty
        startDate
        status
        createdAt
        updatedAt
        subscriberPubSubscriptionsId
        periodicalPubSubscriptionsId
      }
      nextToken
    }
  }
`;
export const getPeriodical = /* GraphQL */ `
  query GetPeriodical($id: ID!) {
    getPeriodical(id: $id) {
      id
      name
      recurrence
      issues {
        nextToken
      }
      pubSubscriptions {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPeriodicals = /* GraphQL */ `
  query ListPeriodicals(
    $filter: ModelPeriodicalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeriodicals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        recurrence
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPeriodicalIssue = /* GraphQL */ `
  query GetPeriodicalIssue($id: ID!) {
    getPeriodicalIssue(id: $id) {
      id
      issueDate
      status
      periodical {
        id
        name
        recurrence
        createdAt
        updatedAt
      }
      orders {
        nextToken
      }
      createdAt
      updatedAt
      periodicalIssuesId
    }
  }
`;
export const listPeriodicalIssues = /* GraphQL */ `
  query ListPeriodicalIssues(
    $filter: ModelPeriodicalIssueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeriodicalIssues(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        issueDate
        status
        createdAt
        updatedAt
        periodicalIssuesId
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      placedDate
      isAutomaticOrder
      isPubSubscriptionOrder
      itemQty
      status
      cancellationReason
      itemID
      subscriberID
      periodicalIssue {
        id
        issueDate
        status
        createdAt
        updatedAt
        periodicalIssuesId
      }
      createdAt
      updatedAt
      subscriberOrdersId
      periodicalIssueOrdersId
      itemOrdersId
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        placedDate
        isAutomaticOrder
        isPubSubscriptionOrder
        itemQty
        status
        cancellationReason
        itemID
        subscriberID
        createdAt
        updatedAt
        subscriberOrdersId
        periodicalIssueOrdersId
        itemOrdersId
      }
      nextToken
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      name
      orders {
        nextToken
      }
      notes
      createdAt
      updatedAt
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        notes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const periodicalIssuesByStatus = /* GraphQL */ `
  query PeriodicalIssuesByStatus(
    $status: IssueStatus!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPeriodicalIssueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    periodicalIssuesByStatus(
      status: $status
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        issueDate
        status
        createdAt
        updatedAt
        periodicalIssuesId
      }
      nextToken
    }
  }
`;
export const ordersByStatus = /* GraphQL */ `
  query OrdersByStatus(
    $status: OrderStatus!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByStatus(
      status: $status
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        placedDate
        isAutomaticOrder
        isPubSubscriptionOrder
        itemQty
        status
        cancellationReason
        itemID
        subscriberID
        createdAt
        updatedAt
        subscriberOrdersId
        periodicalIssueOrdersId
        itemOrdersId
      }
      nextToken
    }
  }
`;
export const ordersBySubscriber = /* GraphQL */ `
  query OrdersBySubscriber(
    $subscriberID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersBySubscriber(
      subscriberID: $subscriberID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        placedDate
        isAutomaticOrder
        isPubSubscriptionOrder
        itemQty
        status
        cancellationReason
        itemID
        subscriberID
        createdAt
        updatedAt
        subscriberOrdersId
        periodicalIssueOrdersId
        itemOrdersId
      }
      nextToken
    }
  }
`;
export const ordersBySubscriberByStatus = /* GraphQL */ `
  query OrdersBySubscriberByStatus(
    $subscriberID: ID!
    $status: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersBySubscriberByStatus(
      subscriberID: $subscriberID
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        placedDate
        isAutomaticOrder
        isPubSubscriptionOrder
        itemQty
        status
        cancellationReason
        itemID
        subscriberID
        createdAt
        updatedAt
        subscriberOrdersId
        periodicalIssueOrdersId
        itemOrdersId
      }
      nextToken
    }
  }
`;
export const ordersBySubscriberByStatusByDate = /* GraphQL */ `
  query OrdersBySubscriberByStatusByDate(
    $subscriberID: ID!
    $statusPlacedDate: ModelOrderBySubscriberByStatusByDateCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersBySubscriberByStatusByDate(
      subscriberID: $subscriberID
      statusPlacedDate: $statusPlacedDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        placedDate
        isAutomaticOrder
        isPubSubscriptionOrder
        itemQty
        status
        cancellationReason
        itemID
        subscriberID
        createdAt
        updatedAt
        subscriberOrdersId
        periodicalIssueOrdersId
        itemOrdersId
      }
      nextToken
    }
  }
`;

/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSubscriberGroup = /* GraphQL */ `
  query GetSubscriberGroup($id: ID!) {
    getSubscriberGroup(id: $id) {
      id
      name
      members {
        items {
          id
          firstName
          lastName
          subscriberGroupID
          pubSubscriptions {
            nextToken
          }
          orders {
            nextToken
          }
          group {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
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
        members {
          items {
            id
            firstName
            lastName
            subscriberGroupID
            createdAt
            updatedAt
          }
          nextToken
        }
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
      subscriberGroupID
      pubSubscriptions {
        items {
          qty
          startDate
          status
          pendingQtyChange {
            qty
            effectiveDate
          }
          periodicalID
          subscriberID
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
            subscriberGroupID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      orders {
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
          periodicalIssueID
          subscriber {
            id
            firstName
            lastName
            subscriberGroupID
            createdAt
            updatedAt
          }
          periodicalIssue {
            id
            issueDate
            status
            periodicalID
            notes
            isBatchClosed
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      group {
        id
        name
        members {
          items {
            id
            firstName
            lastName
            subscriberGroupID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        subscriberGroupID
        pubSubscriptions {
          items {
            qty
            startDate
            status
            periodicalID
            subscriberID
            createdAt
            updatedAt
          }
          nextToken
        }
        orders {
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
            periodicalIssueID
            createdAt
            updatedAt
          }
          nextToken
        }
        group {
          id
          name
          members {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const subscribersByGroup = /* GraphQL */ `
  query SubscribersByGroup(
    $subscriberGroupID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSubscriberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    subscribersByGroup(
      subscriberGroupID: $subscriberGroupID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        firstName
        lastName
        subscriberGroupID
        pubSubscriptions {
          items {
            qty
            startDate
            status
            periodicalID
            subscriberID
            createdAt
            updatedAt
          }
          nextToken
        }
        orders {
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
            periodicalIssueID
            createdAt
            updatedAt
          }
          nextToken
        }
        group {
          id
          name
          members {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPubSubscription = /* GraphQL */ `
  query GetPubSubscription($periodicalID: ID!, $subscriberID: ID!) {
    getPubSubscription(
      periodicalID: $periodicalID
      subscriberID: $subscriberID
    ) {
      qty
      startDate
      status
      pendingQtyChange {
        qty
        effectiveDate
      }
      periodicalID
      subscriberID
      periodical {
        id
        name
        recurrence
        issues {
          items {
            id
            issueDate
            status
            periodicalID
            notes
            isBatchClosed
            createdAt
            updatedAt
          }
          nextToken
        }
        pubSubscriptions {
          items {
            qty
            startDate
            status
            periodicalID
            subscriberID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      subscriber {
        id
        firstName
        lastName
        subscriberGroupID
        pubSubscriptions {
          items {
            qty
            startDate
            status
            periodicalID
            subscriberID
            createdAt
            updatedAt
          }
          nextToken
        }
        orders {
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
            periodicalIssueID
            createdAt
            updatedAt
          }
          nextToken
        }
        group {
          id
          name
          members {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPubSubscriptions = /* GraphQL */ `
  query ListPubSubscriptions(
    $periodicalID: ID
    $subscriberID: ModelIDKeyConditionInput
    $filter: ModelPubSubscriptionFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPubSubscriptions(
      periodicalID: $periodicalID
      subscriberID: $subscriberID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        qty
        startDate
        status
        pendingQtyChange {
          qty
          effectiveDate
        }
        periodicalID
        subscriberID
        periodical {
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
        subscriber {
          id
          firstName
          lastName
          subscriberGroupID
          pubSubscriptions {
            nextToken
          }
          orders {
            nextToken
          }
          group {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const pubSubscriptionsByPeriodical = /* GraphQL */ `
  query PubSubscriptionsByPeriodical(
    $periodicalID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPubSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pubSubscriptionsByPeriodical(
      periodicalID: $periodicalID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        qty
        startDate
        status
        pendingQtyChange {
          qty
          effectiveDate
        }
        periodicalID
        subscriberID
        periodical {
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
        subscriber {
          id
          firstName
          lastName
          subscriberGroupID
          pubSubscriptions {
            nextToken
          }
          orders {
            nextToken
          }
          group {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const pubSubscriptionsBySubscriber = /* GraphQL */ `
  query PubSubscriptionsBySubscriber(
    $subscriberID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPubSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pubSubscriptionsBySubscriber(
      subscriberID: $subscriberID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        qty
        startDate
        status
        pendingQtyChange {
          qty
          effectiveDate
        }
        periodicalID
        subscriberID
        periodical {
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
        subscriber {
          id
          firstName
          lastName
          subscriberGroupID
          pubSubscriptions {
            nextToken
          }
          orders {
            nextToken
          }
          group {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
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
        items {
          id
          issueDate
          status
          periodicalID
          orders {
            nextToken
          }
          notes
          isBatchClosed
          periodical {
            id
            name
            recurrence
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      pubSubscriptions {
        items {
          qty
          startDate
          status
          pendingQtyChange {
            qty
            effectiveDate
          }
          periodicalID
          subscriberID
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
            subscriberGroupID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
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
        issues {
          items {
            id
            issueDate
            status
            periodicalID
            notes
            isBatchClosed
            createdAt
            updatedAt
          }
          nextToken
        }
        pubSubscriptions {
          items {
            qty
            startDate
            status
            periodicalID
            subscriberID
            createdAt
            updatedAt
          }
          nextToken
        }
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
      periodicalID
      orders {
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
          periodicalIssueID
          subscriber {
            id
            firstName
            lastName
            subscriberGroupID
            createdAt
            updatedAt
          }
          periodicalIssue {
            id
            issueDate
            status
            periodicalID
            notes
            isBatchClosed
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      notes
      isBatchClosed
      periodical {
        id
        name
        recurrence
        issues {
          items {
            id
            issueDate
            status
            periodicalID
            notes
            isBatchClosed
            createdAt
            updatedAt
          }
          nextToken
        }
        pubSubscriptions {
          items {
            qty
            startDate
            status
            periodicalID
            subscriberID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        periodicalID
        orders {
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
            periodicalIssueID
            createdAt
            updatedAt
          }
          nextToken
        }
        notes
        isBatchClosed
        periodical {
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
    $sortDirection: ModelSortDirection
    $filter: ModelPeriodicalIssueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    periodicalIssuesByStatus(
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        issueDate
        status
        periodicalID
        orders {
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
            periodicalIssueID
            createdAt
            updatedAt
          }
          nextToken
        }
        notes
        isBatchClosed
        periodical {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const periodicalIssuesByPeriodical = /* GraphQL */ `
  query PeriodicalIssuesByPeriodical(
    $periodicalID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPeriodicalIssueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    periodicalIssuesByPeriodical(
      periodicalID: $periodicalID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        issueDate
        status
        periodicalID
        orders {
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
            periodicalIssueID
            createdAt
            updatedAt
          }
          nextToken
        }
        notes
        isBatchClosed
        periodical {
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
        createdAt
        updatedAt
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
      periodicalIssueID
      subscriber {
        id
        firstName
        lastName
        subscriberGroupID
        pubSubscriptions {
          items {
            qty
            startDate
            status
            periodicalID
            subscriberID
            createdAt
            updatedAt
          }
          nextToken
        }
        orders {
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
            periodicalIssueID
            createdAt
            updatedAt
          }
          nextToken
        }
        group {
          id
          name
          members {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      periodicalIssue {
        id
        issueDate
        status
        periodicalID
        orders {
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
            periodicalIssueID
            createdAt
            updatedAt
          }
          nextToken
        }
        notes
        isBatchClosed
        periodical {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        periodicalIssueID
        subscriber {
          id
          firstName
          lastName
          subscriberGroupID
          pubSubscriptions {
            nextToken
          }
          orders {
            nextToken
          }
          group {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        periodicalIssue {
          id
          issueDate
          status
          periodicalID
          orders {
            nextToken
          }
          notes
          isBatchClosed
          periodical {
            id
            name
            recurrence
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const ordersByStatus = /* GraphQL */ `
  query OrdersByStatus(
    $status: OrderStatus!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByStatus(
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
        periodicalIssueID
        subscriber {
          id
          firstName
          lastName
          subscriberGroupID
          pubSubscriptions {
            nextToken
          }
          orders {
            nextToken
          }
          group {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        periodicalIssue {
          id
          issueDate
          status
          periodicalID
          orders {
            nextToken
          }
          notes
          isBatchClosed
          periodical {
            id
            name
            recurrence
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const ordersByItem = /* GraphQL */ `
  query OrdersByItem(
    $itemID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByItem(
      itemID: $itemID
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
        periodicalIssueID
        subscriber {
          id
          firstName
          lastName
          subscriberGroupID
          pubSubscriptions {
            nextToken
          }
          orders {
            nextToken
          }
          group {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        periodicalIssue {
          id
          issueDate
          status
          periodicalID
          orders {
            nextToken
          }
          notes
          isBatchClosed
          periodical {
            id
            name
            recurrence
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
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
        periodicalIssueID
        subscriber {
          id
          firstName
          lastName
          subscriberGroupID
          pubSubscriptions {
            nextToken
          }
          orders {
            nextToken
          }
          group {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        periodicalIssue {
          id
          issueDate
          status
          periodicalID
          orders {
            nextToken
          }
          notes
          isBatchClosed
          periodical {
            id
            name
            recurrence
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
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
        periodicalIssueID
        subscriber {
          id
          firstName
          lastName
          subscriberGroupID
          pubSubscriptions {
            nextToken
          }
          orders {
            nextToken
          }
          group {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        periodicalIssue {
          id
          issueDate
          status
          periodicalID
          orders {
            nextToken
          }
          notes
          isBatchClosed
          periodical {
            id
            name
            recurrence
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const ordersBySubscriberByDate = /* GraphQL */ `
  query OrdersBySubscriberByDate(
    $subscriberID: ID!
    $placedDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersBySubscriberByDate(
      subscriberID: $subscriberID
      placedDate: $placedDate
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
        periodicalIssueID
        subscriber {
          id
          firstName
          lastName
          subscriberGroupID
          pubSubscriptions {
            nextToken
          }
          orders {
            nextToken
          }
          group {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        periodicalIssue {
          id
          issueDate
          status
          periodicalID
          orders {
            nextToken
          }
          notes
          isBatchClosed
          periodical {
            id
            name
            recurrence
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const ordersByPeriodicalIssue = /* GraphQL */ `
  query OrdersByPeriodicalIssue(
    $periodicalIssueID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByPeriodicalIssue(
      periodicalIssueID: $periodicalIssueID
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
        periodicalIssueID
        subscriber {
          id
          firstName
          lastName
          subscriberGroupID
          pubSubscriptions {
            nextToken
          }
          orders {
            nextToken
          }
          group {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        periodicalIssue {
          id
          issueDate
          status
          periodicalID
          orders {
            nextToken
          }
          notes
          isBatchClosed
          periodical {
            id
            name
            recurrence
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const ordersByPeriodicalIssueByStatus = /* GraphQL */ `
  query OrdersByPeriodicalIssueByStatus(
    $periodicalIssueID: ID!
    $status: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByPeriodicalIssueByStatus(
      periodicalIssueID: $periodicalIssueID
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
        periodicalIssueID
        subscriber {
          id
          firstName
          lastName
          subscriberGroupID
          pubSubscriptions {
            nextToken
          }
          orders {
            nextToken
          }
          group {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        periodicalIssue {
          id
          issueDate
          status
          periodicalID
          orders {
            nextToken
          }
          notes
          isBatchClosed
          periodical {
            id
            name
            recurrence
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
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
          periodicalIssueID
          subscriber {
            id
            firstName
            lastName
            subscriberGroupID
            createdAt
            updatedAt
          }
          periodicalIssue {
            id
            issueDate
            status
            periodicalID
            notes
            isBatchClosed
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
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
        orders {
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
            periodicalIssueID
            createdAt
            updatedAt
          }
          nextToken
        }
        notes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

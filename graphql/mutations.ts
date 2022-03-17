/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSubscriberGroup = /* GraphQL */ `
  mutation CreateSubscriberGroup(
    $input: CreateSubscriberGroupInput!
    $condition: ModelSubscriberGroupConditionInput
  ) {
    createSubscriberGroup(input: $input, condition: $condition) {
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
export const updateSubscriberGroup = /* GraphQL */ `
  mutation UpdateSubscriberGroup(
    $input: UpdateSubscriberGroupInput!
    $condition: ModelSubscriberGroupConditionInput
  ) {
    updateSubscriberGroup(input: $input, condition: $condition) {
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
export const deleteSubscriberGroup = /* GraphQL */ `
  mutation DeleteSubscriberGroup(
    $input: DeleteSubscriberGroupInput!
    $condition: ModelSubscriberGroupConditionInput
  ) {
    deleteSubscriberGroup(input: $input, condition: $condition) {
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
export const createSubscriber = /* GraphQL */ `
  mutation CreateSubscriber(
    $input: CreateSubscriberInput!
    $condition: ModelSubscriberConditionInput
  ) {
    createSubscriber(input: $input, condition: $condition) {
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
export const updateSubscriber = /* GraphQL */ `
  mutation UpdateSubscriber(
    $input: UpdateSubscriberInput!
    $condition: ModelSubscriberConditionInput
  ) {
    updateSubscriber(input: $input, condition: $condition) {
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
export const deleteSubscriber = /* GraphQL */ `
  mutation DeleteSubscriber(
    $input: DeleteSubscriberInput!
    $condition: ModelSubscriberConditionInput
  ) {
    deleteSubscriber(input: $input, condition: $condition) {
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
export const createPubSubscription = /* GraphQL */ `
  mutation CreatePubSubscription(
    $input: CreatePubSubscriptionInput!
    $condition: ModelPubSubscriptionConditionInput
  ) {
    createPubSubscription(input: $input, condition: $condition) {
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
export const updatePubSubscription = /* GraphQL */ `
  mutation UpdatePubSubscription(
    $input: UpdatePubSubscriptionInput!
    $condition: ModelPubSubscriptionConditionInput
  ) {
    updatePubSubscription(input: $input, condition: $condition) {
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
export const deletePubSubscription = /* GraphQL */ `
  mutation DeletePubSubscription(
    $input: DeletePubSubscriptionInput!
    $condition: ModelPubSubscriptionConditionInput
  ) {
    deletePubSubscription(input: $input, condition: $condition) {
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
export const createPeriodical = /* GraphQL */ `
  mutation CreatePeriodical(
    $input: CreatePeriodicalInput!
    $condition: ModelPeriodicalConditionInput
  ) {
    createPeriodical(input: $input, condition: $condition) {
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
export const updatePeriodical = /* GraphQL */ `
  mutation UpdatePeriodical(
    $input: UpdatePeriodicalInput!
    $condition: ModelPeriodicalConditionInput
  ) {
    updatePeriodical(input: $input, condition: $condition) {
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
export const deletePeriodical = /* GraphQL */ `
  mutation DeletePeriodical(
    $input: DeletePeriodicalInput!
    $condition: ModelPeriodicalConditionInput
  ) {
    deletePeriodical(input: $input, condition: $condition) {
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
export const createPeriodicalIssue = /* GraphQL */ `
  mutation CreatePeriodicalIssue(
    $input: CreatePeriodicalIssueInput!
    $condition: ModelPeriodicalIssueConditionInput
  ) {
    createPeriodicalIssue(input: $input, condition: $condition) {
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
export const updatePeriodicalIssue = /* GraphQL */ `
  mutation UpdatePeriodicalIssue(
    $input: UpdatePeriodicalIssueInput!
    $condition: ModelPeriodicalIssueConditionInput
  ) {
    updatePeriodicalIssue(input: $input, condition: $condition) {
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
export const deletePeriodicalIssue = /* GraphQL */ `
  mutation DeletePeriodicalIssue(
    $input: DeletePeriodicalIssueInput!
    $condition: ModelPeriodicalIssueConditionInput
  ) {
    deletePeriodicalIssue(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
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
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
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
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
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

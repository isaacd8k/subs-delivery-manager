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
export const updateSubscriberGroup = /* GraphQL */ `
  mutation UpdateSubscriberGroup(
    $input: UpdateSubscriberGroupInput!
    $condition: ModelSubscriberGroupConditionInput
  ) {
    updateSubscriberGroup(input: $input, condition: $condition) {
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
export const deleteSubscriberGroup = /* GraphQL */ `
  mutation DeleteSubscriberGroup(
    $input: DeleteSubscriberGroupInput!
    $condition: ModelSubscriberGroupConditionInput
  ) {
    deleteSubscriberGroup(input: $input, condition: $condition) {
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
export const createSubscriber = /* GraphQL */ `
  mutation CreateSubscriber(
    $input: CreateSubscriberInput!
    $condition: ModelSubscriberConditionInput
  ) {
    createSubscriber(input: $input, condition: $condition) {
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
export const updateSubscriber = /* GraphQL */ `
  mutation UpdateSubscriber(
    $input: UpdateSubscriberInput!
    $condition: ModelSubscriberConditionInput
  ) {
    updateSubscriber(input: $input, condition: $condition) {
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
export const deleteSubscriber = /* GraphQL */ `
  mutation DeleteSubscriber(
    $input: DeleteSubscriberInput!
    $condition: ModelSubscriberConditionInput
  ) {
    deleteSubscriber(input: $input, condition: $condition) {
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
export const createPubSubscription = /* GraphQL */ `
  mutation CreatePubSubscription(
    $input: CreatePubSubscriptionInput!
    $condition: ModelPubSubscriptionConditionInput
  ) {
    createPubSubscription(input: $input, condition: $condition) {
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
export const updatePubSubscription = /* GraphQL */ `
  mutation UpdatePubSubscription(
    $input: UpdatePubSubscriptionInput!
    $condition: ModelPubSubscriptionConditionInput
  ) {
    updatePubSubscription(input: $input, condition: $condition) {
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
export const deletePubSubscription = /* GraphQL */ `
  mutation DeletePubSubscription(
    $input: DeletePubSubscriptionInput!
    $condition: ModelPubSubscriptionConditionInput
  ) {
    deletePubSubscription(input: $input, condition: $condition) {
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
export const createPeriodicalIssue = /* GraphQL */ `
  mutation CreatePeriodicalIssue(
    $input: CreatePeriodicalIssueInput!
    $condition: ModelPeriodicalIssueConditionInput
  ) {
    createPeriodicalIssue(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      periodicalIssueID
      createdAt
      updatedAt
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
      periodicalIssueID
      createdAt
      updatedAt
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
      periodicalIssueID
      createdAt
      updatedAt
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
  }
`;

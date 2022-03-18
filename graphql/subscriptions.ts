/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSubscriberGroup = /* GraphQL */ `
  subscription OnCreateSubscriberGroup {
    onCreateSubscriberGroup {
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
export const onUpdateSubscriberGroup = /* GraphQL */ `
  subscription OnUpdateSubscriberGroup {
    onUpdateSubscriberGroup {
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
export const onDeleteSubscriberGroup = /* GraphQL */ `
  subscription OnDeleteSubscriberGroup {
    onDeleteSubscriberGroup {
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
export const onCreateSubscriber = /* GraphQL */ `
  subscription OnCreateSubscriber {
    onCreateSubscriber {
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSubscriber = /* GraphQL */ `
  subscription OnUpdateSubscriber {
    onUpdateSubscriber {
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSubscriber = /* GraphQL */ `
  subscription OnDeleteSubscriber {
    onDeleteSubscriber {
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePubSubscription = /* GraphQL */ `
  subscription OnCreatePubSubscription {
    onCreatePubSubscription {
      id
      qty
      startDate
      status
      pendingQtyChanges {
        qty
        effectiveDate
      }
      periodicalID
      subscriberID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePubSubscription = /* GraphQL */ `
  subscription OnUpdatePubSubscription {
    onUpdatePubSubscription {
      id
      qty
      startDate
      status
      pendingQtyChanges {
        qty
        effectiveDate
      }
      periodicalID
      subscriberID
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePubSubscription = /* GraphQL */ `
  subscription OnDeletePubSubscription {
    onDeletePubSubscription {
      id
      qty
      startDate
      status
      pendingQtyChanges {
        qty
        effectiveDate
      }
      periodicalID
      subscriberID
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePeriodical = /* GraphQL */ `
  subscription OnCreatePeriodical {
    onCreatePeriodical {
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
export const onUpdatePeriodical = /* GraphQL */ `
  subscription OnUpdatePeriodical {
    onUpdatePeriodical {
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
export const onDeletePeriodical = /* GraphQL */ `
  subscription OnDeletePeriodical {
    onDeletePeriodical {
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
export const onCreatePeriodicalIssue = /* GraphQL */ `
  subscription OnCreatePeriodicalIssue {
    onCreatePeriodicalIssue {
      id
      issueDate
      status
      periodicalID
      orders {
        nextToken
      }
      notes
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePeriodicalIssue = /* GraphQL */ `
  subscription OnUpdatePeriodicalIssue {
    onUpdatePeriodicalIssue {
      id
      issueDate
      status
      periodicalID
      orders {
        nextToken
      }
      notes
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePeriodicalIssue = /* GraphQL */ `
  subscription OnDeletePeriodicalIssue {
    onDeletePeriodicalIssue {
      id
      issueDate
      status
      periodicalID
      orders {
        nextToken
      }
      notes
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
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

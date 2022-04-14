/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSubscriberGroup = /* GraphQL */ `
  subscription OnCreateSubscriberGroup {
    onCreateSubscriberGroup {
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
export const onUpdateSubscriberGroup = /* GraphQL */ `
  subscription OnUpdateSubscriberGroup {
    onUpdateSubscriberGroup {
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
export const onDeleteSubscriberGroup = /* GraphQL */ `
  subscription OnDeleteSubscriberGroup {
    onDeleteSubscriberGroup {
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
export const onCreateSubscriber = /* GraphQL */ `
  subscription OnCreateSubscriber {
    onCreateSubscriber {
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePubSubscription = /* GraphQL */ `
  subscription OnCreatePubSubscription {
    onCreatePubSubscription {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePubSubscription = /* GraphQL */ `
  subscription OnUpdatePubSubscription {
    onUpdatePubSubscription {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePubSubscription = /* GraphQL */ `
  subscription OnDeletePubSubscription {
    onDeletePubSubscription {
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
        createdAt
        updatedAt
      }
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
export const onUpdatePeriodical = /* GraphQL */ `
  subscription OnUpdatePeriodical {
    onUpdatePeriodical {
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
export const onDeletePeriodical = /* GraphQL */ `
  subscription OnDeletePeriodical {
    onDeletePeriodical {
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
export const onCreatePeriodicalIssue = /* GraphQL */ `
  subscription OnCreatePeriodicalIssue {
    onCreatePeriodicalIssue {
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
export const onUpdatePeriodicalIssue = /* GraphQL */ `
  subscription OnUpdatePeriodicalIssue {
    onUpdatePeriodicalIssue {
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
export const onDeletePeriodicalIssue = /* GraphQL */ `
  subscription OnDeletePeriodicalIssue {
    onDeletePeriodicalIssue {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
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

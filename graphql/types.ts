/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type ModelPubSubscriptionConnection = {
  __typename: "ModelPubSubscriptionConnection",
  items:  Array<PubSubscription | null >,
  nextToken?: string | null,
};

export type PubSubscription = {
  __typename: "PubSubscription",
  qty: number,
  startDate?: string | null,
  status: PubSubscriptionStatus,
  pendingQtyChange?: PendingQtyChange | null,
  periodicalID: string,
  subscriberID: string,
  periodical: Periodical,
  subscriber: Subscriber,
  createdAt: string,
  updatedAt: string,
};

export enum PubSubscriptionStatus {
  ACTIVE = "ACTIVE",
  CANCELED = "CANCELED",
}


export type PendingQtyChange = {
  __typename: "PendingQtyChange",
  qty: number,
  effectiveDate: string,
};

export type Periodical = {
  __typename: "Periodical",
  id: string,
  name: string,
  recurrence: PeriodicalRecurrence,
  issues?: ModelPeriodicalIssueConnection | null,
  pubSubscriptions?: ModelPubSubscriptionConnection | null,
  createdAt: string,
  updatedAt: string,
};

export enum PeriodicalRecurrence {
  MONTHLY = "MONTHLY",
  BIMONTHLY = "BIMONTHLY",
  QUARTERLY = "QUARTERLY",
}


export type ModelPeriodicalIssueConnection = {
  __typename: "ModelPeriodicalIssueConnection",
  items:  Array<PeriodicalIssue | null >,
  nextToken?: string | null,
};

export type PeriodicalIssue = {
  __typename: "PeriodicalIssue",
  id: string,
  issueDate: string,
  status: IssueStatus,
  periodicalID: string,
  orders?: ModelOrderConnection | null,
  notes?: string | null,
  isBatchClosed: boolean,
  periodical: Periodical,
  createdAt: string,
  updatedAt: string,
};

export enum IssueStatus {
  UPCOMING = "UPCOMING",
  RECEIVED = "RECEIVED",
  SKIPPED = "SKIPPED",
}


export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  placedDate: string,
  isAutomaticOrder: boolean,
  isPubSubscriptionOrder: boolean,
  itemQty: number,
  status: OrderStatus,
  cancellationReason?: string | null,
  itemID?: string | null,
  subscriberID: string,
  periodicalIssueID?: string | null,
  subscriber: Subscriber,
  periodicalIssue?: PeriodicalIssue | null,
  createdAt: string,
  updatedAt: string,
};

export enum OrderStatus {
  PLACED = "PLACED",
  RECEIVED = "RECEIVED",
  DELIVERED = "DELIVERED",
  CANCELED = "CANCELED",
}


export type Subscriber = {
  __typename: "Subscriber",
  id: string,
  firstName: string,
  lastName: string,
  subscriberGroupID?: string | null,
  pubSubscriptions?: ModelPubSubscriptionConnection | null,
  orders?: ModelOrderConnection | null,
  group?: SubscriberGroup | null,
  createdAt: string,
  updatedAt: string,
};

export type SubscriberGroup = {
  __typename: "SubscriberGroup",
  id: string,
  name: string,
  members?: ModelSubscriberConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelSubscriberConnection = {
  __typename: "ModelSubscriberConnection",
  items:  Array<Subscriber | null >,
  nextToken?: string | null,
};

export type CreateSubscriberGroupInput = {
  id?: string | null,
  name: string,
};

export type ModelSubscriberGroupConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelSubscriberGroupConditionInput | null > | null,
  or?: Array< ModelSubscriberGroupConditionInput | null > | null,
  not?: ModelSubscriberGroupConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateSubscriberGroupInput = {
  id: string,
  name?: string | null,
};

export type DeleteSubscriberGroupInput = {
  id: string,
};

export type CreateSubscriberInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  subscriberGroupID?: string | null,
};

export type ModelSubscriberConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  subscriberGroupID?: ModelIDInput | null,
  and?: Array< ModelSubscriberConditionInput | null > | null,
  or?: Array< ModelSubscriberConditionInput | null > | null,
  not?: ModelSubscriberConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateSubscriberInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  subscriberGroupID?: string | null,
};

export type DeleteSubscriberInput = {
  id: string,
};

export type CreatePubSubscriptionInput = {
  qty: number,
  startDate?: string | null,
  status: PubSubscriptionStatus,
  pendingQtyChange?: PendingQtyChangeInput | null,
  periodicalID: string,
  subscriberID: string,
};

export type PendingQtyChangeInput = {
  qty: number,
  effectiveDate: string,
};

export type ModelPubSubscriptionConditionInput = {
  qty?: ModelIntInput | null,
  startDate?: ModelStringInput | null,
  status?: ModelPubSubscriptionStatusInput | null,
  and?: Array< ModelPubSubscriptionConditionInput | null > | null,
  or?: Array< ModelPubSubscriptionConditionInput | null > | null,
  not?: ModelPubSubscriptionConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelPubSubscriptionStatusInput = {
  eq?: PubSubscriptionStatus | null,
  ne?: PubSubscriptionStatus | null,
};

export type UpdatePubSubscriptionInput = {
  qty?: number | null,
  startDate?: string | null,
  status?: PubSubscriptionStatus | null,
  pendingQtyChange?: PendingQtyChangeInput | null,
  periodicalID: string,
  subscriberID: string,
};

export type DeletePubSubscriptionInput = {
  periodicalID: string,
  subscriberID: string,
};

export type CreatePeriodicalInput = {
  id?: string | null,
  name: string,
  recurrence: PeriodicalRecurrence,
};

export type ModelPeriodicalConditionInput = {
  name?: ModelStringInput | null,
  recurrence?: ModelPeriodicalRecurrenceInput | null,
  and?: Array< ModelPeriodicalConditionInput | null > | null,
  or?: Array< ModelPeriodicalConditionInput | null > | null,
  not?: ModelPeriodicalConditionInput | null,
};

export type ModelPeriodicalRecurrenceInput = {
  eq?: PeriodicalRecurrence | null,
  ne?: PeriodicalRecurrence | null,
};

export type UpdatePeriodicalInput = {
  id: string,
  name?: string | null,
  recurrence?: PeriodicalRecurrence | null,
};

export type DeletePeriodicalInput = {
  id: string,
};

export type CreatePeriodicalIssueInput = {
  id?: string | null,
  issueDate: string,
  status: IssueStatus,
  periodicalID: string,
  notes?: string | null,
  isBatchClosed: boolean,
};

export type ModelPeriodicalIssueConditionInput = {
  issueDate?: ModelStringInput | null,
  status?: ModelIssueStatusInput | null,
  periodicalID?: ModelIDInput | null,
  notes?: ModelStringInput | null,
  isBatchClosed?: ModelBooleanInput | null,
  and?: Array< ModelPeriodicalIssueConditionInput | null > | null,
  or?: Array< ModelPeriodicalIssueConditionInput | null > | null,
  not?: ModelPeriodicalIssueConditionInput | null,
};

export type ModelIssueStatusInput = {
  eq?: IssueStatus | null,
  ne?: IssueStatus | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdatePeriodicalIssueInput = {
  id: string,
  issueDate?: string | null,
  status?: IssueStatus | null,
  periodicalID?: string | null,
  notes?: string | null,
  isBatchClosed?: boolean | null,
};

export type DeletePeriodicalIssueInput = {
  id: string,
};

export type CreateOrderInput = {
  id?: string | null,
  placedDate: string,
  isAutomaticOrder: boolean,
  isPubSubscriptionOrder: boolean,
  itemQty: number,
  status: OrderStatus,
  cancellationReason?: string | null,
  itemID?: string | null,
  subscriberID: string,
  periodicalIssueID?: string | null,
};

export type ModelOrderConditionInput = {
  placedDate?: ModelStringInput | null,
  isAutomaticOrder?: ModelBooleanInput | null,
  isPubSubscriptionOrder?: ModelBooleanInput | null,
  itemQty?: ModelIntInput | null,
  status?: ModelOrderStatusInput | null,
  cancellationReason?: ModelStringInput | null,
  itemID?: ModelIDInput | null,
  subscriberID?: ModelIDInput | null,
  periodicalIssueID?: ModelIDInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type ModelOrderStatusInput = {
  eq?: OrderStatus | null,
  ne?: OrderStatus | null,
};

export type UpdateOrderInput = {
  id: string,
  placedDate?: string | null,
  isAutomaticOrder?: boolean | null,
  isPubSubscriptionOrder?: boolean | null,
  itemQty?: number | null,
  status?: OrderStatus | null,
  cancellationReason?: string | null,
  itemID?: string | null,
  subscriberID?: string | null,
  periodicalIssueID?: string | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type CreateItemInput = {
  id?: string | null,
  name: string,
  notes?: string | null,
};

export type ModelItemConditionInput = {
  name?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelItemConditionInput | null > | null,
  or?: Array< ModelItemConditionInput | null > | null,
  not?: ModelItemConditionInput | null,
};

export type Item = {
  __typename: "Item",
  id: string,
  name: string,
  orders?: ModelOrderConnection | null,
  notes?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateItemInput = {
  id: string,
  name?: string | null,
  notes?: string | null,
};

export type DeleteItemInput = {
  id: string,
};

export type ModelSubscriberGroupFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelSubscriberGroupFilterInput | null > | null,
  or?: Array< ModelSubscriberGroupFilterInput | null > | null,
  not?: ModelSubscriberGroupFilterInput | null,
};

export type ModelSubscriberGroupConnection = {
  __typename: "ModelSubscriberGroupConnection",
  items:  Array<SubscriberGroup | null >,
  nextToken?: string | null,
};

export type ModelSubscriberFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  subscriberGroupID?: ModelIDInput | null,
  and?: Array< ModelSubscriberFilterInput | null > | null,
  or?: Array< ModelSubscriberFilterInput | null > | null,
  not?: ModelSubscriberFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelPubSubscriptionFilterInput = {
  qty?: ModelIntInput | null,
  startDate?: ModelStringInput | null,
  status?: ModelPubSubscriptionStatusInput | null,
  periodicalID?: ModelIDInput | null,
  subscriberID?: ModelIDInput | null,
  and?: Array< ModelPubSubscriptionFilterInput | null > | null,
  or?: Array< ModelPubSubscriptionFilterInput | null > | null,
  not?: ModelPubSubscriptionFilterInput | null,
};

export type ModelPeriodicalFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  recurrence?: ModelPeriodicalRecurrenceInput | null,
  and?: Array< ModelPeriodicalFilterInput | null > | null,
  or?: Array< ModelPeriodicalFilterInput | null > | null,
  not?: ModelPeriodicalFilterInput | null,
};

export type ModelPeriodicalConnection = {
  __typename: "ModelPeriodicalConnection",
  items:  Array<Periodical | null >,
  nextToken?: string | null,
};

export type ModelPeriodicalIssueFilterInput = {
  id?: ModelIDInput | null,
  issueDate?: ModelStringInput | null,
  status?: ModelIssueStatusInput | null,
  periodicalID?: ModelIDInput | null,
  notes?: ModelStringInput | null,
  isBatchClosed?: ModelBooleanInput | null,
  and?: Array< ModelPeriodicalIssueFilterInput | null > | null,
  or?: Array< ModelPeriodicalIssueFilterInput | null > | null,
  not?: ModelPeriodicalIssueFilterInput | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  placedDate?: ModelStringInput | null,
  isAutomaticOrder?: ModelBooleanInput | null,
  isPubSubscriptionOrder?: ModelBooleanInput | null,
  itemQty?: ModelIntInput | null,
  status?: ModelOrderStatusInput | null,
  cancellationReason?: ModelStringInput | null,
  itemID?: ModelIDInput | null,
  subscriberID?: ModelIDInput | null,
  periodicalIssueID?: ModelIDInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelItemFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelItemFilterInput | null > | null,
  or?: Array< ModelItemFilterInput | null > | null,
  not?: ModelItemFilterInput | null,
};

export type ModelItemConnection = {
  __typename: "ModelItemConnection",
  items:  Array<Item | null >,
  nextToken?: string | null,
};

export type ListActiveSubscribersQueryVariables = {
  periodicalID: string,
};

export type ListActiveSubscribersQuery = {
  listPubSubscriptions?:  {
    __typename: "ModelPubSubscriptionConnection",
    items:  Array< {
      __typename: "PubSubscription",
      subscriberID: string,
    } | null >,
  } | null,
};

export type CreateSubscriberGroupMutationVariables = {
  input: CreateSubscriberGroupInput,
  condition?: ModelSubscriberGroupConditionInput | null,
};

export type CreateSubscriberGroupMutation = {
  createSubscriberGroup?:  {
    __typename: "SubscriberGroup",
    id: string,
    name: string,
    members?:  {
      __typename: "ModelSubscriberConnection",
      items:  Array< {
        __typename: "Subscriber",
        id: string,
        firstName: string,
        lastName: string,
        subscriberGroupID?: string | null,
        pubSubscriptions?:  {
          __typename: "ModelPubSubscriptionConnection",
          nextToken?: string | null,
        } | null,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        group?:  {
          __typename: "SubscriberGroup",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSubscriberGroupMutationVariables = {
  input: UpdateSubscriberGroupInput,
  condition?: ModelSubscriberGroupConditionInput | null,
};

export type UpdateSubscriberGroupMutation = {
  updateSubscriberGroup?:  {
    __typename: "SubscriberGroup",
    id: string,
    name: string,
    members?:  {
      __typename: "ModelSubscriberConnection",
      items:  Array< {
        __typename: "Subscriber",
        id: string,
        firstName: string,
        lastName: string,
        subscriberGroupID?: string | null,
        pubSubscriptions?:  {
          __typename: "ModelPubSubscriptionConnection",
          nextToken?: string | null,
        } | null,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        group?:  {
          __typename: "SubscriberGroup",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSubscriberGroupMutationVariables = {
  input: DeleteSubscriberGroupInput,
  condition?: ModelSubscriberGroupConditionInput | null,
};

export type DeleteSubscriberGroupMutation = {
  deleteSubscriberGroup?:  {
    __typename: "SubscriberGroup",
    id: string,
    name: string,
    members?:  {
      __typename: "ModelSubscriberConnection",
      items:  Array< {
        __typename: "Subscriber",
        id: string,
        firstName: string,
        lastName: string,
        subscriberGroupID?: string | null,
        pubSubscriptions?:  {
          __typename: "ModelPubSubscriptionConnection",
          nextToken?: string | null,
        } | null,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        group?:  {
          __typename: "SubscriberGroup",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSubscriberMutationVariables = {
  input: CreateSubscriberInput,
  condition?: ModelSubscriberConditionInput | null,
};

export type CreateSubscriberMutation = {
  createSubscriber?:  {
    __typename: "Subscriber",
    id: string,
    firstName: string,
    lastName: string,
    subscriberGroupID?: string | null,
    pubSubscriptions?:  {
      __typename: "ModelPubSubscriptionConnection",
      items:  Array< {
        __typename: "PubSubscription",
        qty: number,
        startDate?: string | null,
        status: PubSubscriptionStatus,
        pendingQtyChange?:  {
          __typename: "PendingQtyChange",
          qty: number,
          effectiveDate: string,
        } | null,
        periodicalID: string,
        subscriberID: string,
        periodical:  {
          __typename: "Periodical",
          id: string,
          name: string,
          recurrence: PeriodicalRecurrence,
          createdAt: string,
          updatedAt: string,
        },
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        placedDate: string,
        isAutomaticOrder: boolean,
        isPubSubscriptionOrder: boolean,
        itemQty: number,
        status: OrderStatus,
        cancellationReason?: string | null,
        itemID?: string | null,
        subscriberID: string,
        periodicalIssueID?: string | null,
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        periodicalIssue?:  {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    group?:  {
      __typename: "SubscriberGroup",
      id: string,
      name: string,
      members?:  {
        __typename: "ModelSubscriberConnection",
        items:  Array< {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSubscriberMutationVariables = {
  input: UpdateSubscriberInput,
  condition?: ModelSubscriberConditionInput | null,
};

export type UpdateSubscriberMutation = {
  updateSubscriber?:  {
    __typename: "Subscriber",
    id: string,
    firstName: string,
    lastName: string,
    subscriberGroupID?: string | null,
    pubSubscriptions?:  {
      __typename: "ModelPubSubscriptionConnection",
      items:  Array< {
        __typename: "PubSubscription",
        qty: number,
        startDate?: string | null,
        status: PubSubscriptionStatus,
        pendingQtyChange?:  {
          __typename: "PendingQtyChange",
          qty: number,
          effectiveDate: string,
        } | null,
        periodicalID: string,
        subscriberID: string,
        periodical:  {
          __typename: "Periodical",
          id: string,
          name: string,
          recurrence: PeriodicalRecurrence,
          createdAt: string,
          updatedAt: string,
        },
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        placedDate: string,
        isAutomaticOrder: boolean,
        isPubSubscriptionOrder: boolean,
        itemQty: number,
        status: OrderStatus,
        cancellationReason?: string | null,
        itemID?: string | null,
        subscriberID: string,
        periodicalIssueID?: string | null,
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        periodicalIssue?:  {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    group?:  {
      __typename: "SubscriberGroup",
      id: string,
      name: string,
      members?:  {
        __typename: "ModelSubscriberConnection",
        items:  Array< {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSubscriberMutationVariables = {
  input: DeleteSubscriberInput,
  condition?: ModelSubscriberConditionInput | null,
};

export type DeleteSubscriberMutation = {
  deleteSubscriber?:  {
    __typename: "Subscriber",
    id: string,
    firstName: string,
    lastName: string,
    subscriberGroupID?: string | null,
    pubSubscriptions?:  {
      __typename: "ModelPubSubscriptionConnection",
      items:  Array< {
        __typename: "PubSubscription",
        qty: number,
        startDate?: string | null,
        status: PubSubscriptionStatus,
        pendingQtyChange?:  {
          __typename: "PendingQtyChange",
          qty: number,
          effectiveDate: string,
        } | null,
        periodicalID: string,
        subscriberID: string,
        periodical:  {
          __typename: "Periodical",
          id: string,
          name: string,
          recurrence: PeriodicalRecurrence,
          createdAt: string,
          updatedAt: string,
        },
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        placedDate: string,
        isAutomaticOrder: boolean,
        isPubSubscriptionOrder: boolean,
        itemQty: number,
        status: OrderStatus,
        cancellationReason?: string | null,
        itemID?: string | null,
        subscriberID: string,
        periodicalIssueID?: string | null,
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        periodicalIssue?:  {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    group?:  {
      __typename: "SubscriberGroup",
      id: string,
      name: string,
      members?:  {
        __typename: "ModelSubscriberConnection",
        items:  Array< {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePubSubscriptionMutationVariables = {
  input: CreatePubSubscriptionInput,
  condition?: ModelPubSubscriptionConditionInput | null,
};

export type CreatePubSubscriptionMutation = {
  createPubSubscription?:  {
    __typename: "PubSubscription",
    qty: number,
    startDate?: string | null,
    status: PubSubscriptionStatus,
    pendingQtyChange?:  {
      __typename: "PendingQtyChange",
      qty: number,
      effectiveDate: string,
    } | null,
    periodicalID: string,
    subscriberID: string,
    periodical:  {
      __typename: "Periodical",
      id: string,
      name: string,
      recurrence: PeriodicalRecurrence,
      issues?:  {
        __typename: "ModelPeriodicalIssueConnection",
        items:  Array< {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      pubSubscriptions?:  {
        __typename: "ModelPubSubscriptionConnection",
        items:  Array< {
          __typename: "PubSubscription",
          qty: number,
          startDate?: string | null,
          status: PubSubscriptionStatus,
          periodicalID: string,
          subscriberID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    subscriber:  {
      __typename: "Subscriber",
      id: string,
      firstName: string,
      lastName: string,
      subscriberGroupID?: string | null,
      pubSubscriptions?:  {
        __typename: "ModelPubSubscriptionConnection",
        items:  Array< {
          __typename: "PubSubscription",
          qty: number,
          startDate?: string | null,
          status: PubSubscriptionStatus,
          periodicalID: string,
          subscriberID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          placedDate: string,
          isAutomaticOrder: boolean,
          isPubSubscriptionOrder: boolean,
          itemQty: number,
          status: OrderStatus,
          cancellationReason?: string | null,
          itemID?: string | null,
          subscriberID: string,
          periodicalIssueID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      group?:  {
        __typename: "SubscriberGroup",
        id: string,
        name: string,
        members?:  {
          __typename: "ModelSubscriberConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePubSubscriptionMutationVariables = {
  input: UpdatePubSubscriptionInput,
  condition?: ModelPubSubscriptionConditionInput | null,
};

export type UpdatePubSubscriptionMutation = {
  updatePubSubscription?:  {
    __typename: "PubSubscription",
    qty: number,
    startDate?: string | null,
    status: PubSubscriptionStatus,
    pendingQtyChange?:  {
      __typename: "PendingQtyChange",
      qty: number,
      effectiveDate: string,
    } | null,
    periodicalID: string,
    subscriberID: string,
    periodical:  {
      __typename: "Periodical",
      id: string,
      name: string,
      recurrence: PeriodicalRecurrence,
      issues?:  {
        __typename: "ModelPeriodicalIssueConnection",
        items:  Array< {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      pubSubscriptions?:  {
        __typename: "ModelPubSubscriptionConnection",
        items:  Array< {
          __typename: "PubSubscription",
          qty: number,
          startDate?: string | null,
          status: PubSubscriptionStatus,
          periodicalID: string,
          subscriberID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    subscriber:  {
      __typename: "Subscriber",
      id: string,
      firstName: string,
      lastName: string,
      subscriberGroupID?: string | null,
      pubSubscriptions?:  {
        __typename: "ModelPubSubscriptionConnection",
        items:  Array< {
          __typename: "PubSubscription",
          qty: number,
          startDate?: string | null,
          status: PubSubscriptionStatus,
          periodicalID: string,
          subscriberID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          placedDate: string,
          isAutomaticOrder: boolean,
          isPubSubscriptionOrder: boolean,
          itemQty: number,
          status: OrderStatus,
          cancellationReason?: string | null,
          itemID?: string | null,
          subscriberID: string,
          periodicalIssueID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      group?:  {
        __typename: "SubscriberGroup",
        id: string,
        name: string,
        members?:  {
          __typename: "ModelSubscriberConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePubSubscriptionMutationVariables = {
  input: DeletePubSubscriptionInput,
  condition?: ModelPubSubscriptionConditionInput | null,
};

export type DeletePubSubscriptionMutation = {
  deletePubSubscription?:  {
    __typename: "PubSubscription",
    qty: number,
    startDate?: string | null,
    status: PubSubscriptionStatus,
    pendingQtyChange?:  {
      __typename: "PendingQtyChange",
      qty: number,
      effectiveDate: string,
    } | null,
    periodicalID: string,
    subscriberID: string,
    periodical:  {
      __typename: "Periodical",
      id: string,
      name: string,
      recurrence: PeriodicalRecurrence,
      issues?:  {
        __typename: "ModelPeriodicalIssueConnection",
        items:  Array< {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      pubSubscriptions?:  {
        __typename: "ModelPubSubscriptionConnection",
        items:  Array< {
          __typename: "PubSubscription",
          qty: number,
          startDate?: string | null,
          status: PubSubscriptionStatus,
          periodicalID: string,
          subscriberID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    subscriber:  {
      __typename: "Subscriber",
      id: string,
      firstName: string,
      lastName: string,
      subscriberGroupID?: string | null,
      pubSubscriptions?:  {
        __typename: "ModelPubSubscriptionConnection",
        items:  Array< {
          __typename: "PubSubscription",
          qty: number,
          startDate?: string | null,
          status: PubSubscriptionStatus,
          periodicalID: string,
          subscriberID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          placedDate: string,
          isAutomaticOrder: boolean,
          isPubSubscriptionOrder: boolean,
          itemQty: number,
          status: OrderStatus,
          cancellationReason?: string | null,
          itemID?: string | null,
          subscriberID: string,
          periodicalIssueID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      group?:  {
        __typename: "SubscriberGroup",
        id: string,
        name: string,
        members?:  {
          __typename: "ModelSubscriberConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePeriodicalMutationVariables = {
  input: CreatePeriodicalInput,
  condition?: ModelPeriodicalConditionInput | null,
};

export type CreatePeriodicalMutation = {
  createPeriodical?:  {
    __typename: "Periodical",
    id: string,
    name: string,
    recurrence: PeriodicalRecurrence,
    issues?:  {
      __typename: "ModelPeriodicalIssueConnection",
      items:  Array< {
        __typename: "PeriodicalIssue",
        id: string,
        issueDate: string,
        status: IssueStatus,
        periodicalID: string,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        notes?: string | null,
        isBatchClosed: boolean,
        periodical:  {
          __typename: "Periodical",
          id: string,
          name: string,
          recurrence: PeriodicalRecurrence,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    pubSubscriptions?:  {
      __typename: "ModelPubSubscriptionConnection",
      items:  Array< {
        __typename: "PubSubscription",
        qty: number,
        startDate?: string | null,
        status: PubSubscriptionStatus,
        pendingQtyChange?:  {
          __typename: "PendingQtyChange",
          qty: number,
          effectiveDate: string,
        } | null,
        periodicalID: string,
        subscriberID: string,
        periodical:  {
          __typename: "Periodical",
          id: string,
          name: string,
          recurrence: PeriodicalRecurrence,
          createdAt: string,
          updatedAt: string,
        },
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePeriodicalMutationVariables = {
  input: UpdatePeriodicalInput,
  condition?: ModelPeriodicalConditionInput | null,
};

export type UpdatePeriodicalMutation = {
  updatePeriodical?:  {
    __typename: "Periodical",
    id: string,
    name: string,
    recurrence: PeriodicalRecurrence,
    issues?:  {
      __typename: "ModelPeriodicalIssueConnection",
      items:  Array< {
        __typename: "PeriodicalIssue",
        id: string,
        issueDate: string,
        status: IssueStatus,
        periodicalID: string,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        notes?: string | null,
        isBatchClosed: boolean,
        periodical:  {
          __typename: "Periodical",
          id: string,
          name: string,
          recurrence: PeriodicalRecurrence,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    pubSubscriptions?:  {
      __typename: "ModelPubSubscriptionConnection",
      items:  Array< {
        __typename: "PubSubscription",
        qty: number,
        startDate?: string | null,
        status: PubSubscriptionStatus,
        pendingQtyChange?:  {
          __typename: "PendingQtyChange",
          qty: number,
          effectiveDate: string,
        } | null,
        periodicalID: string,
        subscriberID: string,
        periodical:  {
          __typename: "Periodical",
          id: string,
          name: string,
          recurrence: PeriodicalRecurrence,
          createdAt: string,
          updatedAt: string,
        },
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePeriodicalMutationVariables = {
  input: DeletePeriodicalInput,
  condition?: ModelPeriodicalConditionInput | null,
};

export type DeletePeriodicalMutation = {
  deletePeriodical?:  {
    __typename: "Periodical",
    id: string,
    name: string,
    recurrence: PeriodicalRecurrence,
    issues?:  {
      __typename: "ModelPeriodicalIssueConnection",
      items:  Array< {
        __typename: "PeriodicalIssue",
        id: string,
        issueDate: string,
        status: IssueStatus,
        periodicalID: string,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        notes?: string | null,
        isBatchClosed: boolean,
        periodical:  {
          __typename: "Periodical",
          id: string,
          name: string,
          recurrence: PeriodicalRecurrence,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    pubSubscriptions?:  {
      __typename: "ModelPubSubscriptionConnection",
      items:  Array< {
        __typename: "PubSubscription",
        qty: number,
        startDate?: string | null,
        status: PubSubscriptionStatus,
        pendingQtyChange?:  {
          __typename: "PendingQtyChange",
          qty: number,
          effectiveDate: string,
        } | null,
        periodicalID: string,
        subscriberID: string,
        periodical:  {
          __typename: "Periodical",
          id: string,
          name: string,
          recurrence: PeriodicalRecurrence,
          createdAt: string,
          updatedAt: string,
        },
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePeriodicalIssueMutationVariables = {
  input: CreatePeriodicalIssueInput,
  condition?: ModelPeriodicalIssueConditionInput | null,
};

export type CreatePeriodicalIssueMutation = {
  createPeriodicalIssue?:  {
    __typename: "PeriodicalIssue",
    id: string,
    issueDate: string,
    status: IssueStatus,
    periodicalID: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        placedDate: string,
        isAutomaticOrder: boolean,
        isPubSubscriptionOrder: boolean,
        itemQty: number,
        status: OrderStatus,
        cancellationReason?: string | null,
        itemID?: string | null,
        subscriberID: string,
        periodicalIssueID?: string | null,
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        periodicalIssue?:  {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    isBatchClosed: boolean,
    periodical:  {
      __typename: "Periodical",
      id: string,
      name: string,
      recurrence: PeriodicalRecurrence,
      issues?:  {
        __typename: "ModelPeriodicalIssueConnection",
        items:  Array< {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      pubSubscriptions?:  {
        __typename: "ModelPubSubscriptionConnection",
        items:  Array< {
          __typename: "PubSubscription",
          qty: number,
          startDate?: string | null,
          status: PubSubscriptionStatus,
          periodicalID: string,
          subscriberID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePeriodicalIssueMutationVariables = {
  input: UpdatePeriodicalIssueInput,
  condition?: ModelPeriodicalIssueConditionInput | null,
};

export type UpdatePeriodicalIssueMutation = {
  updatePeriodicalIssue?:  {
    __typename: "PeriodicalIssue",
    id: string,
    issueDate: string,
    status: IssueStatus,
    periodicalID: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        placedDate: string,
        isAutomaticOrder: boolean,
        isPubSubscriptionOrder: boolean,
        itemQty: number,
        status: OrderStatus,
        cancellationReason?: string | null,
        itemID?: string | null,
        subscriberID: string,
        periodicalIssueID?: string | null,
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        periodicalIssue?:  {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    isBatchClosed: boolean,
    periodical:  {
      __typename: "Periodical",
      id: string,
      name: string,
      recurrence: PeriodicalRecurrence,
      issues?:  {
        __typename: "ModelPeriodicalIssueConnection",
        items:  Array< {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      pubSubscriptions?:  {
        __typename: "ModelPubSubscriptionConnection",
        items:  Array< {
          __typename: "PubSubscription",
          qty: number,
          startDate?: string | null,
          status: PubSubscriptionStatus,
          periodicalID: string,
          subscriberID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePeriodicalIssueMutationVariables = {
  input: DeletePeriodicalIssueInput,
  condition?: ModelPeriodicalIssueConditionInput | null,
};

export type DeletePeriodicalIssueMutation = {
  deletePeriodicalIssue?:  {
    __typename: "PeriodicalIssue",
    id: string,
    issueDate: string,
    status: IssueStatus,
    periodicalID: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        placedDate: string,
        isAutomaticOrder: boolean,
        isPubSubscriptionOrder: boolean,
        itemQty: number,
        status: OrderStatus,
        cancellationReason?: string | null,
        itemID?: string | null,
        subscriberID: string,
        periodicalIssueID?: string | null,
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        periodicalIssue?:  {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    isBatchClosed: boolean,
    periodical:  {
      __typename: "Periodical",
      id: string,
      name: string,
      recurrence: PeriodicalRecurrence,
      issues?:  {
        __typename: "ModelPeriodicalIssueConnection",
        items:  Array< {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      pubSubscriptions?:  {
        __typename: "ModelPubSubscriptionConnection",
        items:  Array< {
          __typename: "PubSubscription",
          qty: number,
          startDate?: string | null,
          status: PubSubscriptionStatus,
          periodicalID: string,
          subscriberID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    placedDate: string,
    isAutomaticOrder: boolean,
    isPubSubscriptionOrder: boolean,
    itemQty: number,
    status: OrderStatus,
    cancellationReason?: string | null,
    itemID?: string | null,
    subscriberID: string,
    periodicalIssueID?: string | null,
    subscriber:  {
      __typename: "Subscriber",
      id: string,
      firstName: string,
      lastName: string,
      subscriberGroupID?: string | null,
      pubSubscriptions?:  {
        __typename: "ModelPubSubscriptionConnection",
        items:  Array< {
          __typename: "PubSubscription",
          qty: number,
          startDate?: string | null,
          status: PubSubscriptionStatus,
          periodicalID: string,
          subscriberID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          placedDate: string,
          isAutomaticOrder: boolean,
          isPubSubscriptionOrder: boolean,
          itemQty: number,
          status: OrderStatus,
          cancellationReason?: string | null,
          itemID?: string | null,
          subscriberID: string,
          periodicalIssueID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      group?:  {
        __typename: "SubscriberGroup",
        id: string,
        name: string,
        members?:  {
          __typename: "ModelSubscriberConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    periodicalIssue?:  {
      __typename: "PeriodicalIssue",
      id: string,
      issueDate: string,
      status: IssueStatus,
      periodicalID: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          placedDate: string,
          isAutomaticOrder: boolean,
          isPubSubscriptionOrder: boolean,
          itemQty: number,
          status: OrderStatus,
          cancellationReason?: string | null,
          itemID?: string | null,
          subscriberID: string,
          periodicalIssueID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      isBatchClosed: boolean,
      periodical:  {
        __typename: "Periodical",
        id: string,
        name: string,
        recurrence: PeriodicalRecurrence,
        issues?:  {
          __typename: "ModelPeriodicalIssueConnection",
          nextToken?: string | null,
        } | null,
        pubSubscriptions?:  {
          __typename: "ModelPubSubscriptionConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    placedDate: string,
    isAutomaticOrder: boolean,
    isPubSubscriptionOrder: boolean,
    itemQty: number,
    status: OrderStatus,
    cancellationReason?: string | null,
    itemID?: string | null,
    subscriberID: string,
    periodicalIssueID?: string | null,
    subscriber:  {
      __typename: "Subscriber",
      id: string,
      firstName: string,
      lastName: string,
      subscriberGroupID?: string | null,
      pubSubscriptions?:  {
        __typename: "ModelPubSubscriptionConnection",
        items:  Array< {
          __typename: "PubSubscription",
          qty: number,
          startDate?: string | null,
          status: PubSubscriptionStatus,
          periodicalID: string,
          subscriberID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          placedDate: string,
          isAutomaticOrder: boolean,
          isPubSubscriptionOrder: boolean,
          itemQty: number,
          status: OrderStatus,
          cancellationReason?: string | null,
          itemID?: string | null,
          subscriberID: string,
          periodicalIssueID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      group?:  {
        __typename: "SubscriberGroup",
        id: string,
        name: string,
        members?:  {
          __typename: "ModelSubscriberConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    periodicalIssue?:  {
      __typename: "PeriodicalIssue",
      id: string,
      issueDate: string,
      status: IssueStatus,
      periodicalID: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          placedDate: string,
          isAutomaticOrder: boolean,
          isPubSubscriptionOrder: boolean,
          itemQty: number,
          status: OrderStatus,
          cancellationReason?: string | null,
          itemID?: string | null,
          subscriberID: string,
          periodicalIssueID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      isBatchClosed: boolean,
      periodical:  {
        __typename: "Periodical",
        id: string,
        name: string,
        recurrence: PeriodicalRecurrence,
        issues?:  {
          __typename: "ModelPeriodicalIssueConnection",
          nextToken?: string | null,
        } | null,
        pubSubscriptions?:  {
          __typename: "ModelPubSubscriptionConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    placedDate: string,
    isAutomaticOrder: boolean,
    isPubSubscriptionOrder: boolean,
    itemQty: number,
    status: OrderStatus,
    cancellationReason?: string | null,
    itemID?: string | null,
    subscriberID: string,
    periodicalIssueID?: string | null,
    subscriber:  {
      __typename: "Subscriber",
      id: string,
      firstName: string,
      lastName: string,
      subscriberGroupID?: string | null,
      pubSubscriptions?:  {
        __typename: "ModelPubSubscriptionConnection",
        items:  Array< {
          __typename: "PubSubscription",
          qty: number,
          startDate?: string | null,
          status: PubSubscriptionStatus,
          periodicalID: string,
          subscriberID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          placedDate: string,
          isAutomaticOrder: boolean,
          isPubSubscriptionOrder: boolean,
          itemQty: number,
          status: OrderStatus,
          cancellationReason?: string | null,
          itemID?: string | null,
          subscriberID: string,
          periodicalIssueID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      group?:  {
        __typename: "SubscriberGroup",
        id: string,
        name: string,
        members?:  {
          __typename: "ModelSubscriberConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    periodicalIssue?:  {
      __typename: "PeriodicalIssue",
      id: string,
      issueDate: string,
      status: IssueStatus,
      periodicalID: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          placedDate: string,
          isAutomaticOrder: boolean,
          isPubSubscriptionOrder: boolean,
          itemQty: number,
          status: OrderStatus,
          cancellationReason?: string | null,
          itemID?: string | null,
          subscriberID: string,
          periodicalIssueID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      isBatchClosed: boolean,
      periodical:  {
        __typename: "Periodical",
        id: string,
        name: string,
        recurrence: PeriodicalRecurrence,
        issues?:  {
          __typename: "ModelPeriodicalIssueConnection",
          nextToken?: string | null,
        } | null,
        pubSubscriptions?:  {
          __typename: "ModelPubSubscriptionConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateItemMutationVariables = {
  input: CreateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type CreateItemMutation = {
  createItem?:  {
    __typename: "Item",
    id: string,
    name: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        placedDate: string,
        isAutomaticOrder: boolean,
        isPubSubscriptionOrder: boolean,
        itemQty: number,
        status: OrderStatus,
        cancellationReason?: string | null,
        itemID?: string | null,
        subscriberID: string,
        periodicalIssueID?: string | null,
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        periodicalIssue?:  {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateItemMutationVariables = {
  input: UpdateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type UpdateItemMutation = {
  updateItem?:  {
    __typename: "Item",
    id: string,
    name: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        placedDate: string,
        isAutomaticOrder: boolean,
        isPubSubscriptionOrder: boolean,
        itemQty: number,
        status: OrderStatus,
        cancellationReason?: string | null,
        itemID?: string | null,
        subscriberID: string,
        periodicalIssueID?: string | null,
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        periodicalIssue?:  {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteItemMutationVariables = {
  input: DeleteItemInput,
  condition?: ModelItemConditionInput | null,
};

export type DeleteItemMutation = {
  deleteItem?:  {
    __typename: "Item",
    id: string,
    name: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        placedDate: string,
        isAutomaticOrder: boolean,
        isPubSubscriptionOrder: boolean,
        itemQty: number,
        status: OrderStatus,
        cancellationReason?: string | null,
        itemID?: string | null,
        subscriberID: string,
        periodicalIssueID?: string | null,
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        periodicalIssue?:  {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetSubscriberGroupQueryVariables = {
  id: string,
};

export type GetSubscriberGroupQuery = {
  getSubscriberGroup?:  {
    __typename: "SubscriberGroup",
    id: string,
    name: string,
    members?:  {
      __typename: "ModelSubscriberConnection",
      items:  Array< {
        __typename: "Subscriber",
        id: string,
        firstName: string,
        lastName: string,
        subscriberGroupID?: string | null,
        pubSubscriptions?:  {
          __typename: "ModelPubSubscriptionConnection",
          nextToken?: string | null,
        } | null,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        group?:  {
          __typename: "SubscriberGroup",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSubscriberGroupsQueryVariables = {
  filter?: ModelSubscriberGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubscriberGroupsQuery = {
  listSubscriberGroups?:  {
    __typename: "ModelSubscriberGroupConnection",
    items:  Array< {
      __typename: "SubscriberGroup",
      id: string,
      name: string,
      members?:  {
        __typename: "ModelSubscriberConnection",
        items:  Array< {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSubscriberQueryVariables = {
  id: string,
};

export type GetSubscriberQuery = {
  getSubscriber?:  {
    __typename: "Subscriber",
    id: string,
    firstName: string,
    lastName: string,
    subscriberGroupID?: string | null,
    pubSubscriptions?:  {
      __typename: "ModelPubSubscriptionConnection",
      items:  Array< {
        __typename: "PubSubscription",
        qty: number,
        startDate?: string | null,
        status: PubSubscriptionStatus,
        pendingQtyChange?:  {
          __typename: "PendingQtyChange",
          qty: number,
          effectiveDate: string,
        } | null,
        periodicalID: string,
        subscriberID: string,
        periodical:  {
          __typename: "Periodical",
          id: string,
          name: string,
          recurrence: PeriodicalRecurrence,
          createdAt: string,
          updatedAt: string,
        },
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        placedDate: string,
        isAutomaticOrder: boolean,
        isPubSubscriptionOrder: boolean,
        itemQty: number,
        status: OrderStatus,
        cancellationReason?: string | null,
        itemID?: string | null,
        subscriberID: string,
        periodicalIssueID?: string | null,
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        periodicalIssue?:  {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    group?:  {
      __typename: "SubscriberGroup",
      id: string,
      name: string,
      members?:  {
        __typename: "ModelSubscriberConnection",
        items:  Array< {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSubscribersQueryVariables = {
  filter?: ModelSubscriberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubscribersQuery = {
  listSubscribers?:  {
    __typename: "ModelSubscriberConnection",
    items:  Array< {
      __typename: "Subscriber",
      id: string,
      firstName: string,
      lastName: string,
      subscriberGroupID?: string | null,
      pubSubscriptions?:  {
        __typename: "ModelPubSubscriptionConnection",
        items:  Array< {
          __typename: "PubSubscription",
          qty: number,
          startDate?: string | null,
          status: PubSubscriptionStatus,
          periodicalID: string,
          subscriberID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          placedDate: string,
          isAutomaticOrder: boolean,
          isPubSubscriptionOrder: boolean,
          itemQty: number,
          status: OrderStatus,
          cancellationReason?: string | null,
          itemID?: string | null,
          subscriberID: string,
          periodicalIssueID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      group?:  {
        __typename: "SubscriberGroup",
        id: string,
        name: string,
        members?:  {
          __typename: "ModelSubscriberConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SubscribersByGroupQueryVariables = {
  subscriberGroupID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSubscriberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SubscribersByGroupQuery = {
  subscribersByGroup?:  {
    __typename: "ModelSubscriberConnection",
    items:  Array< {
      __typename: "Subscriber",
      id: string,
      firstName: string,
      lastName: string,
      subscriberGroupID?: string | null,
      pubSubscriptions?:  {
        __typename: "ModelPubSubscriptionConnection",
        items:  Array< {
          __typename: "PubSubscription",
          qty: number,
          startDate?: string | null,
          status: PubSubscriptionStatus,
          periodicalID: string,
          subscriberID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          placedDate: string,
          isAutomaticOrder: boolean,
          isPubSubscriptionOrder: boolean,
          itemQty: number,
          status: OrderStatus,
          cancellationReason?: string | null,
          itemID?: string | null,
          subscriberID: string,
          periodicalIssueID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      group?:  {
        __typename: "SubscriberGroup",
        id: string,
        name: string,
        members?:  {
          __typename: "ModelSubscriberConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPubSubscriptionQueryVariables = {
  periodicalID: string,
  subscriberID: string,
};

export type GetPubSubscriptionQuery = {
  getPubSubscription?:  {
    __typename: "PubSubscription",
    qty: number,
    startDate?: string | null,
    status: PubSubscriptionStatus,
    pendingQtyChange?:  {
      __typename: "PendingQtyChange",
      qty: number,
      effectiveDate: string,
    } | null,
    periodicalID: string,
    subscriberID: string,
    periodical:  {
      __typename: "Periodical",
      id: string,
      name: string,
      recurrence: PeriodicalRecurrence,
      issues?:  {
        __typename: "ModelPeriodicalIssueConnection",
        items:  Array< {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      pubSubscriptions?:  {
        __typename: "ModelPubSubscriptionConnection",
        items:  Array< {
          __typename: "PubSubscription",
          qty: number,
          startDate?: string | null,
          status: PubSubscriptionStatus,
          periodicalID: string,
          subscriberID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    subscriber:  {
      __typename: "Subscriber",
      id: string,
      firstName: string,
      lastName: string,
      subscriberGroupID?: string | null,
      pubSubscriptions?:  {
        __typename: "ModelPubSubscriptionConnection",
        items:  Array< {
          __typename: "PubSubscription",
          qty: number,
          startDate?: string | null,
          status: PubSubscriptionStatus,
          periodicalID: string,
          subscriberID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          placedDate: string,
          isAutomaticOrder: boolean,
          isPubSubscriptionOrder: boolean,
          itemQty: number,
          status: OrderStatus,
          cancellationReason?: string | null,
          itemID?: string | null,
          subscriberID: string,
          periodicalIssueID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      group?:  {
        __typename: "SubscriberGroup",
        id: string,
        name: string,
        members?:  {
          __typename: "ModelSubscriberConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPubSubscriptionsQueryVariables = {
  periodicalID?: string | null,
  subscriberID?: ModelIDKeyConditionInput | null,
  filter?: ModelPubSubscriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPubSubscriptionsQuery = {
  listPubSubscriptions?:  {
    __typename: "ModelPubSubscriptionConnection",
    items:  Array< {
      __typename: "PubSubscription",
      qty: number,
      startDate?: string | null,
      status: PubSubscriptionStatus,
      pendingQtyChange?:  {
        __typename: "PendingQtyChange",
        qty: number,
        effectiveDate: string,
      } | null,
      periodicalID: string,
      subscriberID: string,
      periodical:  {
        __typename: "Periodical",
        id: string,
        name: string,
        recurrence: PeriodicalRecurrence,
        issues?:  {
          __typename: "ModelPeriodicalIssueConnection",
          nextToken?: string | null,
        } | null,
        pubSubscriptions?:  {
          __typename: "ModelPubSubscriptionConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      subscriber:  {
        __typename: "Subscriber",
        id: string,
        firstName: string,
        lastName: string,
        subscriberGroupID?: string | null,
        pubSubscriptions?:  {
          __typename: "ModelPubSubscriptionConnection",
          nextToken?: string | null,
        } | null,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        group?:  {
          __typename: "SubscriberGroup",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PubSubscriptionsByPeriodicalQueryVariables = {
  periodicalID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPubSubscriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PubSubscriptionsByPeriodicalQuery = {
  pubSubscriptionsByPeriodical?:  {
    __typename: "ModelPubSubscriptionConnection",
    items:  Array< {
      __typename: "PubSubscription",
      qty: number,
      startDate?: string | null,
      status: PubSubscriptionStatus,
      pendingQtyChange?:  {
        __typename: "PendingQtyChange",
        qty: number,
        effectiveDate: string,
      } | null,
      periodicalID: string,
      subscriberID: string,
      periodical:  {
        __typename: "Periodical",
        id: string,
        name: string,
        recurrence: PeriodicalRecurrence,
        issues?:  {
          __typename: "ModelPeriodicalIssueConnection",
          nextToken?: string | null,
        } | null,
        pubSubscriptions?:  {
          __typename: "ModelPubSubscriptionConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      subscriber:  {
        __typename: "Subscriber",
        id: string,
        firstName: string,
        lastName: string,
        subscriberGroupID?: string | null,
        pubSubscriptions?:  {
          __typename: "ModelPubSubscriptionConnection",
          nextToken?: string | null,
        } | null,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        group?:  {
          __typename: "SubscriberGroup",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PubSubscriptionsBySubscriberQueryVariables = {
  subscriberID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPubSubscriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PubSubscriptionsBySubscriberQuery = {
  pubSubscriptionsBySubscriber?:  {
    __typename: "ModelPubSubscriptionConnection",
    items:  Array< {
      __typename: "PubSubscription",
      qty: number,
      startDate?: string | null,
      status: PubSubscriptionStatus,
      pendingQtyChange?:  {
        __typename: "PendingQtyChange",
        qty: number,
        effectiveDate: string,
      } | null,
      periodicalID: string,
      subscriberID: string,
      periodical:  {
        __typename: "Periodical",
        id: string,
        name: string,
        recurrence: PeriodicalRecurrence,
        issues?:  {
          __typename: "ModelPeriodicalIssueConnection",
          nextToken?: string | null,
        } | null,
        pubSubscriptions?:  {
          __typename: "ModelPubSubscriptionConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      subscriber:  {
        __typename: "Subscriber",
        id: string,
        firstName: string,
        lastName: string,
        subscriberGroupID?: string | null,
        pubSubscriptions?:  {
          __typename: "ModelPubSubscriptionConnection",
          nextToken?: string | null,
        } | null,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        group?:  {
          __typename: "SubscriberGroup",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPeriodicalQueryVariables = {
  id: string,
};

export type GetPeriodicalQuery = {
  getPeriodical?:  {
    __typename: "Periodical",
    id: string,
    name: string,
    recurrence: PeriodicalRecurrence,
    issues?:  {
      __typename: "ModelPeriodicalIssueConnection",
      items:  Array< {
        __typename: "PeriodicalIssue",
        id: string,
        issueDate: string,
        status: IssueStatus,
        periodicalID: string,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        notes?: string | null,
        isBatchClosed: boolean,
        periodical:  {
          __typename: "Periodical",
          id: string,
          name: string,
          recurrence: PeriodicalRecurrence,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    pubSubscriptions?:  {
      __typename: "ModelPubSubscriptionConnection",
      items:  Array< {
        __typename: "PubSubscription",
        qty: number,
        startDate?: string | null,
        status: PubSubscriptionStatus,
        pendingQtyChange?:  {
          __typename: "PendingQtyChange",
          qty: number,
          effectiveDate: string,
        } | null,
        periodicalID: string,
        subscriberID: string,
        periodical:  {
          __typename: "Periodical",
          id: string,
          name: string,
          recurrence: PeriodicalRecurrence,
          createdAt: string,
          updatedAt: string,
        },
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPeriodicalsQueryVariables = {
  filter?: ModelPeriodicalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPeriodicalsQuery = {
  listPeriodicals?:  {
    __typename: "ModelPeriodicalConnection",
    items:  Array< {
      __typename: "Periodical",
      id: string,
      name: string,
      recurrence: PeriodicalRecurrence,
      issues?:  {
        __typename: "ModelPeriodicalIssueConnection",
        items:  Array< {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      pubSubscriptions?:  {
        __typename: "ModelPubSubscriptionConnection",
        items:  Array< {
          __typename: "PubSubscription",
          qty: number,
          startDate?: string | null,
          status: PubSubscriptionStatus,
          periodicalID: string,
          subscriberID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPeriodicalIssueQueryVariables = {
  id: string,
};

export type GetPeriodicalIssueQuery = {
  getPeriodicalIssue?:  {
    __typename: "PeriodicalIssue",
    id: string,
    issueDate: string,
    status: IssueStatus,
    periodicalID: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        placedDate: string,
        isAutomaticOrder: boolean,
        isPubSubscriptionOrder: boolean,
        itemQty: number,
        status: OrderStatus,
        cancellationReason?: string | null,
        itemID?: string | null,
        subscriberID: string,
        periodicalIssueID?: string | null,
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        periodicalIssue?:  {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    isBatchClosed: boolean,
    periodical:  {
      __typename: "Periodical",
      id: string,
      name: string,
      recurrence: PeriodicalRecurrence,
      issues?:  {
        __typename: "ModelPeriodicalIssueConnection",
        items:  Array< {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      pubSubscriptions?:  {
        __typename: "ModelPubSubscriptionConnection",
        items:  Array< {
          __typename: "PubSubscription",
          qty: number,
          startDate?: string | null,
          status: PubSubscriptionStatus,
          periodicalID: string,
          subscriberID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPeriodicalIssuesQueryVariables = {
  filter?: ModelPeriodicalIssueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPeriodicalIssuesQuery = {
  listPeriodicalIssues?:  {
    __typename: "ModelPeriodicalIssueConnection",
    items:  Array< {
      __typename: "PeriodicalIssue",
      id: string,
      issueDate: string,
      status: IssueStatus,
      periodicalID: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          placedDate: string,
          isAutomaticOrder: boolean,
          isPubSubscriptionOrder: boolean,
          itemQty: number,
          status: OrderStatus,
          cancellationReason?: string | null,
          itemID?: string | null,
          subscriberID: string,
          periodicalIssueID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      isBatchClosed: boolean,
      periodical:  {
        __typename: "Periodical",
        id: string,
        name: string,
        recurrence: PeriodicalRecurrence,
        issues?:  {
          __typename: "ModelPeriodicalIssueConnection",
          nextToken?: string | null,
        } | null,
        pubSubscriptions?:  {
          __typename: "ModelPubSubscriptionConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PeriodicalIssuesByStatusQueryVariables = {
  status: IssueStatus,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPeriodicalIssueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PeriodicalIssuesByStatusQuery = {
  periodicalIssuesByStatus?:  {
    __typename: "ModelPeriodicalIssueConnection",
    items:  Array< {
      __typename: "PeriodicalIssue",
      id: string,
      issueDate: string,
      status: IssueStatus,
      periodicalID: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          placedDate: string,
          isAutomaticOrder: boolean,
          isPubSubscriptionOrder: boolean,
          itemQty: number,
          status: OrderStatus,
          cancellationReason?: string | null,
          itemID?: string | null,
          subscriberID: string,
          periodicalIssueID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      isBatchClosed: boolean,
      periodical:  {
        __typename: "Periodical",
        id: string,
        name: string,
        recurrence: PeriodicalRecurrence,
        issues?:  {
          __typename: "ModelPeriodicalIssueConnection",
          nextToken?: string | null,
        } | null,
        pubSubscriptions?:  {
          __typename: "ModelPubSubscriptionConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PeriodicalIssuesByPeriodicalQueryVariables = {
  periodicalID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPeriodicalIssueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PeriodicalIssuesByPeriodicalQuery = {
  periodicalIssuesByPeriodical?:  {
    __typename: "ModelPeriodicalIssueConnection",
    items:  Array< {
      __typename: "PeriodicalIssue",
      id: string,
      issueDate: string,
      status: IssueStatus,
      periodicalID: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          placedDate: string,
          isAutomaticOrder: boolean,
          isPubSubscriptionOrder: boolean,
          itemQty: number,
          status: OrderStatus,
          cancellationReason?: string | null,
          itemID?: string | null,
          subscriberID: string,
          periodicalIssueID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      isBatchClosed: boolean,
      periodical:  {
        __typename: "Periodical",
        id: string,
        name: string,
        recurrence: PeriodicalRecurrence,
        issues?:  {
          __typename: "ModelPeriodicalIssueConnection",
          nextToken?: string | null,
        } | null,
        pubSubscriptions?:  {
          __typename: "ModelPubSubscriptionConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    placedDate: string,
    isAutomaticOrder: boolean,
    isPubSubscriptionOrder: boolean,
    itemQty: number,
    status: OrderStatus,
    cancellationReason?: string | null,
    itemID?: string | null,
    subscriberID: string,
    periodicalIssueID?: string | null,
    subscriber:  {
      __typename: "Subscriber",
      id: string,
      firstName: string,
      lastName: string,
      subscriberGroupID?: string | null,
      pubSubscriptions?:  {
        __typename: "ModelPubSubscriptionConnection",
        items:  Array< {
          __typename: "PubSubscription",
          qty: number,
          startDate?: string | null,
          status: PubSubscriptionStatus,
          periodicalID: string,
          subscriberID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          placedDate: string,
          isAutomaticOrder: boolean,
          isPubSubscriptionOrder: boolean,
          itemQty: number,
          status: OrderStatus,
          cancellationReason?: string | null,
          itemID?: string | null,
          subscriberID: string,
          periodicalIssueID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      group?:  {
        __typename: "SubscriberGroup",
        id: string,
        name: string,
        members?:  {
          __typename: "ModelSubscriberConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    periodicalIssue?:  {
      __typename: "PeriodicalIssue",
      id: string,
      issueDate: string,
      status: IssueStatus,
      periodicalID: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          placedDate: string,
          isAutomaticOrder: boolean,
          isPubSubscriptionOrder: boolean,
          itemQty: number,
          status: OrderStatus,
          cancellationReason?: string | null,
          itemID?: string | null,
          subscriberID: string,
          periodicalIssueID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      isBatchClosed: boolean,
      periodical:  {
        __typename: "Periodical",
        id: string,
        name: string,
        recurrence: PeriodicalRecurrence,
        issues?:  {
          __typename: "ModelPeriodicalIssueConnection",
          nextToken?: string | null,
        } | null,
        pubSubscriptions?:  {
          __typename: "ModelPubSubscriptionConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      placedDate: string,
      isAutomaticOrder: boolean,
      isPubSubscriptionOrder: boolean,
      itemQty: number,
      status: OrderStatus,
      cancellationReason?: string | null,
      itemID?: string | null,
      subscriberID: string,
      periodicalIssueID?: string | null,
      subscriber:  {
        __typename: "Subscriber",
        id: string,
        firstName: string,
        lastName: string,
        subscriberGroupID?: string | null,
        pubSubscriptions?:  {
          __typename: "ModelPubSubscriptionConnection",
          nextToken?: string | null,
        } | null,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        group?:  {
          __typename: "SubscriberGroup",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      periodicalIssue?:  {
        __typename: "PeriodicalIssue",
        id: string,
        issueDate: string,
        status: IssueStatus,
        periodicalID: string,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        notes?: string | null,
        isBatchClosed: boolean,
        periodical:  {
          __typename: "Periodical",
          id: string,
          name: string,
          recurrence: PeriodicalRecurrence,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrdersByStatusQueryVariables = {
  status: OrderStatus,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrdersByStatusQuery = {
  ordersByStatus?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      placedDate: string,
      isAutomaticOrder: boolean,
      isPubSubscriptionOrder: boolean,
      itemQty: number,
      status: OrderStatus,
      cancellationReason?: string | null,
      itemID?: string | null,
      subscriberID: string,
      periodicalIssueID?: string | null,
      subscriber:  {
        __typename: "Subscriber",
        id: string,
        firstName: string,
        lastName: string,
        subscriberGroupID?: string | null,
        pubSubscriptions?:  {
          __typename: "ModelPubSubscriptionConnection",
          nextToken?: string | null,
        } | null,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        group?:  {
          __typename: "SubscriberGroup",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      periodicalIssue?:  {
        __typename: "PeriodicalIssue",
        id: string,
        issueDate: string,
        status: IssueStatus,
        periodicalID: string,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        notes?: string | null,
        isBatchClosed: boolean,
        periodical:  {
          __typename: "Periodical",
          id: string,
          name: string,
          recurrence: PeriodicalRecurrence,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrdersByItemQueryVariables = {
  itemID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrdersByItemQuery = {
  ordersByItem?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      placedDate: string,
      isAutomaticOrder: boolean,
      isPubSubscriptionOrder: boolean,
      itemQty: number,
      status: OrderStatus,
      cancellationReason?: string | null,
      itemID?: string | null,
      subscriberID: string,
      periodicalIssueID?: string | null,
      subscriber:  {
        __typename: "Subscriber",
        id: string,
        firstName: string,
        lastName: string,
        subscriberGroupID?: string | null,
        pubSubscriptions?:  {
          __typename: "ModelPubSubscriptionConnection",
          nextToken?: string | null,
        } | null,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        group?:  {
          __typename: "SubscriberGroup",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      periodicalIssue?:  {
        __typename: "PeriodicalIssue",
        id: string,
        issueDate: string,
        status: IssueStatus,
        periodicalID: string,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        notes?: string | null,
        isBatchClosed: boolean,
        periodical:  {
          __typename: "Periodical",
          id: string,
          name: string,
          recurrence: PeriodicalRecurrence,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrdersBySubscriberQueryVariables = {
  subscriberID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrdersBySubscriberQuery = {
  ordersBySubscriber?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      placedDate: string,
      isAutomaticOrder: boolean,
      isPubSubscriptionOrder: boolean,
      itemQty: number,
      status: OrderStatus,
      cancellationReason?: string | null,
      itemID?: string | null,
      subscriberID: string,
      periodicalIssueID?: string | null,
      subscriber:  {
        __typename: "Subscriber",
        id: string,
        firstName: string,
        lastName: string,
        subscriberGroupID?: string | null,
        pubSubscriptions?:  {
          __typename: "ModelPubSubscriptionConnection",
          nextToken?: string | null,
        } | null,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        group?:  {
          __typename: "SubscriberGroup",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      periodicalIssue?:  {
        __typename: "PeriodicalIssue",
        id: string,
        issueDate: string,
        status: IssueStatus,
        periodicalID: string,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        notes?: string | null,
        isBatchClosed: boolean,
        periodical:  {
          __typename: "Periodical",
          id: string,
          name: string,
          recurrence: PeriodicalRecurrence,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrdersBySubscriberByStatusQueryVariables = {
  subscriberID: string,
  status?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrdersBySubscriberByStatusQuery = {
  ordersBySubscriberByStatus?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      placedDate: string,
      isAutomaticOrder: boolean,
      isPubSubscriptionOrder: boolean,
      itemQty: number,
      status: OrderStatus,
      cancellationReason?: string | null,
      itemID?: string | null,
      subscriberID: string,
      periodicalIssueID?: string | null,
      subscriber:  {
        __typename: "Subscriber",
        id: string,
        firstName: string,
        lastName: string,
        subscriberGroupID?: string | null,
        pubSubscriptions?:  {
          __typename: "ModelPubSubscriptionConnection",
          nextToken?: string | null,
        } | null,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        group?:  {
          __typename: "SubscriberGroup",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      periodicalIssue?:  {
        __typename: "PeriodicalIssue",
        id: string,
        issueDate: string,
        status: IssueStatus,
        periodicalID: string,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        notes?: string | null,
        isBatchClosed: boolean,
        periodical:  {
          __typename: "Periodical",
          id: string,
          name: string,
          recurrence: PeriodicalRecurrence,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrdersBySubscriberByDateQueryVariables = {
  subscriberID: string,
  placedDate?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrdersBySubscriberByDateQuery = {
  ordersBySubscriberByDate?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      placedDate: string,
      isAutomaticOrder: boolean,
      isPubSubscriptionOrder: boolean,
      itemQty: number,
      status: OrderStatus,
      cancellationReason?: string | null,
      itemID?: string | null,
      subscriberID: string,
      periodicalIssueID?: string | null,
      subscriber:  {
        __typename: "Subscriber",
        id: string,
        firstName: string,
        lastName: string,
        subscriberGroupID?: string | null,
        pubSubscriptions?:  {
          __typename: "ModelPubSubscriptionConnection",
          nextToken?: string | null,
        } | null,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        group?:  {
          __typename: "SubscriberGroup",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      periodicalIssue?:  {
        __typename: "PeriodicalIssue",
        id: string,
        issueDate: string,
        status: IssueStatus,
        periodicalID: string,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        notes?: string | null,
        isBatchClosed: boolean,
        periodical:  {
          __typename: "Periodical",
          id: string,
          name: string,
          recurrence: PeriodicalRecurrence,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrdersByPeriodicalIssueQueryVariables = {
  periodicalIssueID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrdersByPeriodicalIssueQuery = {
  ordersByPeriodicalIssue?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      placedDate: string,
      isAutomaticOrder: boolean,
      isPubSubscriptionOrder: boolean,
      itemQty: number,
      status: OrderStatus,
      cancellationReason?: string | null,
      itemID?: string | null,
      subscriberID: string,
      periodicalIssueID?: string | null,
      subscriber:  {
        __typename: "Subscriber",
        id: string,
        firstName: string,
        lastName: string,
        subscriberGroupID?: string | null,
        pubSubscriptions?:  {
          __typename: "ModelPubSubscriptionConnection",
          nextToken?: string | null,
        } | null,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        group?:  {
          __typename: "SubscriberGroup",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      periodicalIssue?:  {
        __typename: "PeriodicalIssue",
        id: string,
        issueDate: string,
        status: IssueStatus,
        periodicalID: string,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        notes?: string | null,
        isBatchClosed: boolean,
        periodical:  {
          __typename: "Periodical",
          id: string,
          name: string,
          recurrence: PeriodicalRecurrence,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrdersByPeriodicalIssueByStatusQueryVariables = {
  periodicalIssueID: string,
  status?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrdersByPeriodicalIssueByStatusQuery = {
  ordersByPeriodicalIssueByStatus?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      placedDate: string,
      isAutomaticOrder: boolean,
      isPubSubscriptionOrder: boolean,
      itemQty: number,
      status: OrderStatus,
      cancellationReason?: string | null,
      itemID?: string | null,
      subscriberID: string,
      periodicalIssueID?: string | null,
      subscriber:  {
        __typename: "Subscriber",
        id: string,
        firstName: string,
        lastName: string,
        subscriberGroupID?: string | null,
        pubSubscriptions?:  {
          __typename: "ModelPubSubscriptionConnection",
          nextToken?: string | null,
        } | null,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        group?:  {
          __typename: "SubscriberGroup",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      periodicalIssue?:  {
        __typename: "PeriodicalIssue",
        id: string,
        issueDate: string,
        status: IssueStatus,
        periodicalID: string,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        notes?: string | null,
        isBatchClosed: boolean,
        periodical:  {
          __typename: "Periodical",
          id: string,
          name: string,
          recurrence: PeriodicalRecurrence,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetItemQueryVariables = {
  id: string,
};

export type GetItemQuery = {
  getItem?:  {
    __typename: "Item",
    id: string,
    name: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        placedDate: string,
        isAutomaticOrder: boolean,
        isPubSubscriptionOrder: boolean,
        itemQty: number,
        status: OrderStatus,
        cancellationReason?: string | null,
        itemID?: string | null,
        subscriberID: string,
        periodicalIssueID?: string | null,
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        periodicalIssue?:  {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListItemsQueryVariables = {
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItemsQuery = {
  listItems?:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      id: string,
      name: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          placedDate: string,
          isAutomaticOrder: boolean,
          isPubSubscriptionOrder: boolean,
          itemQty: number,
          status: OrderStatus,
          cancellationReason?: string | null,
          itemID?: string | null,
          subscriberID: string,
          periodicalIssueID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSubscriberGroupSubscription = {
  onCreateSubscriberGroup?:  {
    __typename: "SubscriberGroup",
    id: string,
    name: string,
    members?:  {
      __typename: "ModelSubscriberConnection",
      items:  Array< {
        __typename: "Subscriber",
        id: string,
        firstName: string,
        lastName: string,
        subscriberGroupID?: string | null,
        pubSubscriptions?:  {
          __typename: "ModelPubSubscriptionConnection",
          nextToken?: string | null,
        } | null,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        group?:  {
          __typename: "SubscriberGroup",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSubscriberGroupSubscription = {
  onUpdateSubscriberGroup?:  {
    __typename: "SubscriberGroup",
    id: string,
    name: string,
    members?:  {
      __typename: "ModelSubscriberConnection",
      items:  Array< {
        __typename: "Subscriber",
        id: string,
        firstName: string,
        lastName: string,
        subscriberGroupID?: string | null,
        pubSubscriptions?:  {
          __typename: "ModelPubSubscriptionConnection",
          nextToken?: string | null,
        } | null,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        group?:  {
          __typename: "SubscriberGroup",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSubscriberGroupSubscription = {
  onDeleteSubscriberGroup?:  {
    __typename: "SubscriberGroup",
    id: string,
    name: string,
    members?:  {
      __typename: "ModelSubscriberConnection",
      items:  Array< {
        __typename: "Subscriber",
        id: string,
        firstName: string,
        lastName: string,
        subscriberGroupID?: string | null,
        pubSubscriptions?:  {
          __typename: "ModelPubSubscriptionConnection",
          nextToken?: string | null,
        } | null,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        group?:  {
          __typename: "SubscriberGroup",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSubscriberSubscription = {
  onCreateSubscriber?:  {
    __typename: "Subscriber",
    id: string,
    firstName: string,
    lastName: string,
    subscriberGroupID?: string | null,
    pubSubscriptions?:  {
      __typename: "ModelPubSubscriptionConnection",
      items:  Array< {
        __typename: "PubSubscription",
        qty: number,
        startDate?: string | null,
        status: PubSubscriptionStatus,
        pendingQtyChange?:  {
          __typename: "PendingQtyChange",
          qty: number,
          effectiveDate: string,
        } | null,
        periodicalID: string,
        subscriberID: string,
        periodical:  {
          __typename: "Periodical",
          id: string,
          name: string,
          recurrence: PeriodicalRecurrence,
          createdAt: string,
          updatedAt: string,
        },
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        placedDate: string,
        isAutomaticOrder: boolean,
        isPubSubscriptionOrder: boolean,
        itemQty: number,
        status: OrderStatus,
        cancellationReason?: string | null,
        itemID?: string | null,
        subscriberID: string,
        periodicalIssueID?: string | null,
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        periodicalIssue?:  {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    group?:  {
      __typename: "SubscriberGroup",
      id: string,
      name: string,
      members?:  {
        __typename: "ModelSubscriberConnection",
        items:  Array< {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSubscriberSubscription = {
  onUpdateSubscriber?:  {
    __typename: "Subscriber",
    id: string,
    firstName: string,
    lastName: string,
    subscriberGroupID?: string | null,
    pubSubscriptions?:  {
      __typename: "ModelPubSubscriptionConnection",
      items:  Array< {
        __typename: "PubSubscription",
        qty: number,
        startDate?: string | null,
        status: PubSubscriptionStatus,
        pendingQtyChange?:  {
          __typename: "PendingQtyChange",
          qty: number,
          effectiveDate: string,
        } | null,
        periodicalID: string,
        subscriberID: string,
        periodical:  {
          __typename: "Periodical",
          id: string,
          name: string,
          recurrence: PeriodicalRecurrence,
          createdAt: string,
          updatedAt: string,
        },
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        placedDate: string,
        isAutomaticOrder: boolean,
        isPubSubscriptionOrder: boolean,
        itemQty: number,
        status: OrderStatus,
        cancellationReason?: string | null,
        itemID?: string | null,
        subscriberID: string,
        periodicalIssueID?: string | null,
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        periodicalIssue?:  {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    group?:  {
      __typename: "SubscriberGroup",
      id: string,
      name: string,
      members?:  {
        __typename: "ModelSubscriberConnection",
        items:  Array< {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSubscriberSubscription = {
  onDeleteSubscriber?:  {
    __typename: "Subscriber",
    id: string,
    firstName: string,
    lastName: string,
    subscriberGroupID?: string | null,
    pubSubscriptions?:  {
      __typename: "ModelPubSubscriptionConnection",
      items:  Array< {
        __typename: "PubSubscription",
        qty: number,
        startDate?: string | null,
        status: PubSubscriptionStatus,
        pendingQtyChange?:  {
          __typename: "PendingQtyChange",
          qty: number,
          effectiveDate: string,
        } | null,
        periodicalID: string,
        subscriberID: string,
        periodical:  {
          __typename: "Periodical",
          id: string,
          name: string,
          recurrence: PeriodicalRecurrence,
          createdAt: string,
          updatedAt: string,
        },
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        placedDate: string,
        isAutomaticOrder: boolean,
        isPubSubscriptionOrder: boolean,
        itemQty: number,
        status: OrderStatus,
        cancellationReason?: string | null,
        itemID?: string | null,
        subscriberID: string,
        periodicalIssueID?: string | null,
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        periodicalIssue?:  {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    group?:  {
      __typename: "SubscriberGroup",
      id: string,
      name: string,
      members?:  {
        __typename: "ModelSubscriberConnection",
        items:  Array< {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePubSubscriptionSubscription = {
  onCreatePubSubscription?:  {
    __typename: "PubSubscription",
    qty: number,
    startDate?: string | null,
    status: PubSubscriptionStatus,
    pendingQtyChange?:  {
      __typename: "PendingQtyChange",
      qty: number,
      effectiveDate: string,
    } | null,
    periodicalID: string,
    subscriberID: string,
    periodical:  {
      __typename: "Periodical",
      id: string,
      name: string,
      recurrence: PeriodicalRecurrence,
      issues?:  {
        __typename: "ModelPeriodicalIssueConnection",
        items:  Array< {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      pubSubscriptions?:  {
        __typename: "ModelPubSubscriptionConnection",
        items:  Array< {
          __typename: "PubSubscription",
          qty: number,
          startDate?: string | null,
          status: PubSubscriptionStatus,
          periodicalID: string,
          subscriberID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    subscriber:  {
      __typename: "Subscriber",
      id: string,
      firstName: string,
      lastName: string,
      subscriberGroupID?: string | null,
      pubSubscriptions?:  {
        __typename: "ModelPubSubscriptionConnection",
        items:  Array< {
          __typename: "PubSubscription",
          qty: number,
          startDate?: string | null,
          status: PubSubscriptionStatus,
          periodicalID: string,
          subscriberID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          placedDate: string,
          isAutomaticOrder: boolean,
          isPubSubscriptionOrder: boolean,
          itemQty: number,
          status: OrderStatus,
          cancellationReason?: string | null,
          itemID?: string | null,
          subscriberID: string,
          periodicalIssueID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      group?:  {
        __typename: "SubscriberGroup",
        id: string,
        name: string,
        members?:  {
          __typename: "ModelSubscriberConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePubSubscriptionSubscription = {
  onUpdatePubSubscription?:  {
    __typename: "PubSubscription",
    qty: number,
    startDate?: string | null,
    status: PubSubscriptionStatus,
    pendingQtyChange?:  {
      __typename: "PendingQtyChange",
      qty: number,
      effectiveDate: string,
    } | null,
    periodicalID: string,
    subscriberID: string,
    periodical:  {
      __typename: "Periodical",
      id: string,
      name: string,
      recurrence: PeriodicalRecurrence,
      issues?:  {
        __typename: "ModelPeriodicalIssueConnection",
        items:  Array< {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      pubSubscriptions?:  {
        __typename: "ModelPubSubscriptionConnection",
        items:  Array< {
          __typename: "PubSubscription",
          qty: number,
          startDate?: string | null,
          status: PubSubscriptionStatus,
          periodicalID: string,
          subscriberID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    subscriber:  {
      __typename: "Subscriber",
      id: string,
      firstName: string,
      lastName: string,
      subscriberGroupID?: string | null,
      pubSubscriptions?:  {
        __typename: "ModelPubSubscriptionConnection",
        items:  Array< {
          __typename: "PubSubscription",
          qty: number,
          startDate?: string | null,
          status: PubSubscriptionStatus,
          periodicalID: string,
          subscriberID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          placedDate: string,
          isAutomaticOrder: boolean,
          isPubSubscriptionOrder: boolean,
          itemQty: number,
          status: OrderStatus,
          cancellationReason?: string | null,
          itemID?: string | null,
          subscriberID: string,
          periodicalIssueID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      group?:  {
        __typename: "SubscriberGroup",
        id: string,
        name: string,
        members?:  {
          __typename: "ModelSubscriberConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePubSubscriptionSubscription = {
  onDeletePubSubscription?:  {
    __typename: "PubSubscription",
    qty: number,
    startDate?: string | null,
    status: PubSubscriptionStatus,
    pendingQtyChange?:  {
      __typename: "PendingQtyChange",
      qty: number,
      effectiveDate: string,
    } | null,
    periodicalID: string,
    subscriberID: string,
    periodical:  {
      __typename: "Periodical",
      id: string,
      name: string,
      recurrence: PeriodicalRecurrence,
      issues?:  {
        __typename: "ModelPeriodicalIssueConnection",
        items:  Array< {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      pubSubscriptions?:  {
        __typename: "ModelPubSubscriptionConnection",
        items:  Array< {
          __typename: "PubSubscription",
          qty: number,
          startDate?: string | null,
          status: PubSubscriptionStatus,
          periodicalID: string,
          subscriberID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    subscriber:  {
      __typename: "Subscriber",
      id: string,
      firstName: string,
      lastName: string,
      subscriberGroupID?: string | null,
      pubSubscriptions?:  {
        __typename: "ModelPubSubscriptionConnection",
        items:  Array< {
          __typename: "PubSubscription",
          qty: number,
          startDate?: string | null,
          status: PubSubscriptionStatus,
          periodicalID: string,
          subscriberID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          placedDate: string,
          isAutomaticOrder: boolean,
          isPubSubscriptionOrder: boolean,
          itemQty: number,
          status: OrderStatus,
          cancellationReason?: string | null,
          itemID?: string | null,
          subscriberID: string,
          periodicalIssueID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      group?:  {
        __typename: "SubscriberGroup",
        id: string,
        name: string,
        members?:  {
          __typename: "ModelSubscriberConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePeriodicalSubscription = {
  onCreatePeriodical?:  {
    __typename: "Periodical",
    id: string,
    name: string,
    recurrence: PeriodicalRecurrence,
    issues?:  {
      __typename: "ModelPeriodicalIssueConnection",
      items:  Array< {
        __typename: "PeriodicalIssue",
        id: string,
        issueDate: string,
        status: IssueStatus,
        periodicalID: string,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        notes?: string | null,
        isBatchClosed: boolean,
        periodical:  {
          __typename: "Periodical",
          id: string,
          name: string,
          recurrence: PeriodicalRecurrence,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    pubSubscriptions?:  {
      __typename: "ModelPubSubscriptionConnection",
      items:  Array< {
        __typename: "PubSubscription",
        qty: number,
        startDate?: string | null,
        status: PubSubscriptionStatus,
        pendingQtyChange?:  {
          __typename: "PendingQtyChange",
          qty: number,
          effectiveDate: string,
        } | null,
        periodicalID: string,
        subscriberID: string,
        periodical:  {
          __typename: "Periodical",
          id: string,
          name: string,
          recurrence: PeriodicalRecurrence,
          createdAt: string,
          updatedAt: string,
        },
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePeriodicalSubscription = {
  onUpdatePeriodical?:  {
    __typename: "Periodical",
    id: string,
    name: string,
    recurrence: PeriodicalRecurrence,
    issues?:  {
      __typename: "ModelPeriodicalIssueConnection",
      items:  Array< {
        __typename: "PeriodicalIssue",
        id: string,
        issueDate: string,
        status: IssueStatus,
        periodicalID: string,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        notes?: string | null,
        isBatchClosed: boolean,
        periodical:  {
          __typename: "Periodical",
          id: string,
          name: string,
          recurrence: PeriodicalRecurrence,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    pubSubscriptions?:  {
      __typename: "ModelPubSubscriptionConnection",
      items:  Array< {
        __typename: "PubSubscription",
        qty: number,
        startDate?: string | null,
        status: PubSubscriptionStatus,
        pendingQtyChange?:  {
          __typename: "PendingQtyChange",
          qty: number,
          effectiveDate: string,
        } | null,
        periodicalID: string,
        subscriberID: string,
        periodical:  {
          __typename: "Periodical",
          id: string,
          name: string,
          recurrence: PeriodicalRecurrence,
          createdAt: string,
          updatedAt: string,
        },
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePeriodicalSubscription = {
  onDeletePeriodical?:  {
    __typename: "Periodical",
    id: string,
    name: string,
    recurrence: PeriodicalRecurrence,
    issues?:  {
      __typename: "ModelPeriodicalIssueConnection",
      items:  Array< {
        __typename: "PeriodicalIssue",
        id: string,
        issueDate: string,
        status: IssueStatus,
        periodicalID: string,
        orders?:  {
          __typename: "ModelOrderConnection",
          nextToken?: string | null,
        } | null,
        notes?: string | null,
        isBatchClosed: boolean,
        periodical:  {
          __typename: "Periodical",
          id: string,
          name: string,
          recurrence: PeriodicalRecurrence,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    pubSubscriptions?:  {
      __typename: "ModelPubSubscriptionConnection",
      items:  Array< {
        __typename: "PubSubscription",
        qty: number,
        startDate?: string | null,
        status: PubSubscriptionStatus,
        pendingQtyChange?:  {
          __typename: "PendingQtyChange",
          qty: number,
          effectiveDate: string,
        } | null,
        periodicalID: string,
        subscriberID: string,
        periodical:  {
          __typename: "Periodical",
          id: string,
          name: string,
          recurrence: PeriodicalRecurrence,
          createdAt: string,
          updatedAt: string,
        },
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePeriodicalIssueSubscription = {
  onCreatePeriodicalIssue?:  {
    __typename: "PeriodicalIssue",
    id: string,
    issueDate: string,
    status: IssueStatus,
    periodicalID: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        placedDate: string,
        isAutomaticOrder: boolean,
        isPubSubscriptionOrder: boolean,
        itemQty: number,
        status: OrderStatus,
        cancellationReason?: string | null,
        itemID?: string | null,
        subscriberID: string,
        periodicalIssueID?: string | null,
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        periodicalIssue?:  {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    isBatchClosed: boolean,
    periodical:  {
      __typename: "Periodical",
      id: string,
      name: string,
      recurrence: PeriodicalRecurrence,
      issues?:  {
        __typename: "ModelPeriodicalIssueConnection",
        items:  Array< {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      pubSubscriptions?:  {
        __typename: "ModelPubSubscriptionConnection",
        items:  Array< {
          __typename: "PubSubscription",
          qty: number,
          startDate?: string | null,
          status: PubSubscriptionStatus,
          periodicalID: string,
          subscriberID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePeriodicalIssueSubscription = {
  onUpdatePeriodicalIssue?:  {
    __typename: "PeriodicalIssue",
    id: string,
    issueDate: string,
    status: IssueStatus,
    periodicalID: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        placedDate: string,
        isAutomaticOrder: boolean,
        isPubSubscriptionOrder: boolean,
        itemQty: number,
        status: OrderStatus,
        cancellationReason?: string | null,
        itemID?: string | null,
        subscriberID: string,
        periodicalIssueID?: string | null,
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        periodicalIssue?:  {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    isBatchClosed: boolean,
    periodical:  {
      __typename: "Periodical",
      id: string,
      name: string,
      recurrence: PeriodicalRecurrence,
      issues?:  {
        __typename: "ModelPeriodicalIssueConnection",
        items:  Array< {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      pubSubscriptions?:  {
        __typename: "ModelPubSubscriptionConnection",
        items:  Array< {
          __typename: "PubSubscription",
          qty: number,
          startDate?: string | null,
          status: PubSubscriptionStatus,
          periodicalID: string,
          subscriberID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePeriodicalIssueSubscription = {
  onDeletePeriodicalIssue?:  {
    __typename: "PeriodicalIssue",
    id: string,
    issueDate: string,
    status: IssueStatus,
    periodicalID: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        placedDate: string,
        isAutomaticOrder: boolean,
        isPubSubscriptionOrder: boolean,
        itemQty: number,
        status: OrderStatus,
        cancellationReason?: string | null,
        itemID?: string | null,
        subscriberID: string,
        periodicalIssueID?: string | null,
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        periodicalIssue?:  {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    isBatchClosed: boolean,
    periodical:  {
      __typename: "Periodical",
      id: string,
      name: string,
      recurrence: PeriodicalRecurrence,
      issues?:  {
        __typename: "ModelPeriodicalIssueConnection",
        items:  Array< {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      pubSubscriptions?:  {
        __typename: "ModelPubSubscriptionConnection",
        items:  Array< {
          __typename: "PubSubscription",
          qty: number,
          startDate?: string | null,
          status: PubSubscriptionStatus,
          periodicalID: string,
          subscriberID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    placedDate: string,
    isAutomaticOrder: boolean,
    isPubSubscriptionOrder: boolean,
    itemQty: number,
    status: OrderStatus,
    cancellationReason?: string | null,
    itemID?: string | null,
    subscriberID: string,
    periodicalIssueID?: string | null,
    subscriber:  {
      __typename: "Subscriber",
      id: string,
      firstName: string,
      lastName: string,
      subscriberGroupID?: string | null,
      pubSubscriptions?:  {
        __typename: "ModelPubSubscriptionConnection",
        items:  Array< {
          __typename: "PubSubscription",
          qty: number,
          startDate?: string | null,
          status: PubSubscriptionStatus,
          periodicalID: string,
          subscriberID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          placedDate: string,
          isAutomaticOrder: boolean,
          isPubSubscriptionOrder: boolean,
          itemQty: number,
          status: OrderStatus,
          cancellationReason?: string | null,
          itemID?: string | null,
          subscriberID: string,
          periodicalIssueID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      group?:  {
        __typename: "SubscriberGroup",
        id: string,
        name: string,
        members?:  {
          __typename: "ModelSubscriberConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    periodicalIssue?:  {
      __typename: "PeriodicalIssue",
      id: string,
      issueDate: string,
      status: IssueStatus,
      periodicalID: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          placedDate: string,
          isAutomaticOrder: boolean,
          isPubSubscriptionOrder: boolean,
          itemQty: number,
          status: OrderStatus,
          cancellationReason?: string | null,
          itemID?: string | null,
          subscriberID: string,
          periodicalIssueID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      isBatchClosed: boolean,
      periodical:  {
        __typename: "Periodical",
        id: string,
        name: string,
        recurrence: PeriodicalRecurrence,
        issues?:  {
          __typename: "ModelPeriodicalIssueConnection",
          nextToken?: string | null,
        } | null,
        pubSubscriptions?:  {
          __typename: "ModelPubSubscriptionConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    placedDate: string,
    isAutomaticOrder: boolean,
    isPubSubscriptionOrder: boolean,
    itemQty: number,
    status: OrderStatus,
    cancellationReason?: string | null,
    itemID?: string | null,
    subscriberID: string,
    periodicalIssueID?: string | null,
    subscriber:  {
      __typename: "Subscriber",
      id: string,
      firstName: string,
      lastName: string,
      subscriberGroupID?: string | null,
      pubSubscriptions?:  {
        __typename: "ModelPubSubscriptionConnection",
        items:  Array< {
          __typename: "PubSubscription",
          qty: number,
          startDate?: string | null,
          status: PubSubscriptionStatus,
          periodicalID: string,
          subscriberID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          placedDate: string,
          isAutomaticOrder: boolean,
          isPubSubscriptionOrder: boolean,
          itemQty: number,
          status: OrderStatus,
          cancellationReason?: string | null,
          itemID?: string | null,
          subscriberID: string,
          periodicalIssueID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      group?:  {
        __typename: "SubscriberGroup",
        id: string,
        name: string,
        members?:  {
          __typename: "ModelSubscriberConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    periodicalIssue?:  {
      __typename: "PeriodicalIssue",
      id: string,
      issueDate: string,
      status: IssueStatus,
      periodicalID: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          placedDate: string,
          isAutomaticOrder: boolean,
          isPubSubscriptionOrder: boolean,
          itemQty: number,
          status: OrderStatus,
          cancellationReason?: string | null,
          itemID?: string | null,
          subscriberID: string,
          periodicalIssueID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      isBatchClosed: boolean,
      periodical:  {
        __typename: "Periodical",
        id: string,
        name: string,
        recurrence: PeriodicalRecurrence,
        issues?:  {
          __typename: "ModelPeriodicalIssueConnection",
          nextToken?: string | null,
        } | null,
        pubSubscriptions?:  {
          __typename: "ModelPubSubscriptionConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    placedDate: string,
    isAutomaticOrder: boolean,
    isPubSubscriptionOrder: boolean,
    itemQty: number,
    status: OrderStatus,
    cancellationReason?: string | null,
    itemID?: string | null,
    subscriberID: string,
    periodicalIssueID?: string | null,
    subscriber:  {
      __typename: "Subscriber",
      id: string,
      firstName: string,
      lastName: string,
      subscriberGroupID?: string | null,
      pubSubscriptions?:  {
        __typename: "ModelPubSubscriptionConnection",
        items:  Array< {
          __typename: "PubSubscription",
          qty: number,
          startDate?: string | null,
          status: PubSubscriptionStatus,
          periodicalID: string,
          subscriberID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          placedDate: string,
          isAutomaticOrder: boolean,
          isPubSubscriptionOrder: boolean,
          itemQty: number,
          status: OrderStatus,
          cancellationReason?: string | null,
          itemID?: string | null,
          subscriberID: string,
          periodicalIssueID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      group?:  {
        __typename: "SubscriberGroup",
        id: string,
        name: string,
        members?:  {
          __typename: "ModelSubscriberConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    periodicalIssue?:  {
      __typename: "PeriodicalIssue",
      id: string,
      issueDate: string,
      status: IssueStatus,
      periodicalID: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          placedDate: string,
          isAutomaticOrder: boolean,
          isPubSubscriptionOrder: boolean,
          itemQty: number,
          status: OrderStatus,
          cancellationReason?: string | null,
          itemID?: string | null,
          subscriberID: string,
          periodicalIssueID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      isBatchClosed: boolean,
      periodical:  {
        __typename: "Periodical",
        id: string,
        name: string,
        recurrence: PeriodicalRecurrence,
        issues?:  {
          __typename: "ModelPeriodicalIssueConnection",
          nextToken?: string | null,
        } | null,
        pubSubscriptions?:  {
          __typename: "ModelPubSubscriptionConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateItemSubscription = {
  onCreateItem?:  {
    __typename: "Item",
    id: string,
    name: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        placedDate: string,
        isAutomaticOrder: boolean,
        isPubSubscriptionOrder: boolean,
        itemQty: number,
        status: OrderStatus,
        cancellationReason?: string | null,
        itemID?: string | null,
        subscriberID: string,
        periodicalIssueID?: string | null,
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        periodicalIssue?:  {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateItemSubscription = {
  onUpdateItem?:  {
    __typename: "Item",
    id: string,
    name: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        placedDate: string,
        isAutomaticOrder: boolean,
        isPubSubscriptionOrder: boolean,
        itemQty: number,
        status: OrderStatus,
        cancellationReason?: string | null,
        itemID?: string | null,
        subscriberID: string,
        periodicalIssueID?: string | null,
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        periodicalIssue?:  {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteItemSubscription = {
  onDeleteItem?:  {
    __typename: "Item",
    id: string,
    name: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        placedDate: string,
        isAutomaticOrder: boolean,
        isPubSubscriptionOrder: boolean,
        itemQty: number,
        status: OrderStatus,
        cancellationReason?: string | null,
        itemID?: string | null,
        subscriberID: string,
        periodicalIssueID?: string | null,
        subscriber:  {
          __typename: "Subscriber",
          id: string,
          firstName: string,
          lastName: string,
          subscriberGroupID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        periodicalIssue?:  {
          __typename: "PeriodicalIssue",
          id: string,
          issueDate: string,
          status: IssueStatus,
          periodicalID: string,
          notes?: string | null,
          isBatchClosed: boolean,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

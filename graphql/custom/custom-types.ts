export type ListActiveSubscribersQuery = {
  listPubSubscriptions: {
    __typename: "ModelPubSubscriptionConnection";
    items: Array<{
      subscriberID: string;
    }>;
  };
};

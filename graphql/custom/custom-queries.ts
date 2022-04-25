export const listActiveSubscribers = /* GraphQL */ `
  query ListActiveSubscribers($periodicalID: ID!) {
    listPubSubscriptions(periodicalID: $periodicalID) {
      items {
        subscriberID
      }
    }
  }
`;

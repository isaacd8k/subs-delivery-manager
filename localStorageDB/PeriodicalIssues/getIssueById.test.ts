import getIssueById from "./getIssueById";

describe("get a Periodical issue by id", () => {
  it("resolves promise when doing a valid lookup", async () => {
    const test = await getIssueById("123");
  });

  it("resolves promise to null when issue is not found", async () => {
    const bogusId = "BOGUSID";
    const notFound = await getIssueById(bogusId);
    expect(notFound).toEqual(null);
  });
});

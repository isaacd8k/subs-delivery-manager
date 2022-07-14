import getIssuesByPeriodical from "./getIssuesByPeriodical";

describe("get issues by Periodical Id", () => {
  it("returns an array when no errors", async () => {
    const periodicalId = "abc123";
    const res = await getIssuesByPeriodical(periodicalId);
    expect(res).toEqual(expect.arrayContaining([]));
  });
});

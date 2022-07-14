import { IssueStatus } from "../../graphql/types";
import getIssuesByStatus from "./getIssuesByStatus";

describe("get issues by Periodical Id", () => {
  it("returns an array when no errors", async () => {
    const status: IssueStatus = IssueStatus.RECEIVED;
    const res = await getIssuesByStatus(status);
    expect(res).toEqual(expect.arrayContaining([]));
  });
});

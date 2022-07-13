import { v4 as uuidv4 } from "uuid";
import { IssueStatus } from "../../graphql/types";
import createOne, { PeriodicalIssueLight } from "./createOne";

jest.mock("uuid", () => {
  return {
    __esModule: true,
    v4: jest.fn(() => "123"),
  };
});

// define new type that is returned from "server" that includes "id", and "updatedAt", "createdAt" fields
const newPeriodicalIssue: PeriodicalIssueLight = {
  __typename: "PeriodicalIssue",
  createdAt: "",
  updatedAt: "",
  status: IssueStatus.UPCOMING,
  isBatchClosed: false,
  issueDate: "",
  periodicalID: "123",
};

describe("store a PeriodicalIssue in local storage", () => {
  it("resolves promise with created object", async () => {
    const data = await createOne(newPeriodicalIssue);
    expect(data).toMatchObject(newPeriodicalIssue);
  });

  it("generates an `id` field", async () => {
    const data = await createOne(newPeriodicalIssue);
    expect(data).toHaveProperty("id");
  });
});

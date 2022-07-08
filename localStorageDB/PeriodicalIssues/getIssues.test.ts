import getIssues from "./getIssues";

describe("getIssues using localStorage", () => {
  it("returns a promise that resolves to an array", async () => {
    const data = await getIssues();
    expect(Array.isArray(data)).toBeTruthy();
  });
});

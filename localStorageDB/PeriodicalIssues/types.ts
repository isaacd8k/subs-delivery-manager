import { PeriodicalIssue } from "../../graphql/types";

export type NewPeriodicalIssuePayload = Omit<
  PeriodicalIssue,
  "periodical" | "id" | "orders"
>;

export type PeriodicalIssueLocalDB = Omit<PeriodicalIssue, "periodical">;

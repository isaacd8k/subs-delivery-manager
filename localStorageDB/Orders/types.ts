import { Order, PeriodicalIssue } from "../../graphql/types";

export type LocalOrder = Omit<Order, "periodicalIssue" | "subscriber"> & {
  periodicalIssueLocal?: PeriodicalIssueLocalDB;
};

export type PeriodicalIssueLocalDB = Omit<PeriodicalIssue, "periodical">;

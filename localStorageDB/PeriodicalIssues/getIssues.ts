import { PeriodicalIssueLocalDB } from "./types";

import LOCALDB_KEY from "./dbKey";

async function getIssues(): Promise<PeriodicalIssueLocalDB[]> {
  if (typeof window === "undefined") {
    return Promise.resolve([]);
  }

  try {
    const issuesUnparsed = window.localStorage.getItem(LOCALDB_KEY);
    if (issuesUnparsed) {
      const issuesParsed = JSON.parse(
        issuesUnparsed
      ) as PeriodicalIssueLocalDB[];
      if (Array.isArray(issuesParsed)) {
        return Promise.resolve(issuesParsed);
      }
      return Promise.resolve([]);
    }

    return Promise.resolve([]);
  } catch (error) {
    console.warn(`Error reading localStorage key “${LOCALDB_KEY}”:`, error);
    return Promise.resolve([]);
  }
}

export default getIssues;

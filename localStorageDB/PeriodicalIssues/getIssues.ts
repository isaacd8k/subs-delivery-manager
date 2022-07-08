import { PeriodicalIssue } from "../../graphql/types";

const LOCALDB_KEY = "localPeriodicalIssues";

async function getIssues(): Promise<PeriodicalIssue[]> {
  if (typeof window === "undefined") {
    return Promise.resolve([]);
  }

  try {
    const issuesUnparsed = window.localStorage.getItem(LOCALDB_KEY);
    if (issuesUnparsed) {
      const issuesParsed = JSON.parse(issuesUnparsed) as PeriodicalIssue[];
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

import { localStorageAvailable } from "../../utils/isStorageAvailable";
import LOCALDB_KEY from "./_dbKey";
import { PeriodicalIssueLocalDB } from "./types";

async function getIssuesByPeriodical(
  periodicalId: string
): Promise<PeriodicalIssueLocalDB[]> {
  if (!localStorageAvailable()) {
    return Promise.reject("localStorage not available");
  }

  try {
    const issuesUnparsed = window.localStorage.getItem(LOCALDB_KEY);
    if (issuesUnparsed) {
      // parse Issues
      const issuesParsed = JSON.parse(
        issuesUnparsed
      ) as PeriodicalIssueLocalDB[];

      if (Array.isArray(issuesParsed)) {
        // lookup id
        const records = issuesParsed.filter(
          (issue) => (issue.periodicalID = periodicalId)
        );
        // if found, return record, else return null
        return Promise.resolve(records);
      }
      // Data is corrupted, data in storage is not an array
      return Promise.reject(
        `LocalStorage key ${LOCALDB_KEY} returned the wrong data type. Unable to parse`
      );
    }
    // no issues in localStorage
    return Promise.resolve([]);
  } catch (error) {
    console.warn(`Error reading localStorage key “${LOCALDB_KEY}”:`, error);
    return Promise.reject();
  }
}

export default getIssuesByPeriodical;

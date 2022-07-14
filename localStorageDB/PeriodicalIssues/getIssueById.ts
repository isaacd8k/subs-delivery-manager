import { localStorageAvailable } from "../../utils/isStorageAvailable";
import LOCALDB_KEY from "./_dbKey";
import { PeriodicalIssueLocalDB } from "./types";

async function getIssueById(
  id: string
): Promise<PeriodicalIssueLocalDB | null> {
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
        const record = issuesParsed.find((issue) => issue.id === id);
        // if found, return record, else return null
        return record ? Promise.resolve(record) : Promise.resolve(null);
      }
      // Data is corrupted, data in storage is not an array
      console.error(
        `LocalStorage key ${LOCALDB_KEY} returned the wrong data type.`
      );
      return Promise.resolve(null);
    }
    // no issues in localStorage
    return Promise.resolve(null);
  } catch (error) {
    console.warn(`Error reading localStorage key “${LOCALDB_KEY}”:`, error);
    return Promise.reject();
  }
}

export default getIssueById;

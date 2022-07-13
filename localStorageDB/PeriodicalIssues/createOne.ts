import { PeriodicalIssue } from "../../graphql/types";
const LOCALDB_KEY = "localPeriodicalIssues";
import { v4 as uuidv4 } from "uuid";
import { localStorageAvailable } from "../../utils/isStorageAvailable";

export type PeriodicalIssueLight = Omit<
  PeriodicalIssue,
  "periodical" | "id" | "orders"
>;

function createIssue(
  periodicalIssue: PeriodicalIssueLight
): Promise<PeriodicalIssueLight> {
  if (typeof window === "undefined") {
    return Promise.reject("localStorage not available window");
  }

  if (!localStorageAvailable()) {
    return Promise.reject("localStorage not available method");
  }

  // validation? (issue exists, issueDate is valid, etc)

  const localStorage = window.localStorage;
  const id = uuidv4();
  const newPeriodicalIssue = { ...periodicalIssue, id };

  // try setting item in local storage
  try {
    const serialized = JSON.stringify(newPeriodicalIssue);
    localStorage.setItem(LOCALDB_KEY, serialized);
    // success: return resolved promise
    return Promise.resolve(newPeriodicalIssue);
  } catch (error) {
    // error: return rejection with error message
    return Promise.reject(new Error("Unable to set item in localStorage"));
  }
}

export default createIssue;

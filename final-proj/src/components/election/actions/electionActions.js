

export const VIEW_RESULTS_ACTION = "[Election] VIEW_RESULTS";
export const SHOULD_DISPLAY_RESULTS_ACTION = "[Election] SHOULD_DISPLAY_RESULTS";


export const createViewResultsAction = (electionId) => ({ type: VIEW_RESULTS_ACTION, electionId})
export const createShouldDisplayResultsAction = (bool) => ({ type: SHOULD_DISPLAY_RESULTS_ACTION, bool})
import { createApi } from "../../../shared/services/apiData"

export const SELECT_ID_ACTION = "[Election] SELECT_ID";
export const SHOULD_DISPLAY_RESULTS_ACTION = "[Election] SHOULD_DISPLAY_RESULTS";

export const createSelectIdAction = (id) => ({ type: SELECT_ID_ACTION, id });
export const createShouldDisplayResultsAction = (bool) => ({ type: SHOULD_DISPLAY_RESULTS_ACTION, bool})

export const ADD_ELECTION_REQUEST_ACTION = "[Election] ADD_ELECTION_REQUEST";
export const ADD_ELECTION_DONE_ACTION = "[Election] ADD_ELECTION_DONE";


export const REFRESH_ELECTIONS_REQUEST_ACTION = "[Election] REFRESH_ELECTIONS_REQUEST";
export const REFRESH_ELECTIONS_DONE_ACTION = "[Election] REFRESH_ELECTIONS_DONE";

const {
    all: allElections,
    append: appendElection,
    replace: replaceElection,
    remove: removeElection,   
} = createApi('elections');

export const createRefreshElectionsRequestAction = () => ({
    type: REFRESH_ELECTIONS_REQUEST_ACTION
})

export const createRefreshElectionsDoneAction = (elections) => ({
    type: REFRESH_ELECTIONS_DONE_ACTION,elections
})

export const refreshElections = () => {
    return async dispatch => {
        dispatch(createRefreshElectionsRequestAction());
        const elections = await allElections();
        dispatch(createRefreshElectionsDoneAction(elections));
    }
}

export const createAddElectionRequestAction = election => ({
    type:ADD_ELECTION_REQUEST_ACTION, election
})

export const createAddElectionDoneAction = () => ({
    type:ADD_ELECTION_DONE_ACTION
})

export const addElection = election => {

    return async dispatch => {
        dispatch(createAddElectionRequestAction(election));
        await appendElection(election);
        //TODO: When the add panel and table panel are seprated, this should be dispatched
        //dispatch(createAddElectionDoneAction());
        dispatch(refreshElections());
    }
}

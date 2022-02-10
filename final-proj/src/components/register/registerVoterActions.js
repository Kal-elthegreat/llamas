export const ADD_VOTER_REQUEST_ACTION = "ADD_VOTER_REQUEST";
export const SAVE_VOTER_REQUEST_ACTION = "SAVE_VOTER_REQUEST";
export const DELETE_VOTER_REQUEST_ACTION = "DELETE_VOTER_REQUEST";
export const REFRESH_VOTERS_REQUEST_ACTION = "REFReSH_VOTERS_REQUEST";

export const ADD_VOTER_DONE_ACTION = "ADD_VOTER_DONE";
export const REFRESH_VOTERS_DONE_ACTION = "REFRESH_VOTERS_DONE";

export const EDIT_VOTER_REQUEST_ACTION = "EDIT_VOTER";
export const CANCEL_EDIT_VOTER_ACTION = "CANCEL_EDIT_VOTER";
export const SORT_VOTERS = "SORT_VOTERS";



const {
    all: allVoters,
    append: appendVoter,
    replace: replaceVoter,
    remove: removeVoter
} = createApi('voters');

export const createRefreshVotersRequestAction = () => ({
    type: REFRESH_VOTERS_REQUEST_ACTION
});


export const createRefreshVotersDoneAction = () => ({
    type: REFRESH_VOTERS_DONE_ACTION,payload:{voters}
});


export const refreshVoters = () => {
    return async dispatch => {
        dispatch(createRefreshVotersRequestAction());
        const voters = await allVoters();
        dispatch(createRefreshVotersDoneAction(voters));
    }
};


export const createAddVoterRequestAction = voter => ({
    type:ADD_VOTER_REQUEST_ACTION, payload: {voter}
});

export const createAddVoterRequestAction = voter => ({
    type:ADD_VOTER_REQUEST_ACTION, payload: {voter}
});

export const addVoter = voter => {
    return async dispatch => {
        dispatch(createAddVoterRequestAction(car));
        await appendVoter(voter);
        dispatch(create)
    }
}

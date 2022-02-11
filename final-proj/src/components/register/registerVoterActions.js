import { createApi } from "../../shared/services/apiData"


export const ADD_VOTER_REQUEST_ACTION = "ADD_VOTER_REQUEST";
export const SAVE_VOTER_REQUEST_ACTION = "SAVE_VOTER_REQUEST";
export const DELETE_VOTER_REQUEST_ACTION = "DELETE_VOTER_REQUEST";
export const REFRESH_VOTERS_REQUEST_ACTION = "REFRESH_VOTERS_REQUEST";

export const ADD_VOTER_DONE_ACTION = "ADD_VOTER_DONE";
export const REFRESH_VOTERS_DONE_ACTION = "REFRESH_VOTERS_DONE";

export const EDIT_VOTER_REQUEST_ACTION = "EDIT_VOTER";
export const CANCEL_EDIT_VOTER_ACTION = "CANCEL_EDIT_VOTER";
export const SORT_VOTERS_ACTION = "SORT_VOTERS";

export const DELETE_MULTIPLE_VOTERS_REQUEST_ACTION = 'DELETE_MULTIPLE_VOTERS_REQUEST';
export const DELETE_MULTIPLE_VOTERS_DONE_ACTION = 'DELETE_MULTIPLE_VOTERS_DONE';
export const DELETE_MULTIPLE_VOTERS_ACTION = 'DELETE_MULTIPLE_VOTERS';
export const SELECT_VOTERS_TO_DELETE_ACTION = 'SELECT_VOTERS_TO_DELETE_ACTION';

const {
    all: allVoters,
    append: appendVoter,
    replace: replaceVoter,
    remove: removeVoter,
    removePromise: removePromise,
    removeMultiple
} = createApi('voters');

export const createRefreshVotersRequestAction = () => ({
    type: REFRESH_VOTERS_REQUEST_ACTION
})

export const createRefreshVotersDoneAction = (voters) => ({
    type: REFRESH_VOTERS_DONE_ACTION,payload:{voters}
})

//removeMultiple([1,3]);

export const refreshVoters = () => {
    return async dispatch => {
        dispatch(createRefreshVotersRequestAction());
        const voters = await allVoters();
        dispatch(createRefreshVotersDoneAction(voters));
    }
}

export const createAddVoterRequestAction = voter => ({
    type:ADD_VOTER_REQUEST_ACTION, payload: {voter}
})

export const createAddVoterDoneAction = () => ({
    type:ADD_VOTER_DONE_ACTION
})

export const addVoter = voter => {
    return async dispatch => {
        dispatch(createAddVoterRequestAction(voter));
        await appendVoter(voter);
        //TODO: When the add panel and table panel are seprated, this should be dispatched
        //dispatch(createAddVoterDoneAction());
        dispatch(refreshVoters());
    }
}

export const createEditVoterAction = editVoterId =>({
    type: EDIT_VOTER_REQUEST_ACTION, payload: {editVoterId}
})

export const createCancelEditVoterAction = ()=>({
    type: CANCEL_EDIT_VOTER_ACTION
})

export const createSaveVoterRequestAction = voter => ({
    type: SAVE_VOTER_REQUEST_ACTION, payload:{voter}
})

export const saveVoter = voter => {
    return async dispatch => {
        dispatch(createSaveVoterRequestAction(voter));
        await replaceVoter(voter);
        dispatch(refreshVoters());
    }
}

export const createDeleteVoterRequestAction = voterId => ({
    type:DELETE_VOTER_REQUEST_ACTION, payload:{voterId}
})

export const deleteVoter = voterId => {
    return async dispatch => {
        dispatch(createDeleteVoterRequestAction(voterId));
        await removeVoter(voterId);
        dispatch(refreshVoters());
    }        
}


export const createSortVotersAction = sortObj=>({
    type:SORT_VOTERS_ACTION, payload:{sortObj}
})

export const createDeleteMultipleVotersRequestAction = voterIds => ({ type: DELETE_MULTIPLE_VOTERS_REQUEST_ACTION, payload: {voterIds} });

export const createDeleteMultipleVotersDoneAction = voterIds => ({ type: DELETE_MULTIPLE_VOTERS_DONE_ACTION, payload: {voterIds} });

export const deleteVoterIdsToDelete = voterIdsToDelete => {
   /* return async dispatch => {
    let promiseArray = [];
    for (let i=0;i<voterIds.length;i++){
        promiseArray.push( removePromise(voterIds[i]))
    }
    Promise.all(promiseArray).then(results=>{
        dispatch(refreshVoters());
    })*/

    return async dispatch => {
       // console.log('deleteing ', voterIdsToDelete);
        Promise.all(voterIdsToDelete.map(voterId => removeVoter(voterId)))
        .then(() => dispatch(refreshVoters()))        
    }
    //removeMultiple(voterIds);
    //dispatch(refreshVoters());
}


export const createSelectVotersToDeleteAction = voterId => ({
    type:SELECT_VOTERS_TO_DELETE_ACTION,payload:{voterId}
})
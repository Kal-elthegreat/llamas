import { combineReducers } from "redux";
import { VIEW_RESULTS_ACTION,SHOULD_DISPLAY_RESULTS_ACTION, REFRESH_ELECTIONS_DONE_ACTION } from "../components/election/actions/electionActions";
import { CANCEL_EDIT_VOTER_ACTION, EDIT_VOTER_REQUEST_ACTION, REFRESH_VOTERS_DONE_ACTION, SORT_VOTERS_ACTION } from "../components/register/registerVoterActions";

const votersReducer = (voters=[],action)=>{
    if(action.type === REFRESH_VOTERS_DONE_ACTION)
        return action.payload.voters;
    return voters;
}

const editVoterIdReducer = (editVoterId=-1,action) => {
    if(action.type === EDIT_VOTER_REQUEST_ACTION){
        return action.payload.editVoterId;
    }

    if([REFRESH_VOTERS_DONE_ACTION,CANCEL_EDIT_VOTER_ACTION].includes(action.type))
        return -1;

    return editVoterId;
}

const sortObjReducer = (sortObj={order:true,column:'Id'},action)=>{
    if(action.type===SORT_VOTERS_ACTION){
       return {...action.payload.value}
    }
    return sortObj;
}

const electionsReducer = (elections=[],action)=>{
    if(action.type === REFRESH_ELECTIONS_DONE_ACTION)
        return action.payload.elections;
    return elections;
}


// Elections Reducers
const viewResultsReducer = (election = [], action) => {
    if (action.type === VIEW_RESULTS_ACTION) {
        return election
        //return state.find(el => el ===action.id) //should find the matching id from the array of elections
    }
    return election; 
}
const displayResultsReducer = (shouldDisplay = false, action) => {
    if (action.type === SHOULD_DISPLAY_RESULTS_ACTION) {
        return shouldDisplay = true //should determine if we display the list of questions for an election
    }
    return shouldDisplay; 
}

export const llamasReducer = combineReducers({
    voters: votersReducer,
    editVoterId: editVoterIdReducer,
    sortObj: sortObjReducer,
    elections:electionsReducer,
    election: viewResultsReducer,
    shouldDisplay: displayResultsReducer
})
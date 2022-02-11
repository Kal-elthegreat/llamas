import { combineReducers } from "redux";
import { SELECT_ID_ACTION,SHOULD_DISPLAY_RESULTS_ACTION, REFRESH_ELECTIONS_DONE_ACTION } from "../components/election/actions/electionActions";
import { CANCEL_EDIT_VOTER_ACTION, EDIT_VOTER_REQUEST_ACTION, REFRESH_VOTERS_DONE_ACTION, SELECT_VOTERS_TO_DELETE_ACTION, SORT_VOTERS_ACTION } from "../components/register/registerVoterActions";

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
       return {...action.payload.sortObj}
    }
    return sortObj;
}


const voterIdsToDeleteReducer = (voterIdsToDelete=[],action)=>{
    //console.log(voterIdsToDelete,action.payload.voterId,action);
    if(action.type===SELECT_VOTERS_TO_DELETE_ACTION){
        
        if(voterIdsToDelete.includes(action.payload.voterId)){
            return voterIdsToDelete.filter(v=> v !== action.payload.voterId);
        }
        else{
            return [
                ...voterIdsToDelete,
                action.payload.voterId
            ];
        }
    }
    if(action.type === REFRESH_VOTERS_DONE_ACTION){
        return [];
    }
    return voterIdsToDelete;
}

// Elections Reducers //////////////////

const electionsReducer = (elections=[],action)=>{
    if (action.type === REFRESH_ELECTIONS_DONE_ACTION) {
        return action.elections;
    }
    return elections;
}

const electionIdReducer = (id = -1, action) => {
    if (action.type === SELECT_ID_ACTION) {
        return action.id 
    }
    return id; 
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
    voterIdsToDelete: voterIdsToDeleteReducer,
    //elections
    elections:electionsReducer,
    electionId: electionIdReducer,
    shouldDisplay: displayResultsReducer
})
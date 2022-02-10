import { combineReducers } from "redux";
import { CANCEL_EDIT_VOTER_ACTION, EDIT_VOTER_REQUEST_ACTION, REFRESH_VOTERS_DONE_ACTION, SORT_VOTERS_ACTION } from "../components/register/registerVoterActions";

const votersReducer = (voters=[],action)=>{
    if(action.type === REFRESH_VOTERS_DONE_ACTION)
        return action.payload.voters;
    return voters;
}

const editVoterIdRedcuer = (editVoterId=-1,action) => {
    if(action.type === EDIT_VOTER_REQUEST_ACTION){
        return action.payload.voterId;
    }

    if([REFRESH_VOTERS_DONE_ACTION,CANCEL_EDIT_VOTER_ACTION].includes(action.type))
        return -1;

    return editVoterId;
}

const sortObjReducer = (sortObj={order:true,column:'ID'},action)=>{
    if(action.type===SORT_VOTERS_ACTION){
       return {...action.payload.value}
    }
    return sortObj;
}

export const llamasReducer = combineReducers({
    voters: votersReducer,
    editVoterId: editVoterIdRedcuer,
    sortObj: sortObjReducer
})
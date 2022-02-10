import { combineReducers } from "redux";
import { REFRESH_VOTERS_DONE_ACTION } from "../components/register/registerVoterActions";

const votersReducer = (voters=[],action)=>{
    if(action.type === REFRESH_VOTERS_DONE_ACTION)
        return action.payload.voters;
    return voters;
}

export const llamasReducer = combineReducers({
    voters: votersReducer
})
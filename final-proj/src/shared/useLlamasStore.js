import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { createShouldDisplayResultsAction, addElection,refreshElections, createSelectIdAction} from "../components/election/actions/electionActions";
import { addVoter, refreshVoters,saveVoter,deleteVoter,deleteVoterIdsToDelete, createSortVotersAction, createEditVoterAction, createCancelEditVoterAction, createSelectVotersToDeleteAction } from "../components/register/registerVoterActions";
import { selectVoterIds,selectEditVoterId, selectSortedVoters, selectSortObj } from "../components/register/registerVoterSelectors";


export const useLlamasStore = ()=> {
    //voters
    const voters = useSelector(selectSortedVoters);
    const voterIdsToDelete = useSelector(state=> state.voterIdsToDelete);
    const editVoterId = useSelector(selectEditVoterId);
    const sortObj = useSelector(selectSortObj);

    //elections
    const elections = useSelector(state=> state.elections);
    const electionId = useSelector(state=> state.electionId);
    const election = selectOne(elections,electionId)
    const shouldDisplay = useSelector(state => state.shouldDisplay);
    
    const dispatch = useDispatch();
    
    const actions = useMemo(()=> bindActionCreators({
        //Voters
        refreshVoters,
        addVoter,
        saveVoter,
        deleteVoter,
        deleteVoterIdsToDelete,
        sortVoters:createSortVotersAction,
        editVoter: createEditVoterAction,
        cancelEditVoter:createCancelEditVoterAction,
        selectVotersToDelete: createSelectVotersToDeleteAction,

        //Elections
        shouldDisplayResults:createShouldDisplayResultsAction,
        addElection,
        selectElectionId: createSelectIdAction,
        refreshElections,
    },dispatch),[dispatch]);

    useEffect(()=>{
        actions.refreshVoters();
        actions.refreshElections();
    },[actions]);

    return {...actions, 
        voters, editVoterId, sortObj,
        election,shouldDisplay,elections,voterIdsToDelete};
}

//fn to return a single election
const selectOne = (elections,id) => {
    if (elections) {
        return elections.find(el => el.id === id)   
    }
}
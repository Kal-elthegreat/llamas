import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { createShouldDisplayResultsAction, createAddElectionRequestAction,refreshElections} from "../components/election/actions/electionActions";
import { addVoter, refreshVoters,saveVoter,deleteVoter, deleteMultipleVoters, createSortVotersAction, createEditVoterAction, createCancelEditVoterAction } from "../components/register/registerVoterActions";
import { selectEditVoterId, selectSortedVoters, selectSortObj } from "../components/register/registerVoterSelectors";


export const useLlamasStore = ()=> {
    //voters
    const voters = useSelector(selectSortedVoters);
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
        deleteMultipleVoters,
        sortVoters:createSortVotersAction,
        editVoter: createEditVoterAction,
        cancelEditVoter:createCancelEditVoterAction,

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
        election,shouldDisplay,elections};
}

//fn to return a single election
const selectOne = (elections,id) => {
    if (elections) {
        return elections.find(el => el.id === id)   
    }
}
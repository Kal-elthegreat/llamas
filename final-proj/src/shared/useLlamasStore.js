import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { createViewResultsAction,createShouldDisplayResultsAction, createAddElectionRequestAction,refreshElections } from "../components/election/actions/electionActions";
import { addVoter, refreshVoters,saveVoter,deleteVoter, createSortVotersAction, createEditVoterAction, createCancelEditVoterAction } from "../components/register/registerVoterActions";
import { selectEditVoterId, selectSortedVoters, selectSortObj } from "../components/register/registerVoterSelectors";


export const useLlamasStore = ()=> {
    //voters
    const voters = useSelector(selectSortedVoters);
    const editVoterId = useSelector(selectEditVoterId);
    const sortObj = useSelector(selectSortObj);

    //elections
    const elections = useSelector(state=> state.elections);
    const election = useSelector(state => state.election);
    const shouldDisplay = useSelector(state => state.shouldDisplay);

    const dispatch = useDispatch();

    const actions = useMemo(()=> bindActionCreators({
        //Voters
        refreshVoters,
        addVoter,
        saveVoter,
        deleteVoter,
        sortVoters:createSortVotersAction,
        editVoter: createEditVoterAction,
        cancelEditVoter:createCancelEditVoterAction,

        //Elections
        viewResults:createViewResultsAction,
        shouldDisplayResults:createShouldDisplayResultsAction,
        addElection: createAddElectionRequestAction,
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
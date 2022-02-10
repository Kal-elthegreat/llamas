import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { createViewResultsAction,createShouldDisplayResultsAction } from "../components/election/actions/electionActions";
import { addVoter, refreshVoters,saveVoter,deleteVoter, createSortVotersAction, createEditVoterAction, createCancelEditVoterAction } from "../components/register/registerVoterActions";
import { selectEditVoterId, selectSortedVoters, selectSortObj } from "../components/register/registerVoterSelectors";


export const useLlamasStore = ()=> {
    const voters = useSelector(selectSortedVoters);
    const editVoterId = useSelector(selectEditVoterId);
    const sortObj = useSelector(selectSortObj);
    const election = useSelector(state => state.election);
    const shouldDisplay = useSelector(state => state.shouldDisplay);
    console.log(election,shouldDisplay)

    const dispatch = useDispatch();

    const actions = useMemo(()=> bindActionCreators({
        refreshVoters,
        addVoter,
        saveVoter,
        deleteVoter,
        sortVoters:createSortVotersAction,
        editVoter: createEditVoterAction,
        cancelEditVoter:createCancelEditVoterAction,
        viewResults:createViewResultsAction,
        shouldDisplayResults:createShouldDisplayResultsAction,
    },dispatch),[dispatch]);

    useEffect(()=>{
        actions.refreshVoters();
    },[actions]);

    return {...actions, voters, editVoterId, sortObj,election,shouldDisplay};
}
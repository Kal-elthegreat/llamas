import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { addVoter, refreshVoters,saveVoter,deleteVoter, createSortVotersAction, createEditVoterAction, createCancelEditVoterAction } from "../components/register/registerVoterActions";
import { selectEditVoterId, selectSortedVoters, selectSortObj } from "../components/register/registerVoterSelectors";


export const useLlamasStore=()=>{
    const voters = useSelector(selectSortedVoters);
    const editVoterId = useSelector(selectEditVoterId);
    const sortObj = useSelector(selectSortObj);

    const dispatch = useDispatch();

    const actions = useMemo(()=> bindActionCreators({
        refreshVoters,
        addVoter,
        saveVoter,
        deleteVoter,
        sortVoters:createSortVotersAction,
        editVoter: createEditVoterAction,
        cancelEditVoter:createCancelEditVoterAction
    },dispatch),[dispatch]);

    useEffect(()=>{
        actions.refreshVoters();
    },[actions]);


    return {...bindActionCreators, voters, editVoterId, sortObj};
}
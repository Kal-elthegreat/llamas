import { VoterForm } from "./VoterForm";
import { VoterTable } from "./VoterTable";
import { useLlamasStore } from '../../shared/useLlamasStore';


export const VoterTool = () =>{
    const llamasStore = useLlamasStore();
    return(
        <>
        <VoterForm buttonText="Register Voter" onSubmitVoterForm={llamasStore.addVoter}></VoterForm>

 
        <VoterTable voters={llamasStore.voters} 
                editVoterID={llamasStore.editVoterId}
                onEditVoter={llamasStore.editVoter}
                onDeleteVoter={llamasStore.deleteVoter} 
                onClickSave={llamasStore.saveVoter} 
                sortObj={llamasStore.sortObj}
                onSort={llamasStore.sortVoters}
                // sortButtonText={llamasStore.votersSort.sortCol + "-" + voterToolStore.votersSort.sortDir} 
                />
                </>

    )
};

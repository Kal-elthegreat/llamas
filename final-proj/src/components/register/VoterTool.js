import { VoterForm } from "./VoterForm";
import { VoterTable } from "./VoterTable";
import { useLlamasStore } from '../../shared/useLlamasStore';


export const VoterTool = () =>{
    const llamasStore = useLlamasStore();
    return(
        <>
        <VoterForm buttonText="Register Voter"></VoterForm>

 
        <VoterTable voters={llamasStore.voters} 
                onEditVoterID={llamasStore.editVoterId}
                onDeleteVoter={llamasStore.deleteVoter} 
                onClickSave={llamasStore.saveVoter} 
                // sortButtonText={llamasStore.votersSort.sortCol + "-" + voterToolStore.votersSort.sortDir} 
                />
                </>

    )
};

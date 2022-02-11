import { VoterForm } from "./VoterForm";
import { VoterTable } from "./VoterTable";
import { useLlamasStore } from '../../shared/useLlamasStore';
import './index.css'


export const VoterTool = () =>{
    const llamasStore = useLlamasStore();

    return(
        <div className="voter-tool-container">
            <VoterForm buttonText="Register Voter" onSubmitVoterForm={llamasStore.addVoter}/>
            <VoterTable voters={llamasStore.voters} 
                editVoterID={llamasStore.editVoterId}
                onEditVoter={llamasStore.editVoter}
                onDeleteVoter={llamasStore.deleteVoter} 
                onClickSave={llamasStore.saveVoter} 
                sortObj={llamasStore.sortObj}
                onSort={llamasStore.sortVoters}
                onCancelEdit={llamasStore.cancelEditVoter}
            />
        </div>

    )
};

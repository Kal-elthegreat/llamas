import { VoterTable } from '../components/VoterTable';
import { useLlamasStore } from '../../shared/useLlamasStore';

export const VoterTableTool = () => {
    const llamasStore = useLlamasStore();
    console.log(voterToolStore.voters);
        return(
        <VoterTable voters={llamasStore.voters} 
                onEditVoterID={llamasStore.editVoter}
                onDeleteVoter={llamasStore.deleteVoter} 
                onClickSave={llamasStore.saveVoter} 
                sortButtonText={llamasStore.votersSort.sortCol + "-" + voterToolStore.votersSort.sortDir} />
    )
}
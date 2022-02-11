import {ElectionsTable} from './ElectionsTable'
import {ElectionResults} from './ElectionResults'
import { useLlamasStore } from '../../shared/useLlamasStore'
import { ElectionForm } from './ElectionForm';

export const CreateElection = () => {
    // grab necessary state from store here and pass to children
    const store = useLlamasStore();

    return (
        <div className='election-container'>
            <ElectionForm onSubmitElection={store.addElection} electionForm={store.electionForm} updateElection={store.updateElection}/>
            <ElectionsTable
                elections={store.elections} /*elections should be an array of objects*/
                shouldDisplayResults={store.shouldDisplayResults}
                selectElectionId={store.selectElectionId}
            />
            <ElectionResults
                shouldDisplay={store.shouldDisplay}
                election={store.election}
            />
        </div>
    )
}

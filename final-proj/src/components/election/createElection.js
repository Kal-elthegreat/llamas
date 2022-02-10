import {ElectionsTable} from './ElectionsTable'
import {ElectionResults} from './ElectionResults'
import { useLlamasStore } from '../../shared/useLlamasStore'
import { ElectionForm } from './ElectionForm';

export const CreateElection = () => {
    // grab necessary state from store here and pass to children
    const store = useLlamasStore();
    console.log(store.election)
    return (
        <div className='election-container'>
            <ElectionForm onSubmitElection={store.addElection}/>
            <ElectionsTable
                elections={store.elections} /*elections should be an array of objects*/
                shouldDisplayResults={store.shouldDisplayResults}
            />
            <ElectionResults
                shouldDisplay={store.shouldDisplay}
                // questionnaire={questionnaire}
            />
        </div>
    )
}

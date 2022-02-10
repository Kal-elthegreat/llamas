import {ElectionsTable} from './ElectionsTable'
import {ElectionResults} from './ElectionResults'
import { useLlamasStore } from '../../shared/useLlamasStore'

export const CreateElection = () => {
    // grab necessary state from store here and pass to children
    const {viewRow,shouldDisplayResults,questionnaire} = useLlamasStore()
    return (
        <div className='election-container'>
            {/* <Form /> */}
            <ElectionsTable
                data={data}
                viewRow={viewRow}
            />
            <ElectionResults
                shouldDisplayResults={shouldDisplayResults}
                questionnaire={questionnaire}
            />
        </div>
    )
}

const data = [
    {
        "id": 2,
        "name": 'test',
        "questionnaire": [
            {
                "id": 1,
                "question": "Pets need to be considered as dependents for tax purposes?",
                "yesCount": 0,
                "noCount": 4,
                "voterIds": [1,17,92,35]
            },
            {
                "id": 2,
                "question": "Public transport should be free?",
                "yesCount": 4,
                "noCount": 0,
                "voterIds": [1,17,92,35]
            },
            {
                "id": 3,
                "question": "Pets need to be considered as dependents for tax purposes?",
                "yesCount": 2,
                "noCount": 2,
                "voterIds": [1,17,92,35]
            },
        ]
    },
    {
        "id": 3,
        "name": 'another one',
        "questionnaire": [
            {
                "id": 1,
                "question": "Pets need to be considered as dependents for tax purposes?",
                "pollCount": 0
            },
            {
                "id": 2,
                "question": "Public transport should be free?",
                "pollCount": 0
            }
        ]
    },

]
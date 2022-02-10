import './index.css'

export const ElectionResults = (props) => {

    const { shouldDisplay } = props;
    return (
        <div >
            {shouldDisplay && (
                <>
                    <h1 className='results-header'>Results</h1>
                    <table className="election-results">
                    <thead>
                        <tr>
                            <td>Questions</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td>Total Votes</td>
                        </tr>
                    </thead>
                    <tbody>
                        {questionnaire.map(q => {
                            return (
                                <tr key={q.id}>
                                    <td className='result-question'>{q.question}</td>
                                    <td>{q.yesCount}</td>
                                    <td>{q.noCount}</td>
                                    <td>{q.voterIds.length}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                    </table>
                </>
            )}
        </div>
    )
}

const questionnaire =  [
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


export const ElectionResults = (props) => {

    const { shouldDisplay } = props;
    return (
        <div>
            {shouldDisplay && (
                <table>
                    <thead>
                        <tr>
                            <td>Results</td>
                        </tr>
                    </thead>
                    <tbody>
                        {questionnaire.map(q => {
                            return (
                                <tr key={q.id}>
                                    <td>{q.question}</td>
                                    <td>{q.yesCount}</td>
                                    <td>{q.noCount}</td>
                                    <td>{q.totalVotes}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )}
            <h1>nothing to see</h1>
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
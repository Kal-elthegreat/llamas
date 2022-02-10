import './index.css'

export const ElectionResults = (props) => {

    const { shouldDisplay,election } = props; // need a questionnaire: array of question objects
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
                        {election.questionnaire.map(q => {
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

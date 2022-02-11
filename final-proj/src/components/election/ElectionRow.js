

export const ElectionRow = (props) => {
    const { election,shouldDisplayResults,selectElectionId} = props;

    const submitViewResults = (id) => {
        selectElectionId(id)
        shouldDisplayResults(true); 
    }

    return (
        <tr>
            <td>{election.name}</td>
            <td><button onClick={() => submitViewResults(election.id)}>View Results</button></td>
        </tr>
    )
}
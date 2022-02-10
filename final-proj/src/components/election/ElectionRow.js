

export const ElectionRow = (props) => {
    const { election, viewResults,shouldDisplayResults} = props;

    const submitViewResults = (id) => {
        shouldDisplayResults(true);
        viewResults(id)
    }

    return (
        <tr>
            <td>{election.name}</td>
            <td><button onClick={() => submitViewResults(election.id)}>View Results</button></td>{/* get obj by id, set should display to true */}
        </tr>
    )
}
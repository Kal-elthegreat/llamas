export const ElectionRow = (props) => {
    const { election} = props;
    return (
        <tr>
            <td>{election.name}</td>
            <td><button onClick={() => {console.log(`display results for ${election.id}`)}}>View Count</button></td> {/* get obj by id, set should display to true */}
        </tr>
    )
}
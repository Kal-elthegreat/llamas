export const VoterViewRow = props => {
    return (
        <tr key={props.voter.id}>
            <td>{props.voter.id}</td>
            <td>{props.voter.firstName}</td>
            <td>{props.voter.lastName}</td>
            <td>{props.voter.address}</td>
            <td>{props.voter.city}</td>
            <td>{props.voter.birthdate}</td>
            <td>{props.voter.email}</td>
            <td>{props.voter.phone}</td>
            <td>
                <button className="btn" type="button" onClick={() => props.editVoter(props.voter.id)}>Edit</button>
                <button className="btn" type="button" onClick={() => props.deleteVoter(props.voter.id)}>Delete</button>
                <input type="checkbox" name="DeleteRows" value={props.voter.id} onClick={() => props.selectRowsToDelete(props.voter.id)}></input>
            </td>
        </tr>
    )
};

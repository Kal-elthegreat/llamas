import { useForm } from "../../hooks/useForm";

export const VoterEditRow = props =>{

    const [voterEditForm, change ] = useForm({
        firstName: props.voter.firstName,
        lastName: props.voter.lastName,
        address: props.voter.address,
        city: props.voter.city,
        birthdate: props.voter.birthdate,
        email: props.voter.email,
        phone: props.voter.phone,
    });

    const save = () => {
        props.save({
            ...voterEditForm,
            id: props.voter.id,
        });
    }

    return(
        <tr key={props.voter.id}>
            <td>{props.voter.id}</td>
            <td><input type="text" name="firstName" value={voterEditForm.firstName} onChange={change} ></input></td>
            <td><input type="text" name="lastName" value={voterEditForm.lastName} onChange={change} ></input></td>
            <td><input type="text" name="address" value={voterEditForm.address} onChange={change} ></input></td>
            <td><input type="text" name="city" value={voterEditForm.city} onChange={change} ></input></td>
            <td><input type="text" name="birthdate" value={voterEditForm.birthdate} onChange={change} ></input></td>
            <td><input type="text" name="email" value={voterEditForm.email} onChange={change} ></input></td>
            <td><input type="text" name="phone" value={voterEditForm.phone} onChange={change} ></input></td>
            <td>
                <button className="btn" type="button" onClick={save}>Save</button>
                <button  className="btn" type="button" onClick={() => props.cancel(-1)}>Cancel</button>
            </td>
        </tr>
    );
};
import { VoterViewRow } from './VoterViewRow';
import { VoterEditRow } from './VoterEditRow';



export const VoterTable = props => {

console.log(props.voters)


    return (
        <>
        <table>
            <thead>
                <tr>
                    <th >ID <button className="btn" type="button" onClick={() => props.onClickSort("id")}>{props.sortButtonText}</button></th>
                    <th >First Name <button className="btn" type="button" onClick={() => props.onClickSort("firstName")}>{props.sortButtonText}</button></th>
                    <th >Last Name <button className="btn" type="button" onClick={() => props.onClickSort("lastName")}>{props.sortButtonText}</button></th>
                    <th >Address <button className="btn" type="button" onClick={() => props.onClickSort("address")}>{props.sortButtonText}</button></th>
                    <th >City <button className="btn" type="button" onClick={() => props.onClickSort("city")}>{props.sortButtonText}</button></th>
                    <th >Birthdate <button className="btn" type="button" onClick={() => props.onClickSort("birthdate")}>{props.sortButtonText}</button></th>
                    <th >Email <button className="btn" type="button" onClick={() => props.onClickSort("email")}>{props.sortButtonText}</button></th>
                    <th >Phone <button className="btn" type="button" onClick={() => props.onClickSort("phone")}>{props.sortButtonText}</button></th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { props.voters.map(voter => voter.id !== props.editVoterID ?
                     <VoterViewRow key={voter.id} voter={voter} deleteVoter={props.onDeleteVoter} editVoter={props.onEditVoterID}/> : 
                     <VoterEditRow key={voter.id} voter={voter} cancel={props.onEditVoterID} save={props.onClickSave} />) }
            </tbody>
        </table>
        <input className="btn" type="button" value="Delete Selected Rows"  />  
        </>
    );
};
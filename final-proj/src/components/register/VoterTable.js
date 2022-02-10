import { VoterViewRow } from './VoterViewRow';
import { VoterEditRow } from './VoterEditRow';



export const VoterTable = props => {

console.log(props.voters);

const showSortDir = (colName) => {
        
    let order  = props.sortObj.order?'Desc':'Asc';
    if (props.sortObj.column === colName ) {
      return "(" + order + ")";
    }
  };



const sortBy = (e)=>{      
    if(props.sortObj.column === e.target.name)  
        props.onSort({column:e.target.name,order:!props.sortObj.order});
    else
        props.onSort({column:e.target.name,order:true});
}


    return (
        <>
        <table>
            <thead>
                <tr>
                    <th >ID </th>
                    <th > <button className="btn" type="button" onClick={sortBy}>First Name {showSortDir('firstName')}</button></th>
                    <th > <button className="btn" type="button" onClick={sortBy}>Last Name {showSortDir('lastName')}</button></th>
                    <th > <button className="btn" type="button" onClick={sortBy}>Address{showSortDir('address')}</button></th>
                    <th > <button className="btn" type="button" onClick={sortBy}>City{showSortDir('city')}</button></th>
                    <th > <button className="btn" type="button" onClick={sortBy}>Birthdate{showSortDir('birthDate')}</button></th>
                    <th > <button className="btn" type="button" onClick={sortBy}>Email{showSortDir('email')}</button></th>
                    <th > <button className="btn" type="button" onClick={sortBy}>Phone{showSortDir('phone')}</button></th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { props.voters.map(voter => voter.id !== props.editVoterID ?
                     <VoterViewRow key={voter.id} voter={voter} deleteVoter={props.onDeleteVoter} editVoter={props.onEditVoter}/> : 
                     <VoterEditRow key={voter.id} voter={voter} cancel={props.onEditVoterID} save={props.onClickSave} />) }
            </tbody>
        </table>
        <input className="btn" type="button" value="Delete Selected Rows"  />  
        </>
    );
};
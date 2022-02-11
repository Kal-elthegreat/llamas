import PropTypes from 'prop-types';
import { useForm } from '../../hooks/useForm';



export const VoterForm = (props) => {


  const [ voterForm, change, resetVoterForm] = useForm({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    birthdate: '',
    email: '',
    phone: '',
});



const submitVoterForm = () => {

  props.onSubmitVoterForm({ ...voterForm });

  resetVoterForm();
}


  return (
    <form className='voter-tool-form'>
      <label>
        First Name:
        <input type="text" name="firstName"
          value={voterForm.firstName} onChange={change} />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName"
          value={voterForm.lastName} onChange={change} />
      </label>
      <label>
        Address:
        <input type="text" name="address"
          value={voterForm.address} onChange={change} />
      </label>
      <label>
        County/City:
        <input type="text" name="city"
          value={voterForm.city} onChange={change} />
      </label>
      <label>
        Birthday:
        <input type="date" name="birthday"
          value={voterForm.birthday} onChange={change} />
      </label>
      <label>
        Email:
        <input type="text" name="email"
          value={voterForm.email} onChange={change} />
      </label>
      <label>
        Phone:
        <input type="number" name="phone"
          value={voterForm.phone} onChange={change} />
      </label>
      <button className="btn" type="button" onClick={submitVoterForm}>{props.buttonText}</button>
    </form>
  );


};

// CarForm.defaultProps = {
//   buttonText: "Submit Car",
// };

// CarForm.propTypes = {
//   buttonText: PropTypes.string.isRequired,
//   onSubmitCar: PropTypes.func.isRequired,
// };
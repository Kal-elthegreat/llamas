import './ElectionForm.css';
import { useState } from 'react';

export const ElectionForm = (props) => {
    const [electionForm, setElectionForm] = useState(props.electionForm);
    console.log(electionForm)

    const change= e=>{
        if(e.target.name === 'name'){
            setElectionForm({
                ...electionForm,
                name: e.target.value
            });            
        }
        console.log(electionForm.questionnaire)
        if(e.target.name.startsWith('q')){
            setElectionForm({
               ...electionForm,
                questionnaire:
                    [{
                        id: electionForm.questionnaire.length,
                        [e.target.name]: e.target.value,
                        yesCount: 0,
                        noCount: 0,
                        voterIds: []
                    }]
            })
        }
    };

    const resetForm = ()=> setElectionForm(props.electionForm);

    const submitElection = () => {
        console.log(electionForm);
        props.onSubmitElection({...electionForm});
        resetForm();
    };

    const updateElection = () => {
        props.updateElection(electionForm)
    }

    return (
        <form>
            <label className="formRow">Name:
                <input  type="text" name ="name" className="formControl" value={electionForm.name} onChange={change}/>
            </label> 
           {
               electionForm.questionnaire?.map(q=> 
                <label className="formRow" key={q.id}>Question {q.id}:
                    <input  type="text" name={"question"} className="formControl" value={electionForm.questionnaire[q.id - 1].question} onChange={change}/>
                </label>
                )
           } 
            <div className="formAction">
            <button type="button" onClick={submitElection} id="add" >Add Election</button>
            <button type="button" onClick={updateElection} id="add" >Add Question</button>
            </div>
        </form>
    );
 }
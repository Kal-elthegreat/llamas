import './ElectionForm.css';
import { useState } from 'react';

const initialForm =  {
    id:-1,
    name:"",
    questionnaire:[
        {
            id:1,
            question:"",
            yesCount:0,
            noCount:0,
            voterIds:[]
        },
        {
            id:2,
            question:"",
            yesCount:0,
            noCount:0,
            voterIds:[]
        },
        {
            id:3,
            question:"",
            yesCount:0,
            noCount:0,
            voterIds:[]
        }
    ]
 };

export const ElectionForm = (props) => {
    const [electionForm,setElectionForm] = useState({...initialForm});

    const change= e=>{
        if(e.target.name === 'name'){
            setElectionForm({
                ...electionForm,
                name: e.target.value
            });            
        }
        if(e.target.name === 'question1'){
            setElectionForm({
                name:electionForm.name,
                questionnaire : 
                [
                    {
                        id:1,
                        question:e.target.value,
                        yesCount:0,
                        noCount:0,
                        voterIds:[]
                    },
                    {...electionForm.questionnaire[1]},
                    {...electionForm.questionnaire[2]}
                ]
            })
        }
        if(e.target.name === 'question2'){
            setElectionForm({
                name:electionForm.name,
                questionnaire : 
                [
                    {...electionForm.questionnaire[0]},
                    {
                        id:2,
                        question:e.target.value,
                        yesCount:0,
                        noCount:0,
                        voterIds:[]
                    },                    
                    {...electionForm.questionnaire[2]}
                ]
            })
        }
        if(e.target.name === 'question3'){
            setElectionForm({
                name:electionForm.name,
                questionnaire : 
                [
                    {...electionForm.questionnaire[0]},
                    {...electionForm.questionnaire[1]},
                    {
                        id:3,
                        question:e.target.value,
                        yesCount:0,
                        noCount:0,
                        voterIds:[]
                    }
                ]
            })
        }
    };

    const resetForm = ()=> setElectionForm({...initialForm});

    const submitElection = () => {
        console.log(electionForm);
        //todo: hookup the add action from store
        props.onSubmitElection({...electionForm});
        resetForm();
    };


    return (
        <form>
            <label className="formRow">Name:
                <input  type="text" name ="name" className="formControl" value={electionForm.name} onChange={change}/>
            </label> 
           {
               electionForm.questionnaire.map(q=> 
                <label className="formRow" key={q.id}>Question {q.id}:
                    <input  type="text" name ={"question" + q.id} className="formControl" value={electionForm.questionnaire[q.id-1].question} onChange={change}/>
                </label>
                )
           } 
            <div className="formAction">
            <button type="button" onClick={submitElection} id="add" >Add Election</button>
            </div>
        </form>
    );
 }
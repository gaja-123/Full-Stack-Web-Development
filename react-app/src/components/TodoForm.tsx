import React ,{useState} from 'react';
function TodoForm(props : {addTodo: Function} ) {
    const [description,setDescription]= useState('')
    const [assigned,setAssigned]=useState('');

    // const descriptionChange = (event)=>{
    //     console.log(event.target.value);
    //     setDescription(event.target.value);
    // }
    // const assignedChange = (event)=>{
    //     console.log(event.target.value);
    //     setAssigned(event.target.value);
    // } 
    const toSubmitform =() =>{
        if (description!=='' && assigned!==''){
            props.addTodo(description,assigned);
            setAssigned('');
            setDescription('');
        }
    }
    return (
        <div className="mt-5">
            <div className="mb-3">
                <label className="form-label">Assigned</label>
                <input type='text' className="form-control" required onChange={e => setAssigned(e.target.value)} value={assigned}></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea className="form-control" rows={3} required onChange={e => setDescription(e.target.value)} value={description}></textarea>
            </div>
            <button type='button' className="btn btn-primary mt-3" onClick={toSubmitform}> ADD todo</button>
        </div>

    );
}

export default TodoForm;
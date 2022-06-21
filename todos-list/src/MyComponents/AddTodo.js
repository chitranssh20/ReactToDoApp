import React, { useState } from 'react'

export const AddTodo = (props) => {
    
    const [title, setTitle]= useState("");
    const [desc, setdesc] = useState("");

    const submit= (e) =>{
            e.preventDefault();
            if(!title || !desc){
                alert("Title or Description can not be left blanked")
            }
            else{
                props.addTodo(title, desc);
                setTitle("");
                setdesc("");
            }
    }
  return (
    <div className='container my-3'>
        <h3>Add a To Do</h3>
        <form onSubmit={submit}>
  <div className="form-group">
    <label htmlFor="todotitle">Enter To Do</label><br />
    <input type="text" value={title} 
    onChange= {(e)=>{
        setTitle(e.target.value)
    }}
    className="htmlform-control" id="todotitle" aria-describedby="todoHelp" placeholder="Enter To Do Title" />
    <small id="todoHelp" className="form-text text-muted">We'll never share your To Do with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="tododesc">To Do Description</label>
    <input type="text" value= {desc} onChange= {(e)=>{
        setdesc(e.target.value)
    }} className="form-control" id="tododesc" placeholder="Enter To Do Description" />
  </div>
  
  <button type="submit" className="btn btn-success sm" >Submit</button>
</form>
    </div>
  )
}

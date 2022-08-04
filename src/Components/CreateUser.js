import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createUser } from './actions'

export function CreateUser({create}) {
    let [input, setInput]= useState({
        name:"", 
        lastname:"", 
        age:"", 
        city:""
    })
 let handleChange= (e)=>{
     e.preventDefault()
     setInput((prev) => ({...prev, [e.target.name]: e.target.value}))
 }

 //let dispatch= React.useDispatch();

 let handleSubmit= (e) => {
     e.preventDefault()
     //dispatch(createUser(input))
     create(input)
     setInput({
         name:"", 
     lastname:"", 
     age:"", 
     city:""
    })
 }



  return (
    <React.Fragment>
        <div>CREATE USER</div>
        <br/>
        <form onSubmit={e=>handleSubmit(e)}>
            <div>
                <label>Name</label>
                <input type={"text"} name={"name"} value={input.name} onChange={e=>handleChange(e)} />
            </div>
            <div>
                <label>Lastname</label>
                <input type={"text"} name={"lastname"} value={input.lastname} onChange={e=>handleChange(e)} />
            </div>
            <div>
                <label>Age</label>
                <input type={"text"} name={"age"} value={input.age} onChange={e=>handleChange(e)} />
            </div>
            <div>
                <label>City</label>
                <input type={"text"} name={"city"} value={input.city} onChange={e=>handleChange(e)} />
            </div>
            <br/>
            <div>
                <input type={"submit"} value={"CREATE"}/>
            </div>
        </form>
    </React.Fragment>
  )
}

function mapDispatchToProps(dispatch){
    return{
        create: (input) => dispatch(createUser(input))
    }
}
export default connect(null, mapDispatchToProps)(CreateUser);

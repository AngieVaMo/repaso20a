import React from "react";
import { connect } from "react-redux";
import { deleteUser } from "./actions";
import User from "./User";



export function Users(props){

  let handleClick= () => {
   e.preventDefault();
   props.delete(id);
  };

    return(
        <div>
            {
            props.users && props.users.map(u => <div>
                <User 
                key={u.id} 
                id={u.id} 
                name={u.name} 
                lastname={u.lastname} 
                age={u.age} 
                city={u.city}
                />
                <button onClick={e => handleClick(e, u.id)}>ELIMINAR</button>
                <br/>
                <br/>
            </div>)    
            }
        </div>

    )
}

function mapStatetoProps(state){
    return{
        users: state.users
    }
}

function mapDispatchToProps(dispatch){
    return{
        delete: id => dispatch(deleteUser(id))

    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Users)
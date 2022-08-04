//import React, { useEffect } from 'react'
import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getPost } from './actions';

//export default function Detail({match, detail, users}) <--- Con destructuring
export function Detail(props) {

    let params = props.match.params.id;
    //let paramsHooks= React.useParams(); //devuelve un objeto

    // let dispatch= useDispatch();
    // let detail= useSelector(state => state.detail); //props.detail
    // let users= useSelector(state => state.users)   // props.users

  React.useEffect(()=>{
   //Querenos que apenas se cargue la página, vaya a la API, traiga información y la cargue en detail.
   props.getDetail(params)
  }, [props, params]);


  return (
    <div>
        El usuario numero {params}
        {
            props.detail? (<div>
                {props.detail.id}
                {props.detail.tittle}
                {props.detail.body}
                </div>) : null
        }
    </div>
  )
}

function mapStateToProps(state){
    return{
        detail: state.detail,
        users: state.users
    }
}

function mapDispatchToProps(dispatch){
    return{
        getDetail: id => dispatch(getPost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
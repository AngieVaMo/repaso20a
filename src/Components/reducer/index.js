
let index= 1

const initialState={
    users: [],
    detail: {}
};

export default function rootReducer(state=initialState, action){
    switch(action.type){
        case "CREATE_USER":
            return {
                ...state,
                users: [...state.users, {...action.payload, id: index++}]
                //users: state.users.concat(action.payload)
                //users: [{}, {}, {}, ...]
            };
        case "SET_DETAIL":
            return {
                ...state,
                detail: action.payload
            };
        case "DELETE_USER":
            return{
                ...state,
                users: state.users.filter(u => u.id !== action.payload)
            }
        default: return {...state} 
    }
        
}

let defaultState={
    data:null,
}
let shopReducer=(state=defaultState,action)=>{
    let {type,payload}=action;
    switch(type){
        case "UPDATE":
        return state={...state,data:payload}
        default:
        return state
    }
   
}

export default shopReducer;
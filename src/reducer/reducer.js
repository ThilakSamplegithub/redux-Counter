const initialState={
    counter:0
}
export const reducer=(state=initialState.counter,{type,payload})=>{
    switch(type){
        case "INC":{
            return state+payload
        }
        case "DEC":{
            return state-payload
        }
        default:{
            return state
        }
    }
}
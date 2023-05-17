import { Actions } from "./Actions"
export const incNumber=(payload)=>{
    return {type:Actions.INC,payload:payload}
}
export const decNumber=(payload)=>{
    return {type:Actions.DEC,payload:payload}
}
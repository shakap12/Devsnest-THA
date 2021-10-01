import { ActionTypes } from "../constants/action-types"

const initialState={
    product:[],
}
export const productReducer=(state=initialState,{type,payload})=>{
    switch(type){

        case ActionTypes.SET_PRODUCTS:
            return {...state,product:payload};
        default:
            return state;
    }
}

export const selectedProductsReducer=(state={},{type,payload})=>{
    switch(type){
        case ActionTypes.SELECTED_PRODUCTS:
            return{...state,...payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
                return {};
        default:
           return state; 
        }
}
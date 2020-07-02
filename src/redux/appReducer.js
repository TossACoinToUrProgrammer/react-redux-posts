import { TOGGLE_ISLOADING } from "./types"

const initialState={
    isLoading:false
};

export const appReducer=(state=initialState, action)=>{
    switch(action.type){
        case TOGGLE_ISLOADING:
            return {...state, isLoading: action.isLoading}
        default:
            return state;
    }
}
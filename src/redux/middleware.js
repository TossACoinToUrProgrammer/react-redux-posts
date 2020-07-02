import { CREATE_POST } from "./types"

export const censoredWordMiddleWare=({dispatch})=>{
    return (next)=>{
        return (action)=>{
            if(action.type===CREATE_POST){
                if(action.payload.title.includes('мат')){
                    alert('мат');
                    return 0;
                }
            }
            return next(action);
        }
    }
}
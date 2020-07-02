import { CREATE_POST, FETCH_POSTS, TOGGLE_ISLOADING } from "./types"

export const createPost=(post)=>{
    return{
        type:CREATE_POST,
        payload:post
    }
}

export const fetchPosts=()=>{
    return async(dispatch)=>{
        dispatch(toggleIsLoading(true));
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        const json = await response.json();
        dispatch({type:FETCH_POSTS, payload:json});
        dispatch(toggleIsLoading(false));

    }
}

export const toggleIsLoading=(isLoading)=>{
    return{
        type:TOGGLE_ISLOADING,
        isLoading
    }
}
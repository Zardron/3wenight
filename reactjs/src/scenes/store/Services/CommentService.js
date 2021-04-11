import axios from "axios";
import store from "../index"

export const loadComments =(slug) =>
{
    if(slug==""){

    }else{
        return axios.get("http://localhost:8000/api/auth/get-comment/"+slug).then((res =>{
            store.dispatch({type:"LOAD_COMMENTS", payload: res.data})
            return res
        }));
    }

}

export const commentCount =(slug) =>
{
    if(slug==""){

    }else{
        return axios.get("http://localhost:8000/api/auth/get-comment-count/"+slug).then((res =>{
            store.dispatch({type:"LOAD_COMMENT_COUNT", payload: res.data})
            return res
        }));
    }

}
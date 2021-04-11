import axios from "axios";
import store from "../index"


export const loadSingleData =(slug) =>
{
    if(slug==""){

    }else{
        store.dispatch({type:"FETCH_SINGLE_DATA_REQUEST"})
        return axios.get("http://localhost:8000/api/auth/get-event/"+slug).then((res =>{
            store.dispatch({type:"LOAD_SINGLE_DATA", payload: res.data})
            return res
        }));
    }

}

import {loadSingleData} from '../Services/EventService'

export const loadSingleDataUser= (slug) =>{
    
    return (dispatch) =>{
        loadSingleData(slug).then((res)=>{
            dispatch({type:'LOAD_SINGLE_DATA', payload: res.data});
        },
        error=>{
            dispatch({type:'FETCH_SINGLE_DATA_ERROR',error})
            console.log(error)
        }    
        )
    }
}

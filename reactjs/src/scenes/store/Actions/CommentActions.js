import {loadComments, commentCount} from '../Services/CommentService'

export const loadAllComments= (slug) =>{
    
    return (dispatch) =>{
        loadComments(slug).then((res)=>{
            dispatch({type:'LOAD_COMMENTS', payload: res.data});
        },
        )
    }
}

export const loadCommentCount= (slug) =>{
    
    return (dispatch) =>{
        commentCount(slug).then((res)=>{
            dispatch({type:'LOAD_COMMENT_COUNT', payload: res.data});
        },
        )
    }
}
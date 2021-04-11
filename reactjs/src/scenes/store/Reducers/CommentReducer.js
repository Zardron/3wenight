const initState = {
    loadComment: {},
    commentCount: []
};

const CommentReducer = (state=initState, action) =>{
    switch(action.type){

    case 'LOAD_COMMENTS':
        return{
            ...state,
            loadComment: action.payload
        }

        case 'LOAD_COMMENT_COUNT':
            return{
                ...state,
                commentCount: action.payload
            }
                           
        default:
                return state
    }
    
      
    
}

export default CommentReducer;
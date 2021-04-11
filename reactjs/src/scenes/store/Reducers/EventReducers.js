const initState = {
    loadSingleEvent: {},
    is_fetching: false
};

const EventReducers = (state=initState, action) =>{
    switch(action.type){

    case 'FETCH_SINGLE_DATA_REQUEST':
        return{
            ...state,
            is_fetching: true,
            loadSingleEvent: {}
        }

    case 'LOAD_SINGLE_DATA':
        return{
             ...state,
             is_fetching: false,
             loadSingleEvent: action.payload
            }

    case 'FETCH_SINGLE_DATA_ERROR':
        return{
            ...state,
            is_fetching: false,
            loadSingleEvent:action.error
        }
                           
        default:
                return state
    }
      
    
}

export default EventReducers;
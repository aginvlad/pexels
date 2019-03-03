import { GET_BACKGROUND_IMAGE } from '../store/actions';

const initialState = {
    
};

const reducer = (state = initialState, action) => {
    switch( action.type ) {
        case GET_BACKGROUND_IMAGE:
            return {
                ...state,
                backgroundImage: action.payload.background
            }
        default:
            return state;
    } 
};

export default reducer;
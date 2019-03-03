import { GET_BACKGROUND_IMAGE } from '../store/actions';

const initialState = {

};

const reducer = (state = initialState, action) => {
    switch( action.type ) {
        case GET_BACKGROUND_IMAGE:
            return {
                ...state,
                photographer: action.payload.photographer,
                photographerUrl: action.payload.photographerUrl,
                backgroundImage: action.payload.background
            }
        default:
            return state;
    } 
};

export default reducer;
import { GET_BACKGROUND_IMAGE, GET_STOCK_PHOTOS } from '../store/actions';

const initialState = {
    stockPhotos: [],
    page: 1
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
        case GET_STOCK_PHOTOS:
            return {
                ...state,
                page: state.page + 1,
                stockPhotos: state.stockPhotos.concat(action.payload.photos)
            }
        default:
            return state;
    } 
};

export default reducer;
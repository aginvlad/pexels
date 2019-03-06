import { GET_BACKGROUND_IMAGE, GET_STOCK_PHOTOS } from '../store/actions';

const initialState = {
    stockPhotosColOne: [],
    stockPhotosColTwo: [],
    stockPhotosColThree: [],
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
                stockPhotosColOne: state.stockPhotosColOne
                    .concat(action.payload.photosColOne),
                stockPhotosColTwo: state.stockPhotosColTwo
                    .concat(action.payload.photosColTwo),  
                stockPhotosColThree: state.stockPhotosColThree
                    .concat(action.payload.photosColThree)
            }
        default:
            return state;
    } 
};

export default reducer;
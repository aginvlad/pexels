import { GET_BACKGROUND_IMAGE, GET_STOCK_PHOTOS, CONNECTION_ERROR } from '../store/actions';

const initialState = {
    stockPhotosColOne:  localStorage.getItem('stockPhotosColOne') ? 
                        JSON.parse(localStorage.getItem('stockPhotosColOne'))
                        :
                        [],
    stockPhotosColTwo: localStorage.getItem('stockPhotosColTwo') ? 
                       JSON.parse(localStorage.getItem('stockPhotosColTwo'))
                       :
                       [],
    stockPhotosColThree: localStorage.getItem('stockPhotosColThree') ? 
                         JSON.parse(localStorage.getItem('stockPhotosColThree'))
                         :
                         [],
    page: localStorage.getItem('page') ? +localStorage.getItem('page') : 1,
    isConnected: true
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
            let updPage     = state.page + 1,
                updColOne   = state.stockPhotosColOne
                                .concat(action.payload.photosColOne),
                updColTwo   = state.stockPhotosColTwo
                                .concat(action.payload.photosColTwo),
                updColThree = state.stockPhotosColThree
                              .concat(action.payload.photosColThree);

            if(state.stockPhotosColOne.length <= 10) {
                localStorage.setItem('page', `${updPage}`);
                localStorage.setItem('stockPhotosColOne', 
                                     JSON.stringify(updColOne));
                localStorage.setItem('stockPhotosColTwo',
                                     JSON.stringify(updColTwo));
                localStorage.setItem('stockPhotosColThree', 
                                     JSON.stringify(updColThree));
            }

            return {
                ...state,
                page: updPage,
                stockPhotosColOne: updColOne,
                stockPhotosColTwo: updColTwo,  
                stockPhotosColThree: updColThree,
                isConnected: action.payload.connection
            }
        case CONNECTION_ERROR:
            return {
                ...state,
                isConnected: action.payload
            }
        default:
            return state;
    } 
};

export default reducer;
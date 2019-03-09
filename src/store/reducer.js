import * as actions from '../store/actions';

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
    categoryPhotosColOne: [],
    categoryPhotosColTwo: [],
    categoryPhotosColThree: [],
    page: localStorage.getItem('page') ? +localStorage.getItem('page') : 1,
    isConnected: true,
    isLoading: false,
    likes: localStorage.getItem('likes') ? 
           new Map( JSON.parse(localStorage.getItem('likes')) )
           :
           new Map()
};

const reducer = (state = initialState, action) => {
    switch( action.type ) {
        case actions.GET_BACKGROUND_IMAGE:
            return {
                ...state,
                photographer: action.payload.photographer,
                photographerUrl: action.payload.photographerUrl,
                backgroundImage: action.payload.background
            }
        case actions.GET_STOCK_PHOTOS:
            const updPage     = state.page + 1,
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
        case actions.LOADING_CATEGORY_PHOTOS:
            return {
                ...state,
                isLoading: true
            }
        case actions.GET_CATEGORY_PHOTOS:
            return {
                ...state,
                isLoading: false,
                categoryPhotosColOne: state.categoryPhotosColOne
                                      .concat(action.payload.photosColOne),
                categoryPhotosColTwo: state.categoryPhotosColTwo
                                      .concat(action.payload.photosColTwo),  
                categoryPhotosColThree: state.categoryPhotosColThree
                                        .concat(action.payload.photosColThree),
                isConnected: action.payload.connection
            }
        case actions.RESET_CATEGORY_PHOTOS:
            return {
                ...state,
                categoryPhotosColOne: [],
                categoryPhotosColTwo: [],
                categoryPhotosColThree: []
            }
        case actions.CONNECTION_ERROR:
            return {
                ...state,
                isConnected: action.payload
            }
        case actions.UPDATE_LIKES:
            const updLikes = action.payload.updLikes;
            localStorage.setItem('likes', JSON.stringify( Array.from(updLikes.entries()) ));
            return {
                ...state,
                likes: updLikes
            }
        default:
            return state;
    } 
};

export default reducer;
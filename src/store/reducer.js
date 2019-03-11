import * as actions from '../store/actions';

const initialState = {
  stockPhotos: [],
  categoryPhotos: [],
  page: 1,
  isConnected: true,
  isLoading: false,
  likes: localStorage.getItem('likes')
    ? new Map(JSON.parse(localStorage.getItem('likes')))
    : new Map()
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_BACKGROUND_IMAGE:
      return {
        ...state,
        photographer: action.payload.photographer,
        photographerUrl: action.payload.photographerUrl,
        backgroundImage: action.payload.background
      };
    case actions.GET_STOCK_PHOTOS:
      return {
        ...state,
        page: state.page + 1,
        stockPhotos: state.stockPhotos.concat(action.payload.stockPhotos),
        isLoading: false,
        isConnected: action.payload.connection
      };
    case actions.LOADING_PHOTOS:
      return {
        ...state,
        isLoading: true
      };
    case actions.GET_CATEGORY_PHOTOS:
      return {
        ...state,
        page: state.page + 1,
        isLoading: false,
        categoryPhotos: state.categoryPhotos.concat(
          action.payload.categoryPhotos
        ),
        isConnected: action.payload.connection
      };
    case actions.RESET_CATEGORY_PHOTOS:
      return {
        ...state,
        categoryPhotos: []
      };
    case actions.CONNECTION_ERROR:
      return {
        ...state,
        isConnected: action.payload
      };
    case actions.UPDATE_LIKES:
      const updLikes = action.payload.updLikes;
      localStorage.setItem(
        'likes',
        JSON.stringify(Array.from(updLikes.entries()))
      );
      return {
        ...state,
        likes: updLikes
      };
    default:
      return state;
  }
};

export default reducer;

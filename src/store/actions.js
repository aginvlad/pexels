import { toConnect } from './connection';

export const GET_BACKGROUND_IMAGE = 'GET_BACKGROUND_IMAGE';
export const GET_STOCK_PHOTOS = 'GET_STOCK_PHOTOS';
export const LOADING_PHOTOS = 'LOADING_PHOTOS';
export const GET_CATEGORY_PHOTOS = 'GET_CATEGORY_PHOTOS';
export const RESET_CATEGORY_PHOTOS = 'RESET_CATEGORY_PHOTOS';
export const CONNECTION_ERROR = 'CONNECTION_ERROR';
export const UPDATE_LIKES = 'UPDATE_LIKES';

export const fetchStockPhotos = () => {
  return (dispatch, getStore) => {
    dispatch({ type: LOADING_PHOTOS });
    fetch(
      `https://api.pexels.com/v1/curated?per_page=15&page=${getStore().page}`,
      toConnect
    )
      .then(result => result.json())
      .then(data => {
        dispatch({
          type: GET_STOCK_PHOTOS,
          payload: {
            stockPhotos: data.photos,
            connection: true
          }
        });
      })
      .catch(error =>
        dispatch({
          type: CONNECTION_ERROR,
          payload: false
        })
      );
  };
};

export const fetchCategoryPhotos = query => {
  return dispatch => {
    dispatch({ type: LOADING_PHOTOS });
    fetch(
      `https://api.pexels.com/v1/search?query=${query}&per_page=15&page=1`,
      toConnect
    )
      .then(result => result.json())
      .then(data => {
        dispatch({
          type: GET_CATEGORY_PHOTOS,
          payload: {
            categoryPhotos: data.photos,
            connection: true
          }
        });
      })
      .catch(error =>
        dispatch({
          type: CONNECTION_ERROR,
          payload: false
        })
      );
  };
};

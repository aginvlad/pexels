import { toConnect } from './connection';
import bg from '../assets/bg.jpeg';

export const GET_BACKGROUND_IMAGE = 'GET_BACKGROUND_IMAGE';
export const GET_STOCK_PHOTOS = 'GET_STOCK_PHOTOS';
export const LOADING_PHOTOS = 'LOADING_PHOTOS';
export const GET_CATEGORY_PHOTOS = 'GET_CATEGORY_PHOTOS';
export const RESET_CATEGORY_PHOTOS = 'RESET_CATEGORY_PHOTOS';
export const CONNECTION_ERROR = 'CONNECTION_ERROR';
export const UPDATE_LIKES = 'UPDATE_LIKES';

export const getBackground = () => {
  return dispatch => {
    const randNum = Math.floor(Math.random() * 1000 + 1);
    fetch(
      `https://api.pexels.com/v1/curated?per_page=1&page=${randNum}`,
      toConnect
    )
      .then(result => result.json())
      .then(data => {
        data = data.photos[0];
        dispatch({
          type: GET_BACKGROUND_IMAGE,
          payload: {
            photographer: data.photographer,
            photographerUrl: data.photographer_url,
            background: data.src.original
          }
        });
      })
      .catch(error =>
        dispatch({
          type: GET_BACKGROUND_IMAGE,
          payload: {
            photographer: 'eberhard grossgasteiger',
            photographerUrl: 'https://www.pexels.com/@eberhardgross',
            background: bg
          }
        })
      );
  };
};

export const fetchStockPhotos = () => {
  return (dispatch, getStore) => {
    dispatch({ type: LOADING_PHOTOS });
    fetch(
      `https://api.pexels.com/v1/curated?per_page=15&page=${
        getStore().stockPage
      }`,
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
  return (dispatch, getStore) => {
    dispatch({ type: LOADING_PHOTOS });
    fetch(
      `https://api.pexels.com/v1/search?query=${query}&per_page=15&page=${
        getStore().categoryPage
      }`,
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

import { toConnect } from './connection';

export const GET_BACKGROUND_IMAGE = 'GET_BACKGROUND_IMAGE';
export const GET_STOCK_PHOTOS     = 'GET_STOCK_PHOTOS';

export const fetchPhotos = () => {

    return (dispatch, getStore) => {
        fetch(`https://api.pexels.com/v1/curated?per_page=15&page=${getStore().page}`, toConnect)
        .then(result => result.json())
        .then(data => dispatch({
            type: GET_STOCK_PHOTOS,
            payload: {
              photos: data.photos
            }
          }
        ));
    }
}
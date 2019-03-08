import { toConnect } from './connection';

export const GET_BACKGROUND_IMAGE      = 'GET_BACKGROUND_IMAGE';
export const GET_STOCK_PHOTOS          = 'GET_STOCK_PHOTOS';
export const GET_CATEGORY_PHOTOS       = 'GET_CATEGORY_PHOTOS';
export const CONNECTION_ERROR          = 'CONNECTION_ERROR';
export const UPDATE_LIKES              = 'UPDATE_LIKES';

export const fetchStockPhotos = () => {

    return (dispatch, getStore) => {
        fetch(`https://api.pexels.com/v1/curated?per_page=15&page=${getStore().page}`, toConnect)
        .then(result => result.json())
        .then(data => {
            const photos = data.photos;
            dispatch({
                type: GET_STOCK_PHOTOS,
                payload: {
                    photosColOne: photos.slice(0, photos.length / 3),
                    photosColTwo: photos.slice(photos.length / 3, 2 * photos.length / 3),
                    photosColThree: photos.slice(2 * photos.length / 3, photos.length),
                    connection: true
                }
            })
        }
        )
        .catch(error => dispatch({
            type: CONNECTION_ERROR,
            payload: false
        }));
    }
}

export const fetchCategoryPhotos = (query) => {
    console.log(query);
    return (dispatch, getStore) => {
        fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=15&page=1`, toConnect)
        .then(result => result.json())
        .then(data => {
            const photos = data.photos;
            console.log(photos);
            dispatch({
                type: GET_CATEGORY_PHOTOS,
                payload: {
                    photosColOne: photos.slice(0, photos.length / 3),
                    photosColTwo: photos.slice(photos.length / 3, 2 * photos.length / 3),
                    photosColThree: photos.slice(2 * photos.length / 3, photos.length),
                    connection: true
                }
            })
        }
        )
        .catch(error => dispatch({
            type: CONNECTION_ERROR,
            payload: false
        }));
    }
}
import { toConnect } from './connection';

export const GET_BACKGROUND_IMAGE = 'GET_BACKGROUND_IMAGE';
export const GET_STOCK_PHOTOS     = 'GET_STOCK_PHOTOS';

export const fetchPhotos = () => {

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
                    photosColThree: photos.slice(2 * photos.length / 3, photos.length)
                }
            })
        }
        );
    }
}
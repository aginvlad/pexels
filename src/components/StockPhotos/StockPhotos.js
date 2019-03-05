import React from 'react';

import './StockPhotos.sass';

const stockPhotos = (props) => {
    const photos = props.photos;

    const columnOne   = photos.slice(0, photos.length / 3),
          columnTwo   = photos.slice(photos.length / 3, 2 * photos.length / 3),
          columnThree = photos.slice(2 * photos.length / 3, photos.length);

    return(
        <div className="stock-photos">
            <h2 className="stock-photos__title">Free Stock Photos</h2>
            <div className="stock-photos__gallery">
                <div className="stock-photos__gallery__column">
                    {columnOne.map(el =>  
                        <div key={el.id} className="stock-photos__gallery__column__item">
                            <img src={`${el.src.original}?auto=compress&cs=tinysrgb&dpr=1&w=500`} srcSet={`${el.src.original}?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, ${el.src.original}?auto=compress&cs=tinysrgb&dpr=2&w=500 2x`} />  
                        </div>  
                    )}
                </div>
                <div className="stock-photos__gallery__column">
                    {columnTwo.map(el =>  
                        <div key={el.id} className="stock-photos__gallery__column__item">
                            <img src={`${el.src.original}?auto=compress&cs=tinysrgb&dpr=1&w=500`} srcSet={`${el.src.original}?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, ${el.src.original}?auto=compress&cs=tinysrgb&dpr=2&w=500 2x`} />  
                        </div>         
                    )}
                </div>
                <div className="stock-photos__gallery__column">
                    {columnThree.map(el =>  
                        <div key={el.id} className="stock-photos__gallery__column__item">
                            <img src={`${el.src.original}?auto=compress&cs=tinysrgb&dpr=1&w=500`} srcSet={`${el.src.original}?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, ${el.src.original}?auto=compress&cs=tinysrgb&dpr=2&w=500 2x`} />  
                        </div>    
                    )}
                </div>
            </div>
        </div>
    );
};

export default stockPhotos;
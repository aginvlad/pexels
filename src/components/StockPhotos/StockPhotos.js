import React from 'react';

import './StockPhotos.sass';

const stockPhotos = (props) => {
    return(
        <div className="stock-photos">
            <h2 className="stock-photos__title">Free Stock Photos</h2>
            <div className="stock-photos__gallery">
                <div className="stock-photos__gallery__column">
                    {props.colOne.map(el =>  
                        <div key={el.id} className="stock-photos__gallery__column__item">
                            <img src={`${el.src.original}?auto=compress&cs=tinysrgb&dpr=1&w=500`} srcSet={`${el.src.original}?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, ${el.src.original}?auto=compress&cs=tinysrgb&dpr=2&w=500 2x`} alt=" "/>  
                        </div>  
                    )}
                </div>
                <div className="stock-photos__gallery__column">
                    {props.colTwo.map(el =>  
                        <div key={el.id} className="stock-photos__gallery__column__item">
                            <img src={`${el.src.original}?auto=compress&cs=tinysrgb&dpr=1&w=500`} srcSet={`${el.src.original}?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, ${el.src.original}?auto=compress&cs=tinysrgb&dpr=2&w=500 2x`} alt=" "/>  
                        </div>         
                    )}
                </div>
                <div className="stock-photos__gallery__column">
                    {props.colThree.map(el =>  
                        <div key={el.id} className="stock-photos__gallery__column__item">
                            <img src={`${el.src.original}?auto=compress&cs=tinysrgb&dpr=1&w=500`} srcSet={`${el.src.original}?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, ${el.src.original}?auto=compress&cs=tinysrgb&dpr=2&w=500 2x`} alt=" "/>  
                        </div>    
                    )}
                </div>
            </div>
        </div>
    );
};

export default stockPhotos;
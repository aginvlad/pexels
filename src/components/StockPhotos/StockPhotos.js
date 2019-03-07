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
                            <div className="stock-photos__gallery__column__item__overlay">
                                <a href={el.photographer_url} className="stock-photos__gallery__column__item__overlay__photographer">
                                    {el.photographer}
                                </a>
                                <div className="stock-photos__gallery__column__item__overlay__buttons">
                                    <button className="stock-overlay-add-button">
                                        <svg class="icon-plus" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 30 30">
                                            <path d="M15.5 6h-5.5v-5.5c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v5.5h-5.5c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.276 0.224 0.5 0.5 0.5h5.5v5.5c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-5.5h5.5c0.276 0 0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5z" fill="#fff"></path>
                                        </svg>
                                    </button> 
                                    <button className="stock-overlay-like-button">
                                        <svg class="icon-plus" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 100 100">
                                            <path d="M84.417 38.466c0 5.63-2.407 10.7-6.248 14.233L50 80.866 21.832 52.7c-3.842-3.535-6.25-8.604-6.25-14.234 0-10.677 8.656-19.333 19.334-19.333 5.492 0 10.45 2.29 13.97 5.968.39.41.763.834 1.114 1.274.354-.44.725-.865 1.115-1.273 3.52-3.676 8.478-5.967 13.97-5.967 10.677 0 19.332 8.656 19.332 19.333z"stroke="#fff" stroke-width="8" fill="transparent" ></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>  
                    )}
                </div>
                <div className="stock-photos__gallery__column">
                    {props.colTwo.map(el =>  
                        <div key={el.id} className="stock-photos__gallery__column__item">
                            <img src={`${el.src.original}?auto=compress&cs=tinysrgb&dpr=1&w=500`} srcSet={`${el.src.original}?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, ${el.src.original}?auto=compress&cs=tinysrgb&dpr=2&w=500 2x`} alt=" "/>  
                            <div className="stock-photos__gallery__column__item__overlay">
                                <a href={el.photographer_url} className="stock-photos__gallery__column__item__overlay__photographer">
                                    {el.photographer}
                                </a>
                                <div className="stock-photos__gallery__column__item__overlay__buttons">
                                    <button className="stock-overlay-add-button">
                                        <svg class="icon-plus" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 30 30">
                                            <path d="M15.5 6h-5.5v-5.5c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v5.5h-5.5c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.276 0.224 0.5 0.5 0.5h5.5v5.5c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-5.5h5.5c0.276 0 0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5z" fill="#fff"></path>
                                        </svg>
                                    </button> 
                                    <button className="stock-overlay-like-button">
                                        <svg class="icon-plus" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 100 100">
                                            <path d="M84.417 38.466c0 5.63-2.407 10.7-6.248 14.233L50 80.866 21.832 52.7c-3.842-3.535-6.25-8.604-6.25-14.234 0-10.677 8.656-19.333 19.334-19.333 5.492 0 10.45 2.29 13.97 5.968.39.41.763.834 1.114 1.274.354-.44.725-.865 1.115-1.273 3.52-3.676 8.478-5.967 13.97-5.967 10.677 0 19.332 8.656 19.332 19.333z"stroke="#fff" stroke-width="8" fill="transparent" ></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>                     
                        </div>         
                    )}
                </div>
                <div className="stock-photos__gallery__column">
                    {props.colThree.map(el =>  
                        <div key={el.id} className="stock-photos__gallery__column__item">
                            <img src={`${el.src.original}?auto=compress&cs=tinysrgb&dpr=1&w=500`} srcSet={`${el.src.original}?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, ${el.src.original}?auto=compress&cs=tinysrgb&dpr=2&w=500 2x`} alt=" "/>  
                            <div className="stock-photos__gallery__column__item__overlay">
                                <a href={el.photographer_url} className="stock-photos__gallery__column__item__overlay__photographer">
                                    {el.photographer}
                                </a>
                                <div className="stock-photos__gallery__column__item__overlay__buttons">
                                    <button className="stock-overlay-add-button">
                                        <svg class="icon-plus" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 30 30">
                                            <path d="M15.5 6h-5.5v-5.5c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v5.5h-5.5c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.276 0.224 0.5 0.5 0.5h5.5v5.5c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-5.5h5.5c0.276 0 0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5z" fill="#fff"></path>
                                        </svg>
                                    </button> 
                                    <button className="stock-overlay-like-button">
                                        <svg class="icon-plus" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 100 100">
                                            <path d="M84.417 38.466c0 5.63-2.407 10.7-6.248 14.233L50 80.866 21.832 52.7c-3.842-3.535-6.25-8.604-6.25-14.234 0-10.677 8.656-19.333 19.334-19.333 5.492 0 10.45 2.29 13.97 5.968.39.41.763.834 1.114 1.274.354-.44.725-.865 1.115-1.273 3.52-3.676 8.478-5.967 13.97-5.967 10.677 0 19.332 8.656 19.332 19.333z"stroke="#fff" stroke-width="8" fill="transparent" ></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>    
                    )}
                </div>
            </div>
        </div>
    );
};

export default stockPhotos;
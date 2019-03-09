import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UPDATE_LIKES } from '../../store/actions';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hoc/Aux';

import './StockPhotos.sass';

class StockPhotos extends Component {
    constructor() {
        super();
        this.state = {
            modal: false,
            photosUrl: new Map()
        };
    }

    showModalHandler = (e) => {
        const photosUrl = new Map();
        photosUrl.set('Original', e.src.slice(0, e.src.length - 38));
        photosUrl.set('Large', e.getAttribute('large'));
        photosUrl.set('Medium', e.getAttribute('medium'));
        photosUrl.set('Small', e.getAttribute('small'));
        this.setState({modal: true,
                      photosUrl,
                      item: e.item});
    }
    showOtherSizeHandler = () => {
        const form = document.querySelector('.modal-sidebar__form');
        form.style.display = 'block';
    };
    downloadSelectedPhotoHandler = (e) => {
        e.preventDefault();
        const selectedRadio = document.querySelector('input[name="download-size"]:checked');
        const option = document.querySelector('label[for=' + selectedRadio.id + ']').textContent;
        const form = document.querySelector('.modal-sidebar__form');
        form.style.display = 'none';
        window.open(this.state.photosUrl.get(option));
    };
    closeModalHandler = () => {
        this.setState({modal: false});
        const form = document.querySelector('.modal-sidebar__form');
        form.style.display = 'none';
        document.getElementById('radio-original').checked = true;
    }
    addLikeHandler(likeBtn, likeId) {
        if(likeBtn.className === 'stock-overlay-like-button')
            this.props.likes.set(`${likeId}`, '--liked');
        else if(likeBtn.className === 
            'stock-overlay-like-button stock-overlay-like-button--liked')
            this.props.likes.delete(`${likeId}`);

        likeBtn.classList.toggle('stock-overlay-like-button--liked');
        this.props.updateLikes(this.props.likes);
    }

    render() {
        if(this.props.isLoading)
            return(
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            );
        if(this.props.colOne.length === 0)
            return(
                <h2 className="error-title">Sorry, no pictures found! Try more unspecific terms</h2>
            );
        return(
            <Aux>
                <Modal show={this.state.modal} showOtherSize={this.showOtherSizeHandler}
                downloadSelectedPhoto={this.downloadSelectedPhotoHandler} 
                closeModal={this.closeModalHandler} photos={this.state.photosUrl} />
                <div className="stock-photos__gallery">
                    <div className="stock-photos__gallery__column">
                        {this.props.colOne.map(el => {
                            const prefix = (new Date()).getDate();
                            el.isLiked = this.props.likes.get(`${el.id}`) ? 'stock-overlay-like-button stock-overlay-like-button--liked'
                                : 
                            'stock-overlay-like-button';
                            return (
                                <div key={el.id + prefix} className="stock-photos__gallery__column__item">
                                    <img large={el.src.large} medium={el.src.medium} small={el.src.small} src={`${el.src.original}?auto=compress&cs=tinysrgb&dpr=1&w=500`} srcSet={`${el.src.original}?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, ${el.src.original}?auto=compress&cs=tinysrgb&dpr=2&w=500 2x`} alt=" "
                                    onClick={e => this.showModalHandler(e.target)}/>  
                                    <div className="stock-photos__gallery__column__item__overlay">
                                        <a href={el.photographer_url} className="stock-photos__gallery__column__item__overlay__photographer">
                                            {el.photographer}
                                        </a>
                                        <div className="stock-photos__gallery__column__item__overlay__buttons">
                                            <button className="stock-overlay-add-button">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 30 30">
                                                    <path d="M15.5 6h-5.5v-5.5c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v5.5h-5.5c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.276 0.224 0.5 0.5 0.5h5.5v5.5c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-5.5h5.5c0.276 0 0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5z" fill="#fff"></path>
                                                </svg>
                                            </button> 
                                            <button className={el.isLiked} onClick={e => this.addLikeHandler(e.target, el.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 100 100">
                                                    <path d="M84.417 38.466c0 5.63-2.407 10.7-6.248 14.233L50 80.866 21.832 52.7c-3.842-3.535-6.25-8.604-6.25-14.234 0-10.677 8.656-19.333 19.334-19.333 5.492 0 10.45 2.29 13.97 5.968.39.41.763.834 1.114 1.274.354-.44.725-.865 1.115-1.273 3.52-3.676 8.478-5.967 13.97-5.967 10.677 0 19.332 8.656 19.332 19.333z"stroke="#fff" strokeWidth="8" fill="transparent" ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>  
                            );
                            })
                        }
                    </div>
                    <div className="stock-photos__gallery__column">
                        {this.props.colTwo.map(el => {
                            const prefix = (new Date()).getDate();
                            el.isLiked = this.props.likes.get(`${el.id}`) ? 'stock-overlay-like-button stock-overlay-like-button--liked'
                                : 
                            'stock-overlay-like-button';
                            return (
                                <div key={el.id + prefix} className="stock-photos__gallery__column__item">
                                    <img src={`${el.src.original}?auto=compress&cs=tinysrgb&dpr=1&w=500`} srcSet={`${el.src.original}?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, ${el.src.original}?auto=compress&cs=tinysrgb&dpr=2&w=500 2x`} alt=" "/>  
                                    <div className="stock-photos__gallery__column__item__overlay">
                                        <a href={el.photographer_url} className="stock-photos__gallery__column__item__overlay__photographer">
                                            {el.photographer}
                                        </a>
                                        <div className="stock-photos__gallery__column__item__overlay__buttons">
                                            <button className="stock-overlay-add-button">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 30 30">
                                                    <path d="M15.5 6h-5.5v-5.5c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v5.5h-5.5c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.276 0.224 0.5 0.5 0.5h5.5v5.5c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-5.5h5.5c0.276 0 0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5z" fill="#fff"></path>
                                                </svg>
                                            </button> 
                                            <button className={el.isLiked} onClick={e => this.addLikeHandler(e.target, el.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 100 100">
                                                    <path d="M84.417 38.466c0 5.63-2.407 10.7-6.248 14.233L50 80.866 21.832 52.7c-3.842-3.535-6.25-8.604-6.25-14.234 0-10.677 8.656-19.333 19.334-19.333 5.492 0 10.45 2.29 13.97 5.968.39.41.763.834 1.114 1.274.354-.44.725-.865 1.115-1.273 3.52-3.676 8.478-5.967 13.97-5.967 10.677 0 19.332 8.656 19.332 19.333z"stroke="#fff" strokeWidth="8" fill="transparent" ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>  
                            );
                            })
                        }
                    </div>
                    <div className="stock-photos__gallery__column">
                        {this.props.colThree.map(el => {
                            const prefix = (new Date()).getDate();
                            el.isLiked = this.props.likes.get(`${el.id}`) ? 'stock-overlay-like-button stock-overlay-like-button--liked'
                                : 
                            'stock-overlay-like-button';
                            return (
                                <div key={el.id + prefix} className="stock-photos__gallery__column__item">
                                    <img src={`${el.src.original}?auto=compress&cs=tinysrgb&dpr=1&w=500`} srcSet={`${el.src.original}?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, ${el.src.original}?auto=compress&cs=tinysrgb&dpr=2&w=500 2x`} alt=" "/>  
                                    <div className="stock-photos__gallery__column__item__overlay">
                                        <a href={el.photographer_url} className="stock-photos__gallery__column__item__overlay__photographer">
                                            {el.photographer}
                                        </a>
                                        <div className="stock-photos__gallery__column__item__overlay__buttons">
                                            <button className="stock-overlay-add-button">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 30 30">
                                                    <path d="M15.5 6h-5.5v-5.5c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v5.5h-5.5c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.276 0.224 0.5 0.5 0.5h5.5v5.5c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-5.5h5.5c0.276 0 0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5z" fill="#fff"></path>
                                                </svg>
                                            </button> 
                                            <button className={el.isLiked} onClick={e => this.addLikeHandler(e.target, el.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 100 100">
                                                    <path d="M84.417 38.466c0 5.63-2.407 10.7-6.248 14.233L50 80.866 21.832 52.7c-3.842-3.535-6.25-8.604-6.25-14.234 0-10.677 8.656-19.333 19.334-19.333 5.492 0 10.45 2.29 13.97 5.968.39.41.763.834 1.114 1.274.354-.44.725-.865 1.115-1.273 3.52-3.676 8.478-5.967 13.97-5.967 10.677 0 19.332 8.656 19.332 19.333z"stroke="#fff" strokeWidth="8" fill="transparent" ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>  
                            );
                            })
                        }
                    </div>
                </div>
            </Aux>
        );
    }
};

/* ************************************************************************** */
/*                            Redux Store Handling                            */
/* ************************************************************************** */

const mapStateToProps = state => {
    return {
        likes: state.likes,
        isLoading: state.isLoading
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        updateLikes: (updLikes) => dispatch({
            type: UPDATE_LIKES,
            payload: {
                updLikes
            }
        })
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(StockPhotos);
import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.sass';

const modal = (props) => {
    const photo = props.photos.get('Original');
    return(
        <>
            <Backdrop show={props.show} closeModal={props.closeModal}/>
            <div className="modal"
            style={{
                display: props.show ? 'flex' : 'none'
            }}>
                <div className="modal-wrapper">
                    <img src={`${photo}?auto=compress&cs=tinysrgb&h=650&w=940`}
                        alt=" "
                        srcSet={`${photo}?auto=compress&cs=tinysrgb&h=650&w=940 1x, ${photo}?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 2x`} />
                </div>
                <div className="modal-sidebar">
                    <div className="modal-sidebar__btn">
                        <a href={photo} target="_blank" rel="noopener noreferrer" download className="modal-sidebar__btn__download">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="#fff">
                                <path d="M9.8 10.2L9.8 1C9.8 0.4 9.4 0 8.8 0 8.2 0 7.8 0.4 7.8 1L7.8 10.3 4.6 7.1C4.2 6.7 3.6 6.7 3.2 7.1 2.8 7.5 2.8 8.1 3.2 8.5L8 13.3C8.2 13.6 8.5 13.7 8.8 13.6 9 13.7 9.3 13.6 9.5 13.3L14.4 8.5C14.8 8.1 14.8 7.5 14.4 7.1 14 6.7 13.3 6.7 13 7.1L9.8 10.2ZM0 16.5C0 16 0.4 15.5 1 15.5L17 15.5C17.6 15.5 18 15.9 18 16.5 18 17.1 17.6 17.5 17 17.5L1 17.5C0.4 17.5 0 17.1 0 16.5Z"></path>
                            </svg>
                            &nbsp;
                            Free Download
                        </a>
                        <button className="modal-sidebar__btn__more" onMouseOver={props.showOtherSize}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="#FFFFFF">
                                <path d="M6.752 1.514C7.472.678 7.158 0 6.057 0H1.052C-.05 0-.332.654.426 1.46L2.38 3.54c.758.806 1.952.786 2.674-.054l1.698-1.972z" fillRule="evenodd"></path>
                            </svg>
                        </button>
                        <form onSubmit={(e) => props.downloadSelectedPhoto(e)} className="modal-sidebar__form">
                            <h3>Download Size</h3>
                            <ul className="select-size">
                                <li className="select-size__item">
                                    <input id="radio-original" type="radio" defaultChecked name="download-size" />
                                    <label htmlFor="radio-original">Original</label>
                                </li>
                                <li className="select-size__item">
                                    <input id="radio-large" type="radio"  name="download-size" />
                                    <label htmlFor="radio-large">Large</label>
                                </li>
                                <li className="select-size__item">
                                    <input id="radio-medium" type="radio"  name="download-size" />
                                    <label htmlFor="radio-medium">Medium</label>
                                </li>
                                <li className="select-size__item">
                                    <input id="radio-small" type="radio"  name="download-size" />
                                    <label htmlFor="radio-small">Small</label>
                                </li>
                            </ul>
                            <button className="modal-sidebar__form-btn">Download</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
} 

export default modal;
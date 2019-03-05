import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GET_BACKGROUND_IMAGE, GET_STOCK_PHOTOS } from '../store/actions';
import Menu from '../components/Menu/Menu';
import MainSection from '../components/MainSection/MainSection';
import StockPhotos from '../components/StockPhotos/StockPhotos';
import Aux from '../hoc/Aux';

import bg from '../assets/bg.jpeg';

class App extends Component {

  componentDidMount() {
    let toConnect = {
      method: 'GET',
      headers: {
        Authorization: `563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf`
      },
      mode: 'cors',
      cache: 'default' 
    };
    
    //Get Background
    const randNum = Math.floor((Math.random() * 1000) + 1);
    fetch(`https://api.pexels.com/v1/curated?per_page=1&page=${randNum}`, toConnect)
    .then(result => result.json())
    .then(data => {
      data = data.photos[0];
      this.props.getBackground(data.src.original, data.photographer, data.photographer_url)
    })
    .catch(error => this.props.getBackground(bg, 'eberhard grossgasteiger', 'https://www.pexels.com/@eberhardgross'));
    
    // Get Stock Photos
    fetch(`https://api.pexels.com/v1/curated?per_page=15&page=1`, toConnect)
    .then(result => result.json())
    .then(data => this.props.getStockPhotos(data.photos));

    // MenuHandler
    window.onscroll = function () {
      const nav = document.querySelector('.navigation');
      this.pageYOffset > 105 ?
        nav.classList.remove('navbar--transparent') :
        nav.classList.add('navbar--transparent');
    };

  }

  render() {
    return (
      <Aux>
        <Menu />
        <MainSection bg={this.props.background}
                     photographer={this.props.photographer}
                     photographerUrl={this.props.photographerUrl} />
        <StockPhotos photos={this.props.stockPhotos} />
      </Aux>
    );
  }
}

/* ************************************************************************** */
/*                            Redux Store Handling                            */
/* ************************************************************************** */

const mapStateToProps = state => {
  return {
    photographer: state.photographer,
    photographerUrl: state.photographerUrl,
    background: state.backgroundImage,
    stockPhotos: state.stockPhotos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBackground: (background, photographer, photographerUrl) => dispatch({
      type: GET_BACKGROUND_IMAGE,
      payload: {
        photographer,
        photographerUrl,
        background 
      }
    }),
    getStockPhotos: (photos) => dispatch({
      type: GET_STOCK_PHOTOS,
      payload: {
        photos
      }
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

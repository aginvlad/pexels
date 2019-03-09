import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GET_BACKGROUND_IMAGE, fetchStockPhotos } from '../store/actions';
import Menu from '../components/Menu/Menu';
import MainSection from '../components/MainSection/MainSection';
import StockPhotos from '../components/StockPhotos/StockPhotos';
import { toConnect } from '../store/connection';
import { getSuggestions } from '../store/suggestions';
import Aux from '../hoc/Aux';
import bg from '../assets/bg.jpeg';

class HomePage extends Component {
  componentWillMount() {
    this.props.history.push('/');
    this.suggestions = getSuggestions(7);
  }
  componentDidMount() {
    let self = this;

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
    this.props.getStockPhotos();
    
    // MenuHandler
    window.onscroll = function () {
      const nav = document.querySelector('.navigation');
      this.pageYOffset > 105 ?
        nav.classList.remove('navbar--transparent') :
        nav.classList.add('navbar--transparent'); 
      let scrollHeight = Math.max(
          document.body.scrollHeight, document.documentElement.scrollHeight,
          document.body.offsetHeight, document.documentElement.offsetHeight,
          document.body.clientHeight, document.documentElement.clientHeight
      );

      //if(window.pageYOffset > scrollHeight - 1600)
        //self.props.getStockPhotos();
    };

  }

  render() {
    return (
            <Aux>
                <Menu mode="transparent" />
                <main>
                    <MainSection bg={this.props.background}
                                photographer={this.props.photographer}
                                photographerUrl={this.props.photographerUrl}
                                links={this.suggestions} />
                    <section className="stock-photos">
                        <h2 className="title">Free Stock Photos</h2>
                        <StockPhotos colOne={this.props.colOne}
                                     colTwo={this.props.colTwo}
                                     colThree={this.props.colThree} />
                    </section>
                </main>
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
    colOne: state.stockPhotosColOne,
    colTwo: state.stockPhotosColTwo,
    colThree: state.stockPhotosColThree
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
    getStockPhotos: () => dispatch(fetchStockPhotos())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

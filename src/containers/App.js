import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GET_BACKGROUND_IMAGE } from '../store/actions';
import Menu from '../components/Menu';
import MainSection from '../components/MainSection';
import Aux from '../hoc/Aux';

import bg from '../assets/bg.jpeg';

class App extends Component {

  componentDidMount() {
    const randNum = Math.floor((Math.random() * 1000) + 1);
    fetch(`https://api.pexels.com/v1/curated?per_page=1&page=${randNum}`, {
      method: 'GET',
      headers: {
        Authorization: `_563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf`
      },
      mode: 'cors',
      cache: 'default' 
    })
    .then(result => result.json())
    .then(data => {
      console.log(data);
      data = data.photos[0];
      this.props.getBackground(data.src.original, data.photographer, data.photographer_url)
    })
    .catch(error => this.props.getBackground(bg));

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
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    photographer: state.photographer,
    photographerUrl: state.photographerUrl,
    background: state.backgroundImage
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
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

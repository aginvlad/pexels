import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GET_BACKGROUND_IMAGE } from '../store/actions';
import MainSection from '../components/MainSection';
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
    .then(data => this.props.getBackground(data.photos[0].src.landscape))
    .catch(error => this.props.getBackground(bg));
  }

  render() {
    return (
      <MainSection bg={this.props.background}/>
    );
  }
}

const mapStateToProps = state => {
  return {
    background: state.backgroundImage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBackground: (value) => dispatch({
      type: GET_BACKGROUND_IMAGE,
      payload: {
        background: value 
      }
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

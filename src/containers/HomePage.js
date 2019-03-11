import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStockPhotos, getBackground } from '../store/actions';
import Menu from '../components/Menu/Menu';
import MainSection from '../components/MainSection/MainSection';
import StockPhotos from '../components/StockPhotos/StockPhotos';
import { getSuggestions } from '../store/suggestions';

class HomePage extends Component {
  componentWillMount() {
    this.props.history.push('/');
    this.suggestions = getSuggestions(7);
    this.windowScrollHangler = () => {
      const nav = document.querySelector('.navigation');
      window.pageYOffset > 105
        ? nav.classList.remove('navbar--transparent')
        : nav.classList.add('navbar--transparent');

      if(window.scrollY > document.body.scrollHeight - 1200 && !this.props.isLoading) {
        this.props.getStockPhotos();
      }
    };
  }
  componentDidMount() {
    this.props.getBackground();
    this.props.getStockPhotos();

    // MenuHandler
    window.addEventListener('scroll', this.windowScrollHangler);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.windowScrollHangler);
  }
  render() {
    return (
      <>
        <Menu mode="transparent" />
        <main>
          <MainSection
            bg={this.props.backgroundImage}
            photographer={this.props.photographer}
            photographerUrl={this.props.photographerUrl}
            links={this.suggestions}
          />
          <section className="stock-photos">
            <h2 className="title">Free Stock Photos</h2>
            <StockPhotos
              colOne={this.props.stockPhotos.slice(
                0,
                this.props.stockPhotos.length / 3
              )}
              colTwo={this.props.stockPhotos.slice(
                this.props.stockPhotos.length / 3,
                (2 * this.props.stockPhotos.length) / 3
              )}
              colThree={this.props.stockPhotos.slice(
                (2 * this.props.stockPhotos.length) / 3,
                this.props.stockPhotos.length
              )}
            />
          </section>
        </main>
      </>
    );
  }
}

/* ************************************************************************** */
/*                            Redux Store Handling                            */
/* ************************************************************************** */

const mapStateToProps = ({
  photographer,
  photographerUrl,
  backgroundImage,
  stockPhotos,
  isLoading
}) => {
  return {
    photographer,
    photographerUrl,
    backgroundImage,
    stockPhotos,
    isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBackground: () => dispatch(getBackground()),
    getStockPhotos: () => dispatch(fetchStockPhotos())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

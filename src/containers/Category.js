import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RESET_CATEGORY_PHOTOS, fetchCategoryPhotos } from '../store/actions';
import Menu from '../components/Menu/Menu';
import StockPhotos from '../components/StockPhotos/StockPhotos';
import { getSuggestions } from '../store/suggestions';
import './Category.sass';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      searchfield: '',
      title: ''
    };
    this.windowScrollHangler = () => {
      if(window.scrollY > document.body.scrollHeight - 1200 && !this.props.isLoading) {
        this.props.getStockPhotos();
        console.log('Time');
      }
    };
  }
  componentWillMount() {
    window.addEventListener('scroll', this.windowScrollHangler);
    let query;
    if (this.props.location['pathname'].length > 8) {
      query = this.props.location['pathname'].slice(8);
      this.setState({
        query: query.replace(/ /g, '%20'),
        searchfield: query,
        title: query
          .split(' ')
          .map(el => el[0].toUpperCase() + el.slice(1))
          .join(' ')
      });
    }
    this.relatedSearches = getSuggestions(5);
  }
  componentDidMount() {
    this.props.resetCategoryPhotos();
    document.querySelector('.searchbox-input').value = this.state.searchfield;
    this.props.getCategoryPhotos(this.state.query);
  }
  render() {
    return (
      <>
        <Menu initialQuery={this.state.searchfield} />
        <main className="category">
          <section className="category-photos">
            <h2 className="title">{this.state.title} Pictures</h2>
            <div className="category-photos__suggestions">
              Related searches:
              <ul className="category-photos__suggestions__links">
                {this.relatedSearches.map((el, i) => {
                  return (
                    <li
                      key={'catsaggestion-' + i}
                      className="category-photos__suggestions__link"
                    >
                      <NavLink to={`/search/${el}`}>{el}</NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            {this.props.isConnected ? (
              <StockPhotos
                colOne={this.props.categoryPhotos.slice(
                  0,
                  this.props.categoryPhotos.length / 3
                )}
                colTwo={this.props.categoryPhotos.slice(
                  this.props.categoryPhotos.length / 3,
                  (2 * this.props.categoryPhotos.length) / 3
                )}
                colThree={this.props.categoryPhotos.slice(
                  (2 * this.props.categoryPhotos.length) / 3,
                  this.props.categoryPhotos.length
                )}
              />
            ) : (
              <h3 className="error-title">
                Sorry, server doesn't respond. Please, try later!
              </h3>
            )}
          </section>
        </main>
      </>
    );
  }
}

/* ************************************************************************** */
/*                            Redux Store Handling                            */
/* ************************************************************************** */

const mapStateToProps = ({ categoryPhotos, isConnected }) => {
  return {
    categoryPhotos,
    isConnected
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategoryPhotos: query => dispatch(fetchCategoryPhotos(query)),
    resetCategoryPhotos: () =>
      dispatch({
        type: RESET_CATEGORY_PHOTOS
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);

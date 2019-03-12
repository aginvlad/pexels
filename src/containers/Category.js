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
  }
  componentWillMount() {
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
    this.windowScrollHandler = () => {
      if (
        window.scrollY > document.body.scrollHeight - 1200 &&
        !this.props.isLoading
      ) {
        this.props.getCategoryPhotos(this.state.query);
      }
    };
    window.addEventListener('scroll', this.windowScrollHandler);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.windowScrollHandler);
  }
  putPhotosIColomns(colNum) {
    const col = [];
    for (
      let i = colNum;
      i <= this.props.categoryPhotos.length - (3 - colNum);
      i += 3
    ) {
      col.push(this.props.categoryPhotos[i]);
    }
    return col;
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
            <StockPhotos
              colOne={this.putPhotosIColomns(0)}
              colTwo={this.putPhotosIColomns(1)}
              colThree={this.putPhotosIColomns(2)}
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

const mapStateToProps = ({ categoryPhotos, isLoading }) => {
  return {
    categoryPhotos,
    isLoading
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

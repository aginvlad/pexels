import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RESET_CATEGORY_PHOTOS, fetchCategoryPhotos } from '../store/actions';
import Menu from '../components/Menu/Menu';
import StockPhotos from '../components/StockPhotos/StockPhotos';
import Aux from '../hoc/Aux';
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
        window.onscroll = null;
        let query;
        if(this.props.location['pathname'].length > 8) {
            query = this.props.location['pathname'].slice(8);
            this.setState({ query: query.replace(/ /g, '%20'),
                            searchfield: query,
                            title: query.split(' ')
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
            <Aux>
                <Menu initialQuery={this.state.searchfield} />
                <main className="category">
                    <section className="category-photos">
                        <h2 className="title">{this.state.title} Pictures</h2>
                        <p className="category-photos__suggestions">
                            Related searches:
                            <ul className="category-photos__suggestions__links">
                                {this.relatedSearches.map(el => {
                                    return(
                                        <li className="category-photos__suggestions__link">
                                            <NavLink to={`/search/${el}`} >{el}</NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        </p>
                        {this.props.isConnected ?
                            <StockPhotos colOne={this.props.colOne}
                                         colTwo={this.props.colTwo}
                                         colThree={this.props.colThree} />
                            :
                            <h3 className="error-title">Sorry, server doesn't respond. Please, try later!</h3>
                        }
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
        colOne: state.categoryPhotosColOne,
        colTwo: state.categoryPhotosColTwo,
        colThree: state.categoryPhotosColThree,
        isConnected: state.isConnected
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
      getCategoryPhotos: (query) => dispatch(fetchCategoryPhotos(query)),
      resetCategoryPhotos: () => dispatch({
        type: RESET_CATEGORY_PHOTOS
      })
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Category);
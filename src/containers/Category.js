import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCategoryPhotos } from '../store/actions';
import Menu from '../components/Menu/Menu';
import StockPhotos from '../containers/StockPhotos/StockPhotos';
import Aux from '../hoc/Aux';

import './Category.sass';

class Category extends Component {
    componentDidMount() {
        document.querySelector('.searchbox-input').value = 'summer';
        this.props.getCategoryPhotos('summer');
    }
    render() {
        return (
            <Aux>
                <Menu />
                <main className="category">
                    <section className="category-photos">
                        <h2 className="title">Summer Pictures</h2>
                        <p className="category-photos__suggestions">
                            Related searches:
                            <a className="category-photos__suggestions__link" href="/">love</a>
                            <a className="category-photos__suggestions__link" href="/">beach</a>
                            <a className="category-photos__suggestions__link" href="/">nature</a>
                            <a className="category-photos__suggestions__link" href="/">sun</a>
                            <a className="category-photos__suggestions__link" href="/">winter</a>
                        </p>
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
        colOne: state.categoryPhotosColOne,
        colTwo: state.categoryPhotosColTwo,
        colThree: state.categoryPhotosColThree
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
      getCategoryPhotos: (query) => dispatch(fetchCategoryPhotos(query))
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Category);
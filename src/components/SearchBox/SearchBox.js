import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './SearchBox.sass';

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    };
  }
  componentDidMount() {
    this.setState({ query: this.props.initialQuery });
  }
  queryHandler = () => {
    this.setState({ query: this.searchfield.value });
  };
  onSubmitHandler(e) {
    e.preventDefault();
    this.props.history.push('/search/' + this.state.query);
  }
  render() {
    return (
      <div className={this.props.useClass}>
        <form
          className="searchbox-form"
          onSubmit={e => this.onSubmitHandler(e)}
        >
          <input
            className="searchbox-input"
            placeholder="Search for free photos"
            ref={input => (this.searchfield = input)}
            onChange={this.queryHandler}
          />
          <button className="searchbox-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="14"
              viewBox="0 0 10 10"
            >
              <path
                strokeWidth="0"
                fill={this.props.color}
                d="M7.35506951,6.69232934 L9.34955882,8.64249667 C9.54700246,8.83555267 9.55055934,9.15211518 9.35750333,9.34955882 C9.16444733,9.54700246 8.84788482,9.55055934 8.65044118,9.35750333 L6.65044118,7.40194778 C6.64763573,7.39920467 6.64486942,7.39643662 6.64214226,7.39364434 C5.99996673,7.8788862 5.2002574,8.16666667 4.33333333,8.16666667 C2.21624179,8.16666667 0.5,6.45042487 0.5,4.33333333 C0.5,2.21624179 2.21624179,0.5 4.33333333,0.5 C6.45042487,0.5 8.16666667,2.21624179 8.16666667,4.33333333 C8.16666667,5.22298819 7.86359712,6.04185736 7.35506951,6.69232934 Z M4.33333333,7.16666667 C5.89814012,7.16666667 7.16666667,5.89814012 7.16666667,4.33333333 C7.16666667,2.76852654 5.89814012,1.5 4.33333333,1.5 C2.76852654,1.5 1.5,2.76852654 1.5,4.33333333 C1.5,5.89814012 2.76852654,7.16666667 4.33333333,7.16666667 Z"
              />
            </svg>
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBox);

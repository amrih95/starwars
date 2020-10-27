import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import './SearchBox.scss';
import { connect } from 'react-redux';
import * as StarshipAction from '../../Actions/StarshipAction';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onChangeHandler = (e) => {
    this.setState({ keyword: e.target.value });
    // this.props.dispatch(StarshipAction.findstarships(this.state.keyword));
  };

  onClickHandler = () => {
    if (this.state.keyword.length < 3) {
      this.showError();
    } else {
      this.props.dispatch(StarshipAction.findstarships(this.state.keyword));
      const dest = 'search/result/' + this.state.keyword;
      window.location.href = dest;
    }
  };

  showError() {
    alert('Character must more 3');
  }

  render() {
    return (
      <Col>
        <div className='search'>
          <input
            name='keyword'
            type='text'
            placeholder='Find Starship'
            onChange={this.onChangeHandler}
            value={this.state.keyword || ''}
          />
          <div className='button-src'>
            <button type='button' onClick={this.onClickHandler}>
              Cari
            </button>
          </div>
        </div>
      </Col>
    );
  }
}

export default connect(null)(SearchBox);

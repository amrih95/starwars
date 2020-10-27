import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import SearchBox from '../Components/SearchBox/SearchBox';
import StarshipContainer from '../Containers/StarshipContainer/StarshipContainer';

class Homepage extends Component {

  render() {
    return (
      <Container fluid  onScroll={this.handleScroll}>
        <SearchBox />
        <StarshipContainer />
      </Container>
    );
  }
}

export default Homepage

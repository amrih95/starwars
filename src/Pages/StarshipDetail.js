import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import StarshipBigCard from '../Components/StarshipBigCard/StarshipBigCard';
import * as StarshipAction from '../Actions/StarshipAction';
import { connect } from 'react-redux';

class StarshipDetail extends Component {
  componentWillMount() {
    this.props.dispatch(StarshipAction.getstarship(this.props.match.params.id));
  }
  
  render() {
    return (
      <Container fluid className='pt-5'>
        <StarshipBigCard starship={this.props.starship} id={this.props.match.params.id}/>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    starship: state.starships.starship,
  };
};

export default connect(mapStateToProps)(StarshipDetail);

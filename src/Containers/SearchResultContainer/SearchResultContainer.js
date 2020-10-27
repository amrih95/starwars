import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as StarshipAction from '../../Actions/StarshipAction';
import StarshipCard from '../../Components/StarshipCard/StarshipCard';
import datasampleimage from '../../Assets/sample/starship.image.json';
import './SearchResultContainer.scss';

class SearchResultContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: null,
    };
  }
  componentWillMount() {
    this.props.dispatch(StarshipAction.findstarships(this.props.id));
  }
  componentWillReceiveProps(newProps) {
    console.log(newProps);
    if (newProps.starships) {
      this.setState({
        current: newProps.starships,
      });
    }
  }
  render() {
    return (
      <Container className="search-result">
        <div className='title'>
          <h4 className='suggestion'>
            <em> {this.props.starships?.count}</em> Found, Showing result of
            <em> {this.props.id}</em>
          </h4>
        </div>
        <Row>{this.state.current ? this.renderlist() : <></>}</Row>
      </Container>
    );
  }
  renderlist() {
    return this.props.starships?.results.map((data, index) => {
      const url = data.url;
      const id = url.split('/')[5];
      return (
        <Col key={index} xs lg='4'>
          <StarshipCard
            starship={data}
            image={datasampleimage[index % 10]}
            id={id}
          />
        </Col>
      );
    });
  }
}

const mapStateToProps = (state) => {
  return {
    starships: state.starships.find_starships,
  };
};

export default connect(mapStateToProps)(SearchResultContainer);

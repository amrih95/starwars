import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import StarshipCard from '../../Components/StarshipCard/StarshipCard';
import './StarshipContainer.scss';
import * as StarshipAction from '../../Actions/StarshipAction';
import datasampleimage from '../../Assets/sample/starship.image.json';
import BottomScrollListener from 'react-bottom-scroll-listener';

class StarshipContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: null,
      page: 1,
      pagelength: 0,
      hasNext: true,
      starshipslist: null,
    };
  }
  componentWillMount() {
    this.props.dispatch(StarshipAction.fetchstarships(this.state.page));
  }

  componentWillReceiveProps(newProps) {
    if (newProps.starships) {
      this.setState({
        current: newProps.starships.starships,
        starshipslist: newProps.starships.starshipslist,
        pagelength: newProps.starships.starshipslist.length,
      });
    }
  }

  fetchMoreData = () => {
    if (!this.state.current?.next) {
      this.setState({
        hasNext: false,
      });
    } else {
      this.setState({
        page: this.state.page + 1,
        pagelength: this.state.starshipslist?.length,
      });
      this.props.dispatch(StarshipAction.fetchstarships(this.state.page));
    }
  };

  handleContainerOnBottom = () => {
    this.fetchMoreData();
  };

  render() {
    return (
      <BottomScrollListener onBottom={this.handleContainerOnBottom}>
        {(scrollRef) => (
          <Container>
            <Row>{this.state.current ? this.renderlist() : <></>}</Row>
          </Container>
        )}
      </BottomScrollListener>
    );
  }

  renderlist() {
    return this.props.starships.starshipslist.map((data, index) => {
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
    starships: state.starships,
    starshipslist: state.starshipslist,
  };
};

export default connect(mapStateToProps)(StarshipContainer);

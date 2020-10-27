import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import './StarshipBigCard.scss';
import datasampleimage from '../../Assets/sample/starship.image.json';

class StarshipBigCard extends Component {
  render() {
    return (
      <div className='starship-big-card'  style={{
        backgroundImage: 'url(' + datasampleimage[this.props.id % 10].poster_image + ')',
        backgroundSize: 'cover',
      }}>
        <div className='starship-big-card__overlay'></div>
        <div className='starship-big-card__content'>
          <div className='starship-big-card__header'>
            <h1 className='starship-big-card__title'>
              {this.props.starship?.name}
            </h1>
            <h4 className='starship-big-card__info'>
              {this.props.starship?.model}
            </h4>
          </div>
          <Row>
            <Col lg={6} xs={6}>
              <p className='starship-big-card__desc'>
                MGLT.{this.props.starship?.MGLT}
              </p>
            </Col>
            <Col lg={6} xs={6}>
              <p className='starship-big-card__desc'>
                Cargo.{this.props.starship?.cargo_capacity}
              </p>
            </Col>
          </Row>
          <Row>
          <Col lg={6} xs={6}>
              <p className='starship-big-card__desc'>
                Length.{this.props.starship?.length}
              </p>
            </Col>
            <Col lg={6} xs={6}>
              <p className='starship-big-card__desc'>
                Cost.{this.props.starship?.cost_in_credits}
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className='starship-big-card__desc'>
                Crew.{this.props.starship?.crew}
              </p>
            </Col>
          </Row>
          <p className='starship-big-card__desc'>
            {this.props.starship?.manufacturer}
          </p>
          <p className='starship-big-card__desc'>
          Passengers.{this.props.starship?.passengers}
          </p>
        </div>
      </div>
    );
  }
}

export default StarshipBigCard;

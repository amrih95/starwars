import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './StarshipCard.scss';

class StarshipCard extends Component {  
  render() {
    return (
      <div className='starship-card'>
        <div
          className='starship-header'
          style={{
            backgroundImage: 'url(' + this.props.image.poster_image + ')',
            backgroundSize: 'cover',
          }}
        ></div>
        <div className='starship-content'>
          <div className='starship-content-header'>
            <Link to={'/starship/' + this.props.id}>
              <h3 className='starship-title'>{this.props.starship.name} </h3>
            </Link>
            <div className='starwars-logo'></div>
          </div>
          <div className='starship-info'>
            <div className='info-section'>
              <label>Model</label>
              <span>{this.props.starship.model}</span>
            </div>
            <div className='info-section'>
              <label>Length</label>
              <span>{this.props.starship.length}</span>
            </div>
            <div className='info-section'>
              <label>Crew</label>
              <span>{this.props.starship.crew}</span>
            </div>
            <div className='info-section'>
              <label>Speed</label>
              <span>{this.props.starship.max_atmosphering_speed}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StarshipCard;

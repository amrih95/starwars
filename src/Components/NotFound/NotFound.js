import React, { Component } from 'react';
import './NotFound.scss';
import notfoundimage from '../../Assets/images/404.svg';

class NotFound extends Component {
  render() {
    return (
      <div className='stars'>
        <div className='central-body'>
          <img className='image-404' src={notfoundimage} width='300px' alt='' />
          <a href='/' className='btn-go-home'>
            GO BACK HOME
          </a>
        </div>
      </div>
    );
  }
}

export default NotFound;

import React from 'react';
import HeaderAbout from './HeaderAbout';
import placeholderImg from '../../assets/placeholder.png';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <img className="header-image" src={placeholderImg} alt="placeholder" />
        <HeaderAbout />
      </header>
    );
  }
}

export default Header;

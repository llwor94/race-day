import React from 'react';
import endurancescout from '../img/endurancescout.png';

const Header = (props) => (
  <div className="header">
  <div className="header-container">
      <h1 className="header__title">{props.title}</h1>
      <img src={endurancescout}/>
  </div>
  </div>
);

Header.defaultProps = {
  title: 'Race Day'
}
export default Header;
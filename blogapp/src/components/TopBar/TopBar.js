import React from 'react';
import './TopBar.css';
import photoMonica from '../img/monica-instagram.jpg';

const TopBar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li ClassName="topListItem">HOME</li>
          <li ClassName="topListItem">ABOUT</li>
          <li ClassName="topListItem">CONTACT</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImage" src={photoMonica} alt="" />
      </div>
    </div>
  );
};

export default TopBar;

import React from 'react';
import logo from './images/S3 Logo_no words.png';

export default function Header() {
  return (
    <nav className='nav-bar' id='home'>
      <img src={logo} alt="Logo" />
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

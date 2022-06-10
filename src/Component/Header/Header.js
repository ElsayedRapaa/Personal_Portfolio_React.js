import React from 'react';
// File Css
import './header.css';
// Type Write Effect
import Typewriter from 'typewriter-effect';
// Components
import Btns from './Btns';
import Social_Icons from './Social_Icons';
// Img Profile
import IMG_ME from '../../Img/me.png';


const Header = () => {  
  
  return (
    <header id='home'>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Hagia Bentu</h1>

        <small>
          <Typewriter
            options={{
              strings: ['Front-End Developer', 'Web Developer'],
              loop: true,
              autoStart: true
            }}
          />
        </small>
      
        <Btns />

        <Social_Icons />

        <div className="header_img">
          <img src={IMG_ME} alt="Profile Img" />
        </div>

        <div className="scroll_down">
          <a href="#contact">Scroll Down</a>
        </div>
      </div>
    </header>
  )
}

export default Header
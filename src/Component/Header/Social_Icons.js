import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithubSquare} from 'react-icons/fa';
import {FaPinterestSquare} from 'react-icons/fa';

const Social_Icons = () => {
  return (
    <div className='header_social-icons'>
        <a href="https://www.linkedin.com/in/elsayed-rapaa-0758a71a6/" target={'_blank'} className='header_icon'>
            <BsLinkedin />
        </a>
        <a href="https://github.com/ElsayedRapaa" target={'_blank'} className='header_icon'>
            <FaGithubSquare />
        </a>
        <a href="https://www.pinterest.com/elsayedrapaa/" target={'_blank'} className='header_icon'>
            <FaPinterestSquare />
        </a>
    </div>
  )
}

export default Social_Icons
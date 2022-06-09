import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithubSquare} from 'react-icons/fa';
import {FaPinterestSquare} from 'react-icons/fa';

const Social_Icons = () => {
  return (
    <div className='header_social-icons'>
        <a href="#" target={'_blank'} className='header_icon'>
            <BsLinkedin />
        </a>
        <a href="#" target={'_blank'} className='header_icon'>
            <FaGithubSquare />
        </a>
        <a href="#" target={'_blank'} className='header_icon'>
            <FaPinterestSquare />
        </a>
    </div>
  )
}

export default Social_Icons
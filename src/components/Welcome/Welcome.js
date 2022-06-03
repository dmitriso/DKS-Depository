/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Welcome.css';
import pom3 from '../../assets/images/img3.png'

const Welcome = () => (
  <div className='background-screen welcome-el'>
    {/* <section>
      <h1 className='hero'>CODING, CREATION, AND CRAFT</h1>
      <a href='#' className='hero-btn'>
        <span>About Me</span>
      </a>
    </section> */}

    <img
      // src='https://ca.slack-edge.com/T01E837E8MP-U01DX9F95JB-6fd5aa71b157-512'
      src={pom3}
      className='float-left pr-3 round-img middle'
      alt='Photo Of Dmitri'
    ></img>
  </div>
);

export default Welcome;

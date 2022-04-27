import React from 'react';
import './App.css';
import vid_main from './vid_main.mp4';
import {Icon} from '@iconify/react'

function App() {
  return (
    <div className="App flex flex-column">
      <div className='first flex '>
        <video autoPlay loop muted className='vid_main' id='vido'>
          <source src={vid_main} type="video/mp4"></source>
        </video>
        <img src='/images/my_photo.jpeg' alt='my photo'
        className='my_photo grow dib f4-ns no-underline'/>
      </div>
      <h1 className='text_first greet'> Hi I'm Nick</h1>
      <h2 className='text_first love'>I love technology and coding</h2>
      <div className="topnav">
        <div className='namee'>
          Nikita Utkin
        </div>
        <div className='skills_nav'>
          <a className='butt_nav no-underline grow dib fw6 db pointer '>About</a>
          <a className='butt_nav no-underline grow dib fw6 db pointer '>Home</a>
          <a className='butt_nav no-underline grow dib fw6 db pointer '>Skillset</a>
          <a className='butt_nav no-underline grow dib fw6 db pointer '>Projects</a>
          <a className='butt_nav no-underline grow dib fw6 db pointer '>Contact</a>
        </div>
        <div className='icons'>
          <a href='https://github.com/4upakabra13' target="_blank"><Icon icon="akar-icons:github-fill" color='#00d5ea' className='github_icon icons_h grow dib fw6 db'/></a>
          <Icon icon="academicons:cv" color='#00d5ea' className='icons_h cv_icon grow dib fw6 db '/>
          <a href='https://www.linkedin.com/in/nikita-utkin-lmao1/ target="_blank"'><Icon icon="akar-icons:linkedin-box-fill" color='#00d5ea' className='icons_h linkedin_icon grow dib fw6 db'/></a>
        </div>
    </div>
      <div className='second'>
        
        <div className='about'>
          <div>
            
          </div>
          <img src='/images/about_me.svg' className='about_me'/>
        </div>
        <div className='skills'>
          What do I know
        </div>
      </div>
    </div>
  );
}

export default App;

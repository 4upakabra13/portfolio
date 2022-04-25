import React from 'react';
import './App.css';
import vid_main from './vid_main.mp4';

function App() {
  return (
    <div className="App flex flex-column">
      <div className='first flex '>
        <video autoPlay loop muted className='vid_main'>
          <source src={vid_main} type="video/mp4"></source>
        </video>
        <img src='/images/my_photo.jpeg' alt='my photo'
        className='my_photo grow dib f4-ns no-underline'/>
      </div>
      <h1 className='text_first greet'> Hi I'm Nick</h1>
      <h2 className='text_first love'>I love technology and coding</h2>
      <div className="topnav">
          a
      </div>
      <div className='second'>
        
        <div className='about'>
          About me
        </div>
        <div className='skills'>
          What do I know
        </div>
      </div>
    </div>
  );
}

export default App;

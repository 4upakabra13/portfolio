import React from 'react';
import './App.css';
import vid_main from './vid_main.mp4';
import {Icon} from '@iconify/react'
// import reveal from '../components/scroll_func'

function App() {
  return (
    <div className="App flex flex-column">
      <div className='first flex' id='first'>
        <video autoPlay loop muted className='vid_main' id='vido'>
          <source src={vid_main} type="video/mp4"></source>
        </video>
        <img src='/images/my_photo.jpeg' alt='my photo'
        className='my_photo grow dib f4-ns no-underline'/>
      </div>
      <h1 className='text_first greet send_me_y1'> Hi I'm Nick</h1>
      <h2 className='text_first love send_me_y1'>I love technology and coding</h2>
      <div className="topnav">
        <div className='namee'>
          Nikita Utkin
        </div>
        <div className='skills_nav'>
          <a className='butt_nav no-underline grow dib fw9 db pointer' href='#second'>About</a>
          <a className='butt_nav no-underline grow dib fw9 db pointer' href='#first'>Home</a>
          <a className='butt_nav no-underline grow dib fw9 db pointer' href='#third'>Skillset</a>
          <a className='butt_nav no-underline grow dib fw9 db pointer' href='#fourth'>Projects</a>
          <a className='butt_nav no-underline grow dib fw9 db pointer' href='#fifth'>Contact</a>
        </div>
        <div className='icons'>
          <a href='https://github.com/4upakabra13' target="_blank"><Icon icon="akar-icons:github-fill" color='#00d5ea' className='github_icon icons_h grow dib fw6 db'/></a>
          <Icon icon="academicons:cv" color='#00d5ea' className='icons_h cv_icon grow dib fw6 db '/>
          <a href='https://www.linkedin.com/in/nikita-utkin-lmao1/ target="_blank"'><Icon icon="akar-icons:linkedin-box-fill" color='#00d5ea' className='icons_h linkedin_icon grow dib fw6 db'/></a>
        </div>
      </div>
      <div className='second' id='second'>
        <div className='about'>
          <div className='about_text'>
            <div className='sector reveal'></div>
            <div className='who_am_i'>
              <h3><p className=''>Who am I?</p></h3>
            </div>
            <div className='started_from'>
              <h1 className='fw3'>Started from the bottom</h1>
            </div>
            <div className='story'>
              Since I was a little kid I was passionate about technology
              and figuring out how things work. I would spend hours
              disassembling and trying to assemble back toys or simple electronic 
              devices. This hobby stayed with me for the rest of my life and in 2020
              transformed into a will to learn programming, since then I spend most of
              my free time learning programming, because I love it
            </div>
          </div>
          <div className='about_photo'>
            <img src='/images/about_me.svg' className='about_photoo'/>
            <div className='sector2 reveal'></div>
          </div>
        </div>
        <div className='skills' id='third'>
          <div className='skills_l'>
            <div className='sector3'></div>
            <div className='sector4'></div>
            <div className='sector5'></div>
            <div>
              <Icon color="#fed768" icon="akar-icons:react-fill" className='skills_m grow dib db h3 w3' />
              <Icon color="#fed768" icon="akar-icons:html-fill" className='skills_m grow dib db h3 w3'/>
              <Icon color="#fed768" icon="akar-icons:css-fill" className='skills_m grow dib db h3 w3'/>
              <Icon color="#fed768" icon="fa-brands:js-square" className='skills_m grow dib db h3 w3'/>
              <Icon color="#fed768" icon="bxl:aws" className='skills_m grow dib db h3 w3'/>
            </div>
            <div>
              <Icon color="#fed768" icon="simple-icons:awslambda" className='skills_m grow dib db h3 w3'/>
              <Icon color="#fed768" icon="simple-icons:amazondynamodb" className='skills_m grow dib db h3 w3'/>
              <Icon color="#fed768" icon="akar-icons:python-fill" className='skills_m grow dib db h3 w3'/>
              <Icon color="#fed768" icon="bi:git" className='skills_m grow dib db h3 w3'/>
              <Icon color="#fed768" icon="akar-icons:github-fill" className='skills_m grow dib db h3 w3'/>
            </div>
          </div>
          <div className='skills_r'>
            <div className='who_am_i l_and_f'>
              Languages and Frameworks
            </div>
            <div className='started_from what_do'>
              <h1 className='fw4'>
              What do I know
              </h1>
            </div>
            <div className='story'>
              I did two udemy courses covering web development 
              and python and also couple of other free online courses.
              However, most of my knowledge comes from trynig to
              make a programme or a webpage work and looking for an answer
              on Stack Overflow, w3c or simillar platforms.
            </div>
            <div className='sector6'></div>
          </div>
        </div>
      </div>
      <div className='projects' id='fourth'>
          <div className='sector7'></div>
          <div className='sector8'></div>
          {/* <div className='sector9'></div> */}
        <div className='my_projects f-subheadline'>
          <h1 className='fw4 started_from'>My Projects</h1>
        </div>
            <div className='project_c'>
              <div className='robofriends'>rest api</div>
              <div>
                <img src="/images/api.png" className='grow api' />
              </div>
              <div className='story robo_t'>
                I built a rest api in aws gateway, created two methods which
                either search or add an item into a no-sql database dynamodb.
                Searching and writing items are perfomed from a static webpage 
                built in amazon s3
              </div>
              <div className='grow link_pr'>
                <a target="_blank " className='details' href='https://github.com/4upakabra13/pythontest'>Details</a>
              </div>
            </div>
            <div className='project_c project_2'>
              <div className='robofriends'>robofriends</div>
              <div>
                <img src="/images/robot.png" className='grow robo' />
              </div>
              <div className='story robo_t'>
                Basic project build with React which generates
                random robot profiles with a specific image for
                each one of them. Then you an search your 'robofriends'

              </div>
              <div className='grow link_pr'>
                <a target="_blank " className='details' href='https://4upakabra13.github.io/robofriends/'>Details</a>
              </div>
            </div>
        <div className='f_now story'>
          More coming soon ...
        </div>
      </div>
      <div className='contact' id='fifth'>
        <div className='send_me_y'>
          <h1 className='greet send_me_y1'> Send me your feedback!</h1>
        </div>
        <div className='sector9'></div>
        <div className='sector10'></div>
        <div className='sector11'></div>
        <div className='sector12'></div>
          <form target="_blank" action="https://formsubmit.co/f5de1f44241b7abc1e71462f8037ea41" method="POST">
            <div class="form-group">
              <div class="form-row">
                <div class="col">
                  <input type="email" name="email" class="form-control" placeholder="Your Email Address" required />
                </div>
              </div>
            </div>
            <div class="form-group">
              <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
            </div>
            <button type="submit" class="grow pointer namee submit_f send_me_y1">Submit Form</button>
          </form>
          <div>
        </div>
      </div>
      <div className='wip'>
        <h1 className='rest_of greet'>Rest of the page is work in progress</h1>
        <img src='/images/wip.gif' className='wip-gif'/>
        <h2 className='tfya'>Thank you for your attention</h2>
      </div>
    </div>
  );
}

export default App;

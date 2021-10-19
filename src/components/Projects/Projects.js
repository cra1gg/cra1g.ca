import "./main.css";
import 'react-hoverable-card/dist/index.css'
import reffy from '../../media/reffy.png'
import wordify from '../../media/wordify.jpg'
import dialy from '../../media/dialy.png'
import mirror from '../../media/magicmirror.png'
import { Parallax } from 'react-parallax';
import LeftProject from './LeftProject/LeftProject.js'
import RightProject from './RightProject/RightProject.js'
import { Divider } from 'antd';

function Projects() {

    return (
      <Parallax strength={300}>
      <div class="projects-outer" style={{ overflowY: 'scroll', height: 'calc(100vh)' }}>
        <div class="projects-inner" >
          <h1 class="main-title">Projects</h1>
        <p class="subtitle">Here are some of the software-related projects I have worked on.</p>
        <Divider />
          <LeftProject 
            name="Reffy" 
            url="https://reffy.xyz" 
            date="July 2021 - Now" 
            image={reffy}
            description="Reffy is a browser extension which helps users 
            save money by leveraging referral rewards. Think of it like Honey but for referral codes. 
            Reffy has been downloaded by 4 people"
            frontend="React, Manifest V3, JavaScript, Material UI, HTML, CSS"
            backend="Python, Flask, Firebase, WSGI"
            repo="https://github.com"
            demo="https://reffy.xyz"
            ></LeftProject>
            <br></br>
            <Divider />
            <br></br>
            <RightProject
              name="Wordify" 
              url="https://wordify.xyz" 
              date="July 2021 - Now" 
              image={wordify}
              description="Wordify is a URL shortener based on the premise that shortened URLs
              should be easy to read and easy to memorize. For this reason, Wordify uses only 
              English words in shortened URLs."
              frontend="React, Manifest V3, JavaScript, Material UI, HTML, CSS"
              backend="Python, Flask, Firebase, WSGI"
              repo="https://github.com"
              demo="https://reffy.xyz"
            ></RightProject>
            <Divider />
            <br></br>
            <LeftProject 
              name="Dialy" 
              url="https://dialy.xyz" 
              date="July 2021 - Now" 
              image={dialy}
              description="Inspired by the idea of What3Words, Dialy attempts to solve the problem of memorizing phone numbers by assigning them two memorable words."
              frontend="Bootstrap, JavaScript, HTML, CSS"
              backend="Git, Firebase, REST API, JSON, Firebase"
              repo="https://github.com"
              demo="https://dialy.xyz"
              ></LeftProject>
              <br></br>
            <Divider />
            <br></br>
            <RightProject
              name="Android Magic Mirror" 
              url="" 
              date="July 2021 - Now" 
              image={mirror}
              description="A scaled down version of Michael Teeuw's Magic Mirror for Raspberry Pi project with support for time, detailed weather, and news headlines. Designed to breathe new life into older Android devices."
              frontend="MIT App Inventor"
              backend="Weatherbit API, RSS Feeds"
              repo="https://github.com"
              demo="https://reffy.xyz"
            ></RightProject>
            <br></br>
            <br></br>
          </div>
        </div>
      </Parallax>

    );
  }
  
  export default Projects;
  
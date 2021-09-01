import "./main.css";
import 'react-hoverable-card/dist/index.css'
import reffy from '../../media/reffy.png'
import wordify from '../../media/wordify.jpg'
import { Parallax } from 'react-parallax';
import { Row, Col, Image } from 'antd';
import { Button } from 'antd';
import { ConstructOutline } from 'react-ionicons'
import LeftProject from './LeftProject/LeftProject.js'
import RightProject from './RightProject/RightProject.js'
import {
  GithubOutlined,
  LinkOutlined
} from "@ant-design/icons";

function Projects() {
    return (
      <div>
      
      <Parallax strength={300}>
        
        <div class="projects-main" style={{ overflowY: 'scroll', height: 'calc(100vh)' }}>
        <div class="projects" >
          <h1 class="main-title">Projects</h1>
          <LeftProject 
            name="Reffy.xyz" 
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
          <RightProject
            name="Wordify.xyz" 
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
          </div>
        </div>
      </Parallax>
      </div>

    );
  }
  
  export default Projects;
  
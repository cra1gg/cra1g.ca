import "./main.css";
import 'react-hoverable-card/dist/index.css'
import { Card } from 'antd';
import reffy from '../../media/reffy.png'
import { Parallax } from 'react-parallax';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const { Meta } = Card;


function Projects() {
    return (
      <Parallax strength={300}>
        <div class="projects-main" style={{ overflowY: 'scroll', height: 'calc(100vh)' }}>
        <h1 class="main-title">Projects</h1>
        <div class="projects">
          
          <div class="holder">
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={<img alt="example" src={reffy} />}
            > 
              
              <Meta title="Reffy" description="www.instagram.com" >
                
                </Meta>      
                  
            </Card>
            
          </div>
          <div class="holder">
            <Element name="project2" className="element">
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={<img alt="example" src={reffy} />}
            >
              <Meta title="Reffy" description="www.instagram.com" />          
            </Card>
            </Element>
          </div>
          </div>
        </div>
      </Parallax>


    );
  }
  
  export default Projects;
  
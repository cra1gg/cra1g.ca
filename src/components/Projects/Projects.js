import "./main.css";
import 'react-hoverable-card/dist/index.css'
import { Card } from 'antd';
import reffy from '../../media/reffy.png'
import { Parallax, Background } from 'react-parallax';

const { Meta } = Card;


function Projects() {
    return (
      <Parallax strength={300}>
        <div class="projects-main" style={{ overflowY: 'scroll', height: 'calc(100vh)' }}>
        <div class="projects">
          <div class="holder">
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={<img alt="example" src={reffy} />}
            >
              <Meta title="Reffy" description="www.instagram.com" />          
            </Card>
          </div>
          <div class="holder">
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={<img alt="example" src={reffy} />}
            >
              <Meta title="Reffy" description="www.instagram.com" />          
            </Card>
          </div>
          </div>
        </div>
      </Parallax>


    );
  }
  
  export default Projects;
  
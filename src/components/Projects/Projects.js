import "./main.css";
import 'react-hoverable-card/dist/index.css'
import reffy from '../../media/reffy.png'
import { Parallax } from 'react-parallax';
import { Row, Col, Image } from 'antd';



function Projects() {
    return (
      <div>
      
      <Parallax strength={300}>
        
        <div class="projects-main" style={{ overflowY: 'scroll', height: 'calc(100vh)' }}>
        <div class="projects">
          <h1 class="main-title">Projects</h1>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={12}>
            <Image  src={reffy}></Image>
            </Col>
            <Col span={12}>
              <h1 class="project-title">Reffy.xyz</h1>
              <h1 class="project-url">https://reffy.xyz</h1>
              <h2>Reffy is a website which helps you do stuff text text esxzxfjlkxsfhjsjldgfgsfdjlhn</h2>
            </Col>
          </Row>
          </div>
        </div>
      </Parallax>
      </div>

    );
  }
  
  export default Projects;
  
import "./main.css";
import 'react-hoverable-card/dist/index.css'
import reffy from '../../media/reffy.png'
import { Parallax } from 'react-parallax';
import { Row, Col, Image } from 'antd';
import { Button } from 'antd';

import {
  GithubOutlined,
  LinkOutlined

} from "@ant-design/icons";

function Projects() {
    return (
      <div>
      
      <Parallax strength={300}>
        
        <div class="projects-main" style={{ overflowY: 'scroll', height: 'calc(100vh)' }}>
        <div class="projects">
          <h1 class="main-title">Projects</h1>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} align="middle">
            <Col span={12}>
              <Image  src={reffy}></Image>
            </Col>
            <Col span={12}>
              <h1 class="project-title">Reffy.xyz</h1>
              <h1 class="project-url">https://reffy.xyz</h1>
              <p class="project-description">Reffy is a browser extension which helps users save money by leveraging referral rewards. Think of it like Honey but for referral codes. Reffy has been downloaded by 4 people</p>
              <h1 class="project-tools">Tools Used:  (split into frontend/backend) React, Manifest V3, JavaScript, Material UI, HTML, CSS</h1>
              <Button shape="round" icon={<GithubOutlined />} size="large">Project Repository</Button>
              <br></br>
              <br></br>
              <Button shape="round" icon={<LinkOutlined />} size="large">Live Demo</Button>
            </Col>
          </Row>
          </div>
        </div>
      </Parallax>
      </div>

    );
  }
  
  export default Projects;
  
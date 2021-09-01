import "./main.css";
import 'react-hoverable-card/dist/index.css'
import { Row, Col, Image } from 'antd';
import { Button } from 'antd';
import { ConstructOutline } from 'react-ionicons'
import LightSpeed from 'react-reveal/LightSpeed';
import {
  GithubOutlined,
  LinkOutlined
} from "@ant-design/icons";

function LeftProject(props) {
    return (
      <div>
          <div class="full-page">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} align="middle" >
            <Col span={12}>
            <LightSpeed left>
              <Image  src={props.image}></Image>
            </LightSpeed>
            </Col>
            <Col span={12}>
            <LightSpeed left>
              <div>
              <h1 class="project-title">{props.name}</h1>
              <h1 class="project-url">{props.url}</h1>
              <p class="project-date">{props.date}</p>
              <p class="project-description">{props.description}</p>
              <Row align="middle" gutter={5}>
                <Col span={1}><ConstructOutline
                    color={'#00000'} 
                    height="100%"
                    width="100%"
                  />
                </Col>
                <Col span={10}><h1 class="project-tools-title">Tools Used:</h1></Col>
              </Row>
              <h1 class="project-tools">Frontend: {props.frontend}</h1>
              <h1 class="project-tools">Backend: {props.backend}</h1>
              <br></br>
              <Button shape="round" icon={<GithubOutlined />} size="large" href={props.repo}>Project Repository</Button>
              <br></br>
              <br></br>
              <Button shape="round" icon={<LinkOutlined />} size="large" href={props.demo}>Live Demo</Button>
              </div>
              </LightSpeed>
            </Col>
          </Row>
          </div>
        </div>

    );
  }
  
  export default LeftProject;
  
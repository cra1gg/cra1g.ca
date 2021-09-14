import "./main.css";
import 'react-hoverable-card/dist/index.css'
import { Row, Col, Image } from 'antd';
import { Button } from 'antd';
import LightSpeed from 'react-reveal/LightSpeed';

import {
  GithubOutlined,
  LinkOutlined
} from "@ant-design/icons";

function RightProject(props) {
    return (
      <div>
          <div>
          <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 48]} align="middle">

            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <LightSpeed right>
                <div>
              <h1 class="project-title">{props.name}</h1>
              <h1 class="project-url">{props.url}</h1>
              <p class="project-date">{props.date}</p>
              <p class="project-description">{props.description}</p>
              <h1 class="project-tools-title">Tools Used:</h1>
              <h1 class="project-tools">Frontend:&nbsp;</h1>
              <h1 class="project-tools-list">{props.frontend}</h1>
              <br></br>
              <h1 class="project-tools">Backend:&nbsp;</h1>
              <h1 class="project-tools-list">{props.backend}</h1>
              <br></br>
              <Row gutter={16}>
                <Col className="gutter-row" span={7.5}>
                  <Button class="padded" ghost shape="round" icon={<GithubOutlined />} size="large" href={props.repo}>Project Repository</Button>
                </Col>
                <Col className="gutter-row" span={6}>
                  <Button class="padded" ghost shape="round" icon={<LinkOutlined />} size="large" href={props.demo}>Live Demo</Button>
                </Col>
              </Row>
              </div>
              </LightSpeed>
            </Col>
      
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <LightSpeed right>
              <Image  src={props.image}></Image>
              </LightSpeed>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            </Col>
          </Row>
          </div>
        </div>

    );
  }
  
  export default RightProject;
  
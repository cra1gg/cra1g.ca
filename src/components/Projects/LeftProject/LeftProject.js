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
          <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 48]} align="middle" >
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <LightSpeed left>
              <Image  src={props.image}></Image>
            </LightSpeed>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <LightSpeed left>
              <div>
              <h1 class="project-title">{props.name}</h1>
              <h1 class="project-url">{props.url}</h1>
              <p class="project-date">{props.date}</p>
              <p class="project-description">{props.description}</p>
              <Row align="middle" gutter={5} >
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
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <div class="downArrow bounce">
            <img width="40" height="40" alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4=" />
          </div>
            </Col>
          </Row>
          <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32}, 48]}>
          
          </Row>
          </div>
        </div>

    );
  }
  
  export default LeftProject;
  
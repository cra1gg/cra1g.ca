
import './App.css';
import Typing from 'react-typing-animation';
//import ReactPageScroller from 'react-page-scroller';
import SiteLayout from './SiteLayout.js'
import { CogOutline, CodeSlashOutline, HardwareChipOutline, RocketOutline } from 'react-ionicons'
import { Row, Col } from 'antd';
import Fade from 'react-reveal/Fade';


function App() {
  const style = {padding: '8px 0' };

  return (
    <SiteLayout>
    <div className="App">
      <div class="main-container">
        <div class="center">
        <Typing>
          <h1 class="main-text">
            Heyo,
            <Typing.Delay ms={500} />
            &nbsp;I'm Craig.
          </h1>
          <Typing.Delay ms={2000} />
          <h2 class="secondary-text">
            Scroll down to learn more.
          </h2>
        </Typing>
        </div>
      </div>
      <div class="secondary-container">
        <div class="center">
        <Fade left>
        </Fade>
          <h1 class="title-text">
            <Fade left>
            Areas of Interest
            </Fade>
            
          </h1>
          <h2 class="description-text">
          <Fade left>
            I am a DevOps Engineer with experience in the following areas
            </Fade>
          </h2>
          <Fade up>
          <Row gutter={{ xs: 60, sm: 40, md: 10, lg: 30 }}>
            <Col className="gutter-row" xs={12} xl={6}>
              <div style={style}>
                <CogOutline
                color={'white'} 
                title={"swag"}
                height="100%"
                width="100%"
                />
              <h1 class="icon-text">DevOps Practices</h1>
              </div>
            </Col>
            <Col className="gutter-row" xs={12} xl={6}>
              <div style={style}>
                  <CodeSlashOutline
                  color={'white'} 
                  title={"swag"}
                  height="100%"
                  width="100%"
                  class="skills-badge"
                  />
                <h1 class="icon-text">Software Development</h1>
                </div>
            </Col>
            <Col className="gutter-row" xs={12} xl={6}>
            <div style={style}>
                <HardwareChipOutline
                color={'white'} 
                title={"swag"}
                height="100%"
                width="100%"
                />
              <h1 class="icon-text">Hardware Deployment</h1>
              </div>
            </Col>
            <Col className="gutter-row" xs={12} xl={6}>
            <div style={style}>
                <RocketOutline
                color={'white'} 
                title={"swag"}
                height="100%"
                width="100%"
                />
              <h1 class="icon-text">Automation</h1>
              </div>
            </Col>
          </Row>
          </Fade>
        </div>
      </div>
      <div class="third-container">
        <div class="center">
          <h1 class="title-text">
            Skills
          </h1> 
          <Row gutter={{ xs: 60, sm: 40, md: 10, lg: 40 }}>
            <Col className="gutter-row" xs={12} xl={6}>
              <div style={style}>
                <CogOutline
                color={'white'} 
                title={"swag"}
                height="50%"
                width="50%"
                />
              <h1 class="icon-text">DevOps Practices</h1>
              </div>
              
            </Col>
            <Col className="gutter-row" xs={12} xl={6}>
              <div style={style}>
                <CogOutline
                color={'white'} 
                title={"swag"}
                height="50%"
                width="50%"
                />
              <h1 class="icon-text">DevOps Practices</h1>
              </div>
              
            </Col>
            <Col className="gutter-row" xs={12} xl={6}>
              <div style={style}>
                <CogOutline
                color={'white'} 
                title={"swag"}
                height="50%"
                width="50%"
                />
              <h1 class="icon-text">DevOps Practices</h1>
              </div>
              
            </Col>
            <Col className="gutter-row" xs={12} xl={6}>
              <div style={style}>
                <CogOutline
                color={'white'} 
                title={"swag"}
                height="50%"
                width="50%"
                />
              <h1 class="icon-text">DevOps Practices</h1>
              </div>
              
            </Col>
            <Col className="gutter-row" xs={12} xl={6}>
              <div style={style}>
                <CogOutline
                color={'white'} 
                title={"swag"}
                height="50%"
                width="50%"
                />
              <h1 class="icon-text">DevOps Practices</h1>
              </div>
              
            </Col>
            <Col className="gutter-row" xs={12} xl={6}>
              <div style={style}>
                <CogOutline
                color={'white'} 
                title={"swag"}
                height="50%"
                width="50%"
                />
              <h1 class="icon-text">DevOps Practices</h1>
              </div>
              
            </Col>
            <Col className="gutter-row" xs={12} xl={6}>
              <div style={style}>
                <CogOutline
                color={'white'} 
                title={"swag"}
                height="50%"
                width="50%"
                />
              <h1 class="icon-text">DevOps Practices</h1>

              </div>
              
            </Col>
            <Col className="gutter-row" xs={12} xl={6}>
              <div style={style}>
                <CogOutline
                color={'white'} 
                title={"swag"}
                height="50%"
                width="50%"
                />
              <h1 class="icon-text">DevOps Practices</h1>
              </div>
              
            </Col>
          </Row>
        </div>  
      </div>
    </div>
    </SiteLayout>
  );
}

export default App;

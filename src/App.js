
import './App.css';
import Typing from 'react-typing-animation';
import ReactPageScroller from 'react-page-scroller';
import Navbar from './Navbar.js'
import { CogOutline, CodeSlashOutline } from 'react-ionicons'
import { Row, Col } from 'antd';
function App() {
  const style = {padding: '8px 0' };

  return (
    <div>
    <Navbar></Navbar>
    <div className="App">
      <ReactPageScroller>
        
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
              <h1 class="title-text">
                Areas of Interest
              </h1>
              <h2 class="description-text">
                I am a DevOps Engineer with experience in the following areas
              </h2>
              <Row gutter={{ xs: 1, sm: 16, md: 10, lg: 10 }}>
                <Col className="gutter-row" xs={12} xl={6}>
                  <div style={style}>
                    <CogOutline
                    color={'#00000'} 
                    title={"swag"}
                    height="100%"
                    width="100%"
                    />
                  <h1>DevOps Practices</h1>
                  </div>
                </Col>
                <Col className="gutter-row" xs={12} xl={6}>
                  <div style={style}>
                      <CogOutline
                      color={'#00000'} 
                      title={"swag"}
                      height="100%"
                      width="100%"
                      />
                    <h1>DevOps Practices</h1>
                    </div>
                </Col>
                <Col className="gutter-row" xs={12} xl={6}>
                <div style={style}>
                    <CodeSlashOutline
                    color={'#00000'} 
                    title={"swag"}
                    height="100%"
                    width="100%"
                    />
                  <h1>DevOps Practices</h1>
                  </div>
                </Col>
                <Col className="gutter-row" xs={12} xl={6}>
                <div style={style}>
                    <CogOutline
                    color={'#00000'} 
                    title={"swag"}
                    height="100%"
                    width="100%"
                    />
                  <h1>DevOps Practices</h1>
                  </div>
                </Col>
              </Row>
              
              

            </div>
          </div>
        </ReactPageScroller>
    </div>
    </div>
  );
}

export default App;

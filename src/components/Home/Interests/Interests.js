
import './main.css';
import { CogOutline, CodeSlashOutline, HardwareChipOutline, RocketOutline } from 'react-ionicons'
import { Row, Col } from 'antd';
import Fade from 'react-reveal/Fade';


function Interests() {
  const style = {padding: '8px 0' };
  return (
    <div class="secondary-container">
    <div class="center">
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
  );
}

export default Interests;

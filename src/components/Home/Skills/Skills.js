
import './main.css';
import { CogOutline, StatsChartOutline, CodeSlashOutline, TerminalOutline } from 'react-ionicons'
import { Row, Col } from 'antd';

function Skills() {
  const style = {padding: '8px 0' };

  return (
    <div class="third-container">
    <div class="center">
        <h1 class="title-text">
        Skills
        </h1> 
        <Row gutter={{ xs: 60, sm: 40, md: 10, lg: 40 }}>
        <Col className="gutter-row" xs={12} xl={8}>
            <div style={style}>
            <CodeSlashOutline
            color={'white'} 
            title={"swag"}
            height="50%"
            width="50%"
            />
            <h1 class="icon-text">Programming Languages</h1>
            <h1 class="skill">Python</h1>
            <h1 class="skill">Java</h1>
            <h1 class="skill">C</h1>
            <h1 class="skill">JavaScript</h1>
            <h1 class="skill">Assembly (MIPS)</h1>
            <h1 class="skill">Scheme (Racket, Haskell)</h1>
            </div>
            
        </Col>
        <Col className="gutter-row" xs={12} xl={8}>
            <div style={style}>
            <CogOutline
            color={'white'} 
            title={"swag"}
            height="50%"
            width="50%"
            />
            <h1 class="icon-text">Databases</h1>
            </div>
            
        </Col>
        <Col className="gutter-row" xs={12} xl={8}>
            <div style={style}>
            <CogOutline
            color={'white'} 
            title={"swag"}
            height="50%"
            width="50%"
            />
            <h1 class="icon-text">Software</h1>
            </div>
            
        </Col>
        <Col className="gutter-row" xs={12} xl={8}>
            <div style={style}>
            <TerminalOutline
            color={'white'} 
            title={"swag"}
            height="50%"
            width="50%"
            />
            <h1 class="icon-text">Tools</h1>
            <h1 class="skill">Python</h1>
            <h1 class="skill">Java</h1>
            <h1 class="skill">C</h1>
            <h1 class="skill">JavaScript</h1>
            <h1 class="skill">Assembly (MIPS)</h1>
            <h1 class="skill">Scheme (Racket, Haskell)</h1>
            </div>
            
        </Col>
        <Col className="gutter-row" xs={12} xl={8}>
            <div style={style}>
            <StatsChartOutline
            color={'white'} 
            title={"swag"}
            height="50%"
            width="50%"
            />
            <h1 class="icon-text">Data Analytics</h1>
            </div>
            
        </Col>
        <Col className="gutter-row" xs={12} xl={8}>
            <div style={style}>
            <CogOutline
            color={'white'} 
            title={"swag"}
            height="50%"
            width="50%"
            />
            <h1 class="icon-text">Knowledge in</h1>
            </div>
        </Col>
        </Row>
    </div>  
    </div>
  );
}

export default Skills;

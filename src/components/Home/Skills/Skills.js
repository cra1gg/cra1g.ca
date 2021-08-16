
import './main.css';
import { ConstructOutline, LayersOutline, ServerOutline, StatsChartOutline, CodeSlashOutline, TerminalOutline } from 'react-ionicons'
import { Row, Col } from 'antd';
import Roll from 'react-reveal/Roll';

function Skills() {
  const style = {padding: '8px 0' };

  return (
    <div class="third-container">
    <div class="center">
        <h1 class="title-text">
        Skills
        </h1> 
        <Row gutter={[{ xs: 60, sm: 40, md: 10, lg: 40 }, { xs: 10, sm: 40, md: 10, lg: 60 }]}>
        <Col className="gutter-row" xs={12} xl={8}>
        <Roll left>
            <div style={style}>
            <CodeSlashOutline
            color={'white'} 
            title={"swag"}
            height="30%"
            width="30%"
            />
            <h1 class="icon-text">Programming Languages</h1>
            <h1 class="skill">Python</h1>
            <h1 class="skill">Java</h1>
            <h1 class="skill">C</h1>
            <h1 class="skill">JavaScript</h1>
            <h1 class="skill">Assembly (MIPS)</h1>
            <h1 class="skill">Racket, Haskell</h1>
            </div>
            </Roll>
        </Col>

        <Col className="gutter-row" xs={12} xl={8}>
        <Roll left>
            <div style={style}>
            <ServerOutline
            color={'white'} 
            title={"swag"}
            height="30%"
            width="30%"
            />
            <h1 class="icon-text">Databases</h1>
            <h1 class="skill">MongoDB</h1>
            <h1 class="skill">Neo4j</h1>
            <h1 class="skill">Firebase</h1>
            <h1 class="skill">Azure Data Services</h1>
            <h1 class="skill">Microsoft SQL</h1>
            <h1 class="skill">PostgreSQL</h1>
            </div>
            </Roll>
        </Col>
        <Col className="gutter-row" xs={12} xl={8}>
        <Roll left>
            <div style={style}>
            <TerminalOutline
            color={'white'} 
            title={"swag"}
            height="30%"
            width="30%"
            />
            <h1 class="icon-text">Tools</h1>
            <h1 class="skill">Git</h1>
            <h1 class="skill">Jenkins</h1>
            <h1 class="skill">GitHub Actions</h1>
            <h1 class="skill">Kubernetes</h1>
            <h1 class="skill">Docker</h1>
            <h1 class="skill">Nginx/Traefik</h1>
            </div>
            </Roll>
        </Col>
        <Col className="gutter-row" xs={12} xl={8}>
        <Roll left>
            <div style={style}>
            <LayersOutline
            color={'white'} 
            title={"swag"}
            height="30%"
            width="30%"
            />
            <h1 class="icon-text">Web Development</h1>
            <h1 class="skill">JavaScript</h1>
            <h1 class="skill">React</h1>
            <h1 class="skill">Ant Design</h1>
            <h1 class="skill">Material UI</h1>
            <h1 class="skill">CSS</h1>
            <h1 class="skill">HTML</h1>
            </div>
            </Roll>
        </Col>

        <Col className="gutter-row" xs={12} xl={8}>
        <Roll left>
            <div style={style}>
            <StatsChartOutline
            color={'white'} 
            title={"swag"}
            height="30%"
            width="30%"
            />
            <h1 class="icon-text">Data Analytics</h1>
            <h1 class="skill">Tableau</h1>
            <h1 class="skill">Qlik Sense</h1>
            <h1 class="skill">Excel</h1>
            </div>
            </Roll>
        </Col>
        <Col className="gutter-row" xs={12} xl={8}>
        <Roll left>
            <div style={style}>
            <ConstructOutline
            color={'white'} 
            title={"swag"}
            height="30%"
            width="30%"
            />
            <h1 class="icon-text">Knowledge in</h1>
            <h1 class="skill">Cryptocurrency Mining</h1>
            <h1 class="skill">Hardware Assembly</h1>
            <h1 class="skill">Home Automation</h1>
            <h1 class="skill">Microservices</h1>
            </div>
            </Roll>
        </Col>
        </Row>
        
    </div>  
    </div>
  );
}

export default Skills;

import "./main.css";
import 'react-hoverable-card/dist/index.css'

import { Parallax } from 'react-parallax';
import { Divider } from 'antd';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import BattlestationGallery from "./BattlestationGallery/BattlestationGallery.js"
function Battlestations() {

    return (
      <div>
      
      <Parallax strength={300}>
        <div class="battlestations-main" style={{ overflowY: 'scroll', height: 'calc(100vh)' }}>
          <div class="battlestations" >
            <h1 class="main-title">Battlestations</h1>
            <Divider />
            <BattlestationGallery></BattlestationGallery>
            <br></br>
            <br></br>
            <h1 class="main-title">Current Battlestation</h1>
            <Row gutter={[10, 60]} justify="space-around">
              <Col className="gutter-row" xs={24} xl={12}>
                <Card 
                  title={<h1>PC</h1>} 
                  style={{
                    width: "70%"
                  }}>
                  <p>Card content</p>
                </Card>
              </Col>
              <Col className="gutter-row" xs={24} xl={12}>
                <Card 
                  title={<h1>Peripherals</h1>} 
                  style={{
                    width: "70%"
                  }}>
                  <p>Card content</p>
                </Card>
              </Col>
            </Row>
            
          </div>
        </div>
      </Parallax>
      </div>

    );
  }
  
  export default Battlestations;
  
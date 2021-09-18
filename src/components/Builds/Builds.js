import "./main.css";
import 'react-hoverable-card/dist/index.css'

import { Parallax } from 'react-parallax';
import { Divider } from 'antd';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import BuildGallery from "./BuildGallery/BuildGallery.js"
function Battlestations() {

    return (
      <div>
      
      <Parallax strength={300}>
        <div class="battlestations-main" style={{ overflowY: 'scroll', height: 'calc(100vh)' }}>
          <div class="battlestations" >
            <h1 class="main-title">PC Builds</h1>
            <p class="subtitle">One of my hobbies is building computers. Here are a couple of pictures of my current builds.</p>
            <Divider />
            <BuildGallery></BuildGallery>
            <br></br>
            <br></br>
            <h1 class="main-title">Current Battlestation</h1>
            <p class="subtitle">Here are the specifications of my current battlestation.</p>
            <Row gutter={[10, 60]} justify="end">
                <Col className="gutter-row" xs={24} xl={12}>
                  <Card 
                    className="card-holder"
                    title={<h1 class="card-title">PC</h1>} 
                    style={{
                      width: "80%",
                      backgroundColor: "rgba(45, 45, 55, 0.7)",
                      height: "100%",
                    }}
                    bordered={false}>
                    <p class="card-bolded">CPU</p>
                    <p class="card-normal">Intel Core i7-9700 3.2Ghz</p>
                    <br></br>
                    <p class="card-bolded">Graphics Cards</p>
                    <p class="card-normal">2 x Nvidia GTX 1080 8GB GDDR5 (Reference)</p>
                    <br></br>
                    <p class="card-bolded">CPU Cooler</p>
                    <p class="card-normal">Enermax Liqfusion 240mm Liquid CPU Cooler</p>
                    <br></br>
                    <p class="card-bolded">Motherboard</p>
                    <p class="card-normal">Gigabyte Z390 Aorus Pro ATX LGA1151 Motherboard</p>
                    <br></br>
                    <p class="card-bolded">Memory</p>
                    <p class="card-normal">2 x 16GB Samsung DDR4-2666 Memory</p>
                    <br></br>
                    <p class="card-bolded">Storage</p>
                    <p class="card-normal">2 x Samsung PM981 1TB M.2-2280 NVME SSD</p>
                    <br></br>
                    <p class="card-bolded">Case</p>
                    <p class="card-normal">Lian Li PC-O11 Dynamic ATX Full Tower Case</p>
                    <br></br>
                    <p class="card-bolded">Power Supply</p>
                    <p class="card-normal">EVGA 1000 W 80+ Gold Certified Semi-Modular ATX Power Supply</p>
                    
                  </Card>
                </Col>
                <Col className="gutter-row" xs={24} xl={12}>
                  <Card 
                    className="card-holder"
                    title={<h1 class="card-title">Peripherals</h1>} 
                    style={{
                      width: "80%",
                      backgroundColor: "rgba(45, 45, 55, 0.7)",
                      height: "100%",
                    }}
                    bordered={false}
                    >
                    <p class="card-bolded">Monitors</p>
                    <p class="card-normal">HP EliteDisplay S240n 23.8" 1920x1080 Monitor</p>
                    <br></br>
                    <p class="card-bolded">Keyboard</p>
                    <p class="card-normal">Logitech G513 Lightsync RGB Mechanical Gaming Keyboard (Kailh Blue)</p>
                    <br></br>
                    <p class="card-bolded">Mouse</p>
                    <p class="card-normal">Logitech G502 LIGHTSPEED Wireless Optical Mouse</p>
                    <br></br>
                    <p class="card-bolded">Mousepad</p>
                    <p class="card-normal">Logitech PowerPlay Wireless Charging System</p>
                    <br></br>
                    <p class="card-bolded">Headset</p>
                    <p class="card-normal">Jabra Evolve2 85 Stereo</p>
                    <br></br>
                    <p class="card-bolded">Speakers</p>
                    <p class="card-normal">Logitech G560 120 W 2.1 Channel Speakers</p>
                    <br></br>
                    <p class="card-bolded">Chair</p>
                    <p class="card-normal">Autonomous Ergo Chair 2 (Black)</p>
                    <br></br>
                    <p class="card-bolded">Desk</p>
                    <p class="card-normal">Vivo Electric 60 x 26 Stand Up Desk</p>
                  </Card>
                </Col>
            </Row>
            <br></br> 
            <br></br>
            <br></br>        
          </div>
        </div>
      </Parallax>
      </div>

    );
  }
  
  export default Battlestations;
  
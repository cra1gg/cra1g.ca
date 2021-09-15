import "./main.css";
import 'react-hoverable-card/dist/index.css'

import { Parallax } from 'react-parallax';
import { Divider } from 'antd';
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
          </div>
        </div>
      </Parallax>
      </div>

    );
  }
  
  export default Battlestations;
  
import "./main.css";
import 'react-hoverable-card/dist/index.css'

import { Parallax } from 'react-parallax';
import { Divider } from 'antd';
import BuildGallery from "./BuildGallery/BuildGallery.js"
import PreviousBuildGallery from "./PreviousBuildGallery/PreviousBuildGallery.js"
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
            <br></br>
            <h1 class="main-title">Past Builds</h1>
            <p class="subtitle">Here are some of my previous builds.</p>
            <Divider/>
            <PreviousBuildGallery></PreviousBuildGallery>
            <br></br>
            <br></br>


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
  
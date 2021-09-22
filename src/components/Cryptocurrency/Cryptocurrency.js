import "./main.css";
import 'react-hoverable-card/dist/index.css'

import { Parallax } from 'react-parallax';
import { Divider } from 'antd';
import MiningGallery from "./MiningGallery/MiningGallery.js"
import { PieChart } from 'react-minimal-pie-chart';

export const data = [
  {
    key: "Test Data",
    data: 20
  },
  {
    key: "Test 1",
    data: 14
  },
  {
    key: "Test 2",
    data: 5
  },
  {
    key: "Test 3",
    data: 18
  },
  {
    key: "Test 4",
    data: 18
  }
];

function Cryptocurrency() {

    return (
      <div>
      
      <Parallax strength={300}>
        <div class="battlestations-main" style={{ overflowY: 'scroll', height: 'calc(100vh)' }}>
          <div class="battlestations" >
            <h1 class="main-title">Mining Rig</h1>
            <p class="subtitle">I began mining Ethereum with a single GPU in early mid-2017. Here's a peek into the evolution of my mining rig.</p>
            <Divider />
            <MiningGallery></MiningGallery>
            <br></br>
            <br></br>
            <h1 class="main-title">Current Portfolio</h1>
            <p class="subtitle">Here a breakdown of my current cryptocurrency holdings.</p>
            <div style={{ margin: "55px", textAlign: "center" }}>
              <PieChart width={250} height={250} data={data} />
            </div>
            <br></br> 
            <br></br>
            <br></br>        
          </div>
        </div>
      </Parallax>
      </div>

    );
  }
  
  export default Cryptocurrency;
  
import "./main.css";
import 'react-hoverable-card/dist/index.css'

import { Parallax } from 'react-parallax';
import { Divider } from 'antd';
import MiningGallery from "./MiningGallery/MiningGallery.js"
import {PieChart, PieArcSeries, PieArcLabel} from 'reaviz'


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
            <PieChart
              center={true}
              width={"100%"}
              height={"100%"}
              data={
                [
                  {
                    "key": "Dogecoin (DOGE)",
                    "data": 1.69
                  },
                  {
                    "key": "Bitcoin (BTC)",
                    "data": 57.87
                  },
                  {
                    "key": "Ethereum (ETH)",
                    "data": 38.21
                  },
                  
                  {
                    "key": "Ravencoin (RVN)",
                    "data": 2.2
                  },
                  
                  {
                    "key": "QASH (QASH)",
                    "data": 0.01
                  },
                  
                  {
                    "key": "Stellar (XLM)",
                    "data": 0.01
                  },
                  
                ]
              }
              series={
                <PieArcSeries
                  cornerRadius={4}
                  padAngle={0.02}
                  padRadius={200}
                  doughnut={'true'}
                  colorScheme={'viridis'}
                  label={
                    <PieArcLabel
                      fontSize={"1.1rem"}
                      fontFill={"#FFFFFF"}
                      lineStroke={"rgb(166,173,180)"}
                    />
                  }
                />
              }
            />
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
  
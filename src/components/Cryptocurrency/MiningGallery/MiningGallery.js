import React from 'react';
import './main.css'
import rig20181 from '../../../media/mining/2018(1).png'
import rig20182 from '../../../media/mining/2018(2).png'
import rig20212 from '../../../media/mining/2021(2).jpg'
import { Image } from 'antd';
import { Row, Col } from 'antd';


class MiningGallery extends React.Component {

    render() {
        return (
            <div style={{
                display: "block",
                width: "100%",
                overflow: "hidden",
                textAlign: "center",

            }}>
                
                <Row gutter={[10, 60]}>
                    <Col className="gutter-row" xs={24} xl={8}>
                        <div class="container">
                            <Image
                                width={"80%"}
                                src={rig20181}
                            ></Image>
                            <div class="overlay">2017</div>
                        </div>
                    </Col>
                    <Col className="gutter-row" xs={24} xl={8}>
                        <div class="container">
                            <Image
                                width={"80%"}
                                src={rig20182}
                            ></Image>
                            <div class="overlay">2018</div>
                        </div>
                    </Col>
                    <Col className="gutter-row" xs={24} xl={8}>
                        <div class="container">
                            <Image
                                width={"80%"}
                                src={rig20212}
                            ></Image>
                            <div class="overlay">2021</div>
                        </div>
                    </Col>
            
                </Row>

                
            </div>
        );
    }
}


export default MiningGallery;

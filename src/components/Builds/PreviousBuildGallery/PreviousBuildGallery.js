import React from 'react';
import './main.css'
import build1 from '../../../media/builds/build1.jpg'
import build2 from '../../../media/builds/build2.png'
import build3 from '../../../media/builds/build3.jpg'
import build4 from '../../../media/builds/build4.jpeg'
import build5 from '../../../media/builds/build5.png'
import { Image } from 'antd';
import { Row, Col } from 'antd';


class PreviousBuildGallery extends React.Component {

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
                                src={build1}
                            ></Image>
                            <div class="overlay">
                                 Personal (2017)</div>
                        </div>
                    </Col>
                    <Col className="gutter-row" xs={24} xl={8}>
                        <div class="container">
                            <Image
                                width={"80%"}
                                src={build2}
                            ></Image>
                            <div class="overlay">Personal (2017)</div>
                        </div>
                    </Col>
                    <Col className="gutter-row" xs={24} xl={8}>
                        <div class="container">
                            <Image
                                width={"80%"}
                                src={build3}
                            ></Image>
                            <div class="overlay">Client (2017)</div>
                        </div>
                    </Col>
                    <Col className="gutter-row" xs={24} xl={8}>
                        <div class="container">
                            <Image
                                width={"80%"}
                                src={build4}
                            ></Image>
                            <div class="overlay">Personal (2018)</div>
                        </div>
                    </Col>
                    <Col className="gutter-row" xs={24} xl={8}>
                    <div class="container">
                            <Image
                                width={"80%"}
                                src={build5}
                            ></Image>
                            <div class="overlay">Client (2018)</div>
                        </div>
                    </Col>
                </Row>

                
            </div>
        );
    }
}


export default PreviousBuildGallery;

import React from 'react';
import './main.css'
import bs20131 from '../../../media/battlestations/2013(1).jpg'
import bs20132 from '../../../media/battlestations/2013(2).jpg'
import bs2014 from '../../../media/battlestations/2014.jpg'
import bs2015 from '../../../media/battlestations/2015.jpg'
import bs2016 from '../../../media/battlestations/2016.jpg'
import bs2018 from '../../../media/battlestations/2018.jpg'
import bs2019 from '../../../media/battlestations/2019.jpeg'
import bs20201 from '../../../media/battlestations/2020(1).jpg'
import bs20202 from '../../../media/battlestations/2020(2).jpg'
import { Image } from 'antd';
import { Row, Col } from 'antd';


class BattlestationGallery extends React.Component {

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
                                src={bs20131}
                            ></Image>
                            <div class="overlay">Early 2013</div>
                        </div>
                    </Col>
                    <Col className="gutter-row" xs={24} xl={8}>
                        <div class="container">
                            <Image
                                width={"80%"}
                                src={bs20132}
                            ></Image>
                            <div class="overlay">Late 2013</div>
                        </div>
                    </Col>
                    <Col className="gutter-row" xs={24} xl={8}>
                        <div class="container">
                            <Image
                                width={"80%"}
                                src={bs2014}
                            ></Image>
                            <div class="overlay">2014</div>
                        </div>
                    </Col>
                    <Col className="gutter-row" xs={24} xl={8}>
                        <div class="container">
                            <Image
                                width={"80%"}
                                src={bs2015}
                            ></Image>
                            <div class="overlay">2015</div>
                        </div>
                    </Col>
                    <Col className="gutter-row" xs={24} xl={8}>
                    <div class="container">
                            <Image
                                width={"80%"}
                                src={bs2016}
                            ></Image>
                            <div class="overlay">2016</div>
                        </div>
                    </Col>
                    <Col className="gutter-row" xs={24} xl={8}>
                    <div class="container">
                            <Image
                                width={"45%"}
                                src={bs2018}
                            ></Image>
                            <div class="overlay2">2017</div>
                        </div>
                    </Col>
                    <Col className="gutter-row" xs={24} xl={8}>
                        <div class="container">
                            <Image
                                width={"80%"}
                                src={bs2019}
                            ></Image>
                            <div class="overlay">2019</div>
                        </div>
                    </Col>
                    <Col className="gutter-row" xs={24} xl={8}>
                        <div class="container">
                            <Image
                                width={"80%"}
                                src={bs20201}
                            ></Image>
                            <div class="overlay">Early 2020</div>
                        </div>
                    </Col>
                    <Col className="gutter-row" xs={24} xl={8}>
                        <div class="container">
                            <Image
                                width={"60%"}
                                src={bs20202}
                            ></Image>
                            <div class="overlay3">Late 2020</div>
                        </div>
                    </Col>
                </Row>

                
            </div>
        );
    }
}


export default BattlestationGallery;

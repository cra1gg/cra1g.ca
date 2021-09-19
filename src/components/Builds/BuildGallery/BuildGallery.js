import React from 'react';
import './main.css'
import main from '../../../media/builds/main.jpg'
import bs2015 from '../../../media/battlestations/2015.jpg'
import bs2016 from '../../../media/battlestations/2016.jpg'
import bs2018 from '../../../media/battlestations/2018.jpg'
import bs2019 from '../../../media/battlestations/2019.jpeg'
import bs20201 from '../../../media/battlestations/2020(1).jpg'
import bs20202 from '../../../media/battlestations/2020(2).jpg'
import { Image, Card } from 'antd';
import { Row, Col } from 'antd';


class BuildGallery extends React.Component {

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
                                style={{
                                    marginBottom: "-6px"
                                }}
                                width={"80%"}
                                src={main}
                            ></Image>
                            <Card
                                className="card" 
                                title={
                                    <h1 class="card-title">Main PC</h1>
                                }
                                bordered={false} 
                                style={{
                                    width: "80%",
                                    alignItems: "center"
                                    }} >
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" xs={24} xl={8}>
                    <div class="container">
                            <Image
                                style={{
                                    marginBottom: "-6px"
                                }}
                                width={"80%"}
                                src={main}
                            ></Image>
                            <Card
                                className="card" 
                                title={
                                    <h1 class="card-title">Main PC</h1>
                                }
                                bordered={false} 
                                style={{
                                    width: "80%",
                                    alignItems: "center"
                                    }} >
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" xs={24} xl={8}>
                    <div class="container">
                            <Image
                                style={{
                                    marginBottom: "-6px"
                                }}
                                width={"80%"}
                                src={main}
                            ></Image>
                            <Card
                                className="card" 
                                title={
                                    <h1 class="card-title">Main PC</h1>
                                }
                                bordered={false} 
                                style={{
                                    width: "80%",
                                    alignItems: "center"
                                    }} >
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </Card>
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


export default BuildGallery;

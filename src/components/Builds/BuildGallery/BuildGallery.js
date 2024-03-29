import React from 'react';
import './main.css'
import main from '../../../media/builds/main.jpg'
import placeholder from '../../../media/builds/placeholder.png'
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
                                    <h1 class="build-card-title">Main PC</h1>
                                }
                                bordered={false} 
                                style={{
                                    width: "80%",
                                    alignItems: "center",
                                    backgroundColor: "rgba(45, 45, 55, 0.7)"
                                    }} >
                                <p class="card-text">This is my primary computer. I use it mainly for software development and some light gaming. The full specs can be found on the Battlestations page but here's an overview:</p>
                                <p class="card-spec-title">CPU:</p>
                                <p class="card-spec">i7 9700</p>
                                <p class="card-spec-title">GPU:</p>
                                <p class="card-spec">2x GTX 1080</p>
                                <p class="card-spec-title">RAM:</p>
                                <p class="card-spec">32GB DDR4 2666Mhz</p>
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
                                src={placeholder}
                            ></Image>
                            <Card
                                className="card" 
                                title={
                                    <h1 class="build-card-title">PC 2</h1>
                                }
                                bordered={false} 
                                style={{
                                    width: "80%",
                                    alignItems: "center",
                                    backgroundColor: "rgba(45, 45, 55, 0.7)"
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
                                src={placeholder}
                            ></Image>
                            <Card
                                className="card" 
                                title={
                                    <h1 class="build-card-title">PC the 3rd</h1>
                                }
                                bordered={false} 
                                style={{
                                    width: "80%",
                                    alignItems: "center",
                                    backgroundColor: "rgba(45, 45, 55, 0.7)"
                                    }} >
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </Card>
                        </div>
                    </Col>
                    
                </Row>

                
            </div>
        );
    }
}


export default BuildGallery;

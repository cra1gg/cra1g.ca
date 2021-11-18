import React from 'react';
import './main.css'
import build1 from '../../../media/builds/build1.jpg'
import build2 from '../../../media/builds/build2.png'
import build3 from '../../../media/builds/build3.jpg'
import build4 from '../../../media/builds/build4.jpeg'
import build5 from '../../../media/builds/build5.png'
import { Image } from 'antd';
import { Row, Col, Card } from 'antd';

const { Meta } = Card;


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
                        <Card
                            className="card" 
                            
                            bordered={false}
                            cover={<Image src={build1}></Image>}
                            style={{
                                width: "80%",
                                alignItems: "center",
                                backgroundColor: "rgba(45, 45, 55, 0.7)",
                                
                                }} >
                            <p class="card-text" style={{padding: "0px", lineHeight: "100%", marginBottom: "0.5rem"}}>Personal (2017)</p>
                        </Card>
                    </Col>
                    <Col className="gutter-row" xs={24} xl={8}>
                        <Card
                            className="card" 
                            
                            bordered={false}
                            cover={<Image src={build2}></Image>}
                            style={{
                                width: "80%",
                                alignItems: "center",
                                backgroundColor: "rgba(45, 45, 55, 0.7)",
                                
                                }} >
                            <p class="card-text" style={{padding: "0px", lineHeight: "100%", marginBottom: "0.5rem"}}>Personal (2017)</p>
                        </Card>
                    </Col>
                    <Col className="gutter-row" xs={24} xl={8}>
                        <Card
                            className="card" 
                            
                            bordered={false}
                            cover={<Image src={build3}></Image>}
                            style={{
                                width: "80%",
                                alignItems: "center",
                                backgroundColor: "rgba(45, 45, 55, 0.7)",
                                
                                }} >
                            <p class="card-text" style={{padding: "0px", lineHeight: "100%", marginBottom: "0.5rem"}}>Client (2017)</p>
                        </Card>
                    </Col>
                    <Col className="gutter-row" xs={24} xl={8}>
                        <Card
                            className="card" 
                            
                            bordered={false}
                            cover={<Image src={build4}></Image>}
                            style={{
                                width: "80%",
                                alignItems: "center",
                                backgroundColor: "rgba(45, 45, 55, 0.7)",
                                
                                }} >
                            <p class="card-text" style={{padding: "0px", lineHeight: "100%", marginBottom: "0.5rem"}}>Personal (2018)</p>
                        </Card>
                    </Col>
                    <Col className="gutter-row" xs={24} xl={8}>
                    
                        <Card
                            className="card" 
                            
                            bordered={false}
                            cover={<Image src={build5}></Image>}
                            style={{
                                width: "80%",
                                alignItems: "center",
                                backgroundColor: "rgba(45, 45, 55, 0.7)",
                                
                                }} >
                            <p class="card-text" style={{padding: "0px", lineHeight: "100%", marginBottom: "0.5rem"}}>Client (2018)</p>
                        </Card>
                    
                    </Col>
                </Row>

                
            </div>
        );
    }
}


export default PreviousBuildGallery;

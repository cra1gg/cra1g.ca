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
import { Image, Card } from 'antd';
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
                        <Card
                            className="card" 
                            
                            bordered={false}
                            cover={<Image src={bs20131}></Image>}
                            style={{
                                width: "80%",
                                alignItems: "center",
                                backgroundColor: "rgba(45, 45, 55, 0.7)",
                                
                                }} >
                            <p class="card-text" style={{padding: "0px", lineHeight: "100%", marginBottom: "0.5rem"}}>Early 2013</p>
                        </Card>
                    </Col>
                    <Col className="gutter-row" xs={24} xl={8}>
                        <Card
                            className="card" 
                            
                            bordered={false}
                            cover={<Image src={bs20132}></Image>}
                            style={{
                                width: "80%",
                                alignItems: "center",
                                backgroundColor: "rgba(45, 45, 55, 0.7)",
                                
                                }} >
                            <p class="card-text" style={{padding: "0px", lineHeight: "100%", marginBottom: "0.5rem"}}>Late 2013</p>
                        </Card>
                    </Col>
                    <Col className="gutter-row" xs={24} xl={8}>
                        <Card
                            className="card" 
                            
                            bordered={false}
                            cover={<Image src={bs2014}></Image>}
                            style={{
                                width: "80%",
                                alignItems: "center",
                                backgroundColor: "rgba(45, 45, 55, 0.7)",
                                
                                }} >
                            <p class="card-text" style={{padding: "0px", lineHeight: "100%", marginBottom: "0.5rem"}}>2014</p>
                        </Card>

                    </Col>
                    <Col className="gutter-row" xs={24} xl={8}>
                        <Card
                            className="card" 
                            
                            bordered={false}
                            cover={<Image src={bs2015}></Image>}
                            style={{
                                width: "80%",
                                alignItems: "center",
                                backgroundColor: "rgba(45, 45, 55, 0.7)",
                                
                                }} >
                            <p class="card-text" style={{padding: "0px", lineHeight: "100%", marginBottom: "0.5rem"}}>2015</p>
                        </Card>
                    </Col>
                    <Col className="gutter-row" xs={24} xl={8}>
                        <Card
                            className="card" 
                            
                            bordered={false}
                            cover={<Image src={bs2016}></Image>}
                            style={{
                                width: "80%",
                                alignItems: "center",
                                backgroundColor: "rgba(45, 45, 55, 0.7)",
                                
                                }} >
                            <p class="card-text" style={{padding: "0px", lineHeight: "100%", marginBottom: "0.5rem"}}>2016</p>
                        </Card>
                    </Col>
                    <Col className="gutter-row" xs={24} xl={8}>
                        <Card
                            className="card" 
                            
                            bordered={false}
                            cover={<Image style={{width: "100%"}} src={bs2018}></Image>}
                            style={{
                                width: "80%",
                                alignItems: "center",
                                backgroundColor: "rgba(45, 45, 55, 0.7)",
                                
                                
                                }} >
                            <p class="card-text" style={{padding: "0px", lineHeight: "100%", marginBottom: "0.5rem"}}>2016</p>
                        </Card>
                    </Col>
                    <Col className="gutter-row" xs={24} xl={8}>
                        <Card
                            className="card" 
                            
                            bordered={false}
                            cover={<Image style={{width: "100%"}} src={bs2019}></Image>}
                            style={{
                                width: "80%",
                                alignItems: "center",
                                backgroundColor: "rgba(45, 45, 55, 0.7)",
                                
                                
                                }} >
                            <p class="card-text" style={{padding: "0px", lineHeight: "100%", marginBottom: "0.5rem"}}>2019</p>
                        </Card>
                    </Col>
                    <Col className="gutter-row" xs={24} xl={8}>
                        <Card
                            className="card" 
                            
                            bordered={false}
                            cover={<Image style={{width: "100%"}} src={bs20201}></Image>}
                            style={{
                                width: "80%",
                                alignItems: "center",
                                backgroundColor: "rgba(45, 45, 55, 0.7)",
                                
                                
                                }} >
                            <p class="card-text" style={{padding: "0px", lineHeight: "100%", marginBottom: "0.5rem"}}>Early 2020</p>
                        </Card>
                    </Col>
                    <Col className="gutter-row" xs={24} xl={8}>
                        <Card
                            className="card" 
                            
                            bordered={false}
                            cover={<Image style={{width: "100%"}} src={bs20202}></Image>}
                            style={{
                                width: "80%",
                                alignItems: "center",
                                backgroundColor: "rgba(45, 45, 55, 0.7)",
                                
                                
                                }} >
                            <p class="card-text" style={{padding: "0px", lineHeight: "100%", marginBottom: "0.5rem"}}>Late 2020</p>
                        </Card>
                    </Col>
                </Row>

                
            </div>
        );
    }
}


export default BattlestationGallery;

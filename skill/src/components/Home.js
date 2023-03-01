import React from "react";
import Navbar1 from "./Navbar1";
import { Row, Col } from "react-bootstrap";
import { Cards } from "./Cards";
import HomeCarousel from "./HomeCarousel";

export const Home = () => {
  return (
    <>
      <Navbar1 />
      <Row style={{justifyContent:'center '}}>
      <HomeCarousel/>
      </Row>
      <Row>
        <div style={{ textAlign: "center",fontSize:30,marginTop:50 }}>Enrolled Rooms</div>
      </Row>
      <Row>
        <Col  md={{ span: 2, offset: 1 }}> <Cards /> </Col>
        <Col  > <Cards /></Col>
         
       
      </Row>
    </>
  );
};

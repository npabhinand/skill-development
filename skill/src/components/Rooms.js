import React from 'react'
import Navbar1 from './Navbar1'
import {Row,Col}from 'react-bootstrap';
import { Cards } from './Cards';
import { AddCard } from './AddCard';

export const Rooms = () => {
     
  return (
    <>
    <Navbar1/>
    <Row>
    <div style={{textAlign:'center',margin:50,fontSize:30}}>Enrolled Rooms</div>
    </Row>
     <Row  >
        <Col md={{ span: 2, offset: 1 }}><Cards/></Col>
        <Col ><Cards/></Col>
      </Row>
      <Row>
    <div style={{textAlign:'center',margin:50,fontSize:30}}>Created Rooms</div>
    </Row>
     <Row >
        <Col md={{ span: 2, offset: 1 }}><AddCard/></Col>
      </Row>   
    </>
  )
}
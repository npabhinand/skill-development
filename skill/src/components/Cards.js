import React from 'react'
import { Card,Button,ProgressBar } from 'react-bootstrap';

export const Cards = () => {
    const now = 60;
  return ( 
    <div>
         <Card style={{width:300, height:300 }} >
      <Card.Body>
        <Card.Title style={{fontFamily:'sans-serif',fontWeight:'bold'}}>Intro: Programming</Card.Title>
        <br/>
        <Card.Text style={{textAlign:'justify',fontFamily:'sans-serif'}}>
         In this Room there are some simple programming challeneges for you to try.
        </Card.Text>
        <br/>
        <Card.Text style={{textAlign:'justify',fontFamily:'sans-serif'}}>
        <Button variant="primary">Open</Button>
        </Card.Text>
       
        <ProgressBar now={now} label={`${now}%`} />
      </Card.Body>
    </Card>
    </div>
  )
}

import React from 'react'
import { Card,Button} from 'react-bootstrap';


export const AddCard = () => {
  return (
    <div>
      <div>
         <Card style={{width:300, height:300 }} >
      <Card.Body>
        <Card.Title style={{fontFamily:'sans-serif',fontWeight:'bold'}}>Create Room</Card.Title>
        <br/>
        <Card.Text style={{textAlign:'justify',fontFamily:'sans-serif'}}>
         you can create your own Room
        </Card.Text>
        <br/>
        <Card.Text style={{textAlign:'justify',fontFamily:'sans-serif'}}>
        <Button variant="primary">Create</Button>
        </Card.Text>
       
       
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}

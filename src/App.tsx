import React from 'react';
import { Card } from 'react-bootstrap';
import './App.css';
import { InfoForm } from './PersonalInfo/InfoForm';

function App() {
  return (
    <div>
      <div className='container col-md-8'>
          <Card style={{ marginTop:'4rem' }}>
            <Card.Header as='h3' style={{ backgroundColor:" #cecece "}}>
              Personal Info
            </Card.Header>
            <Card.Body>
              <InfoForm/>
            </Card.Body>
          </Card>
      </div>
    </div>
    
  );
}

export default App;

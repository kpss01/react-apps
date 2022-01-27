
import React from "react"
import { Card } from "react-bootstrap"
import { InfoForm } from "./InfoForm"
export class PersonalInfo extends React.Component{

    render(){
        return (
            <div>
                <div className='container col-md-8'>
                <Card style={{ marginTop:'2rem' }}>
                    <Card.Header as='h3' style={{ backgroundColor:" #cecece "}}>
                        Personal Info
                    </Card.Header>
                    <Card.Body>
                        <InfoForm/>
                    </Card.Body>
                </Card>
            </div>
            </div>
        )
    }
}
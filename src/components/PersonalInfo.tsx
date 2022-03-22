import React, { Component } from 'react';
import { Card } from "react-bootstrap";
import User from "../models/User";

const PersonalInfo = (props: any) => {

    const { name, age, picture, email, eyeColor, company } = props;

    return(
        <>
        <Card border="primary" style={{ width: '15rem', height: '30rem' }} className="card" >
              <Card.Body>
                  <Card.Text>
                      Name: {name}
                  </Card.Text>
                  <Card.Text>
                      Age: {age}
                  </Card.Text>
                  <Card.Text>
                      Eye Color: {eyeColor}
                  </Card.Text>
                  <Card.Text>
                      Company: {company}
                  </Card.Text>
                  <Card.Text>
                      Email: {email}
                  </Card.Text>
              </Card.Body>
          </Card>
        </>
    )
}

export default PersonalInfo;
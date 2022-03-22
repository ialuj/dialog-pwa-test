import React, { Component } from 'react';
import { Card, CardGroup, Container, Row, Col, Image } from "react-bootstrap";
import User from "../models/User";
import ImageCard from "./ImageCard";
import PersonalInfo from './PersonalInfo';
import "../css/General.css";

const ProfileResume = (userProps: User) => {
    
    const { name, age, picture, email, eyeColor, company } = userProps;

    return(
        <div className="div">
          <CardGroup>
          <Card>
          <ImageCard src={picture} width={200} height={200} />
          </Card>
          <PersonalInfo name={name} age={age} eyeColor={eyeColor} company={company} email={email} />
          </CardGroup>
        </div>
    )
}

export default ProfileResume;
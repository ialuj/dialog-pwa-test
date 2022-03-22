import React, { Component } from 'react';
import User from "../models/User";
import ImageCard from "./ImageCard";
import PersonalInfo from './PersonalInfo';

import "../css/General.css";

const SearchedUserCard = (props: User) => {

    const { name, age, picture, email, eyeColor, company } = props;

    return(
        <>
        <div className="search-card">
             <div><ImageCard src={picture} width={200} height={200} /></div>
             <div><PersonalInfo name={name} age={age} eyeColor={eyeColor} company={company} email={email} /></div>
        </div>
        </>
    )
}

export default SearchedUserCard;
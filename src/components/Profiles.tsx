import React, { Component } from 'react';
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class Profiles extends Component {

    render(){
        return(
            <div>
               Profiles
            </div>
        )
    }
}

const query = gql`
  {
      users{
          name
      }
  }  
`;

export default graphql(query)(Profiles);
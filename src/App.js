import React from "react";
import { Container } from './Container'
import { GithubUser } from './GithubUser'



export class App extends React.Component {
    render() {
        return (
          <div> 
          <Container title="My Application">         
          <GithubUser username="frances8713"/>
          </Container>        
          </div>
        )
      }
}

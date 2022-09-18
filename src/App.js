import React from "react";
import { Container } from './Container'
import { GithubUserList } from "./GithubUserList";
import { Login } from "./Login"



export class App extends React.Component {
    render() {
        return (
          <div> 
          <Container title="My Application">         
          <GithubUserList />
          <Login />
          </Container>        
          </div>
        )
      }
}

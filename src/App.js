import React from "react";
import { Welcome } from './Welcome'
import { Container } from './Container'
import { ClickCounter } from "./ClickCounter";
import { Counter } from './Counter'
import { GithubUser } from "./GithubUser";



export class App extends React.Component {
    render() {
        return (
          <div> 
          <Container title="My Application">         
          <Welcome name={'Polly'}/>
          <GithubUser username="frances8713" />
          <Counter />
          </Container>        
          </div>
        )
      }
}
